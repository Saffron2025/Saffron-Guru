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

    const coarsePointer =
      window.matchMedia &&
      window.matchMedia("(pointer: coarse)").matches;

    const touchDevice =
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0;

    /* PHONE */
    if (width <= 767) {
      return true;
    }

    /* TABLET */
    if (
      width <= 1199 &&
      (coarsePointer || touchDevice)
    ) {
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
              src="/Products/SaffronGuruLogo.gif"
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
              to="/home"
            >
              Home
            </Nav.Link>


            {/* DEFENDMEPRO */}

            <Nav.Link
              as={Link}
              to="/DefendPro"
            >
              DefendMePro™
            </Nav.Link>


            {/* SAFE SUPPORT */}

            <NavDropdown
              title="SafeSupport Assist™"
              id="safeSupport"
              className="custom-dropdown"
            >
              <NavDropdown.Item
                as={Link}
                to="/for-your-home"
              >
                For Your Home
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/for-your-business"
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
                to="/solution"
              >
                Protection of our Society
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/Parent-Solution"
              >
                NetHaven™
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/FixMyTech"
              >
                FixMyTech™
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();
                  window.location.href =
                    "/DefendPro?item=identity-theft";
                }}
              >
                👤 Identity Theft Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();
                  window.location.href =
                    "/DefendPro?item=fraud-detection";
                }}
              >
                ⚠️ Fraud Detection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();
                  window.location.href =
                    "/DefendPro?item=scam-protection";
                }}
              >
                🔔 Scam Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  const t = Date.now();

                  window.location.href =
                    `/DefendPro?item=scam-alerts&t=${t}`;
                }}
              >
                🔔 Scam Alerts Hub
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  const t = Date.now();

                  window.location.href =
                    `/DefendPro?item=financial-security&t=${t}`;
                }}
              >
                💰 Financial Security
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/DefendPro?item=password-manager";
                }}
              >
                🔑 Password Manager
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/DefendPro?item=antivirus";
                }}
              >
                🖥️ Antivirus & Device Security
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/DefendPro?item=vpn";
                }}
              >
                🌐 VPN & Online Privacy
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/DefendPro?item=spam-call";
                }}
              >
                📞 Spam Call Protection
              </NavDropdown.Item>

              <NavDropdown.Item
                onClick={() => {
                  handleNavigation();

                  window.location.href =
                    "/DefendPro?item=human-support";
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
                to="/microsoft-store"
              >
                Microsoft Store
              </NavDropdown.Item>

              <NavDropdown.Item
                as={Link}
                to="/internet-security"
              >
                Internet Security
              </NavDropdown.Item>
            </NavDropdown>


            {/* PRICING */}

            <Nav.Link
              as={Link}
              to="/Pricing"
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
                to="/HowSaffronWorks"
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
                to="/article"
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
                    <a href="tel:8443134987">
                      844-313-4987
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

        </Navbar.Collapse>

      </Container>
    </Navbar>
  );
};

export default AppNavbar;