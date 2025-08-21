// src/Components/ReturnPolicy.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './ReturnPolicy.css';
import AllSection from './AllSection';

const ReturnPolicy = () => {
  return (
    <>
      <section className="return-section">
        <Container>
          <Row>
            <Col md={12}>
              <div className="return-card">
                <h1 className="return-heading">🛡️ Return & Refund Policy</h1>
                <p className="return-intro">
                  At <strong>Saffron Guru</strong>, our promise is simple: <span className="highlight">your trust matters more than anything else.</span>  
                  That’s why we stand behind everything we do with a <strong>30-Day, No-Questions-Asked, Money-Back Guarantee</strong>.
                </p>

                <p className="return-text">
                  If for any reason you’re not satisfied with your Digital Security Package (<strong>DefendMePro™</strong>), our Parental Control Tool (<strong>NetHaven™</strong>), our Remote IT Support (<strong>SafeSupport Assist™</strong>), or any standalone third-party software (such as Microsoft, Adobe, Norton, and others) within the first 30 days, just call us toll-free at  
                  <span className="phone"> 📞+1 844-313-4987</span>. We’ll refund you — quickly and fairly.
                </p>

                <h2 className="return-subheading">✅ Covered by Our 30-Day Guarantee</h2>
                <ul className="return-list">
                  <li><strong>DefendMePro™</strong> – complete digital security against scams and cyberattacks.</li>
                  <li><strong>NetHaven™</strong> – AI-powered parental controls for safe browsing.</li>
                  <li><strong>SafeSupport Assist™</strong> – unlimited remote help for your everyday technology.</li>
                  <li><strong>Standalone Third-Party Software</strong> – Microsoft, Adobe, Norton, McAfee, and more (refundable within 30 days).</li>
                </ul>

                <h2 className="return-subheading">🚫 Non-Refundable Situations</h2>
                <ul className="return-list">
                  <li>After 30 days, all services and software become non-refundable.</li>
                  <li>On-Site Technician Visits – once our technician comes to you, the service is final.</li>
                  <li><strong>FixMyTech™</strong> (One-Time Problem Fix – $89) – non-refundable once completed.</li>
                </ul>

                <h2 className="return-subheading">📩 How to Request a Refund</h2>
                <p className="return-text">
                  To request a refund, simply call us toll-free at <span className="phone">844-313-4987</span>.  
                  Our team is available <strong>7 days a week</strong> to help you right away.
                </p>

                <h2 className="return-subheading">⏳ Refund Timelines</h2>
                <p className="return-text">
                  Refunds are typically processed within <strong>5–7 business days</strong> and applied to the original payment method.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <AllSection />
    </>
  );
};

export default ReturnPolicy;
