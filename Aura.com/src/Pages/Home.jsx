import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TenYear from '../Components/10Year';
import {
  GiConfirmed,
  GiReceiveMoney,
  GiLockedChest
} from 'react-icons/gi';

import { MdSupportAgent } from 'react-icons/md';
import { PiTelevisionSimpleBold } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import CookieConsent from '../Components/CookieConsent';
import AppNavbar from '../Components/AppNavbar';
import Footer from '../Components/Footer';

import {
  Clock,
  ShieldOff,
  BarChart,
  XSquare,
  MapPin,
  Timer,
  BrainCircuit,
  PhoneCall,
  X,
} from 'lucide-react';

import './Home.css';


const Hero = () => {

  // Call Us Toggle
  const [callOpen, setCallOpen] = useState(false);

  return (
    <>
      <AppNavbar />

      {/* =========================================
          CALL US TOGGLE
      ========================================== */}

      <div
        className={`aura-call-toggle ${
          callOpen ? 'aura-call-toggle-open' : ''
        }`}
      >

        {/* CALL BUTTON */}

        <button
          type="button"
          className="aura-call-toggle-button"
          onClick={() => setCallOpen(!callOpen)}
          aria-label={
            callOpen
              ? 'Close support contact'
              : 'Open support contact'
          }
          aria-expanded={callOpen}
        >

          {callOpen ? (
            <X
              size={25}
              strokeWidth={2.5}
            />
          ) : (
            <PhoneCall
              size={25}
              strokeWidth={2.5}
            />
          )}

          <span className="aura-call-toggle-label">
            {callOpen ? 'Close' : 'Call Us'}
          </span>

        </button>


        {/* SUPPORT PANEL */}

        <div className="aura-call-panel">

          <div className="aura-call-panel-icon">

            <PhoneCall
              size={25}
              strokeWidth={2.5}
            />

          </div>


          <div className="aura-call-panel-content">

            <span className="aura-call-panel-title">
              Need Help?
            </span>

            <span className="aura-call-panel-subtitle">
              Our support team is here for you
            </span>

            <a
              href="tel:+18443134987"
              className="aura-call-panel-number"
            >
              +1 844-313-4987
            </a>

          </div>

        </div>

      </div>


      {/* =========================================
          HERO SECTION
      ========================================== */}

      <section className="aura-hero-section d-flex align-items-center">

  {/* Decorative Wings */}
  <div className="wing wing-left"></div>
  <div className="wing wing-right"></div>

  <Container>
    <Row className="align-items-center">

      {/* ================= LEFT CONTENT ================= */}
      <Col
        md={6}
        className="aura-hero-left-col"
      >

        {/* SERVING IMAGE */}
        <div className="hero-serving-image-wrapper">
          <img
            src="/Products/serving-badge.webp"
            alt="Serving Customers"
            className="hero-serving-image"
          />
        </div>


        {/* MAIN HEADER */}
        <h1 className="aura-hero-title">
          Expert IT Support <br />
          & Complete Online Protection
        </h1>


        {/* SUB HEADER */}
        <h2 className="aura-hero-subheadline">
          Remote & On-Site Tech Assistance for Homes and Small Businesses
        </h2>


        {/* 7 DAYS IMAGE */}
        <div className="hero-days-image-wrapper">
          <img
            src="/Products/available-7-days.webp"
            alt="Available 7 Days a Week"
            className="hero-days-image"
          />
        </div>


        {/* DESCRIPTION */}
        <p className="aura-hero-description">
          From everyday tech troubles to evolving digital threats, our
          advanced security solutions and real human support keep your
          technology running smoothly and help you stay safe online in an
          increasingly complex digital world, with protection against
          identity theft, online scams, and hacking attempts.
        </p>


        {/* THIRD IMAGE */}
        <div className="hero-third-image-wrapper">
          <img
            src="/Products/online-support.webp"
            alt="Online IT Support"
            className="hero-third-image"
          />
        </div>

      </Col>


      {/* ================= RIGHT IMAGE ================= */}
      <Col
        md={6}
        className="aura-hero-right-col d-flex justify-content-center"
      >

        <div className="aura-mockup-glow-ring pulse-ring"></div>

        <img
          src="/Hero/Header Banner Img.avif"
          alt="Complete Online Protection"
          className="aura-iphone-mockup hover-tilt"
        />

      </Col>

    </Row>
  </Container>

</section>
<TenYear/>
      {/* =========================================
          TRUST SECTION
      ========================================== */}

      <section className="py-4 bg-light trust-section">

        <Container className="trust-narrow-container">

          <Row className="text-center justify-content-center gx-3 gy-4">


            {/* 1 - BBB */}

            <Col
              xs={12}
              sm={6}
              md={4}
            >

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


            {/* 2 - TrustedSite */}

            <Col
              xs={12}
              sm={6}
              md={4}
              className="trust-item"
            >

              <a
                href="https://www.trustedsite.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="trust-link"
              >

                <div className="trust-icon-wrapper trustedsite-icon">

                  <GiConfirmed className="trust-icon" />

                </div>

                <span className="trust-text">
                  TrustedSite Secure
                </span>

              </a>

            </Col>


            {/* 3 - Support */}

            <Col
              xs={12}
              sm={6}
              md={4}
              className="trust-item"
            >

              <div className="trust-link">

                <div className="trust-icon-wrapper phone-icon">

                  <MdSupportAgent className="trust-icon" />

                </div>

                <span className="trust-text">
                  US-Based Support
                </span>

              </div>

            </Col>


            {/* 4 - Money Back */}

            <Col
              xs={12}
              sm={6}
              md={4}
              className="trust-item"
            >

              <div className="trust-link">

                <div className="trust-icon-wrapper handshake-icon">

                  <GiReceiveMoney className="trust-icon" />

                </div>

                <Link
                  to="/DaysMoneyBack"
                  className="trust-text"
                >
                  30-Day Money-Back Guarantee
                </Link>

              </div>

            </Col>


            {/* 5 - Security */}

            <Col
              xs={12}
              sm={6}
              md={4}
              className="trust-item"
            >

              <div className="trust-link">

                <div className="trust-icon-wrapper lock-icon">

                  <GiLockedChest className="trust-icon" />

                </div>

                <span className="trust-text">
                  Private & Encrypted
                </span>

              </div>

            </Col>


            {/* 6 - Devices */}

            <Col
              xs={12}
              sm={6}
              md={4}
              className="trust-item"
            >

              <div className="trust-link">

                <div className="trust-icon-wrapper laptop-icon">

                  <PiTelevisionSimpleBold className="trust-icon" />

                </div>

                <span className="trust-text">
                  Works Across All Devices
                </span>

              </div>

            </Col>

          </Row>

        </Container>

      </section>


      {/* =========================================
          PARENTAL SECTION
      ========================================== */}

      <section className="aura-feature-section container-fluid">

        <div className="row align-items-center justify-content-center gx-5">

          {/* IMAGE */}

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


          {/* CONTENT */}

          <div className="col-lg-5 text-content">

            <h2 className="aura-heading">
              Protect Your Kids Online
            </h2>

            <p className="aura-subtext">
              Support your child’s digital well-being with an AI-powered
              parental control solution.
            </p>

            <ul className="aura-features">

              <li>
                <Clock className="icon" />
                Time Tracking
              </li>

              <li>
                <ShieldOff className="icon" />
                Block Unsafe Sites
              </li>

              <li>
                <BarChart className="icon" />
                Activity Reports
              </li>

              <li>
                <XSquare className="icon" />
                App Blocking
              </li>

              <li>
                <MapPin className="icon" />
                Location Alerts
              </li>

              <li>
                <Timer className="icon" />
                Screen Time Limits
              </li>

              <li>
                <BrainCircuit className="icon" />
                AI Powered
              </li>

            </ul>

            <Link
              to="/Parent-Solution"
              className="aura-btn"
            >
              Learn More
            </Link>

          </div>

        </div>

      </section>


      {/* =========================================
          ONLINE PROTECTION SECTION
      ========================================== */}

      <section className="online-protection-section">

        <div className="online-protection-content">

          <div className="protection-badge">

            <span className="protection-dot"></span>

            ONLINE PROTECTION

          </div>


          <h2 className="online-protection-title">

            Effortless IT Help.

            <span>
              Anytime. Anywhere.
            </span>

          </h2>


          <p className="online-protection-text">
            Get professional, fast, and secure support for your home or business
            with remote access or an on-site technician whenever you need us.
          </p>

        </div>


        {/* IMAGE */}

        <div className="online-protection-image-wrapper">

          <div className="image-corner-decoration decoration-one"></div>

          <div className="image-corner-decoration decoration-two"></div>

          <img
            src="/Hero/SP.WebP"
            alt="Online Protection"
            className="online-protection-image"
          />

        </div>

      </section>


      <Footer />

    </>
  );
};


export default Hero;