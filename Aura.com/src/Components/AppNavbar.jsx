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

  useEffect(() => {
    const timer = setTimeout(() => setFadeIn(true), 50);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Navbar
      expand="lg"
      fixed="top"
      className={`aura-navbar ${fadeIn ? "fade-in-blur" : ""}`}
    >
      {/* Normal Container hi rakho */}
      <Container>
        
        {/* LOGO */}
        <Navbar.Brand as={Link} to="/" className="SaffronLogo-brand">
          <div className="logo-wrapper">
            <img
              src="/Products/SaffronGuruLogo.gif"
              alt="Saffron Guru Logo"
              className="saffronGuru-logo"
            />
          </div>
        </Navbar.Brand>

        {/* MOBILE TOGGLE */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="justify-content-between"
        >
          {/* NAV LINKS */}
          <Nav className="mx-auto aura-nav-links">
            
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>

            <Nav.Link as={Link} to="/DefendPro">
              DefendMePro™
            </Nav.Link>

            {/* SAFE SUPPORT */}
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

            {/* SOLUTIONS */}
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
                onClick={() =>
                  (window.location.href =
                    "/DefendPro?item=identity-theft")
                }
              >
                👤 Identity Theft Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  (window.location.href =
                    "/DefendPro?item=fraud-detection")
                }
              >
                ⚠️ Fraud Detection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  (window.location.href =
                    "/DefendPro?item=scam-protection")
                }
              >
                🔔 Scam Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  const t = Date.now();
                  window.location.href = `/DefendPro?item=scam-alerts&t=${t}`;
                }}
              >
                🔔 Scam Alerts Hub
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  const t = Date.now();
                  window.location.href = `/DefendPro?item=financial-security&t=${t}`;
                }}
              >
                💰 Financial Security
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  (window.location.href =
                    "/DefendPro?item=password-manager")
                }
              >
                🔑 Password Manager
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  (window.location.href =
                    "/DefendPro?item=antivirus")
                }
              >
                🖥️ Antivirus & Device Security
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  (window.location.href =
                    "/DefendPro?item=vpn")
                }
              >
                🌐 VPN & Online Privacy
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  (window.location.href =
                    "/DefendPro?item=spam-call")
                }
              >
                📞 Spam Call Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() =>
                  (window.location.href =
                    "/DefendPro?item=human-support")
                }
              >
                👤 Human Support
              </NavDropdown.Item>
            </NavDropdown>

            {/* SOFTWARE */}
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

            <Nav.Link as={Link} to="/Pricing">
              Pricing
            </Nav.Link>

            {/* KNOWLEDGE CENTER */}
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

            {/* BLOG */}
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
              GET SUPPORT BUTTON
          ========================== */}
          <div className="aura-support-container">
            <Button
              as={Link}
              to="/support"
              className="aura-get-support-btn"
            >
              <span className="support-icon">✦</span>

              <span className="support-text">
                Get Support Now
              </span>
            </Button>
          </div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;