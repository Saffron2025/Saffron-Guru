import React, { useEffect, useRef } from "react";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ItSupport.css";

const ItSupport = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("it-support-visible");
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.08,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="it-support-section"
    >

      {/* =========================
          BACKGROUND
      ========================== */}

      <div className="it-grid-background"></div>

      <div className="it-orb it-orb-one"></div>
      <div className="it-orb it-orb-two"></div>
      <div className="it-orb it-orb-three"></div>


      <Container className="it-support-container">

        {/* =========================
            SECTION HEADER
        ========================== */}

        <div className="it-support-header">

          <div className="it-eyebrow">
            <span className="eyebrow-dot"></span>

            <span>
              IT SUPPORT YOU CAN RELY ON
            </span>

            <span className="eyebrow-line"></span>
          </div>


          <h2 className="it-section-title">
            Technology Problems?
            <br />
            <span>
              We've Got You Covered.
            </span>
          </h2>


          <p className="it-section-subtitle">
            Professional IT support for your home and business —
            from everyday technology problems to complete IT solutions.
          </p>


          <div className="it-header-pills">

            <div className="it-pill">
              <span>✓</span>
              Fast Response
            </div>

            <div className="it-pill">
              <span>✓</span>
              Remote + On-Site
            </div>

            <div className="it-pill">
              <span>✓</span>
              Professional Support
            </div>

          </div>

        </div>


        {/* =====================================================
            HOME IT SUPPORT
            IMAGE LEFT + CONTENT RIGHT
        ===================================================== */}

        <div className="it-support-row home-support-row">


          {/* =========================
              HOME IMAGE
          ========================== */}

          <div className="it-image-area">

            <div className="image-light"></div>

            <div className="image-ring image-ring-one"></div>
            <div className="image-ring image-ring-two"></div>
            <div className="image-ring image-ring-three"></div>


            <div className="it-image-card">

              <div className="image-topbar">

                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="window-title">
                  HOME IT SUPPORT
                </div>

                <div className="online-status">
                  <span></span>
                  AVAILABLE
                </div>

              </div>


              <img
                src="/Hero/ItSupport.WebP"
                // alt="Home IT Support"
                className="it-main-image"
              />


              <div className="image-shade"></div>


              <div className="floating-info floating-info-left">

                <div className="floating-icon blue-icon">
                  ⚡
                </div>

                <div>
                  <small>
                    QUICK HELP
                  </small>

                  <strong>
                    Fast & Reliable
                  </strong>
                </div>

              </div>


              <div className="floating-info floating-info-right">

                <div className="floating-icon green-icon">
                  ✓
                </div>

                <div>
                  <small>
                    SUPPORT STATUS
                  </small>

                  <strong>
                    Here When You Need Us
                  </strong>
                </div>

              </div>


              <div className="image-center-badge">

                <span>
                  ✓
                </span>

                <div>
                  <small>
                    YOUR TECHNOLOGY
                  </small>

                  <strong>
                    Our Problem To Solve
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              HOME SERVICES
          ========================== */}

          <div className="service-card home-card">

            <div className="card-glow"></div>

            <div className="card-number">
              01
            </div>

            <div className="card-watermark">
              HOME
            </div>


            <div className="service-card-header">

              <div className="service-icon home-icon">
                🏠
              </div>

              <div className="service-heading-text">

                <span className="service-label">
                  FOR YOUR HOME
                </span>

                <h3>
                  Home IT Support
                </h3>

              </div>

            </div>


            <p className="service-description">
              Get professional help with the technology
              you use every day. From setting up your devices
              to fixing frustrating problems, we'll help you
              get everything working properly.
            </p>


            <div className="card-divider"></div>


            <div className="services-list-heading">

              <span>
                WHAT WE CAN HELP WITH
              </span>

              <div></div>

            </div>


            <ul className="services-list">

              <li>
                <span className="service-list-icon">
                  📶
                </span>

                <span className="service-list-text">
                  Wi-Fi & Internet Setup
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  💻
                </span>

                <span className="service-list-text">
                  Laptop & Desktop Setup
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  🖨️
                </span>

                <span className="service-list-text">
                  Printer & Scanner Setup
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  📱
                </span>

                <span className="service-list-text">
                  Smart TV & Device Setup
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  🧹
                </span>

                <span className="service-list-text">
                  Computer Cleanup & Optimization
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  🔐
                </span>

                <span className="service-list-text">
                  Virus & Malware Removal
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  💾
                </span>

                <span className="service-list-text">
                  Data Backup & Recovery
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  🛠️
                </span>

                <span className="service-list-text">
                  General Tech Troubleshooting
                </span>

                <b>✓</b>
              </li>

            </ul>


            <button
              className="service-cta home-cta"
              onClick={() => navigate("/for-your-home")}
            >

              <span>
                Explore Home Support
              </span>

              <strong>
                →
              </strong>

            </button>

          </div>

        </div>


        {/* =====================================================
            BUSINESS IT SUPPORT
            IMAGE LEFT + CONTENT RIGHT
        ===================================================== */}

        <div className="it-support-row business-support-row">


          {/* =========================
              BUSINESS IMAGE
          ========================== */}

          <div className="it-image-area business-image-area">

            <div className="image-light business-image-light"></div>

            <div className="image-ring image-ring-one"></div>
            <div className="image-ring image-ring-two"></div>
            <div className="image-ring image-ring-three"></div>


            <div className="it-image-card business-image-card">

              <div className="image-topbar">

                <div className="window-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>

                <div className="window-title">
                  BUSINESS IT SUPPORT
                </div>

                <div className="online-status">
                  <span></span>
                  AVAILABLE
                </div>

              </div>


              <img
                src="/Hero/BusinessItSupport.Webp"
                // alt="Business IT Support"
                className="it-main-image"
              />


              <div className="image-shade business-image-shade"></div>


              <div className="floating-info floating-info-left">

                <div className="floating-icon green-icon">
                  ⚡
                </div>

                <div>
                  <small>
                    BUSINESS READY
                  </small>

                  <strong>
                    Reliable IT
                  </strong>
                </div>

              </div>


              <div className="floating-info floating-info-right">

                <div className="floating-icon blue-icon">
                  ✓
                </div>

                <div>
                  <small>
                    SUPPORT STATUS
                  </small>

                  <strong>
                    Always Connected
                  </strong>
                </div>

              </div>


              <div className="image-center-badge">

                <span>
                  ✓
                </span>

                <div>
                  <small>
                    YOUR BUSINESS
                  </small>

                  <strong>
                    Technology That Works
                  </strong>
                </div>

              </div>

            </div>

          </div>


          {/* =========================
              BUSINESS SERVICES
          ========================== */}

          <div className="service-card business-card">

            <div className="card-glow"></div>

            <div className="card-number">
              02
            </div>

            <div className="card-watermark">
              BUSINESS
            </div>


            <div className="service-card-header">

              <div className="service-icon business-icon">
                🏢
              </div>

              <div className="service-heading-text">

                <span className="service-label">
                  FOR YOUR BUSINESS
                </span>

                <h3>
                  Business IT Support
                </h3>

              </div>

            </div>


            <p className="service-description">
              Keep your business technology reliable,
              secure, connected, and ready for work.
              From networks and devices to security and
              ongoing maintenance, we're here to help.
            </p>


            <div className="card-divider"></div>


            <div className="services-list-heading">

              <span>
                WHAT WE CAN HELP WITH
              </span>

              <div></div>

            </div>


            <ul className="services-list">

              <li>
                <span className="service-list-icon">
                  🌐
                </span>

                <span className="service-list-text">
                  Business Network Setup
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  📡
                </span>

                <span className="service-list-text">
                  Wi-Fi & Access Point Installation
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  💻
                </span>

                <span className="service-list-text">
                  Computer & Laptop Setup
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  🔐
                </span>

                <span className="service-list-text">
                  Cybersecurity & Antivirus
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  💾
                </span>

                <span className="service-list-text">
                  Data Backup Solutions
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  ☁️
                </span>

                <span className="service-list-text">
                  Cloud & Email Setup
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  🛠️
                </span>

                <span className="service-list-text">
                  IT Troubleshooting & Repairs
                </span>

                <b>✓</b>
              </li>


              <li>
                <span className="service-list-icon">
                  🔧
                </span>

                <span className="service-list-text">
                  Ongoing IT Maintenance & Support
                </span>

                <b>✓</b>
              </li>

            </ul>


            <button
              className="service-cta business-cta"
              onClick={() => navigate("/for-your-business")}
            >

              <span>
                Explore Business Support
              </span>

              <strong>
                →
              </strong>

            </button>

          </div>

        </div>


        {/* =====================================================
            TRUST BAR
        ===================================================== */}

        <div className="it-trust-bar">

          <div className="trust-item">

            <div className="trust-icon green">
              ✓
            </div>

            <div>

              <strong>
                Professional Support
              </strong>

              <span>
                Experienced & reliable
              </span>

            </div>

          </div>


          <div className="trust-divider"></div>


          <div className="trust-item">

            <div className="trust-icon blue">
              ⚡
            </div>

            <div>

              <strong>
                Fast Response
              </strong>

              <span>
                Quick help when needed
              </span>

            </div>

          </div>


          <div className="trust-divider"></div>


          <div className="trust-item">

            <div className="trust-icon purple">
              🔒
            </div>

            <div>

              <strong>
                Secure & Trusted
              </strong>

              <span>
                Your technology is safe
              </span>

            </div>

          </div>

        </div>

      </Container>

    </section>
  );
};

export default ItSupport;