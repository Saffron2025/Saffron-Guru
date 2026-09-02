// src/Pages/DefendMePro.js

import React, { useEffect, useRef } from 'react';
import AppNavbar from '../Components/AppNavbar.jsx';
import { useSearchParams } from 'react-router-dom';

import AllSection from '../Components/AllSection.jsx';
import RealityNumber from '../Components/RealityNumber.jsx';
import TraditionalSecurityFails from '../Components/TraditionalSecurityFails.jsx';
import DefendMeBuilt from '../Components/DefendMeBuilt.jsx';
import WhatDefendMeProIncludes from '../Components/whyDefenceProIncludes.jsx';
import EverythingSafe from '../Components/EverythingYouNeedTostaySafe.jsx';
import FraudDetection from '../Components/FraudDetection.jsx';
import ScamProtection from '../Components/ScamProtection.jsx';
import ScamAlertsHub from '../Components/ScamAlertHub.jsx';
import FinancialSecurity from '../Components/FinancialSecurity.jsx';
import PasswordManager from '../Components/PasswordManager.jsx';
import Antivirus from '../Components/Antivirus.jsx';
import VpnPrivacy from '../Components/VPN.jsx';
import SpamCallProtection from '../Components/SpamCallProtection.jsx';
import LiveSupport from '../Components/LiveSupport.jsx';
import DefendMeBusiness from '../Components/DefenseMeBusiness.jsx';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import './DefendPro.css';

