import React from "react";
import { Container } from "react-bootstrap";
import "./TamperDetectionBanner.css";

const TamperDetectionBanner = () => {
  return (
    <section className="tamper-banner">
      <div className="tamper-overlay"></div>

      <Container>
        <div className="tamper-content">
          <h2 className="tamper-heading">🛡️ Tamper Detection & Bypass Prevention</h2>
          <p className="tamper-text">
            NetHaven™ is built to stay ahead of tech-savvy kids who try to disable or work around parental controls.
            If they attempt to uninstall the software, reset the device, use hidden browsers, or connect through 
            unauthorized VPNs, you’ll get instant alerts.
            <br /><br />
            Advanced safeguards block common bypass methods, so the rules you set stay in place — no matter how clever they get.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default TamperDetectionBanner;
