import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Contact.css';
import AllSection from '../Components/AllSection';

const Contact = () => {
  return (
    <>
      <section className="contact-section">
        <Container>
          <h2 className="contact-heading">Talk to Our Experts</h2>
          <p className="contact-subtext">
            Need help with scams or have questions? Reach out to our friendly team — 
            we’re just a call or an email away.
          </p>

          <Row className="justify-content-center">
            <Col lg={6} md={8} className="contact-box text-center">
              <h4>📞 Call Us</h4>
              <p className="contact-info">
                <a href="tel:+18443134987">+1 844-313-4987</a>
              </p>

              <h4>📧 Email Us</h4>
              <p className="contact-info">
                <a href="mailto:CustomerSupport@SaffronGuru.com">
                  CustomerSupport@SaffronGuru.com
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <AllSection />
    </>
  );
};

export default Contact;
