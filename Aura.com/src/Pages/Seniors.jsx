import React from "react";
import { Link } from "react-router-dom";
import AppNavbar from "../Components/AppNavbar";
import AllSection from "../Components/AllSection";
import {
  FaShieldAlt,
  FaPhoneAlt,
  FaHeadset,
  FaLaptop,
  FaUserShield,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaUsers,
  FaCheck,
  FaHandHoldingHeart,
  FaIdCard,
  FaChartLine,
} from "react-icons/fa";
import "./Seniors.css";

const PHONE_HREF = "tel:+18443134987";
const PHONE_TEXT = "+1 844-313-4987";
const FBI_URL = "https://www.fbi.gov/news/press-releases/cryptocurrency-and-ai-scams-bilk-americans-of-billions";

const INCLUDED = [
  {
    icon: FaHeadset,
    title: "A patient real person, 7 days a week",
    text: "No robots, no rushing, no tech words. You call, a friendly technician picks up and stays with you until it works.",
  },
  {
    icon: FaLaptop,
    title: "Help with every device you own",
    text: "Computer, laptop, iPhone, Android, tablet, printer, Wi-Fi, email, smart TV. One number for all of it.",
  },
  {
    icon: FaShieldAlt,
    title: "Protection that goes way beyond antivirus",
    text: "Antivirus only looks for known viruses and bad files. DefendMe PRO™ Security Solutions goes much further. It blocks remote access and controls downloads, so even if a scammer is smooth enough to talk you into it, they still can't get into your computer. It also stops fake pop-ups and scam websites.",
  },
  {
    icon: FaIdCard,
    title: "Identity theft protection, plus what it can't do alone",
    text: "We set you up with identity theft protection from a trusted provider, so you're alerted if someone tries to use your name, Social Security number or bank details. But identity theft protection can't stop social engineering, the tricks modern scammers use to fool you directly: fake invoices, fake pop-ups, fake calls from \"your bank.\" That's why you also get DefendMe PRO™ Security Solutions (with a built-in scam blocker and real people on call 7 days a week).",
  },
  {
    icon: FaUserShield,
    title: "No stranger gets into your computer",
    text: 'Scammers ask you to "let them in" to fix a problem. We lock that door, so a caller can ask all day and still get nowhere.',
  },
  {
    icon: FaCalendarCheck,
    title: "We check on you every 30 days",
    text: "You don't have to remember to call us. We reach out every month to make sure everything is still safe and working.",
  },
  {
    icon: FaChartLine,
    title: "Check before you invest",
    text: "Investment scams are among the costliest scams for people over 60. They usually start with a friendly message, a \"can't-lose\" crypto deal or a professional-looking trading website. Before you send money, call us. We look at the digital footprints scammers can't hide: how old the website is, who registered it, what the app's reputation is, and what other people have reported. Then we tell you plainly if we see the warning signs of a scam.",
    strong: "A five-minute call can save your life savings.",
    note: "Please note: we are not investment advisors and we don't recommend investments. We only help you spot fake websites, apps and offers, because we don't want anyone to lose their savings to a scam.",
  },
  {
    icon: FaChalkboardTeacher,
    title: "We teach you the tricks, in plain English",
    text: "We show you how today's scams work, so you can spot a fake call, text or email before it costs you anything.",
  },
];

const STEPS = [
  { title: "Call us", text: "Tell us what is going on, in your own words. Mention you are 60 or older and ask about senior pricing." },
  { title: "We fix and protect", text: "We fix the problem with you on the line and set up your protection, explaining every step as we go." },
  { title: "We stay with you", text: "Every 30 days we check in. Anytime something looks odd, you call us first and a real person answers." },
];

const FAQS = [
  {
    q: "Do you offer a senior discount on tech support?",
    a: "Yes. Silver Shield for Seniors gives customers aged 60 and older special pricing on our tech support and online protection plans. Call +1 844-313-4987 and we will explain the options, with no pressure. Offers may vary.",
  },
  {
    q: "I'm not good with computers. Is that a problem?",
    a: "Not at all. Most of the people we help say the same thing. We go at your pace, use plain English and never make you feel rushed or silly for asking.",
  },
  {
    q: "Is remote tech support safe for seniors?",
    a: "With us, yes. Nothing happens on your computer without your permission, you can watch everything we do, and you can end the session with one click. We never ask for gift cards, cryptocurrency or wire transfers. Anyone who does is not Saffron Guru.",
  },
  {
    q: "What devices and software can you help with?",
    a: "Windows computers, Macs, laptops, iPhones, Android phones, iPads and tablets, printers, Wi-Fi, email and smart TVs. We also help with software: Microsoft Office (Word, Excel, Outlook), accounting programs like QuickBooks and Quicken, Zoom and FaceTime, banking and shopping apps, and most other everyday programs.",
  },
  {
    q: "Can my son or daughter set this up for me?",
    a: "Yes. Many of our customers are signed up by their adult children. Family members can call us, set everything up and stay in the loop, while you get a patient person to call any time.",
  },
  {
    q: "What should I do if a pop-up says my computer is infected?",
    a: "If you're a Saffron Guru customer, this is very unlikely to happen. We protect you in layers: blockers in your web browser, protection on the computer itself, and remote access blocking, so fake warnings rarely get through. But if one ever does show up, don't call the number on the screen, and don't let anyone into your computer. Close the page, or turn the computer off if it won't close, and call us at +1 844-313-4987. We'll check it with you. Not a customer yet? Call us anyway. If you're looking at a scary screen right now, getting you safe comes first. Everything else can wait.",
  },
];

