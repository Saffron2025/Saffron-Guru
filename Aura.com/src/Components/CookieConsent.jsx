// src/components/CookieConsent.js
import React, { useState, useEffect } from "react";
import "./CookieConsent.css";

const CookieConsent = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p>
        🍪 We use cookies to improve your experience. You can accept or reject
        them. <a href="/privacy-policy">Learn more</a>
      </p>
      <div className="buttons">
        <button onClick={handleAccept} className="accept">
          Accept
        </button>
        <button onClick={handleReject} className="reject">
          Reject
        </button>
      </div>
    </div>
  );
};

export default CookieConsent;
