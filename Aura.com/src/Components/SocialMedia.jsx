import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <section className="social-media-section">

      {/* HEADER */}
      <div className="social-header">
        <span className="social-eyebrow">CUSTOMER REVIEWS</span>

        <h2 className="social-title">
          See What Customers Say About Us
        </h2>

        <p className="social-subtitle">
          Explore customer reviews and feedback about Saffron Guru
          across trusted platforms.
        </p>
      </div>


      {/* REVIEW CARDS */}
      <div className="social-buttons">

        {/* TRUSTPILOT */}
        <a
          href="https://www.trustpilot.com/review/saffronguru.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <div className="social-logo-box">
            <img
              src="/Products/trustpilot.webp"
              alt="Trustpilot"
              className="review-platform-logo"
            />
          </div>

          <div className="social-btn-content">
            <span className="social-platform">
              Trustpilot
            </span>

            <span className="social-action">
              View customer reviews
            </span>
          </div>

          <span className="social-arrow">
            ↗
          </span>
        </a>


        {/* BBB */}
        <a
          href="https://www.bbb.org/us/tx/irving/profile/computer-software/saffron-guru-0875-91317606"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <div className="social-logo-box">
            <img
              src="/Products/bbb.webp"
              alt="Better Business Bureau"
              className="review-platform-logo"
            />
          </div>

          <div className="social-btn-content">
            <span className="social-platform">
              Better Business Bureau
            </span>

            <span className="social-action">
              View company profile
            </span>
          </div>

          <span className="social-arrow">
            ↗
          </span>
        </a>


        {/* SMARTCUSTOMER */}
        <a
          href="https://www.smartcustomer.com/reviews/saffronguru.com"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <div className="social-logo-box">
            <img
              src="/Products/smartcustomer.webp"
              alt="SmartCustomer"
              className="review-platform-logo"
            />
          </div>

          <div className="social-btn-content">
            <span className="social-platform">
              SmartCustomer
            </span>

            <span className="social-action">
              Read customer reviews
            </span>
          </div>

          <span className="social-arrow">
            ↗
          </span>
        </a>


        {/* FACEBOOK */}
        <a
          href="https://www.facebook.com/saffronguru/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <div className="social-logo-box">
            <FaFacebookF className="facebook-icon" />
          </div>

          <div className="social-btn-content">
            <span className="social-platform">
              Facebook
            </span>

            <span className="social-action">
              See customer reviews
            </span>
          </div>

          <span className="social-arrow">
            ↗
          </span>
        </a>


        {/* GOOGLE */}
        <a
          href="https://www.google.com/search?q=Saffron+Guru+Reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >
          <div className="social-logo-box">
            <FaGoogle className="google-icon" />
          </div>

          <div className="social-btn-content">
            <span className="social-platform">
              Google
            </span>

            <span className="social-action">
              Read customer reviews
            </span>
          </div>

          <span className="social-arrow">
            ↗
          </span>
        </a>

      </div>

    </section>
  );
};

export default SocialMedia;