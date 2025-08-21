// src/Components/PasswordAndDeviceSecurity.jsx
import React, { useEffect, useRef } from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css'; // shared styling

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">🔑 Password Manager</h2>

    <div className="reality-point">
      🔑 Password Manager<br />
      Weak passwords are an open door — and reusing them across accounts makes you an easy target.<br />
      DefendMePro includes a secure, encrypted password manager to help you create, store, and autofill strong passwords across all your devices.<br />
      No more writing them down, no more guessing, no more getting locked out.<br />
      You stay protected, and everything stays private — exactly how it should be.
    </div>
  </div>
);

const PasswordManager = ({ expand }) => {
  const sectionRef = useRef();

  useEffect(() => {
    if (expand && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [expand]);

  return (
    <div id="password-manager" ref={sectionRef}>
      <ExpandableSection
        title="🔑 Password Manager"
        content={content}
        defaultExpand={expand}
      />
    </div>
  );
};

export default PasswordManager;
