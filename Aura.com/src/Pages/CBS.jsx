import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import './CBS.css';

const CBS = () => {
  return (
    <>
      <AppNavbar />

      <div className="eagan-container">
        <div className="eagan-card">
          <h1 className="eagan-title">🚨 Bitcoin ATM Scam Foiled in Eagan, MN</h1>
          <p className="eagan-intro">
            A senior couple nearly lost $125,000 after being duped into using a crypto ATM.
          </p>

          <div className="eagan-content">
            <section>
              <h2>🔎 What Happened</h2>
              <p>
                A couple in their 70s were guided by scammers thinking they were talking to the{' '}
                <span className="highlight">“FTC”</span>. They were instructed to transfer their life savings
                into a Bitcoin ATM at the Eagan Farmers Grandson gas station.
              </p>
            </section>

            <section>
              <h2>👥 Who Saved Them</h2>
              <p>
                A bystander named Gabrielle noticed the couple and called 911. Eagan Police arrived
                just in time to stop the transaction before they hit “Send”.
              </p>
            </section>

            <section>
              <h2>⚠️ Scam Tactics</h2>
              <ul>
                <li>Scammers impersonate official agencies with urgent requests.</li>
                <li>They prey on victims who have experienced identity theft or financial stress.</li>
                <li>Scams often lead to high-dollar crypto transfers that are irreversible.</li>
              </ul>
            </section>

            <section>
              <h2>✅ How to Stay Safe</h2>
              <ul>
                <li>Don’t trust calls claiming to be from agencies asking for crypto ATM payments.</li>
                <li>Pause—ask yourself: “Does this really feel right?”</li>
                <li>Reach out independently to verify claims before making transfers.</li>
                <li>If you suspect a scam, call law enforcement immediately.</li>
              </ul>
            </section>

            <p className="eagan-footer">
              A vigilant community member and swift police response saved a couple from financial
              ruin. Always check and double-check before sending money.
            </p>

            {/* 🔗 Full Article Link */}
            <div className="eagan-read-more">
              <a
                href="https://www.cbsnews.com/minnesota/news/eagan-police-bitcoin-atm-scam-thwarted/?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Read Full Article on CBS News →
              </a>
            </div>
          </div>
        </div>
      </div>

      <AllSection />
    </>
  );
};

export default CBS;
