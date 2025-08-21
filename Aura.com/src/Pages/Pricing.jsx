// src/Pages/Pricing.js
import React, { useState } from "react";
import { Container, Row, Col, Card, Button, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";

import "./Pricing.css";

const Pricing = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      {/* 🔝 Navbar */}
      <AppNavbar />

      {/* 💰 Pricing Section */}
      <section className="pricing-section">
        <Container>
          <h1 className="pricing-title">🛡 Pricing & Plans</h1>
          <p className="pricing-subtext">
            Protect your home, family, and business with the right plan.
          </p>

          <Row className="g-4 mt-4">
            {/* 🏠 DefendMePro Home */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>🛡️ DefendMePro™ Home</h3>
                  <p>
                    Protect your home and family with complete digital security
                    and scam defence.
                  </p>
                  <h4>$19/month + tax (billed yearly)</h4>
                  <p>Covers up to 3 devices</p>
                  <ul>
                    <li>Antivirus & Device Security</li>
                    <li>VPN & Online Privacy</li>
                    <li>Scam Protection</li>
                    <li>7-Day Live Support</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link to="/DefendPro" className="btn btn-outline-primary">
                      Learn More
                    </Link>
                    <Button variant="primary" onClick={handleShow}>
                      Get Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 🏢 DefendMePro Business */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>🛡️ DefendMePro™ Business</h3>
                  <p>
                    Protect your business with end-to-end security, scam
                    defence, and advanced threat protection.
                  </p>
                  <h4>$49.99/month + tax (billed yearly)</h4>
                  <p>Covers up to 10 devices</p>
                  <ul>
                    <li>Everything in Home</li>
                    <li>Zero-Day Malware Threat Protection</li>
                    <li>End-to-End Business Protection</li>
                    <li>Advanced Scam & Phishing Defence</li>
                    <li>Priority Business Support</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link to="/DefendPro" className="btn btn-outline-primary">
                      Learn More
                    </Link>
                    <Button variant="primary" onClick={handleShow}>
                      Get Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 👨‍👩‍👧 NetHaven */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>👨‍👩‍👧 NetHaven™ AI Powered</h3>
                  <p>Peace of Mind for Parents, Safety for Kids.</p>
                  <h4>$7.99/month + tax (billed yearly)</h4>
                  <ul>
                    <li>Time Tracking</li>
                    <li>Block Unsafe Sites & Apps</li>
                    <li>Smart Activity Reports</li>
                    <li>Location & Geofence Alerts</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link
                      to="/ParentSolution"
                      className="btn btn-outline-primary"
                    >
                      Learn More
                    </Link>
                    <Button variant="primary" onClick={handleShow}>
                      Get Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 🖥️ SaffeSupport Home */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>🖥️ SaffeSupport Assist™ Home</h3>
                  <p>Your personal tech team, just a call away</p>
                  <h4>$24.99/month + tax (billed yearly)</h4>
                  <p>Covers up to 3 devices</p>
                  <ul>
                    <li>Unlimited Remote IT Support (PCs, printers, Wi-Fi)</li>
                    <li>Fast Troubleshooting & Setup Help</li>
                    <li>Device Tune-ups & Performance Boost</li>
                    <li>Secure Email & Account Assistance</li>
                    <li>7-Day Live Expert Support</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link
                      to="/ForYourHome"
                      className="btn btn-outline-primary"
                    >
                      Learn More
                    </Link>
                    <Button variant="primary" onClick={handleShow}>
                      Get Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 🖥️ SaffeSupport Business */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>🖥️ SaffeSupport Assist™ Business</h3>
                  <p>Expert IT support to keep your business running</p>
                  <h4>$59.99/month + tax (billed yearly)</h4>
                  <p>Covers up to 10 devices</p>
                  <ul>
                    <li>
                      Unlimited Remote Tech Support (computers, printers,
                      networks)
                    </li>
                    <li>Priority Troubleshooting & Setup Help</li>
                    <li>Device Tune-ups & Security Optimization</li>
                    <li>Business Email & Account Assistance</li>
                    <li>On-Site Technician Visit (if required)</li>
                    <li>Dedicated Support Line (7 days a week)</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link
                      to="/ForYourBusiness"
                      className="btn btn-outline-primary"
                    >
                      Learn More
                    </Link>
                    <Button variant="primary" onClick={handleShow}>
                      Get Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 🛡️💻 Combo Home */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>
                    🛡️💻 DefendMePro™ + SaffeSupport Assist™ Home Combo
                  </h3>
                  <p>
                    Complete protection + your unlimited personal IT support
                    team.
                  </p>
                  <h4>$34.99/month + tax (billed yearly)</h4>
                  <p>👉 Save 30% compared to buying separately</p>
                  <p>Covers up to 3 devices</p>
                  <ul>
                    <li>
                      DefendMePro™ Home (Antivirus, VPN, Scam Protection)
                    </li>
                    <li>
                      SaffeSupport Assist™ Home (Remote IT Support + Email Help)
                    </li>
                    <li>
                      7-Day Live Support for Security & Tech Issues
                    </li>
                    <li>Peace of Mind for Your Entire Household</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Button variant="primary" onClick={handleShow}>
                      Get Home Combo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 🏠 FixMyTech Home */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>🏠 FixMyTech™ Home</h3>
                  <p>
                    One problem fix (one device) — for seniors & families who
                    want it fixed today.
                  </p>
                  <h4>$89.99 + taxes</h4>
                  <ul>
                    <li>Printer, email & computer troubleshooting</li>
                    <li>Virus/malware removal & browser cleanup</li>
                    <li>Network / Wi-Fi setup & fixes</li>
                    <li>
                      Reset Operating System (Windows/macOS) when needed
                    </li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link
                      to="/fixmytech"
                      className="btn btn-outline-primary"
                    >
                      Learn More
                    </Link>
                    <Button variant="primary" onClick={handleShow}>
                      Get Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 🏢 FixMyTech Business */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>🏢 FixMyTech™ Business</h3>
                  <p>
                    One business problem fix — for small offices & pros who
                    can’t afford downtime.
                  </p>
                  <h4>$149.99 + taxes</h4>
                  <ul>
                    <li>
                      Server & network troubleshooting (file shares, permissions)
                    </li>
                    <li>Shared printers & multi-printer setup</li>
                    <li>Business email/Outlook & account recovery</li>
                    <li>
                      Reset Operating System (Windows/macOS) when needed
                    </li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Link
                      to="/fixmytech"
                      className="btn btn-outline-primary"
                    >
                      Learn More
                    </Link>
                    <Button variant="primary" onClick={handleShow}>
                      Get Now
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            {/* 🛡️💻 Combo Business */}
            <Col md={6} lg={4}>
              <Card className="pricing-card h-100">
                <Card.Body>
                  <h3>
                    🛡️💻 DefendMePro™ + SaffeSupport Assist™ Business Combo
                  </h3>
                  <p>End-to-end business protection with expert IT support</p>
                  <h4>$89.99/month + tax (billed yearly)</h4>
                  <p>👉 Save 35% compared to buying separately</p>
                  <p>Covers up to 10 devices</p>
                  <ul>
                    <li>
                      DefendMePro™ Business (Zero-Day Threat & End-to-End
                      Security)
                    </li>
                    <li>
                      SaffeSupport Assist™ Business (Remote + On-Site IT Support
                      if required)
                    </li>
                    <li>Priority Business Support Line</li>
                    <li>Keeps Your Team Safe, Secure & Productive</li>
                  </ul>
                  <div className="d-flex gap-2">
                    <Button variant="primary" onClick={handleShow}>
                      Get Business Combo
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          {/* Guarantee Line */}
          <div className="guarantee-text mt-4">
            💳 30-Day Money-Back Guarantee — No Risk, Cancel Anytime.
          </div>
        </Container>
      </section>

      {/* 📌 Modal Popup */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>🤝 Your safety matters to us.</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Before we activate any subscription, we connect personally with
            every customer to make sure you get exactly what you need.
          </p>
          <h5>
            👉 Call Toll-Free Now:{" "}
            <a href="tel:+18443134987">+1 844-313-4987</a>
          </h5>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close ❌
          </Button>
        </Modal.Footer>
      </Modal>

      {/* 🔚 Footer Section */}
      <AllSection />
    </>
  );
};

export default Pricing;
