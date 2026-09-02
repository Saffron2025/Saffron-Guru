// src/Components/LiveSupport.jsx

import React, { useEffect, useRef } from "react";
import ExpandableSection from "./ExpandableSection";
import "./DefendMeBuilt.css";

const LiveSupport = ({ expand }) => {
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
    <div className="live-support-section">

      {/* LEFT CONTENT */}
      <div className="live-support-content">

        <div className="live-support-tag">
          HUMAN HELP • REAL SUPPORT
        </div>

        <h2 className="live-support-heading">
          🧑‍💻 Human Support
        </h2>

        <p className="live-support-description">
          Real help from real people — whenever you need it.
        </p>

        <p className="live-support-description">
          Whether you’re dealing with a suspicious email, a strange pop-up,
          or simply need guidance, our trained support team is here to help
          you every day of the week.
        </p>

        <p className="live-support-description">
          Get answers, reassurance, and step-by-step assistance — without
          waiting days or getting stuck talking to bots.
        </p>

        {/* SUPPORT FEATURES */}
        <div className="live-support-features">

          <div className="live-support-card">
            <div className="live-support-icon">📞</div>

            <div>
              <h4>Talk to a Human</h4>
              <p>
                Connect with real people who can help you understand
                and solve the problem.
              </p>
            </div>
          </div>

          <div className="live-support-card">
            <div className="live-support-icon">🕒</div>

            <div>
              <h4>Available 7 Days a Week</h4>
              <p>
                Support is available throughout the week whenever
                you need guidance.
              </p>
            </div>
          </div>

          <div className="live-support-card">
            <div className="live-support-icon">💬</div>

            <div>
              <h4>Multiple Ways to Get Help</h4>
              <p>
                Get support through phone, chat, or a guided
                remote support session.
              </p>
            </div>
          </div>

        </div>

        <div className="live-support-highlight">
          <span>🛡️</span>

          <p>
            Because in the fight against scams, time and trust matter.
          </p>
        </div>

      </div>


      {/* RIGHT IMAGE */}
      <div className="live-support-image-wrapper">

        <div className="live-support-image-glow"></div>

        <img
          src="/Products/live-support.webp"
          alt="Human customer support"
          className="live-support-image"
        />

        <div className="live-support-status">
          <span className="live-status-dot"></span>
          Support Available
        </div>

      </div>

    </div>
  );

  return (
    <div id="human-support" ref={sectionRef}>
      <ExpandableSection
        title="🧑‍💻 Live Support, 7 Days a Week"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default LiveSupport;