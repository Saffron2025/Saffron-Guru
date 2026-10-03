// Builds scripts/prerender-data.json: a plain-HTML copy of every page's main
// content (headings, text, images with alt text) plus its own title and
// description. Run this whenever page content changes:
//   NODE_PATH=$(npm root -g) node scripts/snapshot/render.mjs
// It renders the real React pages with simple stand-ins for browser-only parts.
import { createRequire } from "module";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const require = createRequire(import.meta.url);
const G = process.env.NODE_PATH;
const esbuild = require(path.join(G, "tsx/node_modules/esbuild"));
const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
const OUT_DIR = "/tmp/sg-snapshot";
const SRC_FILES = (function walk(d) { return fs.readdirSync(d, { withFileTypes: true }).flatMap((e) => e.isDirectory() ? walk(path.join(d, e.name)) : /\.(jsx?|mjs)$/.test(e.name) ? [path.join(d, e.name)] : []); })(path.join(ROOT, "src"));
fs.mkdirSync(OUT_DIR, { recursive: true });

const REAL = new Set(["react", "react-dom", "react-dom/server", "react/jsx-runtime"]);
const stubPlugin = {
  name: "stubs",
  setup(build) {
    build.onResolve({ filter: /\.(css|scss)$/ }, (a) => ({ path: a.path, namespace: "empty" }));
    build.onLoad({ filter: /.*/, namespace: "empty" }, () => ({ contents: "export default {}", loader: "js" }));
    build.onResolve({ filter: /^react-router-dom$/ }, () => ({ path: "rr", namespace: "rr" }));
    build.onLoad({ filter: /.*/, namespace: "rr" }, () => ({
      contents: `import React from "react";
        export const Link = ({to, children, ...p}) => React.createElement("a", {href: typeof to === "string" ? to : (to && to.pathname) || "/", className: p.className}, children);
        export const NavLink = Link;
        export const useNavigate = () => () => {};
        export const useLocation = () => ({ pathname: globalThis.__PATH, search: "", hash: "", state: null });
        export const useParams = () => globalThis.__PARAMS || {};
        export const useSearchParams = () => [new URLSearchParams(""), () => {}];
        export const Navigate = () => null;
        export const Outlet = () => null;
        export const BrowserRouter = ({children}) => children;
        export const Routes = ({children}) => children;
        export const Route = () => null;`,
      loader: "js",
    }));
    build.onResolve({ filter: /utils\/pageMeta(\.js)?$/ }, (a) => ({ path: path.resolve(a.resolveDir, a.path.endsWith(".js") ? a.path : a.path + ".js"), namespace: "meta" }));
    build.onLoad({ filter: /.*/, namespace: "meta" }, (a) => {
      let src = fs.readFileSync(a.path, "utf8");
      src = src.replace(/export function usePageMeta\([^)]*\)\s*\{[\s\S]*?\n\}/, "export function usePageMeta(options){ globalThis.__META = options; }");
      return { contents: src, loader: "js", resolveDir: path.dirname(a.path) };
    });
    build.onResolve({ filter: /^[^./]/ }, (a) => {
      if (REAL.has(a.path) || a.path.startsWith("react/") || a.path.startsWith("react-dom/") || a.path.startsWith("react-icons")) return { path: a.path, external: true };
      return { path: a.path, namespace: "stub" };
    });
    build.onLoad({ filter: /.*/, namespace: "stub" }, (a) => {
      const names = new Set();
      const re = new RegExp("import\\s*(?:\\w+\\s*,\\s*)?\\{([^}]*)\\}\\s*from\\s*['\"]" + a.path.replace(/[.*+?^${}()|[\]\\/]/g, "\\$&") + "['\"]", "g");
      for (const f of SRC_FILES) for (const m of fs.readFileSync(f, "utf8").matchAll(re))
        m[1].split(",").map((x) => x.trim().split(/\s+as\s+/)[0]).filter(Boolean).forEach((n) => names.add(n));
      const lines = [...names].map((n) => /^use[A-Z]/.test(n) ? `export const ${n} = () => ({});`
        : n === "LazyLoadImage" ? `export const ${n} = make("img");` : `export const ${n} = make("div");`);
      return {
        contents: `import React from "react";
          const make = (tag) => { const C = ({children, src, alt, href, className}) =>
              tag === "img" ? React.createElement("img", {src, alt}) : React.createElement(tag, {href, className}, children);
            return new Proxy(C, { get: (t, k) => (typeof k === "string" && /^[A-Z]/.test(k) ? make("div") : t[k]) }); };
          ${lines.join("\n")}
          export default make("div");`,
        loader: "js",
      };
    });
  },
};

