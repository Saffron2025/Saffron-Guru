// src/Components/Antivirus.jsx

import React, { useEffect, useRef } from "react";
import ExpandableSection from "./ExpandableSection";
import "./DefendMeBuilt.css";

const Antivirus = ({ expand }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (expand && sectionRef.current) {
      setTimeout(() => {
        sectionRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 300);
    }
  }, [expand]);

  const content = (
    <div className="antivirus-security-card">

      {/* LEFT SIDE CONTENT */}
      <div className="antivirus-content">

        <div className="antivirus-icon-badge">
          🖥️
        </div>

        <h2 className="antivirus-title">
          Antivirus & Device Security
        </h2>

        <div className="antivirus-title-line"></div>

        <p className="antivirus-description">
          Hackers don’t always need your password — sometimes they only need
          one vulnerable device. That can create an opening for malware,
          spyware, and other harmful threats.
        </p>

        <p className="antivirus-description">
          DefendMePro goes beyond basic antivirus protection by helping secure
          your devices and reduce exposure to suspicious activity.
        </p>

        {/* FEATURE BOXES */}
        <div className="antivirus-feature-list">

          <div className="antivirus-feature-item">
            <span className="antivirus-feature-icon">🛡️</span>

            <div>
              <h4>Real-Time Protection</h4>

              <p>
                Help detect and block potentially dangerous activity before it
                causes serious damage.
              </p>
            </div>
          </div>


          <div className="antivirus-feature-item">
            <span className="antivirus-feature-icon">🔒</span>

            <div>
              <h4>Device Security</h4>

              <p>
                Help secure important system areas and reduce risky access
                points on your device.
              </p>
            </div>
          </div>


          <div className="antivirus-feature-item">
            <span className="antivirus-feature-icon">🚨</span>

            <div>
              <h4>Threat Detection</h4>

              <p>
                Identify suspicious files and unusual activity that could put
                your personal information at risk.
              </p>
            </div>
          </div>

        </div>


        <div className="antivirus-bottom-message">
          🛡️ No advanced technical knowledge needed — we help you strengthen
          your device security.
        </div>

      </div>


      {/* RIGHT SIDE IMAGE */}
      <div className="antivirus-image-container">

        <div className="antivirus-image-glow"></div>

        <img
          src="/Products/antivirus.webp"
          alt="Antivirus and Device Security"
          className="antivirus-main-image"
        />

        <div className="antivirus-image-badge">
          <span>🛡️</span>
          <p>Protected Device</p>
        </div>

      </div>

    </div>
  );

  return (
    <div
      id="antivirus"
      ref={sectionRef}
      className="antivirus-section"
    >
      <ExpandableSection
        title="🖥️ Antivirus & Device Security"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default Antivirus;