import React from "react";
import "./DaysMoneyBack.css";
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';

const DaysMoneyBack = () => {
  return (
    <>
      <AppNavbar />
      <section className="moneyback-section">
        <div className="moneyback-container">

          {/* Top Row: Image (left) + Heading (right) */}
          <div className="moneyback-toprow">
            <div className="moneyback-left">
              <img 
                src="/Hero/MoneyBack.WebP" 
                alt="30-Day Money Back Guarantee" 
                className="moneyback-image"
                loading="lazy"
              />
            </div>
           <div className="moneyback-right">
  <h1 className="moneyback-heading">
    <img 
      src="/Hero/shield.WebP" 
      alt="Shield Icon" 
      className="moneyback-shield" 
    />
    30-Day Money Back Guarantee
  </h1>
</div>

          </div>

          {/* Bottom Row: Full Content */}
          <div className="moneyback-bottom">
            <p>
              At Saffron Guru LLC, your peace of mind always comes first. We understand
              that trusting someone with your technology and online safety is a big decision.
              That’s why we proudly stand behind every service we provide with a simple promise:
            </p>
            <p className="moneyback-highlight">
              If you’re not completely satisfied within the first 30 days, we’ll give you a full refund — no questions asked.
            </p>

            <h2 className="moneyback-subheading">How It Works</h2>
            <ol className="moneyback-steps">
              <li><strong>Try our services, risk-free.</strong> From complete digital protection to IT support, explore everything we offer with full confidence.</li>
              <li><strong>Reach out anytime.</strong> If you feel our service isn’t the right fit, simply contact our support team within 30 days of your purchase.</li>
              <li><strong>Receive a prompt refund.</strong> No forms, no delays, no hidden conditions. We’ll process your refund quickly and courteously.</li>
            </ol>

            <h2 className="moneyback-subheading">Why We Do This</h2>
            <p>
              Because trust isn’t just a word to us — it’s the foundation of our business.
              For nearly a decade, families and small businesses have relied on us to keep them safe online.
              Our guarantee reflects the same honesty and reliability we’ve built our reputation on.
            </p>

            <h2 className="moneyback-subheading">Need Help?</h2>
            <p>
              If you’d like to request a refund or learn more about our guarantee, our team is here for you:
            </p>
            <p className="moneyback-contact">
              📞 Toll-Free: <a href="tel:8443134987">844-313-4987</a><br />
              📧 Email: <a href="mailto:customersupport@saffronguru.com">customersupport@saffronguru.com</a>
            </p>
          </div>
        </div>
      </section>
      <AllSection />
    </>
  );
};

export default DaysMoneyBack;
