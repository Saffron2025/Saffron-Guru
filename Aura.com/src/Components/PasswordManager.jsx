// src/Components/PasswordAndDeviceSecurity.jsx

import React, { useEffect, useRef } from "react";
import ExpandableSection from "./ExpandableSection";
import "./DefendMeBuilt.css";

const PasswordManager = ({ expand }) => {
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
    <div className="security-feature-card password-manager-card">

      {/* LEFT CONTENT */}
      <div className="security-feature-content">

        <div className="security-icon-badge">
          🔑
        </div>

        <h2 className="security-feature-title">
          Password Manager
        </h2>

        <div className="security-title-line"></div>

        <p className="security-feature-description">
          Weak passwords can leave your accounts vulnerable, and reusing the
          same password across multiple accounts can make it easier for
          attackers to gain access to your personal information.
        </p>

        <p className="security-feature-description">
          DefendMePro includes a secure password management system designed to
          help you create, store, and manage strong passwords securely across
          your devices.
        </p>

        <div className="password-feature-list">

          <div className="password-feature-item">
            <span className="password-feature-icon">🔐</span>

            <div>
              <h4>Secure Password Storage</h4>
              <p>
                Keep your passwords safely stored in one protected place.
              </p>
            </div>
          </div>

          <div className="password-feature-item">
            <span className="password-feature-icon">🛡️</span>

            <div>
              <h4>Strong Password Protection</h4>
              <p>
                Create stronger passwords and reduce the risk of account
                compromise.
              </p>
            </div>
          </div>

          <div className="password-feature-item">
            <span className="password-feature-icon">⚡</span>

            <div>
              <h4>Easy Access</h4>
              <p>
                No more writing passwords down, guessing them, or repeatedly
                resetting your accounts.
              </p>
            </div>
          </div>

        </div>

        <div className="security-bottom-message">
          🔒 Your passwords stay protected, and your information stays private.
        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="security-feature-image">

        <div className="image-glow"></div>

        <img
          src="/Products/password-manager.webp"
          alt="Secure Password Manager"
          className="security-main-image"
        />

        <div className="security-image-badge">
          <span>🔐</span>
          <p>Secure Access</p>
        </div>

      </div>

    </div>
  );

  return (
    <div
      id="password-manager"
      ref={sectionRef}
      className="password-manager-section"
    >
      <ExpandableSection
        title="🔑 Password Manager"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default PasswordManager;