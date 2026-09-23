// src/Components/DefendMeBusiness.jsx
import React from 'react';
import './DefenseMeBusiness.css';

const DefendMeBusiness = () => {
  return (
    <section className="business-wrapper">
      {/* Image block */}
      <div className="business-image-container">
        <img
          src="/Hero/DefendMeProForBusiness.WebP"
          alt="Cybersecurity for business"
          className="business-image"
        />
      </div>

      <h2 className="business-heading">💼 DefendMe Pro™ for Business</h2>
      <p className="business-subtitle">Digital Protection that Works Just as Hard as You Do.</p>

      <p className="business-point">
        Small businesses are now top targets for cyber scams — from fake invoices to vendor impersonation and remote access fraud.
      </p>

      <div className="business-features">
        <p>• All features of the Home plan</p>
        <p>• Zero-Day Threat Défense powered by AppGuard</p>
        <p>• Endpoint Protection for all team devices</p>
        <p>• Team-wide scam awareness guidance & best practices</p>
        <p>• Direct access to our experienced tech specialists</p>
        <p>• Secure remote setup with VPN & network hardening</p>
      </div>

      <div className="business-warning">
        ⚠️ One breach can bankrupt a business.<br />
        <strong>DefendMe Pro™ makes sure yours isn’t next.</strong>
      </div>
    </section>
  );
};

export default DefendMeBusiness;
