import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import { Link } from "react-router-dom";
import AllSection from '../Components/AllSection';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Resources.css';

const Resources = () => {
  return (
    <div className="resources-page">
      <AppNavbar />

      <header className="resources-hero">
        <h1 className="resources-title">📚 Scam & Fraud Prevention Resources</h1>
        <p className="resources-subtext">
          Empowering seniors and families with the right knowledge to stay safe online, offline, and everywhere in between.
        </p>
      </header>

      <section className="resources-content fade-slide">
        <Container>
          <Row className="mb-5">
            <Col md={6}>
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title>🛡️ Ultimate Scam Protection Toolkit (PDF)</Card.Title>
                  <Card.Text>
                    A printable guide with real-world examples of phishing emails, fake calls, fraud SMS, and how to respond safely.
                  </Card.Text>
                  <Button
                    variant="primary"
                    href="/resources/Ultimate-Scam-Protection-Toolkit-2024-Edition.pdf"
                    download="Scam-Toolkit.pdf"
                  >
                    Download
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title>🎓 Scam Education for Seniors</Card.Title>
                  <Card.Text>
                    Simple video lessons and guides crafted for older users — no tech jargon, just clear steps to stay protected.
                  </Card.Text>
                  {/* ✅ Now this scrolls to videos on home */}
                  <Button as={Link} to="/#videos-section" variant="success">
                    Watch Now
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={6}>
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title>📞 How to Identify Fake Support Calls</Card.Title>
                  <Card.Text>
                    Understand how scammers pretend to be from Microsoft, Amazon, banks, etc., and what to do if you receive a suspicious call.
                  </Card.Text>
                  <Button as={Link} to="/IdentifyFakeCalls" variant="warning">
                    Read
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title>🔐 Secure Your Devices</Card.Title>
                  <Card.Text>
                    Tips for securing laptops, phones, and tablets used by seniors, including password managers and antivirus setup.
                  </Card.Text>
                  <Button
                    variant="dark"
                    href="/resources/Secure-Your-Devices.pdf"
                    download="Device-Security.pdf"
                  >
                    Download
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col md={6}>
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title>💳 Financial Scam Warning Signs</Card.Title>
                  <Card.Text>
                    Learn how fraudsters target seniors via bank, tax, and Medicare scams. Recognize red flags before it's too late.
                  </Card.Text>
                  <Button
                    variant="danger"
                    href="/resources/Financial-Scam-Warning-Signs.pdf"
                    download="Financial-Safety.pdf"
                  >
                    Download
                  </Button>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6}>
              <Card className="resource-card">
                <Card.Body>
                  <Card.Title>🧠 Fraud FAQ</Card.Title>
                  <Card.Text>
                    Common questions about fraud prevention, answered by experts. Great for families looking to protect loved ones.
                  </Card.Text>
                  <Button as={Link} to="/ReadFAQ" variant="warning">
                    Read FAQ
                  </Button>
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

export default Resources;
