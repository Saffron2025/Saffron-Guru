// src/Pages/WhyHumanSupport.jsx
// "Scammers don't hack computers, they hack trust" - the facts about scams
// against older Americans, how social engineering works, and why real people matter.
import React from "react";
import { Link } from "react-router-dom";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import { usePageMeta } from "../utils/pageMeta";
import "./WhyHumanSupport.css";

const STATS = [
  { value: "$7.7 billion", label: "reported lost by Americans aged 60 and older in 2025, up 59% in one year", src: 1 },
  { value: "201,266", label: "complaints filed by people aged 60 and older in 2025", src: 1 },
  { value: "$38,500", label: "average loss for each older victim who reported a loss", src: 1 },
  { value: "12,444", label: "older Americans who each lost more than $100,000", src: 1 },
  { value: "Up to $81.5 billion", label: "what the FTC estimates fraud really cost older adults in 2024, because most victims never report it", src: 3 },
  { value: "$20.9 billion", label: "lost to internet crime by Americans of all ages in 2025", src: 1 },
];

const LOSSES = [
  { type: "Investment scams", amount: 3519, display: "$3.52 billion" },
  { type: "Tech & customer support scams", amount: 1041, display: "$1.04 billion" },
  { type: "Romance & confidence scams", amount: 584, display: "$584 million" },
  { type: "Government impersonation", amount: 413, display: "$413 million" },
];

const PLAYBOOK = [
  {
    icon: "🎭",
    title: "They pretend to be someone you trust",
    text: "Your bank. Microsoft or Apple. Amazon. A government agency. Sometimes even a grandchild, with a voice copied by AI. The caller ID can be faked to match.",
  },
  {
    icon: "⏰",
    title: "They create panic, or excitement",
    text: "Your account is frozen. Your computer is infected. There is a warrant in your name. You have won a prize. Strong emotions push careful thinking aside.",
  },
  {
    icon: "🤫",
    title: "They keep you on the line, and alone",
    text: "\"Do not hang up.\" \"Do not tell the bank, they may be involved.\" \"Keep this between us.\" Isolation is how the scam survives.",
  },
  {
    icon: "💸",
    title: "They take control of the money",
    text: "They ask for remote access to your computer, or tell you to move savings to a \"safe account\", buy gift cards, send a wire or use a cryptocurrency ATM. Once it is gone, it is very hard to get back.",
  },
];

const SOURCES = [
  { n: 1, title: "FBI Internet Crime Complaint Center (IC3): 2025 Internet Crime Report", url: "https://www.ic3.gov/AnnualReport/Reports/2025_IC3Report.pdf" },
  { n: 2, title: "FBI: Scammers Target Older Adult Victims", url: "https://www.fbi.gov/news/stories/scammers-target-older-adult-victims" },
  { n: 3, title: "FTC: Annual Report to Congress on Protecting Older Adults (December 2025)", url: "https://www.ftc.gov/news-events/news/press-releases/2025/12/ftc-issues-annual-report-congress-agencys-actions-protect-older-adults" },
  { n: 4, title: "FTC: Four-fold increase in reports of impersonation scammers stealing tens and even hundreds of thousands from older adults (August 2025)", url: "https://www.ftc.gov/news-events/news/press-releases/2025/08/ftc-data-show-more-four-fold-increase-reports-impersonation-scammers-stealing-tens-even-hundreds" },
  { n: 5, title: "AARP: FBI and FTC reports show record fraud losses in 2025", url: "https://www.aarp.org/money/scams-fraud/fbi-ftc-report-2025-losses/" },
];

const Src = ({ n }) => (
  <a href="#whs-sources" className="whs-src" aria-label={`Source ${n}`}>[{n}]</a>
);

