import React from 'react';
import './DefendMeBuilt.css';

const DefendMeBuilt = () => {
  return (
    <section className="defendme-section">
      {/* Dynamic Background Glows */}
      <div className="defendme-bg-glow glow-1"></div>
      <div className="defendme-bg-glow glow-2"></div>

      <div className="defendmepro-content">  
        {/* LEFT CONTENT */}  
        <div className="defendmepro-text">  
          <div className="defendme-badge">  
            <span className="badge-icon">🛡️</span> BUILT FOR MODERN THREATS  
          </div>  

          <h2 className="defendmepro-heading">  
            That’s Why We Built <br />
            <span className="gradient-text">DefendMePro.</span>  
          </h2>  

          <p className="defendmepro-intro">  
            Real protection for the way scams and hacks actually  
            <strong> work today.</strong>  
          </p>  

          <div className="defendme-highlights">
            <span>Scam filters</span> • <span>Browser traps</span> • <span>Remote access blocks</span> • <span>Live scam alerts</span>
          </div>

          <p className="defendmepro-paragraph">  
            Defense against hacking attempts. All backed by  
            <strong> real human experts — not just AI.</strong>  
          </p>  

          <div className="defendmepro-feature-box">  
            <div className="defendme-feature-icon">🛡️</div>  
            <div>  
              <h3>Protection Designed for Real Life</h3>  
              <p>  
                Modern threats need modern protection that helps you  
                stay aware, secure, and in control.  
              </p>  
            </div>  
          </div>  

          <div className="defendme-final-message">  
            <span className="star-icon">✨</span>  
            <p>  
              Because smart security should protect  
              <strong> people, not just devices.</strong>  
            </p>  
          </div>  
        </div>  

        {/* RIGHT IMAGE */}  
        <div className="defendmepro-image">  
          <div className="defendme-image-wrapper">  
            <img  
              src="/Hero/DefenceMeBuilt.WebP"  
              alt="DefendMePro Protection Illustration"  
            />  
            <div className="defendme-image-overlay"></div>  
          </div>  

          {/* Floating Card */}  
          <div className="defendme-floating-card">  
            <div className="defendme-floating-icon">✓</div>  
            <div className="floating-text">  
              <strong>Protection Active</strong>  
              <small>Stay safer every day</small>  
            </div>  
          </div>  
        </div>  
      </div>  
    </section>  
  );
};

export default DefendMeBuilt;