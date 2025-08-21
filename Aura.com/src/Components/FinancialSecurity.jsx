import React, { useEffect, useRef } from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css';

const content = (
  <div className="reality-numbers-wrapper">
    <h2 className="reality-numbers-heading">💰 Financial Security</h2>
    <div className="reality-point">
      Scammers don’t just go after your data — they go straight for your money.
      <div><br />
        People have lost their life savings, emptied their retirement accounts, and even ended up homeless after falling for the wrong message or voice.
      </div>
      <br />
      <div>
        DefendMePro helps protect your finances by detecting suspicious activity, guiding you away from fake transactions, and alerting you to payment-related scams before it’s too late.
      </div>
      <br />
      <div>
        Whether it’s a fake invoice, a refund trap, or a convincing impersonation of your bank or payment app — we’re watching for the red flags, so you don’t miss them.
      </div>
      <br />
      <div>
        We don’t just protect your devices — we protect what matters most: your financial future.
      </div>
      <br />
    </div>
  </div>
);

const FinancialSecurity = ({ expand }) => {
  const sectionRef = useRef();

  useEffect(() => {
    if (expand && sectionRef.current) {
      sectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [expand]);

  return (
    <div id="financial-security" ref={sectionRef}>
      <ExpandableSection title="💰 Financial Security" content={content} defaultExpand={expand} />
    </div>
  );
};

export default FinancialSecurity;
