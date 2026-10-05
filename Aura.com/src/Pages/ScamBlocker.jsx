import React from "react";
import { Link } from "react-router-dom";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import {
  FaChrome,
  FaEdge,
  FaBan,
  FaUserShield,
  FaDesktop,
  FaLock,
  FaPhoneAlt,
  FaCheck,
} from "react-icons/fa";
import "./ScamBlocker.css";

export const SCAM_BLOCKER_STORE_URL =
  "https://chromewebstore.google.com/detail/saffron-guru-%E2%80%93-ad-and-sca/kjnaipmheooiclgedjlojifcegkljljg";

const FEATURES = [
  {
    icon: FaBan,
    title: 'Fake "your computer is infected" screens, blocked',
    text: 'Those scary pages that say "Call Microsoft now" never get the chance to frighten you. The blocker stops them before they load.',
  },
  {
    icon: FaUserShield,
    title: "A clear warning before remote access",
    text: "Scammers ask people to install AnyDesk or TeamViewer so they can take over the computer. The moment one of those sites opens, a big warning tells you to stop if a stranger asked you to do it.",
  },
  {
    icon: FaDesktop,
    title: "Look-alike websites caught",
    text: 'Addresses like "paypa1" or "micros0ft" are made to fool you. The blocker spots them and takes you back to safety.',
  },
  {
    icon: FaLock,
    title: "Ads, trackers and pop-ups gone",
    text: "Pages load cleaner and faster, without pop-ups jumping in front of you or companies following you around the internet.",
  },
];

const SHOTS = [
  {
    src: "/Extension/saffron-guru-scam-popup-blocker-dangerous-site-blocked.webp",
    alt: "Saffron Guru Scam Pop-up Blocker stopping a fake PayPal website before it loads",
    caption: "A fake website stopped before it loads",
  },
  {
    src: "/Extension/saffron-guru-scam-popup-blocker-remote-access-warning.webp",
    alt: "Saffron Guru Scam Pop-up Blocker warning before a remote access website like AnyDesk opens",
    caption: "A clear warning before remote access sites",
  },
  {
    src: "/Extension/saffron-guru-scam-popup-blocker-extension-dashboard.webp",
    alt: "Saffron Guru Scam Pop-up Blocker dashboard showing ads, trackers, scams and phishing blocked",
    caption: "See everything it has blocked",
  },
];

function InstallButtons() {
  return (
    <div className="sb-buttons">
      <a className="sb-btn sb-btn--chrome" href={SCAM_BLOCKER_STORE_URL} target="_blank" rel="noopener noreferrer">
        <FaChrome aria-hidden="true" /> Add to Chrome
      </a>
      <a className="sb-btn sb-btn--edge" href={SCAM_BLOCKER_STORE_URL} target="_blank" rel="noopener noreferrer">
        <FaEdge aria-hidden="true" /> Add to Microsoft Edge
      </a>
    </div>
  );
}

export default function ScamBlocker() {
  return (
    <>
      <AppNavbar />
      <main className="sb-page">
        <section className="sb-hero">
          <div className="sb-hero-inner">
            <img
              className="sb-hero-icon"
              src="/Extension/saffron-guru-scam-popup-blocker-icon.png"
              alt="Saffron Guru Scam Pop-up Blocker icon"
              width="72"
              height="72"
            />
            <p className="sb-eyebrow">Saffron Guru browser protection</p>
            <h1 className="sb-title">Scam Pop-up &amp; Ad Blocker for Chrome and Edge</h1>
            <p className="sb-sub">
              Built by people who have sat on the phone with real scam victims. We know the tricks,
              so we built a blocker that stops them.
            </p>
            <InstallButtons />
            <p className="sb-note">Works in Google Chrome and Microsoft Edge on Windows and Mac.</p>
          </div>
        </section>

        <section className="sb-section">
          <h2 className="sb-h2">Made for the scams that actually target people</h2>
          <p className="sb-lead">
            Most blockers are made to hide ads. Ours is made to stop the tricks scammers use every day
            to get into your computer and your bank account.
          </p>
          <ul className="sb-features">
            {FEATURES.map(({ icon: Icon, title, text }) => (
              <li key={title}>
                <span className="sb-feat-icon" aria-hidden="true"><Icon /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="sb-section sb-section--shots">
          <h2 className="sb-h2">See it in action</h2>
          <div className="sb-shots">
            {SHOTS.map((s) => (
              <figure key={s.src}>
                <img src={s.src} alt={s.alt} width="1280" height="800" loading="lazy" decoding="async" />
                <figcaption>{s.caption}</figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="sb-section">
          <h2 className="sb-h2">Your privacy stays yours</h2>
          <ul className="sb-checks">
            <li><FaCheck aria-hidden="true" /> It doesn't collect, sell or share your personal data or browsing history.</li>
            <li><FaCheck aria-hidden="true" /> Everything stays on your own computer.</li>
            <li><FaCheck aria-hidden="true" /> It only downloads public lists of dangerous websites to keep you protected.</li>
          </ul>
          <p className="sb-small">
            Read the full <a href="/extension-privacy">extension privacy policy</a>.
          </p>
        </section>

        <section className="sb-cta">
          <h2 className="sb-h2">Add it in two clicks</h2>
          <p className="sb-lead">
            Click the button, then click <strong>"Add to Chrome"</strong> on the next page. In Edge, click{" "}
            <strong>"Allow"</strong> when it asks about other stores first.
          </p>
          <InstallButtons />
          <p className="sb-help">
            Rather have us set it up for you? <a href="tel:+18443134987"><FaPhoneAlt aria-hidden="true" /> Call +1 844-313-4987</a>
          </p>
          <p className="sb-small">
            Want a real person watching out for you too? See <Link to="/DefendPro">DefendMe PRO™ Security Solutions</Link>.
          </p>
        </section>
      </main>
      <AllSection />
    </>
  );
}
