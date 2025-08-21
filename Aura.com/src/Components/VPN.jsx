// src/Components/VpnPrivacy.jsx
import React, { useEffect, useRef } from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // shared styling reused

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🌐 VPN & Online Privacy</h2>

    <div className="reality-point">
      Hackers. Trackers. Hidden threats.<br />
      Every time you go online, your connection is exposed.<br />
      DefendMePro shields your internet activity with encrypted browsing, IP masking, and location privacy — so your personal data stays personal, no matter where you are. Because when your connection is private, so is your identity.
    </div>
  </div>
);

const VpnPrivacy = ({ expand }) => {
  const sectionRef = useRef();

  useEffect(() => {
    if (expand && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [expand]);

  return (
    <div id="vpn" ref={sectionRef}>
      <ExpandableSection
        title="🌐 VPN & Online Privacy"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default VpnPrivacy;