const FAQ_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map(({ q, a }) => ({
    "@type": "Question",
    name: q,
    acceptedAnswer: { "@type": "Answer", text: a },
  })),
};

function SilverBadge() {
  return (
    <span className="sr-badge">
      <FaShieldAlt aria-hidden="true" /> Silver Shield for Seniors
    </span>
  );
}

export default function Seniors() {
  return (
    <>
      <AppNavbar />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_SCHEMA) }} />
      <main className="sr-page">
        {/* HERO */}
        <section className="sr-hero">
          <div className="sr-hero-inner">
            <SilverBadge />
            <h1 className="sr-title">Tech Support and Scam Protection for Seniors</h1>
            <p className="sr-sub">
              Patient, friendly help with your computer, phone and Wi-Fi, plus advanced security that
              blocks the scams targeting people over 60. One number. A real person. Every time.
            </p>
            <div className="sr-offer">
              <p className="sr-offer-kicker">For customers 60 and older</p>
              <p className="sr-offer-title">Senior Pricing Available</p>
              <p className="sr-offer-text">Call us, tell us you're 60 or older, and we'll explain your options. No pressure, no tech talk.</p>
              <a className="sr-call" href={PHONE_HREF}><FaPhoneAlt aria-hidden="true" /> Call {PHONE_TEXT}</a>
            </div>
          </div>
        </section>

        {/* STORY */}
        <section className="sr-section">
          <h2 className="sr-h2">Technology wasn't built with you in mind. <span>We were.</span></h2>
          <div className="sr-story">
            <p>
              You didn't grow up with passwords, updates and pop-ups. Now the bank wants an app, the doctor
              wants a portal, and the grandkids want a video call. And every few days a message shows up
              that looks real, sounds urgent, and isn't.
            </p>
            <p>
              Scammers know this. They count on you being alone with the screen. With Silver Shield,
              you never are. You have a patient person who picks up, fixes it with you, and keeps the
              scammers out.
            </p>
          </div>
        </section>

        {/* FBI STAT */}
        <section className="sr-stat">
          <div className="sr-stat-inner">
            <p className="sr-stat-num">$7.7 billion</p>
            <p className="sr-stat-text">
              lost to online crime by Americans aged 60 and older in 2025, more than any other age group (FBI).
            </p>
            <a className="sr-stat-link" href={FBI_URL} target="_blank" rel="noopener noreferrer">Verify on FBI.gov ↗</a>
          </div>
        </section>

        {/* INCLUDED */}
        <section className="sr-section">
          <h2 className="sr-h2">What Silver Shield for Seniors includes</h2>
          <ul className="sr-cards">
            {INCLUDED.map(({ icon: Icon, title, text, strong, note }) => (
              <li key={title}>
                <span className="sr-icon" aria-hidden="true"><Icon /></span>
                <div>
                  <h3>{title}</h3>
                  <p>{text}</p>
                  {strong && <p className="sr-card-strong">{strong}</p>}
                  {note && <p className="sr-card-note">{note}</p>}
                </div>
              </li>
            ))}
          </ul>
        </section>

        {/* HOW IT WORKS */}
        <section className="sr-section">
          <h2 className="sr-h2">How it works</h2>
          <ol className="sr-steps">
            {STEPS.map((s, i) => (
              <li key={s.title}>
                <span className="sr-step-num">{i + 1}</span>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAMILY */}
        <section className="sr-family">
          <div className="sr-family-inner">
            <span className="sr-icon sr-icon--lg" aria-hidden="true"><FaUsers /></span>
            <div>
              <h2 className="sr-h2 sr-h2--left">Looking after Mom or Dad?</h2>
              <p>
                You can't be there every time the printer stops or a scary message pops up. We can.
                Set up Silver Shield for your parent and they get a patient person to call, while you get
                peace of mind.
              </p>
              <ul className="sr-checks">
                <li><FaCheck aria-hidden="true" /> You can call and set it up for them</li>
                <li><FaCheck aria-hidden="true" /> They get help in plain English, with no judgment</li>
                <li><FaCheck aria-hidden="true" /> We help them avoid fake calls, pop-ups and websites</li>
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="sr-section">
          <h2 className="sr-h2">Questions seniors and families ask us</h2>
          <div className="sr-faq">
            {FAQS.map(({ q, a }) => (
              <details key={q}>
                <summary>{q}</summary>
                <p>{a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="sr-cta">
          <span className="sr-icon sr-icon--lg" aria-hidden="true"><FaHandHoldingHeart /></span>
          <h2 className="sr-h2">Scammers count on you being alone. <span>With Saffron Guru, you never are.</span></h2>
          <a className="sr-call" href={PHONE_HREF}><FaPhoneAlt aria-hidden="true" /> Call {PHONE_TEXT}</a>
          <p className="sr-small">
            Also see our <Link to="/for-your-home">home tech support</Link>,{" "}
            <Link to="/DefendPro">DefendMe PRO™ Security Solutions</Link> and{" "}
            <Link to="/veterans">Veterans Special Offer</Link>.
          </p>
        </section>
      </main>
      <AllSection />
    </>
  );
}
