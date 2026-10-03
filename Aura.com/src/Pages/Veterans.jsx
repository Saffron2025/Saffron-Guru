import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import "./Veterans.css";

import {
  FaShieldAlt,
  FaLaptop,
  FaLock,
  FaHeadset,
  FaPhoneAlt,
  FaHome,
  FaBuilding,
  FaCheck,
  FaStar,
  FaWifi,
  FaDatabase,
  FaTools,
  FaArrowRight,
  FaFlagUsa,
  FaUserCheck,
  FaCalendarCheck,
  FaUserShield,
  FaExclamationTriangle,
  FaBan,
  FaPhoneSlash,
  FaKey,
  FaGlobe,
} from "react-icons/fa";

const PHONE_LINK = "tel:+18443134987";
const PHONE_TEXT = "844-313-4987";
const PROTECTION = [
  { item: "identity-theft", icon: <FaUserShield />, title: "Identity Theft Protection", text: "Help keeping your personal details safe, and support if your identity is ever misused." },
  { item: "fraud-detection", icon: <FaExclamationTriangle />, title: "Fraud Detection & Alerts", text: "Watch for signs of fraud on your accounts so problems can be caught early." },
  { item: "scam-protection", icon: <FaBan />, title: "Scam Protection & Alerts", text: "Help spotting fake calls, emails, texts and pop-ups before they cost you money." },
  { item: "spam-call", icon: <FaPhoneSlash />, title: "Spam Call Protection", text: "Fewer robocalls and scam calls reaching your phone." },
  { item: "password-manager", icon: <FaKey />, title: "Password Manager", text: "Strong passwords for every account, without having to remember them all." },
  { item: "vpn", icon: <FaGlobe />, title: "VPN & Online Privacy", text: "Keep your connection private, especially on public Wi-Fi." },
  { item: "antivirus", icon: <FaLaptop />, title: "Device Security & Antivirus", text: "Protection for your computer and phone against viruses and malware." },
  { item: "human-support", icon: <FaHeadset />, title: "Real People to Call", text: "Patient technicians who answer your questions in plain English." },
];

const BBB_PROFILE =
  "https://www.bbb.org/us/tx/irving/profile/computer-software/saffron-guru-0875-91317606/#sealclick";

