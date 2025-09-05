// src/components/AuraFooter.js
import React from 'react';
import { Link } from 'react-router-dom';
import './AllSection.css';

const footerLinks = [
  { label: "Home", path: "/home" },
  { label: "About Us", path: "/about" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Return & Refund Policy", path: "/return-policy" },
  { label: "Why Choose Us?", path: "/why-us" },
  { label: "Contact Us", path: "/contact" },

  // ✅ New Live Support link
  { label: "Live Support", path: "/live-support", icon: "💬" },
];

const AuraFooter = () => {
  return (
    <footer className="aura-footer">
      <div className="container">
        <div className="footer-grid">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`footer-link ${link.label === "Live Support" ? "live-support" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.icon && <span className="blink-icon">{link.icon}</span>} {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-credit mt-4">
          &copy; {new Date().getFullYear()} Saffron Guru LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AuraFooter;
