import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaShieldAlt, FaUserTie, FaUsers, FaBolt, FaEye, FaHeadset } from "react-icons/fa";
import "./WhyChooseNetHaven.css";

const WhyChooseNetHaven = () => {
  return (
    <section className="whychoose-section">
      <Container>
        <Row>
          {/* Left Content */}
          <Col lg={5} className="whychoose-left">
            <h2 className="whychoose-title">Why Choose Saffron Guru – NetHaven™</h2>
            <p className="whychoose-subtitle">
              Trusted Protection, Powered by People Who Care
            </p>
            <p className="whychoose-intro">
              NetHaven™ isn’t just another parental control app. Backed by Saffron Guru’s nearly a decade 
              of protecting families across the U.S. and Canada from online scams, threats, and unsafe content, 
              it combines cutting-edge technology with human expertise — giving you peace of mind no app can match.
            </p>
          </Col>

          {/* Right Bullet Points */}
          <Col lg={7} className="whychoose-right">
            <ul className="whychoose-list">
              <li><FaShieldAlt /> Close to 10 Years of Experience – Safeguarding families across the U.S. and Canada.</li>
              <li><FaUserTie /> AI + Human Support – Advanced filtering backed by real experts who help you configure and maintain protection.</li>
              <li><FaUsers /> Covers the Whole Family – One subscription protects up to 5 devices across phones, tablets, and computers.</li>
              <li><FaBolt /> Proactive Safety, Not Just Restrictions – We stop threats before they happen, not after.</li>
              <li><FaEye /> Privacy-Respecting Monitoring – Focuses only on safety risks without intruding on your child’s personal life.</li>
              <li><FaHeadset /> 7-Day Live Support – Help is always just a call or click away.</li>
            </ul>

            <p className="whychoose-footer">
              With Saffron Guru – NetHaven™, you’re not just buying a product — you’re partnering with a dedicated team 
              that treats your family’s safety like our own.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default WhyChooseNetHaven;