const Veterans = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    if (!elements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.12,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    elements.forEach((element) => {
      observer.observe(element);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <AppNavbar />

      <main className="veterans-page vet-v3">
        {/* Page background as a real image, so Google can index it */}
        <img
          className="vet-bg-img"
          src="/Hero/saffron-guru-tech-support-for-veterans.webp"
          alt="Saffron Guru tech support and online protection for U.S. veterans"
          decoding="async"
          fetchpriority="high"
        />


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="veterans-hero">

          <div className="hero-dark-overlay"></div>

          <div className="hero-inner">

            <div className="hero-left">

              {/* TOP STARS */}
              <div className="hero-top-decoration scroll-reveal reveal-down">

                <span></span>

                <FaStar />
                <FaStar />
                <FaStar />

                <span></span>

              </div>


              {/* OFFER BADGE */}
              <div className="veterans-offer-badge scroll-reveal reveal-scale">

                <FaStar />

                <strong>
                  VETERANS SPECIAL OFFER
                </strong>

                <FaStar />

              </div>


              {/* SUPPORTING LINE */}
              <div className="supporting-line scroll-reveal reveal-up">

                <span></span>

                <FaStar />

                <p>
                  PROUDLY SUPPORTING THOSE WHO SERVED
                </p>

                <FaStar />

                <span></span>

              </div>


              {/* MAIN TITLE */}
              <h1 className="hero-title scroll-reveal reveal-left">

                <span className="title-white">
                  Tech Support &amp; Online Protection
                </span>

                <span className="title-gold">
                  for U.S. Veterans
                </span>

              </h1>


              {/* DESCRIPTION */}
              <p className="hero-description scroll-reveal reveal-left delay-1">

                At Saffron Guru, we{" "}
                <strong>
                  thank you for your service.
                </strong>{" "}
                We're proud to offer special pricing to U.S. veterans for
                patient tech support and protection from online threats,
                at home and at work.

              </p>


              {/* THANK YOU */}
              <div className="thank-you-line scroll-reveal reveal-up delay-1">

                <span className="thank-line"></span>

                <span className="flag-emoji" aria-hidden="true">
                  <FaFlagUsa />
                </span>

                <strong>
                  WE THANK YOU FOR YOUR SERVICE
                </strong>

                <span className="flag-emoji" aria-hidden="true">
                  <FaFlagUsa />
                </span>

                <span className="thank-line"></span>

              </div>


              {/* OFFER DESCRIPTION */}
              <div className="vet-flag-offer">
                <div className="vet-flag-stars" aria-hidden="true">
                  {Array.from({ length: 12 }).map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>
                <div className="vet-flag-content">
                  <p className="vet-flag-kicker">Our thank-you to those who served</p>
                  <p className="vet-flag-title">Veteran Pricing Available</p>
                  <p className="vet-flag-text">
                    Call us and let us know you served. We will explain the
                    veteran options available to you, with no pressure.
                  </p>
                  <a href={PHONE_LINK} className="vet-flag-phone">
                    <FaPhoneAlt /> {PHONE_TEXT}
                  </a>
                </div>
              </div>


              {/* SERVICES */}
              <div className="hero-services">

                <div className="hero-service scroll-reveal reveal-up delay-1">

                  <div className="service-icon">
                    <FaShieldAlt />
                  </div>

                  <div className="service-text">
                    <strong>Online</strong>
                    <strong>Security</strong>
                  </div>

                </div>


                <div className="service-divider"></div>


                <div className="hero-service scroll-reveal reveal-up delay-2">

                  <div className="service-icon">
                    <FaLaptop />
                  </div>

                  <div className="service-text">
                    <strong>IT</strong>
                    <strong>Support</strong>
                  </div>

                </div>


                <div className="service-divider"></div>


                <div className="hero-service scroll-reveal reveal-up delay-3">

                  <div className="service-icon">
                    <FaLock />
                  </div>

                  <div className="service-text">
                    <strong>Scam &amp; Fraud</strong>
                    <strong>Protection</strong>
                  </div>

                </div>


                <div className="service-divider"></div>


                <div className="hero-service scroll-reveal reveal-up delay-4">

                  <div className="service-icon">
                    <FaHeadset />
                  </div>

                  <div className="service-text">
                    <strong>Reliable</strong>
                    <strong>Support</strong>
                  </div>

                </div>

              </div>


              {/* TRUST BADGES */}
              <div className="vet-badges">
                <span className="vet-badge"><FaCalendarCheck /> Serving customers since 2016</span>
                <span className="vet-badge"><FaUserCheck /> Real people, not bots</span>
                <span className="vet-badge"><FaHeadset /> Help 7 days a week</span>
                <a href={BBB_PROFILE} target="_blank" rel="noopener noreferrer" className="vet-bbb">
                  <img
                    src="/Hero/saffron-guru-bbb-a-plus-rating.webp"
                    alt="Saffron Guru BBB Accredited Business, A+ rating"
                    width="293"
                    height="61"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>

            </div>

          </div>


          {/* BOTTOM FLAG WAVES */}
          <div className="flag-wave flag-wave-one"></div>
          <div className="flag-wave flag-wave-two"></div>

        </section>


        {/* =====================================================
            THANK YOU SECTION
        ===================================================== */}

        <section className="veterans-thanks-section">

          <div className="veterans-container">

            <div className="section-heading">

              <div className="section-eyebrow scroll-reveal reveal-down">

                <span></span>

                FROM OUR DefendMe PRO™ PACKAGE

                <span></span>

              </div>

              <h2 className="scroll-reveal reveal-up">

                Protection for Your

                <br />

                <span>
                  Identity, Money &amp; Devices
                </span>

              </h2>

              <p className="scroll-reveal reveal-up delay-1">
                Scammers target veterans and their benefits. DefendMe PRO™
                brings together the protection that matters most today,
                with real people to call when something feels wrong.
              </p>

            </div>


            <div className="benefits-grid vet-protect-grid">
              {PROTECTION.map((item, n) => (
                <Link
                  key={item.title}
                  to={`/DefendPro?item=${item.item}`}
                  className="benefit-card"
                >
                  <div className="card-number">{String(n + 1).padStart(2, "0")}</div>
                  <div className="benefit-icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <div className="benefit-bottom">
                    <span>LEARN MORE</span>
                    <FaArrowRight />
                  </div>
                </Link>
              ))}
            </div>

          </div>

        </section>


        {/* =====================================================
            PACKAGE SECTION
        ===================================================== */}

        <section className="veterans-package-section">

          <div className="veterans-container">

            <div className="section-heading">

              <div className="section-eyebrow gold scroll-reveal reveal-down">

                <span></span>

                VETERAN SUPPORT PACKAGE

                <span></span>

              </div>

              <h2 className="scroll-reveal reveal-up">

                Tech Help at Home

                <br />

                <span>
                  &amp; at Work
                </span>

              </h2>

              <p className="scroll-reveal reveal-up delay-1">
                Patient tech support for your home, and dependable
                IT support and cybersecurity for your business.
              </p>

            </div>


            <div className="package-grid">

              {/* HOME */}

              <div className="package-card scroll-reveal reveal-left">

                <div className="package-number">
                  01
                </div>

                <div className="package-icon">
                  <FaHome />
                </div>

                <span className="package-label">
                  FOR YOUR HOME
                </span>

                <h3>
                  Home IT Support
                </h3>

                <p>
                  Get professional help with the technology
                  you use every day.
                </p>

                <div className="package-divider"></div>

                <small>
                  WHAT WE CAN HELP WITH
                </small>

                <ul>

                  <li>
                    <FaCheck />
                    Wi-Fi &amp; Internet Setup and Fixes
                  </li>

                  <li>
                    <FaCheck />
                    Laptop &amp; Desktop Setup and Troubleshooting
                  </li>

                  <li>
                    <FaCheck />
                    Printer &amp; Scanner Setup and Troubleshooting
                  </li>

                  <li>
                    <FaCheck />
                    Email &amp; Outlook Help
                  </li>

                  <li>
                    <FaCheck />
                    iPhone, Android &amp; Tablet Help
                  </li>

                  <li>
                    <FaCheck />
                    Smart TV &amp; Streaming Setup
                  </li>

                  <li>
                    <FaCheck />
                    Accounting Software Help
                  </li>

                  <li>
                    <FaCheck />
                    Computer Speed &amp; Performance Tune-ups
                  </li>

                  <li>
                    <FaCheck />
                    Virus &amp; Malware Removal
                  </li>

                  <li>
                    <FaCheck />
                    Data Backup &amp; Recovery
                  </li>

                  <li>
                    <FaCheck />
                    Scam Recovery &amp; Computer Cleanup
                  </li>

                  <li>
                    <FaCheck />
                    Account Recovery &amp; Lockout Help
                  </li>

                  <li>
                    <FaCheck />
                    Apps &amp; Accounts Assistance
                  </li>

                </ul>

              </div>


              {/* BUSINESS */}

              <div className="package-card featured-package scroll-reveal reveal-right">

                <div className="featured-label">
                  VETERAN SUPPORT
                </div>

                <div className="package-number">
                  02
                </div>

                <div className="package-icon">
                  <FaBuilding />
                </div>

                <span className="package-label">
                  FOR YOUR BUSINESS
                </span>

                <h3>
                  Business IT Support
                </h3>

                <p>
                  Keep your business technology reliable,
                  secure, connected, and ready for work.
                </p>

                <div className="package-divider"></div>

                <small>
                  WHAT WE CAN HELP WITH
                </small>

                <ul>

                  <li>
                    <FaCheck />
                    Managed IT Support for Your Whole Office
                  </li>

                  <li>
                    <FaCheck />
                    Server Setup, Support &amp; Troubleshooting
                  </li>

                  <li>
                    <FaCheck />
                    Server &amp; Data Backup
                  </li>

                  <li>
                    <FaCheck />
                    Business Application Support
                  </li>

                  <li>
                    <FaCheck />
                    Microsoft 365 &amp; Business Email
                  </li>

                  <li>
                    <FaCheck />
                    Business Network &amp; Wi-Fi
                  </li>

                  <li>
                    <FaCheck />
                    Cybersecurity &amp; Antivirus
                  </li>

                  <li>
                    <FaCheck />
                    Computer &amp; Laptop Setup and Repair
                  </li>

                  <li>
                    <FaCheck />
                    Ongoing IT Maintenance
                  </li>

                </ul>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            SECURITY SECTION
        ===================================================== */}

        <section className="veterans-security-section">

          <div className="security-container veterans-container">

            <div className="security-content">

              <div className="section-eyebrow scroll-reveal reveal-down">

                <span></span>

                ONLINE PROTECTION

                <span></span>

              </div>

              <h2 className="scroll-reveal reveal-left">

                Stay Protected

                <br />

                <span>
                  In A Connected World.
                </span>

              </h2>

              <p className="scroll-reveal reveal-left delay-1">
                Your technology should work for you without
                making online safety complicated. We help keep
                your computer, phone and accounts protected, and
                we are a phone call away if something looks wrong.
              </p>


              <div className="security-points">

                <div className="security-point scroll-reveal reveal-left delay-1">

                  <span>
                    <FaUserShield />
                  </span>

                  <strong>
                    Identity Theft Protection
                  </strong>

                </div>


                <div className="security-point scroll-reveal reveal-left delay-2">

                  <span>
                    <FaLock />
                  </span>

                  <strong>
                    Antivirus &amp; Malware Protection
                  </strong>

                </div>


                <div className="security-point scroll-reveal reveal-left delay-3">

                  <span>
                    <FaDatabase />
                  </span>

                  <strong>
                    Data Backup &amp; Recovery
                  </strong>

                </div>


                <div className="security-point scroll-reveal reveal-left delay-4">

                  <span>
                    <FaShieldAlt />
                  </span>

                  <strong>
                    Device Security Assistance
                  </strong>

                </div>

              </div>


              <Link
                to="/DefendPro"
                className="security-button"
              >

                <FaShieldAlt />

                See Everything in DefendMe PRO™

                <FaArrowRight />

              </Link>

            </div>


            <div className="security-visual scroll-reveal reveal-right">

              <div className="security-circle">

                <div className="security-circle-inner">

                  <FaShieldAlt />

                  <span>
                    ONLINE
                  </span>

                  <strong>
                    PROTECTION
                  </strong>

                </div>

              </div>


              <div className="security-floating-card first">

                <FaShieldAlt />

                <div>

                  <small>
                    SECURITY SUPPORT
                  </small>

                  <strong>
                    Protection Focused
                  </strong>

                </div>

              </div>


              <div className="security-floating-card second">

                <FaTools />

                <div>

                  <small>
                    IT SUPPORT
                  </small>

                  <strong>
                    Professional Help
                  </strong>

                </div>

              </div>


              <div className="security-floating-card third">

                <FaWifi />

                <div>

                  <small>
                    CONNECTIVITY
                  </small>

                  <strong>
                    Connected &amp; Secure
                  </strong>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* =====================================================
            FINAL CTA
        ===================================================== */}

        <section className="veterans-final-cta">

          <div className="final-container">

            <div className="final-stars scroll-reveal reveal-down">
              ★ ★ ★ ★ ★
            </div>

            <div className="final-label scroll-reveal reveal-scale">
              <FaFlagUsa /> VETERANS SPECIAL OFFER <FaFlagUsa />
            </div>

            <h2 className="scroll-reveal reveal-up">
              Thank You For Your Service.
            </h2>

            <p className="scroll-reveal reveal-up delay-1">
              We're proud to offer special pricing to U.S. veterans.
              Call us to hear the veteran options for your home
              or business.
            </p>

            <a
              href={PHONE_LINK}
              className="final-button scroll-reveal reveal-scale delay-2"
            >

              <FaPhoneAlt />

              TALK TO OUR TEAM

              <FaArrowRight />

            </a>

            <span className="final-note scroll-reveal reveal-up delay-3">
              Veteran offers may vary. Call us for details.
            </span>

          </div>

        </section>

        {/* =====================================================
            FIXED FULL PROTECTION BUTTON
        ===================================================== */}

        <Link
          to="/LearnMore"
          className="fixed-protection-button"
          aria-label="Explore Full Protection"
        >
          <span className="fixed-protection-glow"></span>

          <span className="fixed-protection-shield">
            <FaShieldAlt />
          </span>

          <span className="fixed-protection-content">
            <small>SAFFRON GURU</small>
            <strong>Explore Full Protection</strong>
          </span>

          <span className="fixed-protection-arrow">
            <FaArrowRight />
          </span>
        </Link>

      </main>

      <AllSection />
    </>
  );
};

export default Veterans;