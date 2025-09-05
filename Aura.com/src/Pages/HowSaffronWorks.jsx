import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './HowSaffronWorks.css';

const HowSaffronWorks = () => {
  return (
    <div className="how-saffron-page">
      <AppNavbar />

      <header className="saffron-hero">
        <h1 className="saffron-title">🔍 How Saffron Works</h1>
        <p className="saffron-subtext">
          A powerful scam protection system designed for families, seniors, and everyday users. 
          Here's how Saffron shields you 24/7.
        </p>
      </header>

      <section className="saffron-process fade-slide">
        <Container>
          {/* Section 1 */}
          <Row className="mb-5">
            <Col md={6}>
              <img
                src="/Hero/ThreatMonitoring.WebP"
                alt="Real-Time Monitoring"
                className="saffron-img"
                loading="eager"   // ✅ fast load
              />
            </Col>
            <Col md={6}>
              <h2>📡 1. Real-Time Threat Monitoring</h2>
              <p>
                Saffron constantly scans for suspicious behavior across phone calls, emails, web activity, and unknown devices.
              </p>
              <ul>
                <li>🚫 Blocks scam links in emails & SMS</li>
                <li>📞 Detects fraudulent tech support or bank calls</li>
                <li>📍 Tracks remote access attempts & location anomalies</li>
              </ul>
            </Col>
          </Row>

          {/* Section 2 */}
          <Row className="mb-5 flex-md-row-reverse">
            <Col md={6}>
              <img
                src="/Hero/AlertNotification.WebP"
                alt="Instant Alerts"
                className="saffron-img"
                loading="eager"
              />
            </Col>
            <Col md={6}>
              <h2>🔔 2. Instant Alerts & Notifications</h2>
              <p>
                As soon as Saffron detects suspicious activity, it instantly notifies both the user and their trusted contact (family/guardian).
              </p>
              <p>That means grandma is never left alone to deal with a scammer.</p>
            </Col>
          </Row>

          {/* Section 3 */}
          <Row className="mb-5">
            <Col md={6}>
              <img
                src="/Hero/ExpertSuggestion.WebP"
                alt="Expert Support"
                className="saffron-img"
                loading="eager"
              />
            </Col>
            <Col md={6}>
              <h2>👨‍💻 3. Expert Human Support</h2>
              <p>
                Saffron includes access to live human experts who assist elderly users in real-time.
              </p>
              <ul>
                <li>🧠 Explain suspicious messages or popups</li>
                <li>💬 Talk directly through chat or call</li>
                <li>🔐 Remote cleanup and scam removal</li>
              </ul>
            </Col>
          </Row>

          {/* Section 4 */}
          <Row className="mb-5 flex-md-row-reverse">
            <Col md={6}>
              <img
                src="/Hero/DigitalProtection.WebP"
                alt="Layers of Protection"
                className="saffron-img"
                loading="eager"
              />
            </Col>
            <Col md={6}>
              <h2>🧱 4. Layered Digital Protection</h2>
              <p>
                Saffron doesn't rely on just one method. It stacks multiple protection layers so nothing slips through:
              </p>
              <ul>
                <li>🛡️ Firewall & device security</li>
                <li>🔐 Password vault for seniors</li>
                <li>🌐 Safe browser extension</li>
                <li>📲 Scam call blocker</li>
              </ul>
            </Col>
          </Row>

          {/* Summary */}
          <Row className="mb-5">
            <Col md={12}>
              <Card className="summary-card">
                <Card.Body>
                  <h3 className="text-center">✅ Summary: Why Families Trust Saffron</h3>
                  <ul className="summary-points">
                    <li>✔️ Senior-focused design — simple & voice assisted</li>
                    <li>✔️ Always-on protection — even when no one's watching</li>
                    <li>✔️ Backed by human experts + AI analysis</li>
                    <li>✔️ Loved by thousands of families across the U.S.</li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <AllSection />
    </div>
  );
};

export default HowSaffronWorks;