const WhyHumanSupport = () => {
  usePageMeta(
    {
      title: "Scammers Don't Hack Computers. They Hack Trust.",
      description:
        "Americans 60+ reported $7.7 billion in losses to online crime in 2025 (FBI). How scammers win trust, why software alone cannot stop them, and how Saffron Guru protects you with real people.",
      path: "/why-human-support",
      type: "article",
    },
    []
  );

  const max = Math.max(...LOSSES.map((l) => l.amount));

  return (
    <>
      <AppNavbar />

      <main className="whs-page">
        {/* ============ HERO ============ */}
        <section className="whs-hero">
          <div className="whs-wrap">
            <p className="whs-kicker">The real story behind online fraud</p>
            <h1>
              Scammers Don't Hack Computers.
              <br />
              <span>They Hack Trust.</span>
            </h1>
            <p className="whs-lead">
              Most people who lose money to scams did not click a bad link. They had a
              conversation with someone who sounded kind, official and urgent. Here is what
              is really happening to older Americans, and why the answer has to include real people.
            </p>
          </div>
        </section>

        {/* ============ NUMBERS ============ */}
        <section className="whs-section">
          <div className="whs-wrap">
            <h2 className="whs-h2">The Numbers Behind the Headlines</h2>
            <p className="whs-sub">
              Figures from the FBI and the Federal Trade Commission. Behind every number is a
              person who trusted the wrong voice.
            </p>
            <div className="whs-stats">
              {STATS.map((s) => (
                <div className="whs-stat" key={s.value}>
                  <div className="whs-stat-value">{s.value}</div>
                  <div className="whs-stat-label">
                    {s.label} <Src n={s.src} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============ WHERE THE MONEY GOES ============ */}
        <section className="whs-section whs-tint">
          <div className="whs-wrap whs-narrow">
            <h2 className="whs-h2">Where Older Americans Lost the Most in 2025</h2>
            <p className="whs-sub">Reported losses by people aged 60 and older, by type of scam <Src n={1} /></p>
            <div className="whs-bars">
              {LOSSES.map((l) => (
                <div className="whs-bar-row" key={l.type}>
                  <div className="whs-bar-head">
                    <span>{l.type}</span>
                    <strong>{l.display}</strong>
                  </div>
                  <div className="whs-bar-track">
                    <div className="whs-bar-fill" style={{ width: `${(l.amount / max) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
            <p className="whs-note">
              Every one of these scams depends on persuading a person, not on breaking a computer.
            </p>
          </div>
        </section>

        {/* ============ HOW THEY WIN TRUST ============ */}
        <section className="whs-section">
          <div className="whs-wrap">
            <h2 className="whs-h2">How Scammers Win Your Trust</h2>
            <p className="whs-sub">
              Security experts call it <strong>social engineering</strong>: manipulating people
              instead of machines. The script changes all the time. The playbook does not.
            </p>
            <div className="whs-steps">
              {PLAYBOOK.map((p, i) => (
                <div className="whs-step" key={p.title}>
                  <div className="whs-step-top">
                    <span className="whs-step-num">{i + 1}</span>
                    <span className="whs-step-icon" aria-hidden="true">{p.icon}</span>
                  </div>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </div>
              ))}
            </div>
            <div className="whs-callout">
              <strong>It is getting worse, not better.</strong> The FTC reports a more than
              four-fold increase since 2020 in older adults losing $10,000 or more to
              impersonation scams, and losses above $100,000 grew eight-fold, from $55 million
              to $445 million <Src n={4} />. Older Americans also reported more than
              $352 million in losses to scams involving AI in 2025 <Src n={1} />.
            </div>
          </div>
        </section>

        {/* ============ WHY SOFTWARE ALONE FAILS ============ */}
        <section className="whs-section whs-dark">
          <div className="whs-wrap whs-narrow">
            <h2 className="whs-h2">Why Security Software Alone Cannot Stop It</h2>
            <div className="whs-why">
              <p>
                Antivirus checks files. Filters check websites. Both are important, and we use
                them. But <strong>no software can hear the phone call.</strong>
              </p>
              <p>
                A scammer does not need to break in when they can convince someone to open the
                door. They change their story every week: a new bank, a new excuse, a new voice.
                Software follows rules. Scammers follow people.
              </p>
              <p className="whs-why-big">
                The strongest protection is a trusted person you can call before you act.
              </p>
            </div>
          </div>
        </section>

        {/* ============ OUR ANSWER ============ */}
        <section className="whs-section">
          <div className="whs-wrap">
            <h2 className="whs-h2">
              The Saffron Guru Way: <span>Technology With a Human Heart</span>
            </h2>
            <p className="whs-sub">
              We combine complete online protection with caring, real people, 7 days a week.
              We guard you against online threats, and we fix your technology so you never
              have to figure it out alone.
            </p>

            <div className="whs-answer">
              <Link to="/DefendPro" className="whs-card whs-card-blue">
                <span className="whs-card-icon" aria-hidden="true">🛡️</span>
                <h3>DefendMe PRO™</h3>
                <p>Protection far beyond antivirus, for your identity, your accounts and your money.</p>
                <span className="whs-card-link">See what is included →</span>
              </Link>
              <Link to="/for-your-home" className="whs-card whs-card-orange">
                <span className="whs-card-icon" aria-hidden="true">🧑‍💻</span>
                <h3>Safe Support Assist™</h3>
                <p>Your own team of patient technicians, ready to help with any device, 7 days a week.</p>
                <span className="whs-card-link">Meet your tech team →</span>
              </Link>
            </div>

            <div className="whs-firstcall">
              <div>
                <h3>Got a strange call, message or pop-up?</h3>
                <p>
                  Do not pay, do not share codes, do not let anyone into your computer.
                  Hang up, and call someone you trust first. We are here.
                </p>
              </div>
              <a href="tel:+18443134987" className="whs-btn">📞 Call 844-313-4987</a>
            </div>

            <p className="whs-closing">
              Since 2016, Saffron Guru has been the team people call when technology feels
              confusing or something does not seem right. Many of our customers have been with
              us for years, not because of a clever product, but because there is always a
              real person who picks up and cares.
            </p>
          </div>
        </section>

        {/* ============ SOURCES ============ */}
        <section className="whs-section whs-tint" id="whs-sources">
          <div className="whs-wrap whs-narrow">
            <h2 className="whs-h2 whs-h2-small">Sources</h2>
            <ol className="whs-sources">
              {SOURCES.map((s) => (
                <li key={s.n}>
                  <a href={s.url} target="_blank" rel="noopener noreferrer">{s.title}</a>
                </li>
              ))}
            </ol>
            <p className="whs-fine">
              Figures are losses reported to the FBI and FTC. Many victims never report, so true
              losses are higher. If you think you were scammed, contact your bank right away and
              report it at <a href="https://www.ic3.gov" target="_blank" rel="noopener noreferrer">ic3.gov</a> and{" "}
              <a href="https://reportfraud.ftc.gov" target="_blank" rel="noopener noreferrer">reportfraud.ftc.gov</a>.
            </p>
          </div>
        </section>
      </main>

      <AllSection />
    </>
  );
};

export default WhyHumanSupport;