const DefendMePro = () => {
  const [searchParams] = useSearchParams();

  const scamRef = useRef(null);
  const fraudRef = useRef(null);

  useEffect(() => {
    const item = searchParams.get('item');

    if (item === 'scam-protection' && scamRef.current) {
      scamRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    } else if (item === 'fraud-detection' && fraudRef.current) {
      fraudRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [searchParams]);

  return (
    <>
      <AppNavbar />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="defend-hero">

        {/* Background Decorations */}
        <div className="hero-bg-orb hero-orb-one"></div>
        <div className="hero-bg-orb hero-orb-two"></div>
        <div className="hero-grid"></div>

        <div className="defend-hero-container">

          {/* LEFT CONTENT */}
          <div className="defend-hero-content">

            <div className="hero-security-badge">
              <span className="badge-dot"></span>
              ADVANCED DIGITAL PROTECTION
            </div>

            <div className="hero-brand-row">

              <div className="hero-logo-wrapper">
                <img
                  src="/Hero/shield.WebP"
                  alt="DefendMePro Shield"
                  className="hero-logo"
                  loading="eager"
                  fetchpriority="high"
                />
              </div>

              <div className="hero-brand-text">
                <span>SMART SECURITY</span>

                <h1>
                  DefendMe<span>Pro™</span>
                </h1>
              </div>

            </div>

            <h2 className="hero-main-heading">
              Protection Built for
              <span> The Real World.</span>
            </h2>

            <p className="hero-description">
              Today's digital threats are more than viruses. From scams and
              identity theft to fraud, remote hacking, and dangerous online
              traps — modern security needs to protect more than just your
              device.
            </p>

            <p className="hero-description hero-description-strong">
              <strong>DefendMePro</strong> helps you stay aware, protected,
              and prepared against the threats traditional security can miss.
            </p>

            <div className="hero-protection-points">

              <div className="hero-point">
                <div className="hero-point-icon">🛡️</div>

                <div>
                  <strong>Digital Protection</strong>
                  <span>Security for everyday online threats</span>
                </div>
              </div>

              <div className="hero-point">
                <div className="hero-point-icon">🚨</div>

                <div>
                  <strong>Threat Awareness</strong>
                  <span>Stay informed about suspicious activity</span>
                </div>
              </div>

              <div className="hero-point">
                <div className="hero-point-icon">🧑‍💻</div>

                <div>
                  <strong>Real Support</strong>
                  <span>Guidance when you need help</span>
                </div>
              </div>

            </div>

          </div>


          {/* RIGHT SIDE VISUAL */}
          <div className="hero-visual">

            <div className="hero-visual-glow"></div>

            <div className="hero-shield-card">

              <div className="hero-shield-inner">

                <img
                  src="/Hero/shield.WebP"
                  alt="Digital Protection Shield"
                  loading="eager"
                />

              </div>

            </div>

            <div className="hero-floating-card hero-card-top">
              <span className="hero-card-icon">🛡️</span>

              <div>
                <strong>Protection Active</strong>
                <small>Your digital safety matters</small>
              </div>
            </div>

            <div className="hero-floating-card hero-card-bottom">
              <span className="hero-card-icon">🔒</span>

              <div>
                <strong>Secure & Protected</strong>
                <small>Stay one step ahead</small>
              </div>
            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SCAM STORY SECTION
      ====================================================== */}

      <section className="scam-story-section">

        <div className="scam-story-container">

          {/* IMAGE SIDE */}
          <div className="scam-story-image-area">

            <div className="scam-image-glow"></div>

            <div className="scam-image-wrapper">

              <LazyLoadImage
                src="/Hero/ScamTrap.WebP"
                alt="Scam Trap Protection"
                effect="blur"
                loading="lazy"
              />

              <div className="scam-image-overlay"></div>

            </div>

            <div className="scam-image-card">

              <div className="scam-image-card-icon">
                ⚠️
              </div>

              <div>
                <strong>Stay Alert</strong>
                <span>Scams can look completely real</span>
              </div>

            </div>

          </div>


          {/* TEXT SIDE */}
          <div className="scam-story-content">

            <div className="scam-story-badge">
              <span></span>
              THE MODERN DIGITAL THREAT
            </div>

            <h2 className="scam-story-heading">
              The Threat Isn't Just
              <span> Malware Anymore.</span>
            </h2>

            <p className="scam-story-intro">
              Today's online threats don't always arrive as viruses.
              Sometimes they arrive as messages, phone calls, websites,
              or people pretending to be someone you trust.
            </p>


            <div className="scam-story-highlight">

              <div className="scam-story-highlight-icon">
                🚨
              </div>

              <div>
                <strong>Human Manipulation Is the New Threat</strong>

                <p>
                  Hackers often use fake logins, refund scams, remote
                  access traps, and convincing messages to trick people
                  into giving away information or access.
                </p>
              </div>

            </div>


            <div className="scam-example-grid">

              <div className="scam-example">
                <span>📧</span>

                <div>
                  <strong>Fake Emails</strong>
                  <small>Messages pretending to be trusted companies</small>
                </div>
              </div>


              <div className="scam-example">
                <span>💳</span>

                <div>
                  <strong>Refund Scams</strong>
                  <small>Fake payment and refund requests</small>
                </div>
              </div>


              <div className="scam-example">
                <span>💻</span>

                <div>
                  <strong>Remote Traps</strong>
                  <small>Fake support and dangerous pop-ups</small>
                </div>
              </div>


              <div className="scam-example">
                <span>📞</span>

                <div>
                  <strong>Fake Calls</strong>
                  <small>People pretending to be banks or support</small>
                </div>
              </div>

            </div>


            <div className="scam-warning-box">

              <div className="scam-warning-icon">
                🛑
              </div>

              <p>
                All it takes is
                <strong> one moment of trust </strong>
                for a convincing scam to cause serious damage.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          EXISTING SECTIONS
      ====================================================== */}

      <RealityNumber />

      <TraditionalSecurityFails />

      <DefendMeBuilt />

      <WhatDefendMeProIncludes />


      <EverythingSafe
        expand={searchParams.get('item') === 'identity-theft'}
        key={
          searchParams.get('item') === 'identity-theft'
            ? 'identity-theft'
            : 'none'
        }
      />


      <FraudDetection
        ref={fraudRef}
        expand={searchParams.get('item') === 'fraud-detection'}
        key={
          searchParams.get('item') === 'fraud-detection'
            ? 'fraud'
            : 'none'
        }
      />


      <ScamProtection
        expand={searchParams.get('item') === 'scam-protection'}
        scrollRef={scamRef}
        key={
          searchParams.get('item') === 'scam-protection'
            ? 'scam'
            : 'none'
        }
      />


      <ScamAlertsHub
        expand={searchParams.get('item') === 'scam-alerts'}
        key={
          searchParams.get('item') === 'scam-alerts'
            ? 'scam-alerts'
            : 'none'
        }
      />


      <FinancialSecurity
        expand={searchParams.get('item') === 'financial-security'}
        key={
          searchParams.get('item') === 'financial-security'
            ? 'finance'
            : 'none'
        }
      />


      <PasswordManager
        expand={searchParams.get('item') === 'password-manager'}
        key={
          searchParams.get('item') === 'password-manager'
            ? 'pm'
            : 'none'
        }
      />


      <Antivirus
        expand={searchParams.get('item') === 'antivirus'}
        key={
          searchParams.get('item') === 'antivirus'
            ? 'antivirus'
            : 'none'
        }
      />


      <VpnPrivacy
        expand={searchParams.get('item') === 'vpn'}
        key={
          searchParams.get('item') === 'vpn'
            ? 'vpn'
            : 'none'
        }
      />


      <SpamCallProtection
        expand={searchParams.get('item') === 'spam-call'}
        key={
          searchParams.get('item') === 'spam-call'
            ? 'spam'
            : 'none'
        }
      />


      <LiveSupport
        expand={searchParams.get('item') === 'human-support'}
        key={
          searchParams.get('item') === 'human-support'
            ? 'support'
            : 'none'
        }
      />


      <DefendMeBusiness />

      <AllSection />

    </>
  );
};

export default DefendMePro;