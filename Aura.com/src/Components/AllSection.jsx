import React from "react";
import { Link } from "react-router-dom";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaPinterestP,
  FaMedium,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";

import "./AllSection.css";

// ===============================
// FOOTER NAVIGATION LINKS
// ===============================

const footerLinks = [
  {
    label: "Home",
    path: "/home",
  },
  {
    label: "About us",
    path: "/about-us",
  },
  {
    label: "Privacy Policy",
    path: "/privacy-policy",
  },
  {
    label: "Terms & Conditions",
    path: "/terms",
  },
  {
    label: "Our Story",
    path: "/our-story",
  },
  {
    label: "Return & Refund Policy",
    path: "/return-policy",
  },
  {
    label: "Why Choose Us?",
    path: "/why-us",
  },
  {
    label: "Contact Us",
    path: "/contact",
  },
  {
    label: "Live Support",
    path: "/live-support",
    live: true,
  },
];

// ===============================
// SOCIAL MEDIA LINKS
// ===============================

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
    label: "Instagram",
    url: "https://www.instagram.com/saffrongurullc/",
    icon: <FaInstagram />,
    className: "instagram",
  },

  {
    label: "YouTube",
    url: "https://www.youtube.com/@SaffronGuruLLC",
    icon: <FaYoutube />,
    className: "youtube",
  },

  {
    label: "LinkedIn",
    url: "https://www.linkedin.com/company/saffron-guru/",
    icon: <FaLinkedinIn />,
    className: "linkedin",
  },

  {
    label: "Pinterest",
    url: "https://www.pinterest.com/SaffronGuruSince2016/",
    icon: <FaPinterestP />,
    className: "pinterest",
  },
];

// ===============================
// AURA FOOTER COMPONENT
// ===============================

const AuraFooter = () => {
  return (
    <footer className="aura-footer">

      {/* =========================================
          MAIN FOOTER
      ========================================= */}

      <div className="footer-container">

        {/* -----------------------------------------
            FOOTER LINKS
        ----------------------------------------- */}

        <div className="footer-links-section">

          <h3 className="footer-title">
            Quick Links
          </h3>

          <div className="footer-links">

            {footerLinks.map((link, index) => (

              <Link
                key={index}
                to={link.path}
                className={`footer-link ${
                  link.live ? "live-support-link" : ""
                }`}
              >

                {link.label}

                {link.live && (
                  <span className="live-dot"></span>
                )}

              </Link>

            ))}

          </div>

        </div>

        {/* =========================================
            SOCIAL MEDIA SECTION
        ========================================= */}

        <div className="social-media-section">

          <h3 className="social-media-title">
            CONNECT WITH US ON SOCIAL MEDIA
          </h3>

          {/* -----------------------------------------
              SOCIAL MEDIA BUTTONS
          ----------------------------------------- */}

          <div className="footer-social">

            {socialLinks.map((social, index) => (

              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-link ${social.className}`}
                style={{
                  animationDelay: `${index * 0.15}s`,
                }}
                aria-label={social.label}
              >

                <span className="social-icon">
                  {social.icon}
                </span>

                <span className="social-label">
                  {social.label}
                </span>

              </a>

            ))}

          </div>

          {/* =========================================
              FIND US ONLINE
          ========================================= */}

          <div className="crunchbase-section">

            <p className="crunchbase-title">
              Find Us Online
            </p>

            <div className="find-online-links">

              {/* -----------------------------------------
                  CRUNCHBASE
              ----------------------------------------- */}

              <a
                href="https://www.crunchbase.com/organization/saffron-guru#overview"
                target="_blank"
                rel="noopener noreferrer"
                className="crunchbase-link"
                aria-label="Saffron Guru on Crunchbase"
              >

                <img
                  src="/Products/crunchbase-logo.webp"
                  alt="Crunchbase"
                  className="crunchbase-logo"
                />

              </a>

              {/* -----------------------------------------
                  MEDIUM
              ----------------------------------------- */}

              <a
                href="https://medium.com/@SaffronGuruLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="medium-find-link"
                aria-label="Saffron Guru on Medium"
              >

                <span className="medium-find-icon">
                  <FaMedium />
                </span>

                <span className="medium-find-text">
                  Medium
                </span>

              </a>

            </div>

          </div>

        </div>

        {/* =========================================
            COPYRIGHT
        ========================================= */}

        <div className="footer-credit">

          &copy; {new Date().getFullYear()} Saffron Guru LLC.
          All rights reserved.

        </div>

      </div>

    </footer>
  );
};

export default AuraFooter;