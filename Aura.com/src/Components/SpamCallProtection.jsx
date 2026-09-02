// src/Components/SpamCallProtection.jsx

import React, { useEffect, useRef } from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css';

const SpamCallProtection = ({ expand }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (expand && sectionRef.current) {
      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [expand]);

  const content = (
    <div className="spam-call-wrapper">

      {/* LEFT SIDE CONTENT */}
      <div className="spam-call-content">

        <div className="spam-call-badge">
          📞 SMART CALL SECURITY
        </div>

        <h2 className="spam-call-heading">
          Stay Protected From
          <span> Suspicious Calls</span>
        </h2>

        <p className="spam-call-description">
          Unwanted calls aren’t just annoying — they can also become a
          distraction and a serious security risk.
        </p>

        <p className="spam-call-description">
          DefendMePro helps identify and block known spam numbers, filter
          telemarketers, and reduce unwanted robocall interruptions.
        </p>

        <div className="spam-call-features">

          <div className="spam-call-feature">
            <div className="spam-call-icon">🚫</div>

            <div>
              <h4>Block Spam Numbers</h4>

              <p>
                Reduce interruptions from known suspicious and unwanted callers.
              </p>
            </div>
          </div>

          <div className="spam-call-feature">
            <div className="spam-call-icon">🔎</div>

            <div>
              <h4>Identify Suspicious Calls</h4>

              <p>
                Get better awareness when a caller shows suspicious behavior.
              </p>
            </div>
          </div>

          <div className="spam-call-feature">
            <div className="spam-call-icon">🛡️</div>

            <div>
              <h4>Stay In Control</h4>

              <p>
                Focus on important calls while reducing unwanted interruptions.
              </p>
            </div>
          </div>

        </div>

        <div className="spam-call-highlight">
          <span>📞</span>

          <p>
            Suspicious callers are flagged in real time, helping you decide
            which calls deserve your attention.
          </p>
        </div>

      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="spam-call-image-area">

        <div className="spam-call-image-glow"></div>

        <div className="spam-call-image-box">
          <img
            src="/Products/spam-call-protection.webp"
            alt="Spam Call Protection"
          />
        </div>

        <div className="spam-call-floating-card">
          <span>🛡️</span>

          <div>
            <strong>Protected</strong>
            <small>Suspicious call detected</small>
          </div>
        </div>

      </div>

    </div>
  );

  return (
    <div id="spam-call" ref={sectionRef}>
      <ExpandableSection
        title="📞 Spam Call Protection"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default SpamCallProtection;