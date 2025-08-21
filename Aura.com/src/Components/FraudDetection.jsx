// src/Components/FraudDetection.jsx
import React, { useEffect, useRef } from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // Reuse existing styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🚫 Fraud Detection</h2>
    <div className="reality-point">
      Digital fraud moves fast — from fake transactions to suspicious account activity.<br />
      DefendMePro equips you with proactive fraud monitoring tools that flag unauthorized purchases, financial red flags, and unusual access attempts.<br />
      You’re notified in real time — before it turns into financial loss.
    </div>
  </div>
);

const FraudDetection = ({ expand }) => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (expand && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
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
