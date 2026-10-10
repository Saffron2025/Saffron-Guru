import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import { products } from '../data/productsData';
import './InternetSecurity.css';

const InternetSecurity = () => {
  const navigate = useNavigate();
  const [cartMessage, setCartMessage] = useState("");

  const handleAddToCart = (product) => {
    setCartMessage(`🛒 ${product.name} added to cart. ${product.desc}`);
  };

  return (
    <>
      <AppNavbar />
      <div className="internet-security-page">
        {/* 🔹 Hero */}
        <header className="security-hero">
          <h1 className="security-title">🛡️ Antivirus & Internet Security Store</h1>
          <p className="security-subtitle">
            Trusted antivirus and VPN software from Norton, McAfee, Webroot, ExpressVPN and Proton, installed and set up for you by Saffron Guru technicians.
          </p>
        </header>

        {/* 🔹 Internet Security Products Grid */}
        <Container className="product-grid mt-4">
          <h2 className="store-title">💻 Antivirus & VPN Software</h2>
          <Row>
            {products.filter((p) => [11, 12, 13, 14, 19, 20, 21, 15, 16, 17].includes(p.id)).map((product) => (
              <Col md={4} sm={6} xs={12} key={product.id} className="mb-4">
                <Card
                  className="product-card"
                  onClick={() => navigate(`/product/${product.id}`)}
                >
                  {/* ✅ Optimized image */}
                  <img
                    src={product.img}
                    alt={`${product.name} from Saffron Guru`}
                    className="product-img"
                    loading="eager"
                    fetchpriority="high"
                    width="400"
                    height="250"
                  />
                  <Card.Body>
                    <Card.Title>{product.name}</Card.Title>
                    <Card.Text className="product-desc">{product.desc}</Card.Text>
                    <Card.Text className="product-price">{product.price}</Card.Text>
                    <Button
                      variant="primary"
                      className="add-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleAddToCart(product);
                        navigate(`/product/${product.id}`);
                      }}
                    >
                      ➕ Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          {cartMessage && <div className="cart-message">{cartMessage}</div>}
        </Container>

        {/* 🔹 Informational Sections */}
        <section className="security-content-section fade-in-section">
          <Container>
            <Row>
              <Col md={12}>
                <h2 className="section-heading">📍 What is Internet Security?</h2>
                <p>
                  Internet security involves protecting your personal, financial, and digital information while using the internet...
                </p>

                <h2 className="section-heading">🚨 Top Internet Threats in 2025</h2>
                <ul className="security-list">
                  <li><strong>Phishing Emails:</strong> Fake emails pretending to be from banks or services.</li>
                  <li><strong>Tech Support Scams:</strong> Scammers pretending to be from Microsoft, Apple, or "Saffron Guru" support.</li>
                  <li><strong>Remote Access Fraud:</strong> Fraudsters asking to install apps like AnyDesk or TeamViewer.</li>
                  <li><strong>Fake Shopping Sites:</strong> Attractive deals that steal your credit card info.</li>
                  <li><strong>Romance Scams:</strong> Emotional manipulation to extract money from lonely users.</li>
                </ul>

                <h2 className="section-heading">💡 Signs of a Scam</h2>
                <ul className="security-list">
                  <li>Someone urgently asks for payment through gift cards or crypto.</li>
                  <li>You’re promised a prize but must pay a “processing fee.”</li>
                  <li>A tech support pop-up says your PC is infected and provides a number to call.</li>
                  <li>You’re pressured to give remote access to “fix” an issue.</li>
                </ul>

                <h2 className="section-heading">🧠 How to Stay Safe Online</h2>
                <ol className="security-list-numbered">
                  <li>Never share OTPs or passwords, even with someone who sounds official.</li>
                  <li>Use strong, unique passwords and a password manager.</li>
                  <li>Enable two-factor authentication (2FA) everywhere.</li>
                  <li>Install a reputable antivirus and keep it updated.</li>
                  <li>Don’t click on links from unknown senders — always verify first.</li>
                </ol>

                <h2 className="section-heading">🛡️ DefendMe PRO™ Can Help</h2>
                <p>
                  Our security system includes real-time scam detection, phishing protection, and U.S.-based human support...
                </p>

                <div className="protection-card">
                  <h3>🔥 Features Included:</h3>
                  <ul>
                    <li>Scam & Fraud Alerts in Real-Time</li>
                    <li>Dark Web Monitoring</li>
                    <li>Bank Account & Credit Protection</li>
                    <li>IT Support & Remote Assistance, 7 Days a Week</li>
                    <li>Phishing Blocker & Spam Call Filter</li>
                  </ul>
                </div>

                <h2 className="section-heading">📈 Why Seniors Are the #1 Target</h2>
                <p>
                  According to the FBI, adults aged 60+ reported $7.7 billion lost to online crime in 2025, more than any other age group.
                </p>

                <h2 className="section-heading">🌐 Resources for Internet Safety</h2>
                <ul className="resource-links">
                  <li><a href="/resources">📚 Scam & Fraud Prevention Guides</a></li>
                  <li><a href="/defendme-pro-security">🛠️ How DefendMe PRO™ Works</a></li>
                  <li><a href="/contact">💬 Talk to an Expert</a></li>
                </ul>
              </Col>
            </Row>
          </Container>
        </section>
      </div>
      <AllSection />
    </>
  );
};

export default InternetSecurity;
