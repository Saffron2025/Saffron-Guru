// src/components/LegalDisclaimer.js

import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
// Make sure this path is correct relative to where AllSection.css is
// If AllSection.css is in src/, and this component is in src/components/,
// then it should be '../AllSection.css'
import './Disclaimer.css'; // Adjust path as needed

const LegalDisclaimer = () => {
  // This header/footer section is reused
  

  return (
    <div className="legal-page">
      {/* Top Navigation/Header for Legal Page */}

      {/* Main Content - Legal Disclaimers */}
      <main className="legal-content py-5">
        <Container>
          <Row>
            {/* Left Column of Legal Text */}
            <Col md={6} className="pe-md-4">
              <p className="legal-text">
                The Identity Theft Insurance is underwritten and administered by American Bankers Insurance
                Company of Florida, an Assurant Company. Please refer to the actual policies for terms, conditions and
                exclusions of coverage. Coverage may not be available in all jurisdictions. The Personal Cyber
                Insurance is underwritten and administered by Houston Casualty Company, a Tokio Marine Company.
                Please refer to the actual policy for terms, conditions, and exclusions of coverage. Coverages may not be
                available in all jurisdictions. Review the <a href="#" className="legal-link">Summary of Benefits</a>.
              </p>
              <p className="legal-text">
                Free Ink/offer can only be redeemed once per customer. Full access to plan features requires an
                Identity verification and credit eligibility.
              </p>
              <p className="legal-text">
                The score you receive with Aura is provided for educational purposes to help you understand
                your credit. It is calculated using the information provided in your Equifax credit file. Lenders use many
                different credit scoring systems, and the score you receive with Aura is not the same score used by
                lenders to evaluate your credit.
              </p>
              <p className="legal-text">
                60-day money back guarantee is only available for our annual plans purchased through our websites
                (aura.com/amazon) or via our Customer Support team. You may cancel your membership online and
                request a refund within 60 days of your initial purchase date of an eligible Aura membership purchase
                by calling us at <a href="tel:18335522123" className="legal-link">1.833.552.2123</a>.
              </p>
              <p className="legal-text">
                If you signed up for Aura through a free trial, then your membership purchase date will be the date you
                signed up for your free trial, and you will have 60 days from the date you signed up for your free trial to
                cancel and request a refund. If you switched to a new annual plan within 60 days of your initial Aura
                annual subscription, you will qualify for the Money Back Guarantee based upon your initial annual
                plan purchase date.
              </p>
              <p className="legal-text">
                As compared to the competition. Results based on a 2023 mystery shopper consumer study
                conducted by ath Power Consulting with Aura compensated by Aura to conduct the
                study.
              </p>
            </Col>

            {/* Right Column of Legal Text */}
            <Col md={6} className="ps-md-4">
              <p className="legal-text">
                Child members on the family plan will only have access to online account monitoring and social
                security number monitoring features. All adult members get the listed benefits.
              </p>
              <p className="legal-text">
                Ranked #1 by Forbes, CNET, and CNBC. They may be compensated as a marketing affiliate of Aura,
                but their ratings are all their own.
              </p>
              <p className="legal-text">
                <a href="#" className="legal-link">aura.com/reviews</a>
              </p>
              <p className="legal-text">
                <a href="#" className="legal-link">comparewithpompe.org/score_normal</a>
              </p>
              <p className="legal-text">
                <a href="#" className="legal-link">kasperexperts.com/parents-worried</a>
              </p>
              <p className="legal-text">
                Javelin 2023 Identity Fraud Study
              </p>
              <p className="legal-text">
                Not all features use AI capabilities.
              </p>
              <p className="legal-text">
                No one can prevent all identity theft or monitor all transactions effectively. Further, any testimonials on
                this website reflect experiences that are personal to those particular users, and may not necessarily be
                representative of all users of our products and/or services. We do not claim, and you should not
                assume, that all users will have the same experiences. Your individual results may vary.
              </p>
              <p className="legal-text">
                AURA SERVICES ARE NOT INTENDED TO DIAGNOSE, TREAT, CURE, OR PREVENT ANY DISEASE OR
                MEDICAL CONDITION. THE SERVICES ARE FOR INFORMATIONAL PURPOSES ONLY AND CANNOT
                REPLACE THE SERVICES OF PHYSICIANS OR MEDICAL PROFESSIONALS.
              </p>
              <p className="legal-text">
                Aura service does not monitor for all content or your child’s behavior in real time. Alerts and for
                monitoring may be 100% accurate or timely.
              </p>
            </Col>
          </Row>
        </Container>
      </main>

      {/* Bottom Navigation/Footer for Legal Page (reusing the same component) */}
    </div>
  );
};

export default LegalDisclaimer;