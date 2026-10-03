// Runs after "vite build". For every page in scripts/prerender-data.json it
// writes a ready-made HTML file (dist/_p/<page>.html) with that page's own
// title, description, canonical address, text and images already inside.
// Search engines read this immediately; for visitors the normal app loads
// and replaces it within a moment. No extra packages needed.
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const DIST = path.join(ROOT, "dist");
const SITE = "https://www.saffronguru.com";
const BRAND = "Saffron Guru";

const data = JSON.parse(fs.readFileSync(path.join(ROOT, "scripts/prerender-data.json"), "utf8"));
const template = fs.readFileSync(path.join(DIST, "index.html"), "utf8");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const getMeta = (html, attr, name) => {
  const m = html.match(new RegExp(`<meta[^>]*${attr}="${name}"[^>]*content="([^"]*)"`, "i"))
    || html.match(new RegExp(`<meta[^>]*content="([^"]*)"[^>]*${attr}="${name}"`, "i"));
  return m ? m[1] : "";
};
const defaults = {
  title: (template.match(/<title>([\s\S]*?)<\/title>/i) || [])[1]?.trim() || BRAND,
  description: getMeta(template, "name", "description"),
  image: getMeta(template, "property", "og:image"),
};

export const slugFor = (route) => (route === "/" ? "home" : route.replace(/^\//, "").replace(/\//g, "__"));

function setTag(html, re, replacement) {
  return re.test(html) ? html.replace(re, replacement) : html.replace("</head>", `  ${replacement}\n  </head>`);
}

const style = `<style id="sg-pre-style">.sg-pre{max-width:960px;margin:0 auto;padding:110px 18px 40px;font-family:Nunito,Arial,sans-serif;color:#0f172a;line-height:1.6}.sg-pre img{max-width:100%;height:auto;max-height:260px;display:block;margin:12px 0;border-radius:10px}.sg-pre h1{font-size:2rem;margin:0 0 12px}.sg-pre h2{font-size:1.4rem;margin:22px 0 8px}.sg-pre h3,.sg-pre h4{font-size:1.1rem;margin:16px 0 6px}.sg-pre nav a{display:inline-block;margin:0 12px 6px 0;color:#0369a1}</style>`;

let count = 0;
fs.mkdirSync(path.join(DIST, "_p"), { recursive: true });
for (const [route, page] of Object.entries(data)) {
  const m = page.meta || {};
  const withBrand = m.title && !m.title.includes(BRAND) ? `${m.title} | ${BRAND}` : m.title;
  const title = m.title ? (withBrand.length <= 62 ? withBrand : m.title) : defaults.title;
  const description = m.description || defaults.description;
  const canonicalPath = m.path || route;
  const url = SITE + (canonicalPath === "/" ? "/" : canonicalPath);
  const image = m.image ? (m.image.startsWith("http") ? m.image : SITE + m.image) : defaults.image;
  const robots = m.noindex ? "noindex, follow" : "index, follow";

  let html = template;
  html = html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${esc(title)}</title>`);
  html = setTag(html, /<meta[^>]*name="description"[^>]*>/i, `<meta name="description" content="${esc(description)}" />`);
  html = setTag(html, /<meta[^>]*name="robots"[^>]*>/i, `<meta name="robots" content="${robots}" />`);
  html = setTag(html, /<link[^>]*rel="canonical"[^>]*>/i, `<link rel="canonical" href="${esc(url)}" />`);
  html = setTag(html, /<meta[^>]*property="og:title"[^>]*>/i, `<meta property="og:title" content="${esc(title)}" />`);
  html = setTag(html, /<meta[^>]*property="og:description"[^>]*>/i, `<meta property="og:description" content="${esc(description)}" />`);
  html = setTag(html, /<meta[^>]*property="og:url"[^>]*>/i, `<meta property="og:url" content="${esc(url)}" />`);
  if (image) html = setTag(html, /<meta[^>]*property="og:image"[^>]*>/i, `<meta property="og:image" content="${esc(image)}" />`);
  html = setTag(html, /<meta[^>]*name="twitter:title"[^>]*>/i, `<meta name="twitter:title" content="${esc(title)}" />`);
  html = setTag(html, /<meta[^>]*name="twitter:description"[^>]*>/i, `<meta name="twitter:description" content="${esc(description)}" />`);
  html = html.replace("</head>", `${style}\n  </head>`);

  const links = (page.links || []).map((h) => `<a href="${esc(h)}">${esc(h === "/" ? "Home" : h.replace(/^\//, "").replace(/[-/]/g, " "))}</a>`).join(" ");
  const content = `<div class="sg-pre">
${page.body}
<nav aria-label="More from Saffron Guru">${links}</nav>
<p><strong>Saffron Guru LLC</strong> · IT support and online protection since 2016 · Call 844-313-4987 · <a href="/contact">Contact us</a></p>
</div>`;
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${content}</div>`);
  if (!html.includes('class="sg-pre"')) throw new Error("could not find the root element in index.html");

  fs.writeFileSync(path.join(DIST, "_p", slugFor(route) + ".html"), html);
  count++;
}
console.log(`prerender: wrote ${count} ready-made pages`);
