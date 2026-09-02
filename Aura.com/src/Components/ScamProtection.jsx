// src/Components/ScamProtection.jsx

import React, { useEffect, useRef } from "react";
import ExpandableSection from "./ExpandableSection";
import "./DefendMeBuilt.css";

const ScamProtection = ({ expand, scrollRef }) => {
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
    <div className="scam-protection-content">

      {/* LEFT SIDE */}
      <div className="scam-protection-text">

        <div className="scam-status-badge">
          <span className="scam-status-dot"></span>
          SCAM PROTECTION
        </div>

        <h2 className="scam-protection-title">
          Stay Ahead of
          <span> Online Scams.</span>
        </h2>

        <p className="scam-protection-description">
          Scams today don't always look like scams. They can appear as fake
          Amazon refund calls, Microsoft security pop-ups, suspicious bank
          messages, or emails designed to steal your personal information.
        </p>

        <div className="scam-protection-list">

          <div className="scam-protection-item">
            <div className="scam-icon">📱</div>

            <div>
              <h4>Spam Call Filtering</h4>

              <p>
                Silence known scam numbers and reduce suspicious calls before
                they interrupt you.
              </p>
            </div>
          </div>


          <div className="scam-protection-item">
            <div className="scam-icon">🌐</div>

            <div>
              <h4>Fake Website Protection</h4>

              <p>
                Detect suspicious websites, phishing pages and dangerous online
                traps in real time.
              </p>
            </div>
          </div>


          <div className="scam-protection-item">
            <div className="scam-icon">🛡️</div>

            <div>
              <h4>Remote Access Protection</h4>

              <p>
                Help protect your device against screen takeovers, malicious
                pop-ups and unauthorized access.
              </p>
            </div>
          </div>


          <div className="scam-protection-item">
            <div className="scam-icon">🔔</div>

            <div>
              <h4>Real-Time Scam Alerts</h4>

              <p>
                Receive important scam alerts through email, SMS and the Alerts
                Hub.
              </p>
            </div>
          </div>


          <div className="scam-protection-item">
            <div className="scam-icon">📞</div>

            <div>
              <h4>Expert Human Support</h4>

              <p>
                Get help from real experts whenever you're unsure whether
                something might be a scam.
              </p>
            </div>
          </div>


          <div className="scam-protection-item">
            <div className="scam-icon">🧠</div>

            <div>
              <h4>Weekly Scam Updates</h4>

              <p>
                Stay informed with simple scam updates designed for everyday
                users — without complicated security jargon.
              </p>
            </div>
          </div>

        </div>

      </div>


      {/* RIGHT SIDE IMAGE */}
      <div className="scam-protection-image-wrapper">

        <div className="scam-image-highlight"></div>

        <div className="scam-image-border"></div>

        <img
          src="/Products/scam-protection.webp"
          alt="Scam Protection and Online Security"
          className="scam-protection-image"
        />

      </div>

    </div>
  );

  return (
    <div
      ref={(node) => {
        sectionRef.current = node;

        if (scrollRef) {
          if (typeof scrollRef === "function") {
            scrollRef(node);
          } else {
            scrollRef.current = node;
          }
        }
      }}
    >
      <ExpandableSection
        title="🔔 Scam Protection"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default ScamProtection;