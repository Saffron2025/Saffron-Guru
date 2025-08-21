import React from "react";
import { Container } from "react-bootstrap";
import "./SafeSearchEnforcementBanner.css";

const SafeSearchEnforcementBanner = () => {
  return (
    <section className="safe-banner">
      <div className="safe-overlay"></div>

      <Container>
        <div className="safe-content">
          <h2 className="safe-heading">🔍 Safe Search Enforcement</h2>
          <p className="safe-text">
            NetHaven™ ensures that every search your child makes on Google, Bing, and YouTube 
            is automatically filtered for age-appropriate results. Even if they try to disable 
            Safe Search in their browser or app, NetHaven™ locks the setting in place, preventing 
            exposure to explicit or inappropriate content.
            <br /><br />
            This protection works across all protected devices, giving you confidence that their 
            online searches stay clean and safe.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SafeSearchEnforcementBanner;
