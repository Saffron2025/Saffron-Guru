import React from 'react';
import ExpandableSection from './ExpandableSection';
import './DefendMeBuilt.css';

const WhatDefendMeProIncludes = () => {

  const content = (
    <section className="includes-section">

      {/* ================= LEFT CONTENT ================= */}
      <div className="includes-content">

        <div className="includes-badge">
          🧰 COMPLETE DIGITAL PROTECTION
        </div>

        <h2 className="includes-heading">
          Everything You Need
          <span> To Stay Protected.</span>
        </h2>

        <p className="includes-intro">
          DefendMePro brings together multiple layers of protection to help
          you stay safer from scams, suspicious activity, phishing attempts,
          remote access threats, and other digital risks.
        </p>

        <div className="includes-features">

          <div className="includes-feature">
            <div className="includes-icon">🚨</div>

            <div className="includes-feature-text">
              <h4>Scam Detection & Alerts</h4>

              <p>
                Get notified about suspicious scams, fake support pop-ups,
                refund traps, and impersonation attempts.
              </p>
            </div>
          </div>


          <div className="includes-feature">
            <div className="includes-icon">🌐</div>

            <div className="includes-feature-text">
              <h4>Browser Trap Protection</h4>

              <p>
                Help protect against phishing websites, fake login pages,
                suspicious domains, and dangerous pop-ups.
              </p>
            </div>
          </div>


          <div className="includes-feature">
            <div className="includes-icon">🖥️</div>

            <div className="includes-feature-text">
              <h4>Remote Access Protection</h4>

              <p>
                Reduce the risk of unwanted remote access tools being used
                without your knowledge or approval.
              </p>
            </div>
          </div>


          <div className="includes-feature">
            <div className="includes-icon">🔔</div>

            <div className="includes-feature-text">
              <h4>Live Scam Alerts</h4>

              <p>
                Stay informed about scam trends and suspicious activity
                through the Alerts Hub and available communication channels.
              </p>
            </div>
          </div>


          <div className="includes-feature">
            <div className="includes-icon">🧑‍💻</div>

            <div className="includes-feature-text">
              <h4>Real Human Support</h4>

              <p>
                Get guidance from trained support experts whenever you need
                help understanding a suspicious situation.
              </p>
            </div>
          </div>


          <div className="includes-feature">
            <div className="includes-icon">🔒</div>

            <div className="includes-feature-text">
              <h4>System Security Settings</h4>

              <p>
                Help strengthen important device security settings and reduce
                unnecessary exposure to common security risks.
              </p>
            </div>
          </div>


          <div className="includes-feature">
            <div className="includes-icon">🧠</div>

            <div className="includes-feature-text">
              <h4>Ongoing Scam Education</h4>

              <p>
                Stay informed with easy-to-understand scam awareness updates
                designed for everyday users.
              </p>
            </div>
          </div>


          <div className="includes-feature">
            <div className="includes-icon">📞</div>

            <div className="includes-feature-text">
              <h4>Emergency Callback Support</h4>

              <p>
                Quickly request help when you encounter something suspicious
                and need additional guidance.
              </p>
            </div>
          </div>

        </div>


        <div className="includes-bottom-card">

          <div className="includes-bottom-icon">
            🛡️
          </div>

          <div>
            <h4>One Complete Protection System</h4>

            <p>
              Multiple layers of protection, awareness tools, and human
              support — designed to help you stay safer online.
            </p>
          </div>

        </div>

      </div>


      {/* ================= RIGHT IMAGE ================= */}
      <div className="includes-image-area">

        <div className="includes-image-glow"></div>

        <div className="includes-image-wrapper">

          <img
            src="/Products/what-defendmepro-includes.webp"
            alt="DefendMePro Protection Features"
          />

          <div className="includes-image-overlay"></div>

        </div>


        {/* FLOATING CARD */}

        <div className="includes-floating-card">

          <div className="includes-floating-icon">
            🛡️
          </div>

          <div>
            <strong>Protection Active</strong>

            <small>
              Multiple security layers working together
            </small>
          </div>

        </div>


        {/* SMALL FLOATING BADGE */}

        <div className="includes-floating-badge">
          ✓ SECURE
        </div>

      </div>

    </section>
  );


  return (
    <div id="what-defendmepro-includes">

      <ExpandableSection
        title="🧰 What DefendMePro Includes"
        content={content}
      />

    </div>
  );

};

export default WhatDefendMeProIncludes;