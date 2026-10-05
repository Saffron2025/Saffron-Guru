import React from 'react';
import { Link } from 'react-router-dom';
import './ScamBlockerBand.css';

export default function ScamBlockerBand() {
  return (
    <section className="sg-sbband" aria-label="Saffron Guru Scam Pop-up Blocker">
      <div className="sg-sbband-inner">
        <img src="/Extension/saffron-guru-scam-popup-blocker-icon.png" alt="" width="56" height="56" loading="lazy" decoding="async" />
        <div className="sg-sbband-text">
          <strong>Stop scam pop-ups in your browser</strong>
          <span>Our Scam Pop-up &amp; Ad Blocker for Chrome and Edge blocks fake virus warnings and warns you before remote access sites.</span>
        </div>
        <Link className="sg-sbband-btn" to="/scam-popup-blocker">Get the blocker</Link>
      </div>
    </section>
  );
}
