import React from "react";
import { FaFacebookF, FaGoogle } from "react-icons/fa";
import "./SocialMedia.css";

const SocialMedia = () => {
  return (
    <section className="social-media-section">

      {/* =====================================================
          HEADER
      ===================================================== */}

      <div className="social-header">

        <span className="social-eyebrow">
          CUSTOMER REVIEWS
        </span>

        <h2 className="social-title">
          What Our Customers Say About Us
        </h2>

        <p className="social-subtitle">
          Discover genuine customer experiences and feedback
          about Saffron Guru across trusted review platforms.
        </p>

      </div>


      {/* =====================================================
          REVIEW CARDS
      ===================================================== */}

      <div className="social-buttons">


        {/* =================================================
            TRUSTPILOT
        ================================================= */}

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
            →
          </span>

        </a>


        {/* =================================================
            BBB
        ================================================= */}

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
            →
          </span>

        </a>


        {/* =================================================
            SMARTCUSTOMER
        ================================================= */}

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
            →
          </span>

        </a>


        {/* =================================================
            FACEBOOK
        ================================================= */}

        <a
          href="https://www.facebook.com/saffronguru/reviews"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >

          <div className="social-logo-box social-facebook-box">

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
            →
          </span>

        </a>


        {/* =================================================
            GOOGLE
        ================================================= */}

        <a
          href="https://www.google.com/search?q=Saffron+Guru+&sca_esv=cc8838a005f044fa&sxsrf=APpeQnt_KmXG6bfuvEz5jUIrW1mPRQGd6A%3A1789813201057&ei=0WGuat-GA4LL1sQPg9LckQw&biw=1920&bih=953&ved=2ahUKEwifs8DgtfqWAxWCpZUCHQMpN8IQ4dUDegQIBhAM&uact=5&oq=Saffron+Guru+&gs_lp=Egxnd3Mtd2l6LXNlcnAiDVNhZmZyb24gR3VydSAyBBAjGCcyBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgYQABgWGB4yBhAAGBYYHjIGEAAYFhgeMgsQABiABBiKBRiGA0irDlCfC1ifC3ACeAGQAQCYAYMBoAGDAaoBAzAuMbgBA8gBAPgBAZgCA6ACjAHCAgoQABhHGNYEGLADmAMAiAYBkAYCkgcDMi4xoAfHBrIHAzAuMbgHhwHCBwUwLjIuMcgHB4AIAQ&sclient=gws-wiz-serp#lrd=0x89e831be062b3d29:0x4948b257a22780af,1,,,,"
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn"
        >

          <div className="social-logo-box social-google-box">

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
            →
          </span>

        </a>

      </div>

    </section>
  );
};

export default SocialMedia;