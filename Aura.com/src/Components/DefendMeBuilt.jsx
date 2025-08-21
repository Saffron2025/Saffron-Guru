import React from 'react';
import './DefendMeBuilt.css'; // Reuse styles and add image layout

const DefendMeBuilt = () => {
  return (
    <section className="defendmepro-banner">
      <div className="defendmepro-content">
        <div className="defendmepro-text">
          <h2 className="reality-numbers-heading">🛡️ That’s Why We Built DefendMePro</h2>

          <p className="reality-paragraph">
            Real protection for the way scams and hacks actually work today. Scam filters. Browser traps. Remote access blocks. Live scam alerts.
          </p>

          <p className="reality-paragraph">
            Defense against hacking attempts. All backed by real human experts — not just AI.
          </p>

          <p className="reality-paragraph">
            Because smart security should protect people, not just devices.
          </p>
        </div>

        <div className="defendmepro-image">
          <img src="/Hero/DefenceMeBuilt.WebP" alt="DefendMePro Illustration" />
        </div>
      </div>
    </section>
  );
};

export default DefendMeBuilt;
