import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./AllSection.css";

const footerLinks = [
  { label: "Home", path: "/home" },
  { label: "About us", path: "/about-us" },
  { label: "Privacy Policy", path: "/privacy-policy" },
  { label: "Terms & Conditions", path: "/terms" },
  { label: "Return & Refund Policy", path: "/return-policy" },
  { label: "Why Choose Us?", path: "/why-us" },
  { label: "Contact Us", path: "/contact" },
  { label: "Live Support", path: "/live-support", live: true },
];

const socialLinks = [
  {
    label: "X (Twitter)",
    url: "https://x.com/Saffron_Guru",
    icon: <FaXTwitter />,
    className: "x-twitter",
  },
  {
    label: "Facebook",
    url: "https://www.facebook.com/saffronguru/",
    icon: <FaFacebookF />,
    className: "facebook",
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/@SaffronGuruLLC",
    icon: <FaYoutube />,
    className: "youtube",
  },
];

const AuraFooter = () => {
  return (
    <footer className="aura-footer">
      <div className="container">

        {/* Footer Links */}
        <div className="footer-grid">
          {footerLinks.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className={`footer-link ${link.live ? "live-support" : ""}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {link.live && <span className="blink-icon">💬</span>}
              {link.label}
            </Link>
          ))}
        </div>

        {/* Social Media */}
        <div className="footer-social">
          {socialLinks.map((social, index) => (
            <a
              key={index}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`social-link ${social.className}`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <span className="social-icon">{social.icon}</span>
              {social.label}
            </a>
          ))}
        </div>

        {/* Footer Credit */}
        <div className="footer-credit">
          &copy; {new Date().getFullYear()} Saffron Guru LLC. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default AuraFooter;
