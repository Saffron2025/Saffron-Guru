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
  { label: "Live Support", path: "/live-support", icon: "💬" },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    url: "https://x.com/Saffron_Guru",
    icon: "🐦",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/saffronguru/",
    icon: "📘",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@SaffronGuruLLC",
    icon: "▶️",
  },
];

const AuraFooter = () => {
  return (
    <footer className="aura-footer">
      <div className="container">

        {/* Footer navigation links */}
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

        {/* 🔥 Social Media Section */}
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="social-icon">{social.icon}</span>
              {social.label}
            </a>
          ))}
        </div>

        {/* Footer credit */}
        <div className="footer-credit">
          &copy; {new Date().getFullYear()} Saffron Guru LLC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default AuraFooter;
