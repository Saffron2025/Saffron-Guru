import React from "react";
import { Container } from "react-bootstrap";
import "./SocialMediaMonitoringBanner.css";

const SocialMediaMonitoringBanner = () => {
  return (
    <section className="social-banner">
      <div className="social-overlay"></div>

      <Container>
        <div className="social-content">
          <h2 className="social-heading">
            📱 Social Media Monitoring & Keyword Alerts
          </h2>
          <p className="social-text">
            NetHaven™ scans the social spaces where your child spends time — from popular 
            social networks to messaging apps — to spot early signs of danger. Using AI-driven 
            keyword analysis, it flags explicit language, bullying, predatory behavior, and 
            other harmful keywords the instant they’re detected.
            <br /><br />
            You’re instantly notified, giving you the chance to step in, offer guidance, or 
            take action before your child is exposed to lasting harm.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SocialMediaMonitoringBanner;
