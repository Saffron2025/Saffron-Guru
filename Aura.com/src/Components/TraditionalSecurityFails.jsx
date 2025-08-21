// src/Components/TraditionalSecurityFails.js
import React from 'react';
import './TraditionalSecurityFails.css';

const TraditionalSecurityFails = () => {
  return (
    <section className="traditional-fails-section">
      <div className="traditional-fails-banner">
        <div className="fails-content-wrapper">
          
          {/* ✅ Move Image to Left */}
          <div className="right-image">
            <img
              src="/Hero/TraditionalFails.WebP"
              alt="Security Gap Illustration"
              className="fails-image-right"
            />
          </div>

          {/* ✅ Content on the Right */}
          <div className="left-content">
            <h2 className="fails-heading">❌ Why Traditional Security Falls Short</h2>

            <div className="fails-point">
              🛑 It doesn’t block full-screen pop-up scams
              <p>Fake alerts that freeze your screen and display urgent phone numbers still slip through.</p>
            </div>
            <div className="fails-point">
              🛑 It doesn’t detect refund scams or impersonation calls
              <p>Scammers pretending to be from Amazon, Microsoft, or your bank go completely unnoticed.</p>
            </div>
            <div className="fails-point">
              🛑 It doesn’t stop remote access traps
              <p>Tools like AnyDesk and TeamViewer are often misused — traditional security rarely flags them.</p>
            </div>
            <div className="fails-point">
              🛑 It doesn’t warn you about fake websites
              <p>Scammers copy the exact look of PayPal, your bank, or antivirus companies.</p>
            </div>
            <div className="fails-point">
              🛑 It doesn’t keep up with evolving scam tactics
              <p>Most protection relies on signature updates — but scam methods change every week.</p>
            </div>
            <div className="fails-point">
              🛑 It doesn’t protect decision-making — only files
              <p>It can't warn you when you're being manipulated by a voice that sounds trustworthy.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TraditionalSecurityFails;
