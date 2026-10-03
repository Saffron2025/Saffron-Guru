# Saffron Guru website — handoff notes (updated 2026-10-04)

Owner: Joe (non-technical; wants short, plain answers; discuss before big changes).
Site: https://www.saffronguru.com — React + Vite app in `Aura.com/`, deployed on Vercel from `main`.
Commits: author `Claude <noreply@anthropic.com>`. After pushing, wait ~2 min and check the live site.
Sandbox cannot reach saffronguru.com directly; use the browser pane to verify live pages.
npm is blocked in the sandbox; syntax-check with TypeScript (`/tmp/claude-0/syn.js` pattern) and test by deploying.

## Business facts to keep consistent
- Phone: always `+1 844-313-4987` (links must be `tel:+18443134987`).
- Address for listings: 4070 N Belt Line Rd, Irving, TX 75038 (no suite). Employees: 11–50.
- Product name styling: "DefendMe PRO™" (full name "DefendMe PRO™ Security Solutions" only in key spots). Page URL stays `/DefendPro`.
- Guarantee: 30-day money back (matches BBB). Do not change to 60 unless BBB is updated too.
- Never claim "U.S.-based support"/"no overseas"; team is remote. Customers are told upfront Saffron Guru is a third-party company.
- Logo: blue shield. Menu bar uses `/Products/saffron-guru-logo-static.webp` (no background). Favicon/app icons/schema logo use the dark-navy tile version.

## SEO system now in place
- Every sitemap page is served as a ready-made HTML page (own title, description, canonical, text, images, schema):
  - Content snapshot: `Aura.com/scripts/prerender-data.json` (70 pages).
  - Regenerate after ANY page text/image change:
    `cd Aura.com && NODE_PATH=$(npm root -g) node scripts/snapshot/render.mjs && NODE_PATH=$(npm root -g) node scripts/snapshot/extract.cjs`
  - Build step (runs automatically in `vite build` via plugin in `vite.config.js`): `scripts/prerender.mjs` writes `dist/_p/*.html`.
  - `vercel.json` routes each page to `/_p/<page>.html`; a dark cover hides the plain copy for ~0.7s until the app loads.
  - New pages must be added to `public/sitemap.xml`, re-snapshotted, and given a route in `vercel.json`.
- Schema: Organization (22 sameAs profiles) in `index.html`; BlogPosting, Product and BreadcrumbList added by `prerender.mjs`.
- All images renamed `saffron-guru-*` (old names 301-redirect in `vercel.json`); all alt texts mention Saffron Guru; image sitemap in `public/sitemap.xml`.
- IndexNow key: `public/612c5ca713438240f93508b4b6805e9e.txt` (ping `https://www.bing.com/indexnow?url=...&key=...` after changes).
- Bing Webmaster Tools: homepage re-indexing requested 2026-10-04; live test shows no issues.

## Footer / profiles
"Find Us Online" boxes + social links live in `Aura.com/src/Components/AllSection.jsx`; add each new profile there AND to `sameAs` in `index.html`.
Pending directory approvals: DesignRush, TechReviewer, Superb Companies, Selected Firms (add when approved). Owler edits submitted (awaiting review; exact employee number still needed).

## Open to-do list
1. 26 service images for Safe Support Assist (12 Home + 14 Business sections are text-only) — Joe to provide, or Claude makes diagrams.
2. Speed: split the 1.08 MB JS bundle (lazy-load routes) and trim 708 KB CSS — do carefully.
3. Optional "Saffron Guru Promise" homepage section (30-day guarantee, BBB A+, real people 7 days, since 2016) — no "overseas" wording.
4. Legal Disclaimer page lists 1-833-552-2123 — ask Joe if it should be 844-313-4987.
5. Behance: keep personal profile linked (team page is noindex); add the 50 brand images when Joe sends them.
6. Joe: resubmit sitemap + request indexing in Google Search Console.
