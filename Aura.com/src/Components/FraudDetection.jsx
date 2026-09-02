// src/Components/FraudDetection.jsx

import React, { useEffect, useRef } from "react";
import ExpandableSection from "./ExpandableSection";
import "./DefendMeBuilt.css";

const content = (
  <section className="fraud-detection-content">

    {/* LEFT CONTENT */}
    <div className="fraud-detection-text">

      <div className="fraud-status-badge">
        <span className="fraud-status-dot"></span>
        FRAUD PROTECTION
      </div>

      <h2 className="fraud-detection-title">
        Detect Threats.
        <span> Stay Protected.</span>
      </h2>

      <p className="fraud-detection-description">
        Digital fraud moves fast — from fake transactions to suspicious
        account activity. DefendMePro helps you stay aware of unusual
        financial activity and potential security risks.
      </p>

      <div className="fraud-protection-list">

        <div className="fraud-protection-item">
          <div className="fraud-icon">💳</div>

          <div>
            <h4>Transaction Monitoring</h4>
            <p>
              Keep track of suspicious purchases and unusual financial
              activity that may require your attention.
            </p>
          </div>
        </div>


        <div className="fraud-protection-item">
          <div className="fraud-icon">🔍</div>

          <div>
            <h4>Suspicious Activity Detection</h4>
            <p>
              Identify unusual account activity and potential security
              concerns as they arise.
            </p>
          </div>
        </div>


        <div className="fraud-protection-item">
          <div className="fraud-icon">🚨</div>

          <div>
            <h4>Instant Security Alerts</h4>
            <p>
              Receive timely notifications about suspicious activity so
              you can take action quickly.
            </p>
          </div>
        </div>

      </div>

    </div>


    {/* RIGHT IMAGE */}
    <div className="fraud-detection-image-wrapper">

      {/* Background Highlight */}
      <div className="fraud-image-highlight"></div>

      {/* Decorative Border */}
      <div className="fraud-image-border"></div>

      <img
        src="/Hero/FraudDetection.webp"
        alt="Fraud Detection and Online Security"
        className="fraud-detection-image"
      />

    </div>

  </section>
);


const FraudDetection = ({ expand }) => {

  const sectionRef = useRef(null);

  useEffect(() => {

    if (expand && sectionRef.current) {

      sectionRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

    }

  }, [expand]);


  return (

    <div ref={sectionRef}>

      <ExpandableSection
        title="🚫 Fraud Detection"
        content={content}
        defaultExpand={expand}
      />

    </div>

  );

};


export default FraudDetection;