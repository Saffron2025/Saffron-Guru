import React from 'react';
import AppNavbar from '../Components/AppNavbar';
import AllSection from '../Components/AllSection';
import './Fox.css';

const Fox = () => {
  return (
    <>
      <AppNavbar />

      <div className="fox-container">
        <div className="fox-card">
          <h1 className="fox-title">🛑 Social Security Scam Alert</h1>
          <p className="fox-intro">Fox News reports a major phishing scam targeting U.S. retirees.</p>

          <div className="fox-content">
            <p><strong>🚨 What’s Happening?</strong></p>
            <p>
              Scammers are sending fake emails and texts, pretending to be the Social Security Administration (SSA). These messages claim urgent issues with recipients' benefits to pressure them into revealing personal information.
            </p>

            <p><strong>🎯 Who’s at Risk?</strong></p>
            <p>
              Retirees and seniors are the main targets. The scam relies on fear—claiming your benefits will be cut off unless you take immediate action.
            </p>

            <p><strong>🔍 How It Works:</strong></p>
            <ul>
              <li>Fake SSA messages claim "account suspension" or "urgent verification required."</li>
              <li>Victims are directed to click malicious links or call fraudulent numbers.</li>
              <li>Scammers collect Social Security numbers, banking info, or login credentials.</li>
            </ul>

            <p><strong>✅ How to Stay Safe:</strong></p>
            <ul>
              <li>SSA will never call, email, or text asking for personal details.</li>
              <li>
                Ignore and report suspicious emails or texts to{' '}
                <a
                  href="https://oig.ssa.gov"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  SSA’s Office of the Inspector General
                </a>.
              </li>
              <li>Always visit official government websites directly—never click unknown links.</li>
            </ul>

            <p className="fox-footer">
              🧠 Stay informed. Share this with your loved ones, especially seniors. Education is your best defense.
            </p>

            {/* 👇 Full Article Link */}
            <div className="fox-read-more">
              <a
                href="https://www.foxnews.com/tech/social-security-administration-phishing-scam-targets-retirees?utm_source"
                target="_blank"
                rel="noopener noreferrer"
              >
                🔗 Read Full Article on Fox News →
              </a>
            </div>
          </div>
        </div>
      </div>

      <AllSection />
    </>
  );
};

export default Fox;
