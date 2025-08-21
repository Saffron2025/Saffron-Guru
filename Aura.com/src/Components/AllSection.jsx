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
              className="footer-link"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="footer-credit mt-4">
          &copy; {new Date().getFullYear()} Aura Protection. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AuraFooter;
