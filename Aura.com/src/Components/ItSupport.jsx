import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./ItSupport.css";

const ItSupport = () => {
  const navigate = useNavigate();
  const sectionRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          section.classList.add("it-support-visible");
          observer.unobserve(section);
        }
      },
      {
        threshold: 0.08,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="it-support-section">

      {/* =====================================================
          ANIMATED BACKGROUND
      ===================================================== */}

      <div className="it-grid-background"></div>

      <div className="it-orb it-orb-one"></div>
      <div className="it-orb it-orb-two"></div>
      <div className="it-orb it-orb-three"></div>


      <Container className="it-support-container">

        {/* =====================================================
            SECTION INTRO
        ===================================================== */}

        <div className="it-support-header">

          <div className="it-eyebrow">
            <span className="eyebrow-dot"></span>
            <span>PROFESSIONAL IT SUPPORT</span>
            <span className="eyebrow-line"></span>
          </div>


          <h2 className="it-section-title">
            Technology Help,
            <br />
            <span>When You Need It.</span>
          </h2>


          <p className="it-section-subtitle">
            Reliable remote and on-site IT support designed to
            keep your technology running smoothly — at home,
            with your family, or across your business.
          </p>


          <div className="it-header-pills">

            <div className="it-pill">
              <span>✓</span>
              Remote Support
            </div>

            <div className="it-pill">
              <span>✓</span>
              On-Site Support
            </div>

            <div className="it-pill">
              <span>✓</span>
              Home & Business
            </div>

          </div>

        </div>


        {/* =====================================================
            FEATURE IMAGE
        ===================================================== */}

        <div className="it-image-area">

          <div className="image-ring image-ring-one"></div>
          <div className="image-ring image-ring-two"></div>
          <div className="image-ring image-ring-three"></div>

          <div className="image-light"></div>


          <div className="it-image-card">

            {/* Browser style top bar */}
            <div className="image-topbar">

              <div className="window-dots">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="window-title">
                IT SUPPORT CENTER
              </div>

              <div className="online-status">
                <span></span>
                AVAILABLE
              </div>

            </div>


            <img
              src="/Hero/ItSupport.WebP"
              alt="Remote and On-Site IT Support"
              className="it-main-image"
            />


            <div className="image-shade"></div>


            {/* Left floating badge */}
            <div className="floating-info floating-info-left">

              <div className="floating-icon blue-icon">
                ⚡
              </div>

              <div>
                <small>QUICK HELP</small>
                <strong>Fast & Reliable</strong>
              </div>

            </div>


            {/* Right floating badge */}
            <div className="floating-info floating-info-right">

              <div className="floating-icon green-icon">
                ✓
              </div>

              <div>
                <small>SUPPORT STATUS</small>
                <strong>Here When You Need Us</strong>
              </div>

            </div>


            {/* Center bottom badge */}
            <div className="image-center-badge">

              <span>✓</span>

              <div>
                <small>YOUR TECHNOLOGY</small>
                <strong>Our Problem To Solve</strong>
              </div>

            </div>

          </div>

        </div>


        {/* =====================================================
            SERVICES TITLE
        ===================================================== */}

        <div className="services-section-heading">

          <div className="heading-line"></div>

          <div className="services-heading-content">

            <span>HOW CAN WE HELP?</span>

            <h3>
              Support For Every Situation
            </h3>

          </div>

          <div className="heading-line heading-line-right"></div>

        </div>


        {/* =====================================================
            SERVICE CARDS
        ===================================================== */}

        <Row className="service-layout">

          {/* ===================================================
              HOME SUPPORT
          =================================================== */}

          <Col
            xs={12}
            md={6}
            className="service-column"
          >

            <div className="service-card home-card">

              <div className="card-glow"></div>

              <div className="card-number">
                01
              </div>


              <div className="card-watermark">
                HOME
              </div>


              {/* Card Header */}
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


              {/* IMPORTANT: LARGE DESCRIPTION */}
              <p className="service-description">

                Get professional help with the technology
                you use every day. From setting up your devices
                to fixing frustrating problems, we'll help you
                get everything working properly.

              </p>


              {/* Divider */}
              <div className="card-divider"></div>


              {/* Services title */}
              <div className="services-list-heading">

                <span>
                  WHAT WE CAN HELP WITH
                </span>

                <div></div>

              </div>


              {/* Services */}
              <ul className="services-list">

                <li>
                  <span className="service-list-icon">📶</span>
                  <span className="service-list-text">
                    Wi-Fi & Internet Setup
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">💻</span>
                  <span className="service-list-text">
                    Laptop & Desktop Setup
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">🖨️</span>
                  <span className="service-list-text">
                    Printer Installation & Fix
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">🧩</span>
                  <span className="service-list-text">
                    Software Support
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">📺</span>
                  <span className="service-list-text">
                    Smart TV Help
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">📧</span>
                  <span className="service-list-text">
                    Email & Mobile Support
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">🛡️</span>
                  <span className="service-list-text">
                    Malware Removal
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">🐢</span>
                  <span className="service-list-text">
                    Speed & Recovery
                  </span>
                  <b>✓</b>
                </li>

              </ul>


              {/* CTA */}
              <button
                type="button"
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

          </Col>


          {/* ===================================================
              BUSINESS SUPPORT
          =================================================== */}

          <Col
            xs={12}
            md={6}
            className="service-column"
          >

            <div className="service-card business-card">

              <div className="card-glow"></div>

              <div className="card-number">
                02
              </div>


              <div className="card-watermark">
                BUSINESS
              </div>


              {/* Card Header */}
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


              {/* IMPORTANT: LARGE DESCRIPTION */}
              <p className="service-description">

                Keep your business technology reliable,
                secure, connected, and ready for work.
                From networks and devices to security and
                ongoing maintenance, we're here to help.

              </p>


              {/* Divider */}
              <div className="card-divider"></div>


              {/* Services title */}
              <div className="services-list-heading">

                <span>
                  WHAT WE CAN HELP WITH
                </span>

                <div></div>

              </div>


              {/* Services */}
              <ul className="services-list">

                <li>
                  <span className="service-list-icon">📡</span>
                  <span className="service-list-text">
                    Network & Access Point
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">🖨️</span>
                  <span className="service-list-text">
                    Shared Printer Setup
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">✉️</span>
                  <span className="service-list-text">
                    Business Email Help
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">🛡️</span>
                  <span className="service-list-text">
                    Security & Firewall
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">📱</span>
                  <span className="service-list-text">
                    Device Management
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">☁️</span>
                  <span className="service-list-text">
                    Cloud & Backup
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">🔐</span>
                  <span className="service-list-text">
                    VPN & Remote Access
                  </span>
                  <b>✓</b>
                </li>

                <li>
                  <span className="service-list-icon">🧰</span>
                  <span className="service-list-text">
                    Ongoing Maintenance
                  </span>
                  <b>✓</b>
                </li>

              </ul>


              {/* CTA */}
              <button
                type="button"
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

          </Col>

        </Row>


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
                Reliable Support
              </strong>

              <span>
                Technology help you can count on
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
                Remote + On-Site
              </strong>

              <span>
                Support wherever you need it
              </span>
            </div>

          </div>


          <div className="trust-divider"></div>


          <div className="trust-item">

            <div className="trust-icon purple">
              🛡️
            </div>

            <div>
              <strong>
                Security Focused
              </strong>

              <span>
                Keeping your technology safer
              </span>
            </div>

          </div>

        </div>


      </Container>

    </section>
  );
};

export default ItSupport;