// src/Components/TraditionalSecurityFails.jsx

import React from 'react';
import './TraditionalSecurityFails.css';

const TraditionalSecurityFails = () => {
  const failures = [
    {
      icon: '🖥️',
      title: 'Pop-Up Scam Protection',
      text: 'Fake alerts that freeze your screen and display urgent phone numbers can still slip through traditional protection.',
    },
    {
      icon: '📞',
      title: 'Impersonation & Refund Scams',
      text: 'Scammers pretending to be from Amazon, Microsoft, or your bank may go completely unnoticed.',
    },
    {
      icon: '💻',
      title: 'Remote Access Traps',
      text: 'Remote access tools can be misused by scammers, while traditional security may not recognize the danger.',
    },
    {
      icon: '🌐',
      title: 'Fake Website Detection',
      text: 'Scammers can copy the appearance of banks, payment platforms, and security companies to steal information.',
    },
    {
      icon: '🔄',
      title: 'Evolving Scam Tactics',
      text: 'Traditional protection often depends on updates, while scam techniques continue changing rapidly.',
    },
    {
      icon: '🧠',
      title: 'Human Manipulation',
      text: 'Traditional security can protect files, but it cannot always warn you when a scammer is manipulating your trust.',
    },
  ];

  return (
    <section className="traditional-security-section">

      {/* Background Decorations */}
      <div className="traditional-security-orb orb-one"></div>
      <div className="traditional-security-orb orb-two"></div>

      <div className="traditional-security-container">

        {/* LEFT SIDE IMAGE */}
        <div className="traditional-security-visual">

          <div className="traditional-image-glow"></div>

          <div className="traditional-image-frame">
            <img
              src="/Hero/TraditionalFails.WebP"
              alt="Traditional security protection gaps"
              className="traditional-security-image"
            />

            <div className="traditional-image-overlay"></div>
          </div>

          {/* Floating Warning Card */}
          <div className="traditional-warning-card">
            <div className="traditional-warning-icon">⚠️</div>

            <div>
              <strong>Security Gap Detected</strong>
              <span>Traditional protection isn't enough</span>
            </div>
          </div>

        </div>


        {/* RIGHT SIDE CONTENT */}
        <div className="traditional-security-content">

          <div className="traditional-security-badge">
            ⚠️ SECURITY LIMITATIONS
          </div>

          <h2 className="traditional-security-heading">
            Why Traditional Security
            <span> Falls Short.</span>
          </h2>

          <p className="traditional-security-intro">
            Traditional antivirus was designed primarily to protect against
            malicious files and software.
          </p>

          <p className="traditional-security-description">
            But today's biggest digital threats often rely on
            <strong> scams, impersonation, manipulation, and deception.</strong>
          </p>


          {/* FAILURES GRID */}
          <div className="traditional-failures-grid">

            {failures.map((failure, index) => (
              <div
                className="traditional-failure-card"
                key={index}
              >

                <div className="traditional-failure-icon">
                  {failure.icon}
                </div>

                <div className="traditional-failure-content">
                  <h3>{failure.title}</h3>
                  <p>{failure.text}</p>
                </div>

              </div>
            ))}

          </div>


          {/* Bottom Warning */}
          <div className="traditional-bottom-warning">

            <div className="traditional-bottom-warning-icon">
              🛡️
            </div>

            <p>
              Modern threats require more than basic antivirus protection.
              You need security designed for the way scams actually work
              today.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TraditionalSecurityFails;