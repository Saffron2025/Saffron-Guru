// ITSupportSection.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ItSupport.css';

const ItSupport = () => {
  return (
    <section className="it-support-section">
      <Container className="custom-container">
        <h2 className="section-title">
          🛠️ Remote + On-Site IT Support for Home & Business
        </h2>

        {/* Centered Image */}
        <div className="image-wrapper mx-auto mb-5">
          <span className="aura-glow-ring"></span>
          <img
            src="/Hero/ItSupport.WebP"
            alt="IT Support"
            className="center-image"
          />
        </div>

        {/* Services Side-by-Side Below Image */}
        <Row className="justify-content-center service-layout">
          {/* Home Services */}
          <Col xs={12} md={5} className="service-card text-start">
            <h4 className="services-heading">🏠 Home Services</h4>
            <ul className="services-list">
              <li>📶 Wi-Fi & Internet Setup</li>
              <li>💻 Laptop/Desktop Setup</li>
              <li>🖨️ Printer Install & Fix</li>
              <li>🧩 Software Support</li>
              <li>📺 Smart TV Help</li>
              <li>📧 Email & Mobile Support</li>
              <li>🛡️ Malware Removal</li>
              <li>🐢 Speed & Recovery</li>
            </ul>
          </Col>

          {/* Business Services */}
          <Col xs={12} md={5} className="service-card text-start">
            <h4 className="services-heading">🏢 Business Services</h4>
            <ul className="services-list">
              <li>📡 Network & Access Point</li>
              <li>🖨️ Shared Printer Setup</li>
              <li>✉️ Business Email Help</li>
              <li>🛡️ Security & Firewall</li>
              <li>📱 Device Management</li>
              <li>☁️ Cloud & Backup</li>
              <li>🔐 VPN & Remote Access</li>
              <li>🧰 Ongoing Maintenance</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ItSupport;
