import React, { useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { GiConfirmed, GiReceiveMoney, GiLockedChest } from 'react-icons/gi';
import { MdSupportAgent } from 'react-icons/md';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import CookieConsent from '../Components/CookieConsent';
import {
  Clock,
  ShieldOff,
  BarChart,
  XSquare,
  MapPin,
  Timer,
  BrainCircuit,
} from 'lucide-react';
import './Home.css';

const Hero = () => {
  // ✅ JivoSite script inject karo jab HomePage load ho
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//code.jivosite.com/widget/MXUMRaRyWc";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Cleanup: agar user dusre page par chala jaye
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>

      {/* HERO SECTION */}
      <section className="aura-hero-section d-flex align-items-center">
        <Container>
          <Row className="align-items-center">
            <Col md={6} className="aura-hero-left-col">
              <h1 className="aura-hero-title fade-in-top">
                Complete <br />
                Online Protection
              </h1>
              <strong className="aura-hero-subheadline glow-text">
                Remote + On-Site IT Support for Homes and Small Businesses
              </strong>
              <p className="aura-hero-description fade-in-bottom">
                From tech troubles to identity theft to scam protection — we secure your home & business with AI-powered tools and real human support. Works across all your devices.
              </p>
            </Col>
            <Col md={6} className="aura-hero-right-col d-flex justify-content-center">
              <div className="aura-mobile-app-container float-in">
                <div className="aura-mockup-glow-ring pulse-ring"></div>
                <img
                  src="/Hero/Header Banner Img.WebP"
                  alt="App Preview"
                  className="aura-iphone-mockup hover-tilt"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* TRUST SECTION */}
      <section className="py-4 bg-light trust-section">
        <Container className="trust-narrow-container">
          <Row className="text-center justify-content-center gx-3 gy-4">

            {/* 1 */}
            <Col xs={12} sm={6} md={4}>
              <a
                href="https://www.bbb.org/us/tx/irving/profile/computer-software/saffron-guru-0875-91317606/#sealclick"
                target="_blank"
                rel="noopener noreferrer"
                className="trust-link-block"
              >
                <div className="trust-card bbb-card">
                  <img
                    src="/Hero/cdn.WebP"
                    alt="BBB A+ Rated"
                  />
                </div>
              </a>
            </Col>

            <CookieConsent />

            {/* 2 */}
            <Col xs={12} sm={6} md={4} className="trust-item">
              <a
                href="https://www.trustedsite.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="trust-link"
              >
                <div className="trust-icon-wrapper trustedsite-icon">
                  <GiConfirmed className="trust-icon" />
                </div>
                <span className="trust-text">TrustedSite Secure</span>
              </a>
            </Col>

            {/* 3 */}
            <Col xs={12} sm={6} md={4} className="trust-item">
              <div className="trust-link">
                <div className="trust-icon-wrapper phone-icon">
                  <MdSupportAgent className="trust-icon" />
                </div>
                <span className="trust-text">US-Based Support</span>
              </div>
            </Col>

            {/* 4 */}
            <Col xs={12} sm={6} md={4} className="trust-item">
              <div className="trust-link">
                <div className="trust-icon-wrapper handshake-icon">
                  <GiReceiveMoney className="trust-icon" />
                </div>
                <Link to="/DaysMoneyBack" className="trust-text">
                  30-Day Money-Back Guarantee
                </Link>
              </div>
            </Col>

            {/* 5 */}
            <Col xs={12} sm={6} md={4} className="trust-item">
              <div className="trust-link">
                <div className="trust-icon-wrapper lock-icon">
                  <GiLockedChest className="trust-icon" />
                </div>
                <span className="trust-text">Private & Encrypted</span>
              </div>
            </Col>

            {/* 6 */}
            <Col xs={12} sm={6} md={4} className="trust-item">
              <div className="trust-link">
                <div className="trust-icon-wrapper laptop-icon">
                  <PiTelevisionSimpleBold className="trust-icon" />
                </div>
                <span className="trust-text">Works Across All Devices</span>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* PARENTAL SECTION */}
      <section className="aura-feature-section container-fluid">
        <div className="row align-items-center justify-content-center gx-5">
          {/* Image Section */}
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="aura-feature-wrapper">
              <span className="aura-feature-glow-ring"></span>
              <img
                src="/Hero/Parental Solution.WebP"
                alt="Parental Solution"
                className="hero-img"
              />
              <button className="btn btn-orange-blink position-absolute top-0 start-0 m-2">
                NEW
              </button>
            </div>
          </div>

          {/* Content Section */}
          <div className="col-lg-5 text-content">
            <h2 className="aura-heading">Protect Your Kids Online</h2>
            <p className="aura-subtext">
              Support your child’s digital well-being with an AI-powered parental control solution.
            </p>
            <ul className="aura-features">
              <li><Clock className="icon" /> Time Tracking</li>
              <li><ShieldOff className="icon" /> Block Unsafe Sites</li>
              <li><BarChart className="icon" /> Activity Reports</li>
              <li><XSquare className="icon" /> App Blocking</li>
              <li><MapPin className="icon" /> Location Alerts</li>
              <li><Timer className="icon" /> Screen Time Limits</li>
              <li><BrainCircuit className="icon" /> AI Powered</li>
            </ul>
            <Link to="/ParentSolution" className="aura-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* AURA PROMISE SECTION */}
      <section className="custom-feature-section">
        <div className="feature-intro">
          <h2 className="feature-title">Effortless IT Help. Anytime. Anywhere.</h2>
          <p className="feature-subtext">
            Get professional, fast, and secure support for your home or business — with remote access or an on-site technician whenever you need us.
          </p>
        </div>

        <div className="image-wrapper">
          <span className="aura-glow-ring"></span>
          <img
            src="/Hero/SP.WebP"
            alt="Responsive"
            className="custom-hero-img"
          />
        </div>

        <div className="feature-bottom">
          <p className="feature-note">Aura actively detects threats in real-time across your devices.</p>
          <button className="feature-button">Explore Protection Plans</button>
        </div>
      </section>

    </>
  );
};

export default Hero;
