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
  const withBrand = title && !title.includes(BRAND) ? `${title} | ${BRAND}` : title;
  const fullTitle = title ? (withBrand.length <= 62 ? withBrand : title) : d.title;
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
export const PAGES = {
  "/": { title: null },
  "/home": { title: null, canonical: "/" },
  "/features": { title: "Features" },
  "/DefendPro": { title: "DefendMe PRO™ Scam and Fraud Protection", description: "Protection far beyond antivirus: identity theft protection, fraud detection, scam alerts, password manager, VPN and live human support in one package." },
  "/contact": { title: "Contact Saffron Guru Tech Support", description: "Talk to a real Saffron Guru technician. Call +1 844-313-4987 or send us a message for help with your computer, phone, printer or online safety." },
  "/about-us": { title: "About Saffron Guru: Tech Support and Online Protection Since 2016", description: "Since 2016, Saffron Guru has helped homes, seniors and small businesses with patient tech support and protection from online threats." },
  "/our-story": { title: "Our Story", description: "How Saffron Guru began in 2016 and why we still answer every call with care: the story behind our tech support and online protection." },
  "/privacy-policy": { title: "Privacy Policy", description: "How Saffron Guru collects, uses and protects your personal information." },
  "/terms": { title: "Terms and Conditions", description: "The terms and conditions for using Saffron Guru services and this website." },
  "/return-policy": { title: "Return Policy", description: "Saffron Guru return and refund policy for services and software." },
  "/why-us": { title: "Why Choose Saffron Guru", description: "Real people, not bots. Patient experts, help 7 days a week and protection that goes beyond antivirus. See why customers stay with Saffron Guru." },
  "/solution": { title: "Protecting Seniors from Online Scams", description: "How scammers target older adults, from fake tech support to romance scams, and how Saffron Guru helps seniors and families stay safe online." },
  "/resources": { title: "Resources", description: "Free guides and checklists from Saffron Guru to help you secure your devices and recognize online scams." },
  "/HowSaffronWorks": { title: "How Saffron Guru Works", description: "Real-time threat monitoring, instant alerts and expert human support: see how Saffron Guru keeps your devices and identity protected." },
  "/Fox": { title: "Fox News Scam Report Video", description: "Watch the Fox News report on scams targeting Americans, and learn how to protect yourself and your family with Saffron Guru." },
  "/CBS": { title: "CBS News Scam Report Video", description: "Watch the CBS News report on scams targeting Americans, and learn how to protect yourself and your family with Saffron Guru." },
  "/ABC11": { title: "ABC11 News Scam Report Video", description: "Watch the ABC11 News report on scams targeting Americans, and learn how to protect yourself and your family with Saffron Guru." },
  "/NewYorkPolice": { title: "New York State Police Scam Warning Video", description: "Watch the New York State Police report on scams targeting Americans, and learn how to protect yourself and your family with Saffron Guru." },
  "/ABCNational": { title: "ABC News Scam Report Video", description: "Watch the ABC News report on scams targeting Americans, and learn how to protect yourself and your family with Saffron Guru." },
  "/AccountIn": { title: "Account" , noindex: true },
  "/LearnMore": { title: "Learn More About DefendMe PRO™", description: "Everything DefendMe PRO™ includes and how it protects your identity, accounts and money beyond what antivirus can do." },
  "/microsoft-store": { title: "Microsoft Office and Windows Licenses", description: "Genuine Microsoft Office, Windows, Project and Visio licenses with installation help from Saffron Guru technicians." },
  "/internet-security": { title: "Antivirus & Internet Security Software", description: "Trusted antivirus and internet security software such as Norton, McAfee, CrowdStrike and Symantec, with setup help from real technicians." },
  "/for-your-business": { title: "IT Support for Small Businesses", description: "Safe Support Assist for Business: your own IT department without the overhead. Networks, email, Microsoft 365, security, backups and live help 7 days a week." },
  "/for-your-home": { title: "Home Tech Support for Seniors and Families", description: "Patient tech support for your home: Wi-Fi, computers, printers, phones, scam cleanup and more. Real technicians, 7 days a week, no hourly fees." },
  "/Parent-Solution": { title: "NetHaven Parental Control", description: "NetHaven AI-powered parental control from Saffron Guru: safe search, screen time and protection that kids cannot easily get around." },
  "/Pricing": { title: "Pricing", description: "Plans and pricing for Saffron Guru tech support and DefendMe PRO™ online protection for homes and small businesses." },
  "/DaysMoneyBack": { title: "30-Day Money Back Guarantee", description: "Try Saffron Guru with confidence. Learn how our 30-day money back guarantee works." },
  "/IdentifyFakeCalls": { title: "How to Identify Fake Calls", description: "How to spot fake calls from people pretending to be your bank, Microsoft, Amazon or the government, and what to do if you get one." },
  "/ReadFAQ": { title: "Frequently Asked Questions", description: "Answers to common questions about Saffron Guru tech support, DefendMe PRO™ protection, remote help and billing." },
  "/FixMyTech": { title: "FixMyTech Remote Tech Support", description: "FixMyTech one-time remote tech support for home and business: fast fixes from real Saffron Guru technicians." },
  "/live-support": { title: "Live Tech Support & Online Protection", description: "Talk to a real technician today. Saffron Guru live tech support for computers, phones, printers and online safety, 7 days a week." },
  "/blog": { title: "Online Safety Blog", description: "Easy-to-read guides from Saffron Guru on avoiding scams, fake tech support, phishing, identity theft and fraud, written for seniors and families." },
  "/article": { title: "Online Safety Hub: Scam Alerts and Guides", description: "The latest scam alerts and protection guides from Saffron Guru: crypto scams, call spoofing, fake delivery and refund scams, tech support scams and more." },
  "/veterans": { title: "Tech Support for Veterans", description: "Special tech support and online protection offer for veterans and their families from Saffron Guru." },
  "/why-human-support": {
    title: "Scammers Don't Hack Computers. They Hack Trust.",
    description: "Americans 60+ reported $7.7 billion in losses to online crime in 2025 (FBI). How scammers win trust, why software alone cannot stop them, and how Saffron Guru protects you with real people.",
    type: "article",
  },
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
