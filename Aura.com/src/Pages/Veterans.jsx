// src/Pages/Veterans.jsx
// Veterans page: clear, easy-to-read offer for U.S. veterans,
// with the real Saffron Guru phone number everywhere.
import React from "react";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import "./Veterans.css";

import {
  FaPhoneAlt,
  FaHome,
  FaBuilding,
  FaCheck,
  FaStar,
  FaArrowRight,
} from "react-icons/fa";

const PHONE_LINK = "tel:+18443134987";
const PHONE_TEXT = "844-313-4987";
const BBB_PROFILE =
  "https://www.bbb.org/us/tx/irving/profile/computer-software/saffron-guru-0875-91317606/#sealclick";

const HOME_HELP = [
  "Wi-Fi & Internet Setup",
  "Laptop & Desktop Help",
  "Printer & Scanner Setup",
  "Smart TV & Device Setup",
  "Slow Computer Cleanup",
  "Virus & Malware Removal",
  "Photo & File Backup",
  "Help Spotting Scam Calls, Emails & Pop-ups",
];

const BUSINESS_HELP = [
  "Business Network & Wi-Fi",
  "Computer & Laptop Setup",
  "Antivirus & Cybersecurity",
  "Data Backup",
  "Email & Microsoft 365",
  "Ongoing IT Maintenance",
];

const STEPS = [
  { title: "Call Us", text: `Call ${PHONE_TEXT} and let us know you served.` },
  { title: "Tell Us What You Need", text: "Explain the problem in your own words. No tech knowledge needed." },
  { title: "We Take Care of It", text: "A real technician helps you step by step and explains everything in plain English." },
];

const Veterans = () => {
  return (
    <>
      <AppNavbar />

      <main className="veterans-page vet-v2">
        {/* ================= HERO ================= */}
        <section className="veterans-hero">
          <div className="hero-dark-overlay"></div>

          <div className="hero-inner">
            <div className="hero-left">
              <div className="veterans-offer-badge">
                <FaStar />
                <strong>VETERANS SPECIAL OFFER</strong>
                <FaStar />
              </div>

              <h1 className="hero-title">
                <span className="title-white">Tech Support &amp; Online Protection</span>
                <span className="title-gold">for U.S. Veterans</span>
              </h1>

              <p className="vet-lead">
                <strong>Thank you for your service.</strong> Saffron Guru offers
                special pricing for U.S. veterans on tech support and online
                protection, for your home or your business.
              </p>

              {/* OFFER BOX */}
              <div className="vet-offer">
                <p className="vet-offer-title">★ Veteran Pricing Available</p>
                <p className="vet-offer-text">
                  Call us and let us know you served. We will explain the veteran
                  options available to you, with no pressure.
                </p>
                <a href={PHONE_LINK} className="vet-phone">
                  <FaPhoneAlt /> {PHONE_TEXT}
                </a>
                <p className="vet-offer-small">Real people, 7 days a week</p>
              </div>

              {/* TRUST */}
              <div className="vet-trust">
                <a href={BBB_PROFILE} target="_blank" rel="noopener noreferrer" className="vet-bbb">
                  <img
                    src="/Hero/saffron-guru-bbb-a-plus-rating.webp"
                    alt="Saffron Guru BBB Accredited Business, A+ rating"
                    width="293"
                    height="61"
                  />
                </a>
                <ul>
                  <li><FaCheck /> Serving customers since 2016</li>
                  <li><FaCheck /> Real people, not bots</li>
                  <li><FaCheck /> Help 7 days a week</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= WHAT WE HELP WITH ================= */}
        <section className="veterans-package-section">
          <div className="veterans-container">
            <div className="section-heading">
              <h2>
                What We Help <span>Veterans With</span>
              </h2>
              <p>One friendly team for the technology at home and at work.</p>
            </div>

            <div className="package-grid">
              <div className="package-card">
                <div className="package-icon"><FaHome /></div>
                <span className="package-label">FOR YOUR HOME</span>
                <h3>Home Tech Support</h3>
                <ul>
                  {HOME_HELP.map((item) => (
                    <li key={item}><FaCheck /> {item}</li>
                  ))}
                </ul>
              </div>

              <div className="package-card featured-package">
                <div className="package-icon"><FaBuilding /></div>
                <span className="package-label">FOR YOUR BUSINESS</span>
                <h3>Business IT Support</h3>
                <ul>
                  {BUSINESS_HELP.map((item) => (
                    <li key={item}><FaCheck /> {item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="vet-steps-section">
          <div className="veterans-container">
            <div className="section-heading">
              <h2>
                How It <span>Works</span>
              </h2>
            </div>
            <ol className="vet-steps">
              {STEPS.map((s, i) => (
                <li key={s.title}>
                  <span className="vet-step-num">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ================= FINAL CALL ================= */}
        <section className="veterans-final-cta">
          <div className="final-container">
            <div className="final-label">★ VETERANS SPECIAL OFFER ★</div>
            <h2>Thank You For Your Service.</h2>
            <p>Call today to hear about veteran pricing for your home or business.</p>
            <a href={PHONE_LINK} className="final-button">
              <FaPhoneAlt /> Call {PHONE_TEXT} <FaArrowRight />
            </a>
            <span className="final-note">
              Veteran offers may vary. Call us for details.
            </span>
          </div>
        </section>
      </main>

      <AllSection />
    </>
  );
};

export default Veterans;
