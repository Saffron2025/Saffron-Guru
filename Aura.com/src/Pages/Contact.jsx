import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import AllSection from "../Components/AllSection";

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <div className="contact-bg-shape contact-bg-shape-one"></div>
        <div className="contact-bg-shape contact-bg-shape-two"></div>

        <Container className="contact-container">

          {/* =========================
              TOP HEADING
          ========================== */}

          <div className="contact-intro">

            <div className="contact-eyebrow">
              <span className="eyebrow-icon">🎧</span>
              WE'RE HERE TO HELP
            </div>

            <h1 className="contact-heading">
              Talk to Our{" "}
              <span>Support Team</span>
            </h1>

            <p className="contact-subtext">
              Trouble with your computer, printer, phone, tablet, email,
              software, or network? Worried about a scam or something
              suspicious online?
            </p>

            <p className="contact-highlight">
              We are here to fix your tech problems and help protect you
              online.
            </p>

            <p className="contact-availability">
              For the fastest help, call us. If you prefer email, you can
              email us. Our team is available{" "}
              <strong>seven days a week.</strong>
            </p>

          </div>


          {/* =========================
              MAIN CONTACT LAYOUT
          ========================== */}

          <Row className="contact-main-row align-items-center">

            {/* =================================
                LEFT IMAGE / SUPPORT VISUAL
            ================================== */}

            <Col lg={4} md={12} className="contact-visual-col">

              <div className="contact-visual-card">

                {/* Background Glow */}
                <div className="visual-glow visual-glow-one"></div>
                <div className="visual-glow visual-glow-two"></div>

                {/* Decorative Rings */}
                <div className="visual-ring visual-ring-one"></div>
                <div className="visual-ring visual-ring-two"></div>
                <div className="visual-ring visual-ring-three"></div>

                {/* Decorative Dots */}
                <div className="visual-dots visual-dots-one"></div>
                <div className="visual-dots visual-dots-two"></div>

                {/* Top Label */}
                <div className="visual-top-label">
                  <span className="live-dot"></span>
                  LIVE SUPPORT
                </div>

                {/* Main Image */}
                <div className="support-image-stage">

                  <div className="image-light"></div>

                  <img
                    src="/Products/contact-support.webp"
                    alt="Saffron Guru IT Support"
                    className="contact-support-image"
                  />

                </div>

                {/* Floating Tech Icons */}

                <div className="floating-tech-icon floating-icon-computer">
                  💻
                </div>

                <div className="floating-tech-icon floating-icon-shield">
                  🛡️
                </div>

                <div className="floating-tech-icon floating-icon-wifi">
                  📡
                </div>

                {/* Bottom Caption */}

                <div className="visual-caption">

                  <div className="visual-caption-icon">
                    🛡️
                  </div>

                  <div className="visual-caption-content">
                    <strong>
                      Real People.
                    </strong>

                    <span>
                      Real Help. Real Protection.
                    </span>
                  </div>

                  <div className="caption-check">
                    ✓
                  </div>

                </div>

              </div>

            </Col>


            {/* =================================
                CENTER CONTACT CARD
            ================================== */}

            <Col lg={5} md={12} className="contact-center-col">

              <div className="contact-box">

                <div className="contact-box-heading">
                  <span></span>
                  <p>CONTACT US</p>
                  <span></span>
                </div>


                {/* PHONE */}

                <a
                  href="tel:+18443134987"
                  className="contact-method contact-phone"
                >

                  <div className="contact-method-icon">
                    📞
                  </div>

                  <div className="contact-method-content">

                    <span className="method-label">
                      CALL US
                    </span>

                    <h3>
                      +1 844-313-4987
                    </h3>

                    <p>
                      Talk directly with our support team
                    </p>

                  </div>

                  <div className="method-arrow">
                    →
                  </div>

                </a>


                {/* EMAIL */}

                <a
                  href="mailto:CustomerSupport@SaffronGuru.com"
                  className="contact-method contact-email"
                >

                  <div className="contact-method-icon">
                    ✉️
                  </div>

                  <div className="contact-method-content">

                    <span className="method-label">
                      EMAIL US
                    </span>

                    <h3 className="email-address">
                      CustomerSupport@SaffronGuru.com
                    </h3>

                    <p>
                      Send us your questions or concerns
                    </p>

                  </div>

                  <div className="method-arrow">
                    →
                  </div>

                </a>


                {/* QUICK BENEFITS */}

                <div className="contact-benefits">

                  <div className="contact-benefit">
                    <div className="benefit-icon">
                      ◷
                    </div>

                    <strong>
                      7 DAYS
                    </strong>

                    <span>
                      A WEEK
                    </span>
                  </div>


                  <div className="benefit-divider"></div>


                  <div className="contact-benefit">
                    <div className="benefit-icon">
                      👥
                    </div>

                    <strong>
                      FRIENDLY
                    </strong>

                    <span>
                      SUPPORT TEAM
                    </span>
                  </div>


                  <div className="benefit-divider"></div>


                  <div className="contact-benefit">
                    <div className="benefit-icon">
                      🛡️
                    </div>

                    <strong>
                      FAST &
                    </strong>

                    <span>
                      RELIABLE HELP
                    </span>
                  </div>

                </div>

              </div>

            </Col>


            {/* =================================
                RIGHT BADGES
            ================================== */}

            <Col lg={3} md={12} className="contact-badges-col">

              <div className="contact-badge-card">

                <div className="contact-badge">

                  <img
                    src="/Products/serving-badge.webp"
                    alt="Serving Since 2016"
                    className="contact-badge-image"
                  />

                </div>


                <div className="contact-badge">

                  <img
                    src="/Products/real-human-it-support.webp"
                    alt="Real Human IT Support"
                    className="contact-badge-image"
                  />

                </div>

              </div>

            </Col>

          </Row>


          {/* =========================
              TRUST STRIP
          ========================== */}

          <div className="contact-trust-strip">

            <div className="trust-item">

              <span className="trust-icon">
                💻
              </span>

              <div>
                <strong>
                  TECH SUPPORT
                </strong>

                <span>
                  Computers & Devices
                </span>
              </div>

            </div>


            <div className="trust-item">

              <span className="trust-icon">
                🔐
              </span>

              <div>
                <strong>
                  ONLINE SAFETY
                </strong>

                <span>
                  Scam & Security Help
                </span>
              </div>

            </div>


            <div className="trust-item">

              <span className="trust-icon">
                📡
              </span>

              <div>
                <strong>
                  NETWORK SUPPORT
                </strong>

                <span>
                  Wi-Fi & Connectivity
                </span>
              </div>

            </div>


            <div className="trust-item">

              <span className="trust-icon">
                ❤️
              </span>

              <div>
                <strong>
                  REAL HUMAN HELP
                </strong>

                <span>
                  Friendly Assistance
                </span>
              </div>

            </div>

          </div>

        </Container>
      </section>

      <AllSection />
    </>
  );
};

export default Contact;