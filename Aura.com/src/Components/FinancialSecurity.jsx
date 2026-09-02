// src/Components/FinancialSecurity.jsx

import React, { useEffect, useRef } from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css';

const content = (
  <section className="financial-security-section">

    {/* LEFT CONTENT */}
    <div className="financial-security-content">

      <div className="financial-badge">
        💰 FINANCIAL PROTECTION
      </div>

      <h2 className="financial-security-heading">
        Your Money.
        <span> Your Future.</span>
        <br />
        Protected.
      </h2>

      <p className="financial-security-intro">
        Scammers don't just go after your data — they go straight for
        <strong> your money.</strong>
      </p>

      <p className="financial-security-text">
        People have lost their life savings, emptied their retirement
        accounts, and faced serious financial consequences after trusting
        the wrong message, call, or voice.
      </p>

      <div className="financial-highlight-card">

        <div className="financial-highlight-icon">
          🛡️
        </div>

        <div>
          <h4>Smart Financial Protection</h4>

          <p>
            DefendMePro helps identify suspicious activity, detect
            payment-related scams, and guide you away from dangerous
            transactions before it's too late.
          </p>
        </div>

      </div>

      <div className="financial-protection-list">

        {/* Item 1 */}
        <div className="financial-list-item">

          <span className="financial-list-icon">
            ⚠️
          </span>

          <div>
            <strong>
              Suspicious Activity Detection
            </strong>

            <p>
              Identify unusual activity and potential financial threats
              before they cause damage.
            </p>
          </div>

        </div>


        {/* Item 2 */}
        <div className="financial-list-item">

          <span className="financial-list-icon">
            💳
          </span>

          <div>
            <strong>
              Payment Scam Awareness
            </strong>

            <p>
              Stay protected from fake invoices, refund traps, and
              suspicious payment requests.
            </p>
          </div>

        </div>


        {/* Item 3 */}
        <div className="financial-list-item">

          <span className="financial-list-icon">
            🏦
          </span>

          <div>
            <strong>
              Impersonation Protection
            </strong>

            <p>
              Recognize convincing messages pretending to be your bank
              or payment provider.
            </p>
          </div>

        </div>

      </div>


      <p className="financial-security-ending">
        We don't just protect your devices — we help protect what matters
        most:
        <strong> your financial future.</strong>
      </p>

    </div>


    {/* RIGHT IMAGE */}
    <div className="financial-security-image">

      {/* Glow */}
      <div className="financial-image-glow"></div>


      {/* Image Wrapper */}
      <div className="financial-image-wrapper">

        <img
          src="/Products/financial-security.webp"
          alt="Financial Security Protection"
        />

        <div className="financial-image-overlay"></div>

        <div className="financial-security-label">
          <span>🛡️</span>
          Financial Protection
        </div>

      </div>

    </div>

  </section>
);


const FinancialSecurity = ({ expand }) => {

  const sectionRef = useRef(null);

  useEffect(() => {

    if (expand && sectionRef.current) {

      sectionRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });

    }

  }, [expand]);


  return (

    <div
      id="financial-security"
      ref={sectionRef}
    >

      <ExpandableSection
        title="💰 Financial Security"
        content={content}
        defaultExpand={expand}
      />

    </div>

  );

};


export default FinancialSecurity;