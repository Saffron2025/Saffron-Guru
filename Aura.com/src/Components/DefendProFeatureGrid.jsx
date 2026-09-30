// src/Components/DefendProFeatureGrid.jsx
// "What's included" overview for the DefendMe Pro page.
// Small tiles, one per feature. Clicking a tile scrolls to that feature's section.
import React from "react";
import "./DefendProFeatureGrid.css";

const FEATURES = [
  { id: "dp-identity", icon: "🛡️", label: "Identity Theft Protection" },
  { id: "dp-fraud", icon: "🚫", label: "Fraud Detection" },
  { id: "dp-scam", icon: "🔔", label: "Scam Protection" },
  { id: "dp-alerts", icon: "📣", label: "Scam Alerts Hub" },
  { id: "dp-finance", icon: "💰", label: "Financial Security" },
  { id: "dp-password", icon: "🔑", label: "Password Manager" },
  { id: "dp-antivirus", icon: "🖥️", label: "Antivirus & Device Security" },
  { id: "dp-vpn", icon: "🌐", label: "VPN & Online Privacy" },
  { id: "dp-spam", icon: "📞", label: "Spam Call Protection" },
  { id: "dp-support", icon: "🧑‍💻", label: "Live Support, 7 Days a Week" },
];

const LEARN = [
  { id: "dp-story", icon: "⚠️", label: "The Threat Isn't Just Malware" },
  { id: "dp-numbers", icon: "📊", label: "The Reality in Numbers" },
  { id: "dp-traditional", icon: "🧱", label: "Why Traditional Security Falls Short" },
  { id: "dp-built", icon: "✨", label: "Why We Built DefendMe Pro" },
  { id: "dp-includes", icon: "🧰", label: "Everything DefendMe Pro Includes" },
];

function goTo(e, id) {
  const el = document.getElementById(id);
  if (!el) return; // fall back to the normal #link
  e.preventDefault();
  el.scrollIntoView({ behavior: "smooth", block: "start" });
  if (window.history && window.history.replaceState) {
    window.history.replaceState(null, "", `#${id}`);
  }
}

const Tile = ({ item }) => (
  <a href={`#${item.id}`} className="dpg-tile" onClick={(e) => goTo(e, item.id)}>
    <span className="dpg-icon" aria-hidden="true">{item.icon}</span>
    <span className="dpg-label">{item.label}</span>
  </a>
);

const DefendProFeatureGrid = () => (
  <section className="dpg-section" aria-labelledby="dpg-title">
    <div className="dpg-container">
      <h2 id="dpg-title" className="dpg-title">
        What's Included in <span>DefendMe Pro™</span>
      </h2>
      <p className="dpg-subtitle">
        One package, complete protection. Tap any feature to read more.
      </p>

      <div className="dpg-grid">
        {FEATURES.map((f) => (
          <Tile key={f.id} item={f} />
        ))}
      </div>

      <h3 className="dpg-small-title">Learn why it matters</h3>
      <div className="dpg-grid dpg-grid-learn">
        {LEARN.map((f) => (
          <Tile key={f.id} item={f} />
        ))}
      </div>

      <a
        href="#dp-business"
        className="dpg-business"
        onClick={(e) => goTo(e, "dp-business")}
      >
        <span className="dpg-business-icon" aria-hidden="true">💼</span>
        <span>
          <strong>DefendMe Pro™ for Business</strong>
          <small>All Home plan features, plus endpoint protection and direct tech specialist access for your whole team</small>
        </span>
        <span className="dpg-business-arrow" aria-hidden="true">→</span>
      </a>
    </div>
  </section>
);

export default DefendProFeatureGrid;
