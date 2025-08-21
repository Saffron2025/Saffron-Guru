// src/Components/Terms.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Terms.css';
import AllSection from './AllSection';

const Terms = () => {
  return (
    <>
      <section className="terms-section">
        <Container>
          <Row>
            <Col md={12}>
              <h1 className="terms-heading">Terms & Conditions</h1>

              <p className="terms-intro">
                Welcome to <strong>Saffron Guru</strong>. By using our services, you agree to the terms below.
                We’ve written everything in clear, simple language—especially for seniors and families—so your
                rights and responsibilities are easy to understand.
              </p>

              {/* 1) Eligibility & Authorization */}
              <h2 className="terms-subheading">Eligibility &amp; Authorization</h2>
              <p className="terms-text">
                By using our services, you confirm that you are at least 18 years old and legally authorized to act
                on behalf of yourself, your household, or your business. You agree to provide accurate information
                when creating accounts, purchasing services, or communicating with us.
              </p>

              {/* 2) Scope of Services */}
              <h2 className="terms-subheading">Scope of Services</h2>
              <p className="terms-text">
                Saffron Guru provides a wide range of digital protection and IT support solutions for families and
                businesses. Our offerings include but are not limited to:
              </p>
              <ul className="terms-list">
                <li>AI-Based Parental Control for safer browsing and monitoring.</li>
                <li>Scam Protection, Identity Theft Monitoring, and Fraud Detection.</li>
                <li>Zero-Day Malware Protection to guard against new and emerging threats.</li>
                <li>VPN Access &amp; Online Privacy Protection.</li>
                <li>Internet Security &amp; Antivirus Solutions.</li>
                <li>End-to-End Protection Packages tailored for businesses.</li>
                <li>Remote and On-Site IT Support for both home and business needs.</li>
                <li>
                  Third-Party Software Sales &amp; Support, including Microsoft Office, Microsoft Servers, Norton,
                  Adobe, McAfee, and others.
                </li>
              </ul>

              {/* 3) Software & Licensing */}
              <h2 className="terms-subheading">Software &amp; Licensing</h2>
              <p className="terms-text">
                Certain services rely on third-party software. All software is licensed, not sold. Your use of such
                software is subject to the license terms provided by the original manufacturer (e.g., Microsoft,
                Norton, McAfee, Adobe). Unauthorized distribution or misuse is strictly prohibited.
              </p>

              {/* 4) Payments & Billing */}
              <h2 className="terms-subheading">Payments &amp; Billing</h2>
              <p className="terms-text">
                All payments must be made using valid payment methods accepted by Saffron Guru. Prices and fees are
                displayed at the time of purchase. In case of chargebacks or unpaid invoices, we reserve the right to
                suspend or terminate services, and in certain cases, to uninstall or disable licensed software.
              </p>

              {/* 5) Refunds & Money-Back Guarantee */}
              <h2 className="terms-subheading">Refunds &amp; Money-Back Guarantee</h2>
              <p className="terms-text">
                We proudly offer a <strong>30-day money-back guarantee</strong>. If you are not satisfied with our
                services, parental control, IT support, or any third-party standalone software purchased through us
                (such as Microsoft Office, Norton, or McAfee), you may request a full refund within 30 days of
                purchase. Refunds may be subject to verification of service usage and uninstall requirements.
              </p>

              {/* 6) Data Security & Privacy */}
              <h2 className="terms-subheading">Data Security &amp; Privacy</h2>
              <p className="terms-text">
                We take your privacy seriously. Personal information is collected, stored, and used only for service
                delivery, account management, and customer support. We do not sell your information to third parties.
                For more details, please review our Privacy Policy.
              </p>

              {/* 7) Acceptable Use */}
              <h2 className="terms-subheading">Acceptable Use</h2>
              <p className="terms-text">You agree not to use our services for unlawful purposes, including but not limited to:</p>
              <ul className="terms-list">
                <li>Attempting to gain unauthorized access to systems.</li>
                <li>Distributing malware, spam, or fraudulent content.</li>
                <li>Misusing licensed software.</li>
              </ul>
              <p className="terms-text">
                Violation of these terms may result in immediate suspension or termination of services.
              </p>

              {/* 8) Limitation of Liability */}
              <h2 className="terms-subheading">Limitation of Liability</h2>
              <p className="terms-text">
                While we strive to deliver reliable services, Saffron Guru is not liable for indirect, incidental, or
                consequential damages, including data loss, business interruption, or financial losses, arising from
                the use of our services. Our liability is limited to the fees paid for the specific service in question.
              </p>

              {/* 9) Service Modifications */}
              <h2 className="terms-subheading">Service Modifications</h2>
              <p className="terms-text">
                We may update, improve, or discontinue services at any time. Terms &amp; Conditions may also be
                updated to reflect new services or legal requirements. Continued use of our services after updates
                constitutes acceptance of the revised terms.
              </p>

              {/* 10) Governing Law */}
              <h2 className="terms-subheading">Governing Law</h2>
              <p className="terms-text">
                These Terms &amp; Conditions are governed by and construed under the laws of the United States. Any
                disputes shall be resolved in the appropriate courts within the <strong>State of Delaware, USA</strong>.
              </p>

              {/* Contact */}
              <h2 className="terms-subheading">Contact Us</h2>
              <p className="terms-text">
                If you have any questions about these Terms and Conditions, or if you need support regarding our
                services, you may contact us at:
                <br />
                <br />
                <strong>Saffron Guru LLC – Corporate Office</strong>
                <br />
                6565 N. MacArthur Blvd, Suite 225
                <br />
                Irving, TX 75039
                <br />
                United States
                <br />
                <br />
                <strong>📞 Toll-Free:</strong>{' '}
                <a href="tel:+18443134987">844-313-4987</a>
                <br />
                <strong>📧 Email:</strong>{' '}
                <a href="mailto:info@saffronguru.com">info@saffronguru.com</a>
              </p>

              {/* ✅ Google Map Embed */}
              {/* ✅ Live Google Map Link instead of Embed */}
{/* <div className="map-card">
  {/* Static Map Image Thumbnail */}
  {/* <img
    src="https://maps.googleapis.com/maps/api/staticmap?center=6565+N+MacArthur+Blvd+Suite+225+Irving+TX+75039&zoom=15&size=600x280&maptype=roadmap&markers=color:red%7Clabel:S%7C6565+N+MacArthur+Blvd+Suite+225+Irving+TX+75039&key=YOUR_API_KEY"
    // alt="Saffron Guru Location Map"
    className="map-thumbnail"
  />

  {/* Embedded Interactive Map (guaranteed to work everywhere) */}
  {/* <iframe */}
    {/* // title="Saffron Guru Location" */}
    {/* src="https://www.google.com/maps?q=6565+N+MacArthur+Blvd+Suite+225+Irving+TX+75039&output=embed"
    width="100%"
    height="300"
    style={{ border: 0, borderRadius: "12px", marginTop: "1rem" }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  {/* Direct Google Maps Link */}
  {/* <p className="map-note">
    📍{" "}
    <a
      href="https://www.google.com/maps/search/?api=1&query=6565+N+MacArthur+Blvd+Suite+225+Irving+TX+75039"
      target="_blank"
      rel="noopener noreferrer"
      className="map-btn"
    >
      Open in Google Maps
    </a>
  </p>
</div> */} 


            </Col>
          </Row>
        </Container>
      </section>

      <AllSection />
    </>
  );
};

export default Terms;
