import React, { useEffect, useState } from 'react';
import { Navbar, Nav, NavDropdown, Button, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import './AppNavbar.css';

const AppNavbar = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 50);

    const token = localStorage.getItem('authToken');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    localStorage.removeItem('saffronUser');
    setIsLoggedIn(false);
    navigate('/login');
  };

  return (
    <Navbar expand="lg"   fixed="top"  className={`aura-navbar ${fadeIn ? 'fade-in-blur' : ''}`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className="SaffronLogo-brand">
<div className="logo-wrapper">
    <img src="/Hero/SaffronGuruLogo.Webp" alt="Aura Logo" className="saffronGuru-logo" />
  </div>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-between">

          <Nav className="mx-auto aura-nav-links">
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/DefendPro">DefendMePro™</Nav.Link>

            <NavDropdown title="SafeSupport Assist™" id="safeSupport" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/ForYourHome">For Your Home</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ForYourBusiness">For Your Business</NavDropdown.Item>
            </NavDropdown>

            {/* Solutions Dropdown */}
            <NavDropdown title="Solutions" id="solutions-dropdown" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/solution">Protection of our Society</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/ParentSolution">NetHaven™</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/FixMyTech">FixMyTech™</NavDropdown.Item>

              <NavDropdown.Item onClick={() => window.location.href = "/DefendPro?item=identity-theft"}>
                👤 Identity Theft Protection
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.href = "/DefendPro?item=fraud-detection"}>
                ⚠️ Fraud Detection
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.href = "/DefendPro?item=scam-protection"}>
                🔔 Scam Protection
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                const t = Date.now();
                window.location.href = `/DefendPro?item=scam-alerts&t=${t}`;
              }}>
                🔔 Scam Alerts Hub
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => {
                const t = Date.now();
                window.location.href = `/DefendPro?item=financial-security&t=${t}`;
              }}>
                💰 Financial Security
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.href = "/DefendPro?item=password-manager"}>
                🔑 Password Manager
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.href = "/DefendPro?item=antivirus"}>
                🖥️ Antivirus & Device Security
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.href = "/DefendPro?item=vpn"}>
                🌐 VPN & Online Privacy
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.href = "/DefendPro?item=spam-call"}>
                📞 Spam Call Protection
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => window.location.href = "/DefendPro?item=human-support"}>
                👤 Human support
              </NavDropdown.Item>
            </NavDropdown>

            {/* Software Dropdown */}
            <NavDropdown title="Software" id="software-dropdown" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/microsoft-store">Microsoft Store</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/internet-security">Internet Security</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link as={Link} to="/Pricing">Pricing</Nav.Link>

            {/* Knowledge Center */}
            <NavDropdown title="Knowledge Center" id="knowledge-dropdown" className="custom-dropdown">
              <NavDropdown.Item as={Link} to="/about">About</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/HowSaffronWorks">How Saffron Works</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/resources">Resources</NavDropdown.Item>
            </NavDropdown>
          </Nav>

          {/* Auth Buttons */}
          <Nav className="aura-auth-buttons">
            {isLoggedIn ? (
              <>
                <Button as={Link} to="/AccountIn" variant="link" className="aura-sign-in">Your Account</Button>
                <Button variant="danger" className="aura-start-trial-btn" onClick={handleLogout}>Logout</Button>
              </>
            ) : (
              <>
                <Button as={Link} to="/login" variant="outline-primary" className="aura-sign-in">Sign In</Button>
                <Button as={Link} to="/signup" className="aura-start-trial-btn">Sign Up</Button>
              </>
            )}
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
