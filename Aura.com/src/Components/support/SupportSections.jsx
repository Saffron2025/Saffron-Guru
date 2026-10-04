// src/Components/support/SupportSections.jsx
// Shared building blocks for the Safe Support Assist pages (home and business):
// feature tiles, extra service cards, "how it works" steps and a trust + call band.
import React from "react";
import { Link } from "react-router-dom";
import "./SupportSections.css";

const PHONE_DISPLAY = "+1 844-313-4987";
const PHONE_LINK = "tel:+18443134987";

function goTo(e, id) {
  const el = document.getElementById(id);
  if (!el) return;
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

/* Small square tiles - one service each - click to jump to its section */
export const ServiceTiles = ({ title, highlight, subtitle, items }) => (
  <section className="sgs-tiles-section" aria-label={`${title} ${highlight || ""}`}>
    <div className="sgs-container">
      <h2 className="sgs-title">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {subtitle && <p className="sgs-subtitle">{subtitle}</p>}
      <div className="sgs-grid">
        {items.map((it) => (
          <a
            key={it.id}
            href={`#${it.id}`}
            className={`sgs-tile${it.featured ? " sgs-tile-featured" : ""}`}
            onClick={(e) => goTo(e, it.id)}
          >
            <span className="sgs-icon" aria-hidden="true">{it.icon}</span>
            <span className="sgs-label">{it.label}</span>
          </a>
        ))}
      </div>
    </div>
  </section>
);

/* Cards for services that do not have their own long section */
export const ExtraServices = ({ title, highlight, subtitle, items }) => (
  <section className="sgs-extra-section">
    <div className="sgs-container">
      <h2 className="sgs-title">
        {title} {highlight && <span>{highlight}</span>}
      </h2>
      {subtitle && <p className="sgs-subtitle">{subtitle}</p>}
      <div className="sgs-cards">
        {items.map((it) => (
          <article key={it.id} id={it.id} className="sgs-card sgs-anchor">
            <div className="sgs-card-icon" aria-hidden="true">{it.icon}</div>
            <h3>{it.label}</h3>
            <p>{it.text}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

/* Simple numbered steps */
export const HowItWorks = ({ title, steps }) => (
  <section className="sgs-steps-section">
    <div className="sgs-container">
      <h2 className="sgs-title">{title}</h2>
      <ol className="sgs-steps">
        {steps.map((s, i) => (
          <li key={s.title} className="sgs-step">
            <span className="sgs-step-num" aria-hidden="true">{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

/* Checklist box, e.g. "Is remote help safe?" */
export const CheckList = ({ id, title, intro, points, tone = "light" }) => (
  <section id={id} className={`sgs-check-section sgs-anchor sgs-${tone}`}>
    <div className="sgs-container sgs-narrow">
      <h2 className="sgs-title">{title}</h2>
      {intro && <p className="sgs-subtitle">{intro}</p>}
      <ul className="sgs-checks">
        {points.map((p) => (
          <li key={p.title}>
            <span className="sgs-check" aria-hidden="true">✓</span>
            <div>
              <strong>{p.title}</strong>
              {p.text && <span> {p.text}</span>}
            </div>
          </li>
        ))}
      </ul>
    </div>
  </section>
);

/* Trust points and a clear way to reach a real person */
const BBB_PROFILE =
  "https://www.bbb.org/us/tx/irving/profile/computer-software/saffron-guru-0875-91317606/#sealclick";

export const TrustCallBand = ({ heading, text, points }) => (
  <section className="sgs-cta-section">
    <div className="sgs-container">
      {/* Official BBB Accredited Business seal - links to our real BBB profile */}
      <a
        href={BBB_PROFILE}
        target="_blank"
        rel="noopener noreferrer"
        className="sgs-bbb"
        title="Saffron Guru LLC BBB Business Review"
      >
        <img
          src="/Hero/saffron-guru-bbb-a-plus-rating.webp"
          alt="Saffron Guru BBB A+ rating"
          loading="lazy"
          decoding="async"
        />
      </a>
      <ul className="sgs-trust">
        {points.map((p) => (
          <li key={p.label}>
            <span aria-hidden="true">{p.icon}</span> {p.label}
          </li>
        ))}
      </ul>
      <div className="sgs-cta">
        <div>
          <h2>{heading}</h2>
          <p>{text}</p>
        </div>
        <div className="sgs-cta-buttons">
          <a href={PHONE_LINK} className="sgs-btn sgs-btn-primary">
            📞 Call {PHONE_DISPLAY}
          </a>
          <Link to="/contact" className="sgs-btn sgs-btn-secondary">
            ✉️ Contact Us
          </Link>
        </div>
      </div>
    </div>
  </section>
);

/* Wraps an existing section so a tile can jump to it */
export const Anchor = ({ id, children }) => (
  <div id={id} className="sgs-anchor">
    {children}
  </div>
);
