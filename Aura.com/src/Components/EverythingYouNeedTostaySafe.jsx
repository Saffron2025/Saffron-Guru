// src/Components/EverythingSafe.jsx
import React, { useEffect, useRef } from 'react';
import './EverythingYouNeedTostay.css'; // Same styling reused

const EverythingSafe = ({ expand }) => {
  const sectionRef = useRef();

  useEffect(() => {
    if (expand && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [expand]);

  return (
    <section
      id="identity-theft"
      className="everything-safe-banner"
      ref={sectionRef}
    >
      <div className="everything-safe-wrapper">
        {/* ✅ Left: Image */}
        <div className="everything-safe-image">
          <img src="/Hero/EveryThingStay.WebP" alt="Everything Safe" />
        </div>

        {/* ✅ Right: Text Content */}
        <div className="everything-safe-text">
          <h2 className="reality-numbers-heading">🛡️ Everything You Need to Stay Safe — In One Place</h2>

          <div className="reality-point">
            🔐 <strong>Identity Theft Protection</strong><br />
            Your identity controls everything — your money, credit, and reputation.<br />
            DefendMePro equips you with advanced monitoring tools that detect leaks, unauthorized use, or suspicious activity tied to your personal info.<br />
            If something’s off, you get an instant alert — so you can act before real damage is done.
          </div>

          <div className="reality-point">
            🔒 <strong>Zero-Day Threat Defense</strong><br />
            Some cyber threats are so new and sophisticated, your existing security won’t even see them coming.<br />
            DefendMePro adds a critical layer of Zero-Day Threat Defense — using advanced tools like AppGuard to lock down your system at the process level, stopping unknown malware, ransomware, and exploit attempts before they can launch.<br />
            No updates. No detection delays. Just airtight, proactive defense.
          </div>
        </div>
      </div>
    </section>
  );
};

export default EverythingSafe;
