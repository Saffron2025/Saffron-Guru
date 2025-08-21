import React from "react";
import { Container } from "react-bootstrap";
import "./SmartActivityReportsBanner.css";

const SmartActivityReportsBanner = () => {
  return (
    <section className="smart-banner">
      <div className="smart-overlay"></div>

      <Container>
        <div className="smart-content">
          <h2 className="smart-heading">📊 Smart Activity Reports</h2>
          <p className="smart-text">
            NetHaven™ compiles clear, easy-to-read reports that highlight the most important 
            details about your child’s online activity. Powered by AI, these reports filter 
            out noise and focus on what matters — the websites visited, apps used, screen 
            time patterns, and any flagged safety concerns.
            <br /><br />
            Delivered to your dashboard (and optionally to your email), Smart Activity Reports 
            give you the insights you need to guide safe, healthy digital habits without sifting 
            through endless data.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SmartActivityReportsBanner;
