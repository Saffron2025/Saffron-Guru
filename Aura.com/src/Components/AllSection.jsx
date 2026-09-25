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

        {/* =========================================
            FOOTER LINKS
        ========================================= */}

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

          {/* =========================================
              SOCIAL MEDIA BUTTONS
          ========================================= */}

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

              {/* =====================================
                  CRUNCHBASE
              ===================================== */}

              <a
                href="https://www.crunchbase.com/organization/saffron-guru#overview"
                target="_blank"
                rel="noopener noreferrer"
                className="find-online-link crunchbase-find-link"
                aria-label="Saffron Guru on Crunchbase"
              >
                <span className="find-online-logo crunchbase-logo-box">
                  <img
                    src="/Products/crunchbase-logo.webp"
                    alt="Crunchbase"
                    className="find-online-image crunchbase-image"
                  />
                </span>

                <span className="find-online-text">
                  Crunchbase
                </span>
              </a>

              {/* =====================================
                  MEDIUM
              ===================================== */}

              <a
                href="https://medium.com/@SaffronGuruLLC"
                target="_blank"
                rel="noopener noreferrer"
                className="find-online-link medium-find-link"
                aria-label="Saffron Guru on Medium"
              >
                <span className="find-online-logo medium-find-icon">
                  <FaMedium />
                </span>

                <span className="find-online-text medium-find-text">
                  Medium
                </span>
              </a>

              {/* =====================================
                  DUN & BRADSTREET
              ===================================== */}

              <a
                href="https://www.dnb.com/business-directory/company-profiles/saffron-guru-llc.8e05994a5c3af9b2ae4331c02f1b81af"
                target="_blank"
                rel="noopener noreferrer"
                className="find-online-link dnb-find-link"
                aria-label="Saffron Guru on Dun & Bradstreet"
              >
                <span className="find-online-logo dnb-logo-box">
                  <img
                    src="/Products/dnb-logo.webp"
                    alt="Dun & Bradstreet"
                    className="find-online-image dnb-image"
                  />
                </span>

                <span className="find-online-text">
                  Dun & Bradstreet
                </span>
              </a>

              {/* =====================================
                  G2
              ===================================== */}

              <a
                href="https://www.g2.com/sellers/saffron-guru#profiles"
                target="_blank"
                rel="noopener noreferrer"
                className="find-online-link g2-find-link"
                aria-label="Saffron Guru on G2"
              >
                <span className="find-online-logo g2-logo-box">
                  <img
                    src="/Products/g2-logo.webp"
                    alt="G2"
                    className="find-online-image g2-image"
                  />
                </span>

                <span className="find-online-text">
                  G2
                </span>
              </a>

              {/* =====================================
                  BBB
              ===================================== */}

              <a
                href="https://www.bbb.org/us/tx/irving/profile/computer-software/saffron-guru-0875-91317606"
                target="_blank"
                rel="noopener noreferrer"
                className="find-online-link bbb-find-link"
                aria-label="Saffron Guru on Better Business Bureau"
              >
                <span className="find-online-logo bbb-logo-box">
                  <img
                    src="/Products/bbb-logo.webp"
                    alt="Better Business Bureau"
                    className="find-online-image bbb-image"
                  />
                </span>

                <span className="find-online-text">
                  BBB
                </span>
              </a>

              {/* =====================================
                  MANTA.COM
              ===================================== */}

              <a
                href="https://www.manta.com/c/m1hjcv6/saffron-guru-llc"
                target="_blank"
                rel="noopener noreferrer"
                className="find-online-link manta-find-link"
                aria-label="Saffron Guru on Manta"
              >
                <span className="find-online-logo manta-logo-box">
                  <img
                    src="/Products/manta-logo.webp"
                    alt="Manta.com"
                    className="find-online-image manta-image"
                  />
                </span>

                <span className="find-online-text">
                  Manta.com
                </span>
              </a>

            </div>

          </div>

        </div>

        {/* =========================================
            COPYRIGHT
        ========================================= */}

        {/* =========================================
    COPYRIGHT
========================================= */}

<div className="footer-credit">
  <span className="copyright-symbol">©</span>
  <span>2016–2026 Saffron Guru LLC. All rights reserved.</span>
</div>

      </div>

    </footer>
  );
};

export default AuraFooter;