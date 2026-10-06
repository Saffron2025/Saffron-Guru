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
const PHONE_LINK = '<a href="tel:+18443134987">+1 844-313-4987</a>';

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

const style = `<style id="sg-pre-style">.sg-pre{max-width:960px;margin:0 auto;padding:110px 18px 40px;font-family:Nunito,Arial,sans-serif;color:#0f172a;line-height:1.6}.sg-pre img{max-width:100%;height:auto;max-height:260px;display:block;margin:12px 0;border-radius:10px}.sg-pre h1{font-size:2rem;margin:0 0 12px}.sg-pre h2{font-size:1.4rem;margin:22px 0 8px}.sg-pre h3,.sg-pre h4{font-size:1.1rem;margin:16px 0 6px}.sg-pre nav a{display:inline-block;margin:0 12px 6px 0;color:#0369a1}.sg-pre-cover{position:fixed;inset:0;z-index:2147483646;background:#0b1324;display:flex;align-items:center;justify-content:center}.sg-pre-cover img{width:72px;height:auto;animation:sgpulse 1.2s ease-in-out infinite}@keyframes sgpulse{0%,100%{opacity:.55}50%{opacity:1}}</style>`;

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

  // Structured data so Google understands articles and products
  const ld = [];
  const org = { "@type": "Organization", name: "Saffron Guru LLC", url: SITE + "/", logo: { "@type": "ImageObject", url: SITE + "/Products/saffron-guru-logo-512.png" } };
  if (route.startsWith("/articles/") || route.startsWith("/blog/")) {
    const post = {
      "@context": "https://schema.org", "@type": "BlogPosting",
      headline: title.replace(/ \| Saffron Guru$/, "").slice(0, 110),
      description, mainEntityOfPage: url, url,
      author: { "@type": "Organization", name: "Saffron Guru", url: SITE + "/" },
      publisher: org, inLanguage: "en-US",
    };
    if (m.image) post.image = [image];
    if (m.date) { const d = new Date(m.date + " UTC"); if (!isNaN(d)) post.datePublished = d.toISOString().slice(0, 10); }
    ld.push(post);
  }
  if (route.startsWith("/product/") && m.price) {
    const price = String(m.price).replace(/[^0-9.]/g, "");
    ld.push({
      "@context": "https://schema.org", "@type": "Product",
      name: m.title, description, image: [image], brand: { "@type": "Brand", name: /^(Office|Windows|Project|Visio)/.test(m.title) ? "Microsoft" : m.title.split(" ")[0] },
      offers: {
        "@type": "Offer", url, priceCurrency: "USD", price, availability: "https://schema.org/InStock", seller: org,
        // Digital delivery: no shipping cost, delivered the same day (license key by email or phone)
        shippingDetails: {
          "@type": "OfferShippingDetails",
          shippingRate: { "@type": "MonetaryAmount", value: 0, currency: "USD" },
          shippingDestination: { "@type": "DefinedRegion", addressCountry: "US" },
          deliveryTime: {
            "@type": "ShippingDeliveryTime",
            handlingTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 1, unitCode: "DAY" },
            transitTime: { "@type": "QuantitativeValue", minValue: 0, maxValue: 0, unitCode: "DAY" },
          },
        },
        // Matches the site's Return & Refund Policy: third-party software refundable within 30 days
        hasMerchantReturnPolicy: {
          "@type": "MerchantReturnPolicy",
          applicableCountry: "US",
          returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
          merchantReturnDays: 30,
          returnFees: "https://schema.org/FreeReturn",
          merchantReturnLink: SITE + "/return-policy",
        },
      },
    });
  }
  if (route !== "/") {
    const crumbs = [{ "@type": "ListItem", position: 1, name: "Home", item: SITE + "/" }];
    const sect = route.startsWith("/articles/") ? ["Online Safety Hub", "/article"] : route.startsWith("/blog/") ? ["Blog", "/blog"] : route.startsWith("/product/") ? (/^\/product\/(1[1-7]|19|2[01])$/.test(route) ? ["Internet Security", "/internet-security"] : ["Microsoft Store", "/microsoft-store"]) : null;
    if (sect) crumbs.push({ "@type": "ListItem", position: 2, name: sect[0], item: SITE + sect[1] });
    crumbs.push({ "@type": "ListItem", position: crumbs.length + 1, name: title.replace(/ \| Saffron Guru$/, ""), item: url });
    ld.push({ "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: crumbs });
  }
  if (ld.length) html = html.replace("</head>", ld.map((x) => `<script type="application/ld+json">${JSON.stringify(x).replace(/</g, "\\u003c")}</script>`).join("\n") + "\n  </head>");

  const links = (page.links || []).map((h) => `<a href="${esc(h)}">${esc(h === "/" ? "Home" : h.replace(/^\//, "").replace(/[-/]/g, " "))}</a>`).join(" ");
  // Every phone number becomes a +1 link so no search engine guesses the wrong country
  const body = page.body.replace(/(?:\+?1[\s.-]?)?\(?844\)?[\s.-]?313[\s.-]?4987/g, PHONE_LINK);
  const content = `<div class="sg-pre-cover" aria-hidden="true"></div><div class="sg-pre">
${body}
<nav aria-label="More from Saffron Guru">${links}</nav>
<p><strong>Saffron Guru LLC</strong> · IT support and online protection since 2016 · Call ${PHONE_LINK} · <a href="/contact">Contact us</a></p>
</div>`;
  html = html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${content}</div>`);
  if (!html.includes('class="sg-pre"')) throw new Error("could not find the root element in index.html");

  fs.writeFileSync(path.join(DIST, "_p", slugFor(route) + ".html"), html);
  count++;
}
console.log(`prerender: wrote ${count} ready-made pages`);
