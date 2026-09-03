import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./AppNavbar.css";

const AppNavbar = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);

    return () => clearTimeout(timer);
  }, []);

  // Close mobile/tablet navbar
  const closeNavbar = () => {
    setExpanded(false);
  };

  // Close support popup
  const closeSupportPopup = () => {
    setSupportOpen(false);
  };

  return (
    <Navbar
      expand="xxl"
      fixed="top"
      expanded={expanded}
      onToggle={(isExpanded) => setExpanded(isExpanded)}
      className={`aura-navbar ${fadeIn ? "fade-in-blur" : ""}`}
    >
      <Container fluid>

        {/* ==========================
            LOGO
        ========================== */}
        <Navbar.Brand
          as={Link}
          to="/"
          className="SaffronLogo-brand"
          onClick={closeNavbar}
        >
          <div className="logo-wrapper">
            <img
              src="/Products/SaffronGuruLogo.gif"
              alt="Saffron Guru Logo"
              className="saffronGuru-logo"
            />
          </div>
        </Navbar.Brand>

        {/* ==========================
            MOBILE TOGGLE
        ========================== */}
      <Navbar.Toggle
  aria-controls="basic-navbar-nav"
/>

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          {/* ==========================
              NAV LINKS
          ========================== */}
          <Nav
            className="mx-auto aura-nav-links"
            onSelect={closeNavbar}
          >

            {/* HOME */}
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            {/* DEFENDMEPRO */}
            <Nav.Link as={Link} to="/DefendPro">
              DefendMePro™
            </Nav.Link>

            {/* ==========================
                SAFE SUPPORT
            ========================== */}
            <NavDropdown
              title="SafeSupport Assist™"
              id="safeSupport"
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/for-your-home">
                For Your Home
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/for-your-business">
                For Your Business
              </NavDropdown.Item>
            </NavDropdown>

            {/* ==========================
                SOLUTIONS
            ========================== */}
            <NavDropdown
              title="Solutions"
              id="solutions-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/solution">
                Protection of our Society
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/Parent-Solution">
                NetHaven™
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/FixMyTech">
                FixMyTech™
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();
                  window.location.href =
                    "/DefendPro?item=identity-theft";
                }}
              >
                👤 Identity Theft Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();
                  window.location.href =
                    "/DefendPro?item=fraud-detection";
                }}
              >
                ⚠️ Fraud Detection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();
                  window.location.href =
                    "/DefendPro?item=scam-protection";
                }}
              >
                🔔 Scam Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();

                  const t = Date.now();

                  window.location.href =
                    `/DefendPro?item=scam-alerts&t=${t}`;
                }}
              >
                🔔 Scam Alerts Hub
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();

                  const t = Date.now();

                  window.location.href =
                    `/DefendPro?item=financial-security&t=${t}`;
                }}
              >
                💰 Financial Security
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();

                  window.location.href =
                    "/DefendPro?item=password-manager";
                }}
              >
                🔑 Password Manager
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();

                  window.location.href =
                    "/DefendPro?item=antivirus";
                }}
              >
                🖥️ Antivirus & Device Security
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();

                  window.location.href =
                    "/DefendPro?item=vpn";
                }}
              >
                🌐 VPN & Online Privacy
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();

                  window.location.href =
                    "/DefendPro?item=spam-call";
                }}
              >
                📞 Spam Call Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  closeNavbar();

                  window.location.href =
                    "/DefendPro?item=human-support";
                }}
              >
                👤 Human Support
              </NavDropdown.Item>
            </NavDropdown>

            {/* ==========================
                SOFTWARE
            ========================== */}
            <NavDropdown
              title="Software"
              id="software-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/microsoft-store">
                Microsoft Store
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/internet-security">
                Internet Security
              </NavDropdown.Item>
            </NavDropdown>

            {/* PRICING */}
            <Nav.Link as={Link} to="/Pricing">
              Pricing
            </Nav.Link>

            {/* ==========================
                KNOWLEDGE CENTER
            ========================== */}
            <NavDropdown
              title="Knowledge Center"
              id="knowledge-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/about-us">
                About
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/HowSaffronWorks">
                How Saffron Works
              </NavDropdown.Item>

              <NavDropdown.Item as={Link} to="/resources">
                Resources
              </NavDropdown.Item>
            </NavDropdown>

            {/* ==========================
                BLOG
            ========================== */}
            <NavDropdown
              title="Blog"
              id="blog-main-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item as={Link} to="/article">
                🧠 Online Safety Hub
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/online-scam-guide"
              >
                🛡️ Online Scam Guide
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/romance-scam"
              >
                ❤️ Romance Scams
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/tech-support-scam"
              >
                🖥️ Tech Support Scams
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/banking-otp-fraud"
              >
                💳 Banking & OTP Fraud
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/spam-calls"
              >
                📞 Spam Calls & Robocalls
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/phishing-emails"
              >
                📧 Phishing Emails
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/identity-theft"
              >
                👤 Identity Theft
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/online-shopping"
              >
                🌐 Online Shopping Safety
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/investment-scam"
              >
                💰 Investment & Lottery Scams
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/password-safety"
              >
                🔑 Password Safety
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/blog/ai-voice-fraud"
              >
                🤖 AI Voice Fraud
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>

          {/* ==========================
              GET SUPPORT
          ========================== */}
          <div className="aura-support-container">

            <Button
              type="button"
              className="aura-get-support-btn"
              onClick={() => setSupportOpen(!supportOpen)}
              aria-expanded={supportOpen}
              aria-controls="support-popup"
            >
              <span className="support-icon">
                ✦
              </span>

              <span className="support-text">
                Get Support Now
              </span>
            </Button>

            {/* ==========================
                SUPPORT POPUP
            ========================== */}
            {supportOpen && (
              <div
                id="support-popup"
                className="support-popup"
              >

                {/* CLOSE */}
                <button
                  type="button"
                  className="support-popup-close"
                  onClick={closeSupportPopup}
                  aria-label="Close support information"
                >
                  ✕
                </button>

                {/* ICON */}
                {/* <div className="support-popup-icon">
                  ✦
                </div> */}

                <div className="support-popup-content">

                  {/* PHONE */}
                  <div className="support-phone">
                    Call Toll-Free:{" "}
                    <a href="tel:8443134987">
                      844-313-4987
                    </a>
                  </div>

                  {/* AVAILABILITY */}
                  <div className="support-availability">
                    Available 7 Days a Week
                  </div>

                  {/* DIVIDER */}
                  <div className="support-divider"></div>

                  {/* MAIN MESSAGE */}
                  <div className="support-main-text">
                    We Fix Tech. We Protect Your Digital Life.
                  </div>

                  {/* PREMIUM TAGLINE */}
                  <div className="support-tagline-wrapper">

                    <span className="tagline-line"></span>

                    <span className="support-tagline">
                      Miles Above the Rest
                    </span>

                    <span className="tagline-line"></span>

                  </div>

                </div>
              </div>
            )}

          </div>

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default AppNavbar;