// route -> [component import path, params]
const app = fs.readFileSync(path.join(ROOT, "src/App.jsx"), "utf8");
const imports = Object.fromEntries([...app.matchAll(/^import (\w+) from "(\.\/[^"]+)";/gm)].map((m) => [m[1], m[2]]));
const routeComp = {};
for (const m of app.matchAll(/path="([^"]+)"\s*element=\{\s*(?:<Layout>\s*)?<(\w+)\s*\/>/g)) routeComp[m[1]] = m[2];

const sm = fs.readFileSync(path.join(ROOT, "public/sitemap.xml"), "utf8");
const routes = [...new Set([...sm.matchAll(/<loc>https:\/\/www\.saffronguru\.com([^<]*)<\/loc>/g)].map((m) => m[1] || "/"))]
  .filter((r) => !/\.(webp|png|jpe?g|avif|svg)$/i.test(r));

const jobs = [];
for (const r of routes) {
  let pattern = r, params = {};
  if (r.startsWith("/blog/")) { pattern = "/blog/:slug"; params = { slug: r.slice(6) }; }
  else if (r.startsWith("/articles/")) { pattern = "/articles/:id"; params = { id: r.slice(10) }; }
  else if (r.startsWith("/product/")) { pattern = "/product/:id"; params = { id: r.slice(9) }; }
  const comp = routeComp[pattern];
  if (!comp || !imports[comp]) { console.log("no component for", r); continue; }
  jobs.push({ route: r, comp, file: imports[comp], params });
}

const comps = [...new Set(jobs.map((j) => j.comp))];
const entry = `import React from "react";
import { renderToStaticMarkup } from "react-dom/server";
${comps.map((c) => `import ${c} from ${JSON.stringify(path.join(ROOT, "src", jobs.find((j) => j.comp === c).file))};`).join("\n")}
import * as Meta from ${JSON.stringify(path.join(ROOT, "src/utils/pageMeta.js"))};
import { products } from ${JSON.stringify(path.join(ROOT, "src/data/productsData.jsx"))};
import { articles } from ${JSON.stringify(path.join(ROOT, "src/data/articles.jsx"))};
export const C = { ${comps.join(", ")} };
export { renderToStaticMarkup, React, Meta, products, articles };`;
fs.writeFileSync(path.join(OUT_DIR, "entry.jsx"), entry);

await esbuild.build({
  entryPoints: [path.join(OUT_DIR, "entry.jsx")], bundle: true, platform: "node", format: "esm",
  outfile: path.join(OUT_DIR, "bundle.mjs"), jsx: "automatic", loader: { ".js": "jsx", ".jsx": "jsx", ".png": "file", ".jpg": "file", ".webp": "file", ".svg": "file" },
  plugins: [stubPlugin], logLevel: "error", banner: { js: "import { createRequire as __cr } from 'module'; const require = __cr(import.meta.url);" }, define: { "import.meta.env.PROD": "true", "import.meta.env.DEV": "false", "import.meta.env.MODE": '"production"' },
});

// light browser stand-ins for code that touches window/document while rendering
const store = () => { const m = new Map(); return { getItem: (k) => m.get(k) ?? null, setItem: (k, v) => m.set(k, String(v)), removeItem: (k) => m.delete(k) }; };
globalThis.window = globalThis; globalThis.innerWidth = 1280; globalThis.innerHeight = 900;
globalThis.localStorage = store(); globalThis.sessionStorage = store();
globalThis.matchMedia = () => ({ matches: false, addListener() {}, removeListener() {}, addEventListener() {}, removeEventListener() {} });
globalThis.document = { getElementById: () => null, querySelector: () => null, querySelectorAll: () => [], addEventListener() {}, removeEventListener() {}, body: { style: {} }, documentElement: { style: {} }, createElement: () => ({ style: {} }) };
// navigator already exists in Node 22

process.env.NODE_PATH = G;
const mod = await import(path.join(OUT_DIR, "bundle.mjs"));
const { C, renderToStaticMarkup, React, Meta, products, articles } = mod;

const out = {};
for (const j of jobs) {
  globalThis.__PATH = j.route; globalThis.__PARAMS = j.params; globalThis.__META = null;
  try {
    const html = renderToStaticMarkup(React.createElement(C[j.comp]));
    let meta = globalThis.__META;
    if (j.route.startsWith("/product/")) {
      const pr = products.find((x) => String(x.id) === j.params.id);
      meta = pr ? { title: Meta.cleanTitle(pr.name), description: pr.desc ? Meta.shortDescription(pr.desc) : undefined, path: j.route, image: pr.img, type: "product", price: pr.price } : null;
    }
    if (!meta) { const p = Meta.PAGES[j.route] || {}; meta = { ...p, path: p.canonical || j.route }; }
    if (j.route.startsWith("/articles/")) {
      const ar = articles.find((x) => x.id === j.params.id);
      if (ar) meta = { ...meta, author: ar.author, date: ar.date };
    }
    out[j.route] = { html, meta };
    console.log("ok", j.route, html.length);
  } catch (e) {
    console.log("FAIL", j.route, String(e.message).slice(0, 120));
  }
}
fs.writeFileSync(path.join(OUT_DIR, "raw.json"), JSON.stringify(out));
console.log("rendered", Object.keys(out).length, "of", jobs.length);
