import React from "react";
import "./OurStory.css";
import AppNavbar from "../Components/AppNavbar";
import Allsection from '../Components/AllSection'
const OurStory = () => {
  return (
    <>
    <AppNavbar/>
    <div className="our-story-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="our-story-hero">

        <div className="story-orb story-orb-one"></div>
        <div className="story-orb story-orb-two"></div>

        <div className="our-story-container">

          <div className="our-story-hero-content">

            <span className="story-eyebrow">
              OUR STORY
            </span>

            <h1>
              Celebrating
              <span> 10 Years </span>
              of IT Support
              <br />
              &amp; Digital Security
            </h1>

            <p>
              Helping homes and small businesses stay connected,
              supported, and protected since 2016.
            </p>

            <div className="story-hero-line"></div>

          </div>


          <div className="our-story-hero-image">

            <div className="story-image-glow"></div>

            <div className="story-image-wrapper">

              <img
                src="/Products/10th Year Aniv.webp"
                alt="10 Years of Saffron Guru"
              />

              <span className="story-corner story-corner-tl"></span>
              <span className="story-corner story-corner-tr"></span>
              <span className="story-corner story-corner-bl"></span>
              <span className="story-corner story-corner-br"></span>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          WHERE IT ALL BEGAN
      ========================================= */}

      <section className="story-section story-section-light">

        <div className="our-story-container">

          <div className="story-section-grid">

            <div className="story-visual">

              <div className="story-number">
                01
              </div>

              <div className="story-visual-card">

                <span className="story-year">
                  2016
                </span>

                <h3>
                  Where It
                  <br />
                  All Began
                </h3>

                <div className="story-visual-line"></div>

                <p>
                  Human-First Tech Support
                  <br />
                  for Homes
                </p>

              </div>

            </div>


            <div className="story-text">

              <span className="story-section-label">
                WHERE IT ALL BEGAN
              </span>

              <h2>
                Human-First Tech Support
                <span> for Homes</span>
              </h2>

              <p>
                In 2016, Saffron Guru was founded on a simple premise:
                technology should make life easier, not more frustrating.
              </p>

              <p>
                When we first opened our doors, our mission was clear:
                provide patient, dependable, human-first technical support
                directly to households. Whether it was setting up printers,
                troubleshooting Wi-Fi dropouts, or helping seniors navigate
                their daily computing with confidence, we positioned
                ourselves as the trusted, friendly experts who always picked
                up the phone.
              </p>

              <p>
                We built our foundation on patience, clear communication,
                and treating every client's computer with the same care we
                would give our own family's devices.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          LOCAL BUSINESSES
      ========================================= */}

      <section className="story-section story-section-blue">

        <div className="our-story-container">

          <div className="story-section-grid story-reverse">

            <div className="story-text">

              <span className="story-section-label">
                OUR REACH GREW
              </span>

              <h2>
                Supporting
                <span> Local Businesses</span>
              </h2>

              <p>
                As our reputation for reliable home tech care grew,
                local business owners began reaching out with a similar
                challenge. They needed flexible, proactive IT management
                without the massive corporate overhead of traditional
                enterprise IT firms.
              </p>

              <p>
                Listening to the needs of our community, Saffron Guru
                expanded into dedicated small business IT services.
              </p>

              <p>
                From maintaining network uptime and optimizing
                workstations to managing remote office tech, we became
                the quiet engine behind local operations, allowing
                business owners to focus on serving their customers while
                we took care of the systems keeping them running.
              </p>

            </div>


            <div className="story-visual story-visual-business">

              <div className="story-number">
                02
              </div>

              <div className="story-visual-card">

                <div className="story-card-icon">
                  IT
                </div>

                <span className="story-card-mini">
                  SMALL BUSINESS
                </span>

                <h3>
                  Reliable
                  <br />
                  IT Support
                </h3>

                <div className="story-visual-line"></div>

                <p>
                  Flexible. Proactive.
                  <br />
                  Human-first.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          MODERN THREATS
      ========================================= */}

      <section className="story-section story-section-dark">

        <div className="our-story-container">

          <div className="story-dark-heading">

            <span className="story-section-label">
              EVOLVING FOR MODERN THREATS
            </span>

            <h2>
              Beyond Traditional
              <span> Antivirus</span>
            </h2>

            <p>
              The digital landscape changed. So did the way we protect
              the people who rely on technology every day.
            </p>

          </div>


          <div className="story-dark-content">

            <p>
              Over the last decade, the digital landscape in America
              shifted dramatically. As online connectivity grew, so did
              the sophistication of cyber threats, online scams, and
              social engineering fraud, targeting everyday home users
              and small businesses alike.
            </p>

            <p>
              We quickly recognized that traditional antivirus software
              was no longer enough. Off-the-shelf security software often
              failed to stop malicious downloads, predatory pop-ups, or
              unvetted remote access tools that tricked users into
              granting permission to bad actors.
            </p>

            <p>
              To solve this, Saffron Guru pioneered a multi-layered,
              proactive digital security environment designed specifically
              for simplified, high-security computing.
            </p>

          </div>


          {/* SECURITY CARDS */}

          <div className="security-feature-grid">

            <div className="security-feature-card">

              <div className="security-feature-number">
                01
              </div>

              <h3>
                Controlled Environments
                &amp; Download Shields
              </h3>

              <p>
                Dedicated mechanisms to block unauthorized software
                downloads and malicious installers before they can run.
              </p>

            </div>


            <div className="security-feature-card">

              <div className="security-feature-number">
                02
              </div>

              <h3>
                Administrative Locks
                &amp; System Hardening
              </h3>

              <p>
                Tailored controls that lock down vulnerable system entry
                points, such as Command Prompt, PowerShell, Settings,
                and the Windows Store.
              </p>

            </div>


            <div className="security-feature-card">

              <div className="security-feature-number">
                03
              </div>

              <h3>
                Maintenance
                &amp; Override Toggles
              </h3>

              <p>
                Clean, accessible tools that allow trusted technicians
                or users to temporarily unlock administrative options
                whenever legitimate maintenance or troubleshooting is
                needed.
              </p>

            </div>


            <div className="security-feature-card">

              <div className="security-feature-number">
                04
              </div>

              <h3>
                Direct Human
                Access
              </h3>

              <p>
                Instant connection to real, US-based technical support
                whenever an anomaly or unexpected prompt appears,
                giving our clients immediate peace of mind.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          PROVEN EXCELLENCE
      ========================================= */}

      <section className="story-section story-section-light">

        <div className="our-story-container">

          <div className="trust-story-card">

            <div className="trust-story-badge">
              BBB
            </div>

            <div className="trust-story-content">

              <span className="story-section-label">
                PROVEN EXCELLENCE
              </span>

              <h2>
                Built on
                <span> Trust &amp; Integrity</span>
              </h2>

              <p>
                Our dedication to genuine, patient support isn't just
                something we talk about; it is reflected in the trust
                our clients place in us every single day.
              </p>

              <p>
                Saffron Guru is proud to be a Better Business Bureau
                (BBB) Accredited Business, upholding the highest
                standards of integrity, transparency, and consumer trust.
              </p>

              <p>
                Across every platform where our clients share their
                experiences, including Google, Facebook, Trustpilot, and
                the Better Business Bureau, we maintain an unbroken
                track record of perfect 5-star reviews. Not a single
                4-star review, but pure 5-star satisfaction earned
                through consistent, personalized care.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================
          CLOSING
      ========================================= */}

      <section className="story-closing-section">

        <div className="story-closing-glow"></div>

        <div className="our-story-container">

          <div className="story-closing-content">

            <span className="story-eyebrow">
              A DECADE OF TRUST
            </span>

            <h2>
              And Looking
              <span> Ahead</span>
            </h2>

            <p>
              A decade later, Saffron Guru remains proudly dedicated
              to the principle that started it all:
              <strong> people come first.</strong>
            </p>

            <p>
              Whether we are protecting senior citizens from digital
              fraud, managing home network security, or keeping local
              businesses running smoothly, our commitment hasn't changed.
            </p>

            <p>
              We are honored to celebrate 10 years of keeping our
              community connected, supported, and secure, and we look
              forward to serving you for many more years to come.
            </p>

            <div className="closing-year">
              <span>2016</span>
              <div></div>
              <span>2026</span>
            </div>

          </div>

        </div>

      </section>

    </div>
    <Allsection/>
    </>
  );
};

export default OurStory;
