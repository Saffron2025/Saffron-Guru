// src/Components/ScamAlertsHub.jsx

import React, { useEffect, useRef } from "react";
import ExpandableSection from "./ExpandableSection";
import "./DefendMeBuilt.css";

const ScamAlertsHub = ({ expand }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (expand && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [expand]);

  const content = (
    <div className="scam-alerts-content">

      {/* LEFT SIDE CONTENT */}
      <div className="scam-alerts-text">

        {/* Badge */}
        <div className="scam-alerts-badge">
          <span className="scam-alerts-dot"></span>
          LIVE SCAM ALERTS
        </div>

        {/* Main Heading */}
        <h2 className="scam-alerts-title">
          Stay Updated.
          <span> Stay Protected.</span>
        </h2>

        {/* Description */}
        <p className="scam-alerts-description">
          Scams evolve fast, and most people don't discover a new threat until
          it's already too late. Scam Alerts Hub helps you stay informed about
          emerging scams before they reach you.
        </p>

        {/* Alert Cards */}
        <div className="scam-alerts-list">

          <div className="scam-alerts-item">
            <div className="scam-alerts-icon">🔔</div>

            <div>
              <h4>Real-Time Scam Alerts</h4>

              <p>
                Stay informed about new scam trends as they begin spreading
                across the country.
              </p>
            </div>
          </div>


          <div className="scam-alerts-item">
            <div className="scam-alerts-icon">🌐</div>

            <div>
              <h4>Latest Scam Trends</h4>

              <p>
                Get updates about refund scams, phishing websites, fake
                technical support and other emerging threats.
              </p>
            </div>
          </div>


          <div className="scam-alerts-item">
            <div className="scam-alerts-icon">📧</div>

            <div>
              <h4>Alerts Where You Need Them</h4>

              <p>
                Receive important alerts through the Hub, email, and other
                available communication channels.
              </p>
            </div>
          </div>


          <div className="scam-alerts-item">
            <div className="scam-alerts-icon">💬</div>

            <div>
              <h4>Simple & Clear Warnings</h4>

              <p>
                Understand what is happening without complicated technical
                jargon or confusing security language.
              </p>
            </div>
          </div>


          <div className="scam-alerts-item">
            <div className="scam-alerts-icon">🛡️</div>

            <div>
              <h4>Early Protection</h4>

              <p>
                Get useful warnings and information designed to help you
                recognize potential scams earlier.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* RIGHT SIDE IMAGE */}
      <div className="scam-alerts-image-wrapper">

        {/* Background Glow */}
        <div className="scam-alerts-highlight"></div>

        {/* Decorative Border */}
        <div className="scam-alerts-image-border"></div>

        <img
          src="/Products/scam-alerts-hub.webp"
          alt="Scam Alerts Hub and Online Security Alerts"
          className="scam-alerts-image"
        />

      </div>

    </div>
  );

  return (
    <div ref={sectionRef}>
      <ExpandableSection
        title="🔔 Scam Alerts Hub"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default ScamAlertsHub;