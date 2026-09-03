
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
        threshold: 0.12,
      }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="it-support-section"
    >
      <Container className="it-support-container">

        {/* =================================================
            SECTION HEADER
        ================================================= */}

        <div className="it-support-header">

          <span className="it-support-eyebrow">
            IT SUPPORT
          </span>

          <h2 className="section-title">
            Technology Help,
            <span> When You Need It.</span>
          </h2>

          <p className="section-subtitle">
            Reliable remote and on-site IT support for your
            home, family, or business.
          </p>

        </div>


        {/* =================================================
            IMAGE
        ================================================= */}

        <div className="it-image-area">

          <div className="image-outline image-outline-one"></div>
          <div className="image-outline image-outline-two"></div>

          <div className="image-glow"></div>

          <div className="image-container">

            <img
              src="/Hero/ItSupport.WebP"
              alt="Remote and On-Site IT Support"
              className="center-image"
            />

            <div className="image-badge">
              <span className="badge-check">✓</span>

              <div>
                <small>IT SUPPORT</small>
                <strong>Here When You Need Us</strong>
              </div>
            </div>

          </div>

        </div>


        {/* =================================================
            SERVICES
        ================================================= */}

        <Row className="service-layout">

          {/* ================= HOME ================= */}

          <Col
            xs={12}
            md={6}
            className="service-column"
          >
            <div className="service-card home-card">

              <div className="service-card-top">

                <div className="service-icon">
                  🏠
                </div>

                <div>
                  <span className="service-label">
                    FOR YOUR HOME
                  </span>

                  <h3>
                    Home IT Support
                  </h3>
                </div>

              </div>


              <p className="service-description">
                Get help setting up, fixing, and maintaining
                the technology you use every day.
              </p>


              <ul className="services-list">

                <li>
                  <span>📶</span>
                  Wi-Fi & Internet Setup
                </li>

                <li>
                  <span>💻</span>
                  Laptop & Desktop Setup
                </li>

                <li>
                  <span>🖨️</span>
                  Printer Installation & Fix
                </li>

                <li>
                  <span>🧩</span>
                  Software Support
                </li>

                <li>
                  <span>📺</span>
                  Smart TV Help
                </li>

                <li>
                  <span>📧</span>
                  Email & Mobile Support
                </li>

                <li>
                  <span>🛡️</span>
                  Malware Removal
                </li>

                <li>
                  <span>🐢</span>
                  Speed & Recovery
                </li>

              </ul>


              <button
                type="button"
                className="learn-more-btn home-btn"
                onClick={() => navigate("/for-your-home")}
              >
                <span>Explore Home Support</span>
                <strong>→</strong>
              </button>

            </div>
          </Col>


          {/* ================= BUSINESS ================= */}

          <Col
            xs={12}
            md={6}
            className="service-column"
          >
            <div className="service-card business-card">

              <div className="service-card-top">

                <div className="service-icon business-icon">
                  🏢
                </div>

                <div>
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
                secure, and ready for work.
              </p>


              <ul className="services-list">

                <li>
                  <span>📡</span>
                  Network & Access Point
                </li>

                <li>
                  <span>🖨️</span>
                  Shared Printer Setup
                </li>

                <li>
                  <span>✉️</span>
                  Business Email Help
                </li>

                <li>
                  <span>🛡️</span>
                  Security & Firewall
                </li>

                <li>
                  <span>📱</span>
                  Device Management
                </li>

                <li>
                  <span>☁️</span>
                  Cloud & Backup
                </li>

                <li>
                  <span>🔐</span>
                  VPN & Remote Access
                </li>

                <li>
                  <span>🧰</span>
                  Ongoing Maintenance
                </li>

              </ul>


              <button
                type="button"
                className="learn-more-btn business-btn"
                onClick={() => navigate("/for-your-business")}
              >
                <span>Explore Business Support</span>
                <strong>→</strong>
              </button>

            </div>
          </Col>

        </Row>


        {/* =================================================
            BOTTOM NOTE
        ================================================= */}

        <div className="support-note">

          <span className="note-icon">
            ✓
          </span>

          <p>
            From everyday technology problems to more complex
            IT needs, we're here to help.
          </p>

        </div>

      </Container>
    </section>
  );
};

export default ItSupport;
