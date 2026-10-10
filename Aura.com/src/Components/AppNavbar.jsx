import React, { useEffect, useState } from "react";
import {
  Navbar,
  Nav,
  NavDropdown,
  Button,
  Container,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import "./AppNavbar.css";

const AppNavbar = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [supportOpen, setSupportOpen] = useState(false);

  /* =========================================================
     RESPONSIVE MODE

     Phone:
       <= 767px -> Hamburger

     Tablet:
       768px - 1199px
       Touch/coarse pointer -> Hamburger

     Laptop/Desktop:
       Mouse/trackpad -> Full navbar
       >= 1200px -> Full navbar
  ========================================================= */

  const getCompactMode = () => {
    if (typeof window === "undefined") {
      return false;
    }

    const width = window.innerWidth;


    /* PHONE */
    if (width <= 767) {
      return true;
    }

    /* TABLET and SMALL LAPTOP / WINDOW: the full menu only fits from 1200px,
       so anything narrower gets the menu button, mouse or touch */
    if (width <= 1199) {
      return true;
    }

    /* LAPTOP / DESKTOP */
    return false;
  };

  const [isCompact, setIsCompact] = useState(
    getCompactMode
  );

  /* =========================================================
     FADE IN
  ========================================================= */

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeIn(true);
    }, 50);

    return () => clearTimeout(timer);
  }, []);

  /* =========================================================
     RESPONSIVE LISTENER
  ========================================================= */

  useEffect(() => {
    const handleResize = () => {
      const compact = getCompactMode();

      setIsCompact(compact);

      if (!compact) {
        setExpanded(false);
        setSupportOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    const pointerQuery =
      window.matchMedia
        ? window.matchMedia("(pointer: coarse)")
        : null;

    const handlePointerChange = () => {
      handleResize();
    };

    if (pointerQuery) {
      if (pointerQuery.addEventListener) {
        pointerQuery.addEventListener(
          "change",
          handlePointerChange
        );
      } else if (pointerQuery.addListener) {
        pointerQuery.addListener(
          handlePointerChange
        );
      }
    }

    return () => {
      window.removeEventListener(
        "resize",
        handleResize
      );

      if (pointerQuery) {
        if (pointerQuery.removeEventListener) {
          pointerQuery.removeEventListener(
            "change",
            handlePointerChange
          );
        } else if (pointerQuery.removeListener) {
          pointerQuery.removeListener(
            "change",
            handlePointerChange
          );
        }
      }
    };
  }, []);

  /* =========================================================
     CLOSE NAVBAR
  ========================================================= */

  const closeNavbar = () => {
    setExpanded(false);
  };

  /* =========================================================
     CLOSE SUPPORT POPUP
  ========================================================= */

  const closeSupportPopup = () => {
    setSupportOpen(false);
  };

  /* =========================================================
     HANDLE NAVIGATION
  ========================================================= */

  const handleNavigation = () => {
    closeNavbar();
    setSupportOpen(false);
  };

  /* Close the phone menu whenever the page changes */
  const location = useLocation();
  useEffect(() => {
    setExpanded(false);
    setSupportOpen(false);
  }, [location.pathname, location.search]);

  /* Close the phone menu when any real link inside it is tapped
     (also covers tapping the page you are already on) */
  const handleMenuClick = (event) => {
    const link = event.target.closest ? event.target.closest("a[href]") : null;
    if (!link) return;
    if (link.classList.contains("dropdown-toggle")) return;
    const href = link.getAttribute("href");
    if (!href || href === "#") return;
    setExpanded(false);
    setSupportOpen(false);
  };

  /* =========================================================
     ESCAPE KEY
  ========================================================= */

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setExpanded(false);
        setSupportOpen(false);
      }
    };

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  /* =========================================================
     BODY SCROLL LOCK
  ========================================================= */

  useEffect(() => {
    if (expanded && isCompact) {
      document.body.classList.add(
        "navbar-menu-open"
      );
    } else {
      document.body.classList.remove(
        "navbar-menu-open"
      );
    }

    return () => {
      document.body.classList.remove(
        "navbar-menu-open"
      );
    };
  }, [expanded, isCompact]);

  /* =========================================================
     CLOSE WHEN SWITCHING TO DESKTOP
  ========================================================= */

  useEffect(() => {
    if (!isCompact) {
      setExpanded(false);
      setSupportOpen(false);
    }
  }, [isCompact]);

  return (
    <Navbar
      expand={isCompact ? false : "xl"}
      fixed="top"
      expanded={isCompact ? expanded : true}
      onToggle={(isExpanded) => {
        if (isCompact) {
          setExpanded(isExpanded);
        }
      }}
      className={`
        aura-navbar
        ${fadeIn ? "fade-in-blur" : ""}
        ${isCompact ? "compact-navbar" : "desktop-navbar"}
      `}
    >
      <Container
        fluid
        className="aura-navbar-container"
      >

        {/* =====================================================
            LOGO
        ===================================================== */}

        <Navbar.Brand
          as={Link}
          to="/"
          className="SaffronLogo-brand"
          onClick={handleNavigation}
        >
          <div className="logo-wrapper">
            <img
              src="/Products/saffron-guru-logo-static.webp"
              alt="Saffron Guru Logo"
              className="saffronGuru-logo"
            />
          </div>
        </Navbar.Brand>


        {/* =====================================================
            MOBILE / TABLET HAMBURGER
        ===================================================== */}

        {isCompact && (
          <Navbar.Toggle
            aria-controls="basic-navbar-nav"
            aria-label="Toggle navigation"
          />
        )}


        {/* =====================================================
            NAVBAR COLLAPSE
        ===================================================== */}

        <Navbar.Collapse
          id="basic-navbar-nav"
          className="aura-navbar-collapse"
          onClick={handleMenuClick}
        >

          {/* ===================================================
              NAV LINKS
          =================================================== */}

          <Nav
            className="aura-nav-links"
            onSelect={handleNavigation}
          >

            {/* HOME */}

            <Nav.Link
              as={Link}
              to="/"
            >
              Home
            </Nav.Link>


            {/* DEFENDMEPRO */}

            <Nav.Link
              as={Link}
              to="/defendme-pro-security"
            >
              DefendMe PRO™
            </Nav.Link>


            {/* SAFE SUPPORT */}

            <NavDropdown
              title="SafeSupport Assist™"
              id="safeSupport"
              className="custom-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/it-support-home"
              >
                For Your Home
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/it-support-business"
              >
                For Your Business
              </NavDropdown.Item>
            </NavDropdown>


            {/* SOLUTIONS */}

            <NavDropdown
              title="Solutions"
              id="solutions-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/protecting-seniors"
              >
                Protection of our Society
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/parental-control"
              >
                NetHaven™
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/fix-my-tech"
              >
                FixMyTech™
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();
                  window.location.href =
                    "/defendme-pro-security?item=identity-theft";
                }}
              >
                👤 Identity Theft Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();
                  window.location.href =
                    "/defendme-pro-security?item=fraud-detection";
                }}
              >
                ⚠️ Fraud Detection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();
                  window.location.href =
                    "/defendme-pro-security?item=scam-protection";
                }}
              >
                🔔 Scam Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  const t = Date.now();

                  window.location.href =
                    `/defendme-pro-security?item=scam-alerts&t=${t}`;
                }}
              >
                🔔 Scam Alerts Hub
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  const t = Date.now();

                  window.location.href =
                    `/defendme-pro-security?item=financial-security&t=${t}`;
                }}
              >
                💰 Financial Security
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/defendme-pro-security?item=password-manager";
                }}
              >
                🔑 Password Manager
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/defendme-pro-security?item=antivirus";
                }}
              >
                🖥️ Antivirus & Device Security
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/defendme-pro-security?item=vpn";
                }}
              >
                🌐 VPN & Online Privacy
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/defendme-pro-security?item=spam-call";
                }}
              >
                📞 Spam Call Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/defendme-pro-security?item=human-support";
                }}
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
              <NavDropdown.Item
                as={Link}
                to="/microsoft-software"
              >
                Microsoft Software
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/internet-security"
              >
                Antivirus & Internet Security
              </NavDropdown.Item>
            </NavDropdown>


            {/* PRICING */}

            <Nav.Link
              as={Link}
              to="/pricing"
            >
              Pricing
            </Nav.Link>


            {/* KNOWLEDGE CENTER */}

            <NavDropdown
              title="Knowledge Center"
              id="knowledge-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/about-us"
              >
                About
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/how-it-works"
              >
                How Saffron Works
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/resources"
              >
                Resources
              </NavDropdown.Item>
            </NavDropdown>


            {/* BLOG */}

            <NavDropdown
              title="Blog"
              id="blog-main-dropdown"
              className="custom-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/online-safety-hub"
              >
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


          {/* =====================================================
              GET SUPPORT
          ===================================================== */}

          <div className="aura-support-container">

            <Button
              type="button"
              className="aura-get-support-btn"
              onClick={() =>
                setSupportOpen(!supportOpen)
              }
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


            {/* SUPPORT POPUP */}

            {supportOpen && (
              <div
                id="support-popup"
                className="support-popup"
              >

                <button
                  type="button"
                  className="support-popup-close"
                  onClick={closeSupportPopup}
                  aria-label="Close support information"
                >
                  ✕
                </button>

                <div className="support-popup-content">

                  <div className="support-phone">
                    Call Toll-Free:{" "}
                    <a href="tel:+18443134987">
                      +1 844-313-4987
                    </a>
                  </div>

                  <div className="support-availability">
                    Available 7 Days a Week
                  </div>

                  <div className="support-divider"></div>

                  <div className="support-main-text">
                    We Fix Tech. We Protect Your Digital Life.
                  </div>

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

          {/* BIG CLOSE BUTTON (phones/tablets): easy for everyone to find */}
          {isCompact && (
            <button
              type="button"
              className="menu-close-btn"
              onClick={closeNavbar}
              aria-label="Close menu"
            >
              <span aria-hidden="true">✕</span> Close menu
            </button>
          )}

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default AppNavbar;