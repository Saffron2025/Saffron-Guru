// src/Components/EverythingSafe.jsx

import React, { useEffect, useRef } from "react";
import "./EverythingYouNeedTostay.css";

const EverythingSafe = ({ expand }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (expand && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 150);
    }
  }, [expand]);

  return (
    <section
      id="identity-theft"
      className="everything-safe-section"
      ref={sectionRef}
    >
      {/* Background decorations */}
      <div className="everything-safe-orb orb-one"></div>
      <div className="everything-safe-orb orb-two"></div>
      <div className="everything-safe-grid"></div>

      <div className="everything-safe-container">

        {/* LEFT IMAGE SIDE */}
        <div className="everything-safe-visual">

          <div className="everything-safe-image-glow"></div>

          <div className="everything-safe-image-card">

            <div className="everything-safe-image-top">
              <span>🛡️</span>
              <span>DEFENDME PROTECTION</span>
            </div>

            <img
              src="/Hero/EveryThingStay.WebP"
              alt="Digital Security Protection"
              className="everything-safe-main-image"
            />

          </div>

          {/* Floating Security Card */}
          <div className="everything-safe-floating-card">

            <div className="everything-safe-floating-icon">
              🔐
            </div>

            <div>
              <strong>Identity Protected</strong>
              <small>Security monitoring active</small>
            </div>

          </div>

          {/* Small floating badge */}
          <div className="everything-safe-status">
            <span></span>
            Protection Active
          </div>

        </div>


        {/* RIGHT CONTENT SIDE */}
        <div className="everything-safe-content">

          <div className="everything-safe-badge">
            🛡️ COMPLETE DIGITAL PROTECTION
          </div>

          <h2 className="everything-safe-heading">
            Everything You Need
            <span> To Stay Safe.</span>
          </h2>

          <p className="everything-safe-intro">
            Powerful protection tools working together to help defend your
            identity, devices, and personal information.
          </p>


          {/* IDENTITY PROTECTION */}
          <div className="everything-safe-feature-card">

            <div className="everything-safe-feature-icon">
              🔐
            </div>

            <div className="everything-safe-feature-content">

              <h3>Identity Theft Protection</h3>

              <p>
                Your identity controls everything — your money, credit, and
                reputation.
              </p>

              <p>
                DefendMePro helps you monitor for potential leaks,
                unauthorized use, or suspicious activity connected to your
                personal information.
              </p>

              <div className="everything-safe-feature-footer">
                <span>⚡</span>
                Get alerts when something suspicious needs attention.
              </div>

            </div>

          </div>


          {/* ZERO DAY PROTECTION */}
          <div className="everything-safe-feature-card zero-day-card">

            <div className="everything-safe-feature-icon">
              🔒
            </div>

            <div className="everything-safe-feature-content">

              <h3>Zero-Day Threat Defense</h3>

              <p>
                Some cyber threats are so new and sophisticated that traditional
                security may not recognize them immediately.
              </p>

              <p>
                DefendMePro adds an extra layer of protection designed to help
                reduce exposure to unknown malware, ransomware, and suspicious
                exploit attempts.
              </p>

              <div className="everything-safe-feature-footer">
                <span>🛡️</span>
                Proactive protection designed for emerging threats.
              </div>

            </div>

          </div>


          {/* Bottom highlight */}
          <div className="everything-safe-bottom-message">

            <div className="everything-safe-bottom-icon">
              🛡️
            </div>

            <p>
              Stay safer with powerful protection tools designed to help
              protect what matters most —
              <strong> your identity and digital life.</strong>
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default EverythingSafe;