// src/Components/VpnPrivacy.jsx

import React, { useEffect, useRef } from "react";
import ExpandableSection from "./ExpandableSection";
import "./DefendMeBuilt.css";

const VpnPrivacy = ({ expand }) => {
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
    <div className="vpn-security-card">

      {/* LEFT SIDE CONTENT */}
      <div className="vpn-content">

        <div className="vpn-icon-badge">
          🌐
        </div>

        <h2 className="vpn-title">
          VPN & Online Privacy
        </h2>

        <div className="vpn-title-line"></div>

        <p className="vpn-description">
          Hackers, trackers, and hidden online threats can expose your
          connection every time you browse the internet.
        </p>

        <p className="vpn-description">
          DefendMePro helps protect your online activity with privacy-focused
          tools designed to make your internet connection more secure and your
          personal information less exposed.
        </p>

        {/* FEATURE LIST */}
        <div className="vpn-feature-list">

          <div className="vpn-feature-item">
            <span className="vpn-feature-icon">🔐</span>

            <div>
              <h4>Encrypted Browsing</h4>
              <p>
                Help protect your internet activity while browsing online.
              </p>
            </div>
          </div>


          <div className="vpn-feature-item">
            <span className="vpn-feature-icon">🕶️</span>

            <div>
              <h4>IP Privacy</h4>
              <p>
                Add an extra layer of privacy to help reduce unnecessary
                exposure of your online identity.
              </p>
            </div>
          </div>


          <div className="vpn-feature-item">
            <span className="vpn-feature-icon">🌍</span>

            <div>
              <h4>Location Privacy</h4>
              <p>
                Help keep your browsing activity and location information more
                private while you're online.
              </p>
            </div>
          </div>

        </div>


        <div className="vpn-bottom-message">
          🛡️ When your connection is more private, your digital identity has
          an extra layer of protection.
        </div>

      </div>


      {/* RIGHT SIDE IMAGE */}
      <div className="vpn-image-container">

        <div className="vpn-image-glow"></div>

        <img
          src="/Products/vpn-privacy.webp"
          alt="VPN and Online Privacy"
          className="vpn-main-image"
        />

        <div className="vpn-image-badge">
          <span>🔒</span>
          <p>Private Connection</p>
        </div>

      </div>

    </div>
  );

  return (
    <div
      id="vpn"
      ref={sectionRef}
      className="vpn-section"
    >
      <ExpandableSection
        title="🌐 VPN & Online Privacy"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default VpnPrivacy;