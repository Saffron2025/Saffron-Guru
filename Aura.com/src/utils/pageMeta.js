/* =====================================================
   PAGE TITLES FOR GOOGLE
   Gives every page its own title, description and
   canonical address, so Google does not treat every
   page as a copy of the homepage.
===================================================== */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { products } from "../data/productsData";

export const SITE_URL = "https://www.saffronguru.com";
const BRAND = "Saffron Guru";

// Read the homepage defaults from index.html once, so they can be restored
let DEFAULTS = null;
function defaults() {
  if (DEFAULTS) return DEFAULTS;
  const get = (sel, attr = "content") => {
    const el = document.head.querySelector(sel);
    return el ? el.getAttribute(attr) || "" : "";
  };
  DEFAULTS = {
    title: document.title,
    description: get('meta[name="description"]'),
    image: get('meta[property="og:image"]'),
  };
  return DEFAULTS;
}

function setTag(selector, create, attr, value) {
  let el = document.head.querySelector(selector);
  if (!el) {
    el = document.createElement(create.tag);
    Object.entries(create.attrs).forEach(([k, v]) => el.setAttribute(k, v));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

const meta = (name, value) =>
  setTag(`meta[name="${name}"]`, { tag: "meta", attrs: { name } }, "content", value);
const prop = (property, value) =>
  setTag(`meta[property="${property}"]`, { tag: "meta", attrs: { property } }, "content", value);

/** Remove emojis and extra spaces from a heading so it reads well in Google. */
export function cleanTitle(text) {
  return String(text || "")
    .replace(/[\p{Extended_Pictographic}️‍]/gu, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Turn HTML or long text into a short description (about 155 characters). */
export function shortDescription(text, max = 155) {
  const plain = String(text || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
  if (plain.length <= max) return plain;
  const cut = plain.slice(0, max);
  return cut.slice(0, cut.lastIndexOf(" ")).replace(/[,.;:]$/, "") + "…";
}

/** Set the title, description, canonical address and sharing tags for a page. */
export function setPageMeta({ title, description, path, image, type = "website", noindex = false }) {
  const d = defaults();
  const fullTitle = title ? (title.includes(BRAND) ? title : `${title} | ${BRAND}`) : d.title;
  const desc = description || d.description;
  const url = SITE_URL + (path === "/" || !path ? "/" : path);
  const img = image ? (image.startsWith("http") ? image : SITE_URL + image) : d.image;

  document.title = fullTitle;
  meta("description", desc);
  meta("robots", noindex ? "noindex, follow" : "index, follow");
  setTag('link[rel="canonical"]', { tag: "link", attrs: { rel: "canonical" } }, "href", url);

  prop("og:title", fullTitle);
  prop("og:description", desc);
  prop("og:url", url);
  prop("og:type", type);
  if (img) prop("og:image", img);
  meta("twitter:title", fullTitle);
  meta("twitter:description", desc);
  if (img) meta("twitter:image", img);
}

/** Hook for pages that know their own title (blog posts, articles). */
export function usePageMeta(options, deps) {
  useEffect(() => {
    if (options) setPageMeta(options);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}

/* Titles for the fixed pages of the website */
const PAGES = {
  "/": { title: null },
  "/home": { title: null, canonical: "/" },
  "/features": { title: "Features" },
  "/DefendPro": { title: "DefendMe Pro Scam and Fraud Protection" },
  "/contact": { title: "Contact Saffron Guru Tech Support" },
  "/about-us": { title: "About Saffron Guru: Tech Support and Online Protection Since 2016" },
  "/our-story": { title: "Our Story" },
  "/privacy-policy": { title: "Privacy Policy" },
  "/terms": { title: "Terms and Conditions" },
  "/return-policy": { title: "Return Policy" },
  "/why-us": { title: "Why Choose Saffron Guru" },
  "/solution": { title: "Protecting Seniors from Online Scams" },
  "/resources": { title: "Resources" },
  "/HowSaffronWorks": { title: "How Saffron Guru Works" },
  "/Fox": { title: "Fox News Scam Report Video" },
  "/CBS": { title: "CBS News Scam Report Video" },
  "/ABC11": { title: "ABC11 News Scam Report Video" },
  "/NewYorkPolice": { title: "New York State Police Scam Warning Video" },
  "/ABCNational": { title: "ABC News Scam Report Video" },
  "/AccountIn": { title: "Account" , noindex: true },
  "/LearnMore": { title: "Learn More About DefendMe Pro" },
  "/microsoft-store": { title: "Microsoft Office and Windows Licenses" },
  "/internet-security": { title: "Internet Security and Antivirus Software" },
  "/for-your-business": { title: "IT Support for Small Businesses" },
  "/for-your-home": { title: "Home Tech Support for Seniors and Families" },
  "/Parent-Solution": { title: "NetHaven Parental Control" },
  "/Pricing": { title: "Pricing" },
  "/DaysMoneyBack": { title: "30-Day Money Back Guarantee" },
  "/IdentifyFakeCalls": { title: "How to Identify Fake Calls" },
  "/ReadFAQ": { title: "Frequently Asked Questions" },
  "/FixMyTech": { title: "FixMyTech Remote Tech Support" },
  "/live-support": { title: "Live Tech Support" },
  "/blog": { title: "Online Safety Blog", description: "Easy-to-read guides from Saffron Guru on avoiding scams, fake tech support, phishing, identity theft and fraud, written for seniors and families." },
  "/article": { title: "Online Safety Hub: Scam Alerts and Guides", description: "The latest scam alerts and protection guides from Saffron Guru: crypto scams, call spoofing, fake delivery and refund scams, tech support scams and more." },
  "/Veterens": { title: "Tech Support for Veterans" },
  "/login": { title: "Log In", noindex: true },
  "/signup": { title: "Sign Up", noindex: true },
  "/verify-otp": { title: "Verify", noindex: true },
  "/userdashboard": { title: "My Dashboard", noindex: true },
};

/** Placed once inside the router: sets titles for the fixed pages. */
export function RouteMeta() {
  const { pathname } = useLocation();
  useEffect(() => {
    // Blog posts and articles set their own titles
    if (/^\/(blog|articles)\/[^/]+/.test(pathname)) return;

    const product = pathname.match(/^\/product\/(\d+)/);
    if (product) {
      const p = products.find((x) => x.id === Number(product[1]));
      setPageMeta({ title: p ? cleanTitle(p.name) : "Product", description: p && p.desc ? shortDescription(p.desc) : undefined, path: pathname, image: p && p.img });
      return;
    }

    const page = PAGES[pathname];
    if (page) {
      setPageMeta({ ...page, path: page.canonical || pathname });
    } else {
      setPageMeta({ title: "Page Not Found", path: pathname, noindex: true });
    }
  }, [pathname]);
  return null;
}
