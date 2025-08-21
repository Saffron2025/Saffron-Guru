// src/Components/ScamProtection.jsx
import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css';

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🔔 Scam Protection</h2>
    <div className="reality-point">
      Scams today don’t look like scams. They look like Amazon refund calls, Microsoft pop-ups, or emails pretending to be from your bank.
    </div>
    <div className="reality-point">
      DefendMePro protects you through layered defense:
      <ul className="bullet-list">
        <li>📱 Spam call filtering to silence known scam numbers</li>
        <li>🌐 Browser-level protection to detect fake websites and phishing traps in real time</li>
        <li>🛠️ System configuration to block remote access, screen takeovers, and malicious pop-ups</li>
        <li>📢 Scam alerts delivered via email, SMS, and our Alerts Hub app</li>
        <li>📞 On-demand help from real experts when you’re unsure</li>
        <li>🧠 Weekly scam updates tailored for everyday users — no jargon, just what to look out for and how to avoid it.</li>
      </ul>
    </div>
  </div>
);

const ScamProtection = ({ expand, scrollRef }) => (
  <div ref={scrollRef}>
    <ExpandableSection title="🔔 Scam Protection" content={content} defaultExpand={expand} />
  </div>
);

export default ScamProtection;
