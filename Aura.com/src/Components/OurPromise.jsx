import React from 'react';
import {
  FaUserShield,
  FaBan,
  FaDownload,
  FaLock,
  FaHeadset,
  FaCalendarCheck,
  FaChalkboardTeacher,
  FaPhoneAlt,
} from 'react-icons/fa';
import './OurPromise.css';

const PROTECTIONS = [
  {
    icon: FaUserShield,
    title: 'No stranger gets into your computer',
    text: 'Remote access is blocked. A caller can ask all day; they still cannot take over your screen.',
  },
  {
    icon: FaBan,
    title: 'Fake scam pop-ups, blocked',
    text: 'No more scary "Your computer is infected, call this number" screens. We stop them before you see them.',
  },
  {
    icon: FaDownload,
    title: 'Nobody can talk you into a download',
    text: 'Download controls mean a scammer cannot make you install their "fix" or their spy tool.',
  },
  {
    icon: FaLock,
    title: 'Your devices, locked down',
    text: 'We harden your settings so intruders find the doors shut on your computer, phone and tablet.',
  },
  {
    icon: FaHeadset,
    title: 'Real people, 7 days a week',
    text: 'Not sure about an email, a call or a message? Call us first. A patient person picks up.',
  },
  {
    icon: FaCalendarCheck,
    title: 'We check on you every 30 days',
    text: 'You do not have to remember to call us. We call you to make sure everything is still safe.',
  },
  {
    icon: FaChalkboardTeacher,
    title: 'We teach you the tricks',
    text: 'We show you, in plain words, how scammers work, so you can spot them before they reach you.',
  },
];

export default function OurPromise() {
  return (
    <section className="sg-promise" aria-labelledby="sg-promise-title">
      <div className="sg-promise-inner">
        <p className="sg-promise-eyebrow">We're in your corner</p>
        <h2 id="sg-promise-title" className="sg-promise-title">
          Technology Can't Stop a Phone Call. <span>People Can.</span>
        </h2>

        <blockquote className="sg-promise-story">
          The major antivirus companies sell software that detects a signature file. But when
          an 82-year-old gets an email saying "Your bank account has been debited $899," calls
          the 1-800 number, and a polite voice convinces them to open their screen and buy gift
          cards, no antivirus in the world stops that.
        </blockquote>

        <p className="sg-promise-lead">
          That's why Saffron Guru puts <strong>real people</strong> between you and the scammers.
          Here is what we do for you:
        </p>

        <ul className="sg-promise-grid">
          {PROTECTIONS.map(({ icon: Icon, title, text }) => (
            <li className="sg-promise-card" key={title}>
              <span className="sg-promise-icon" aria-hidden="true"><Icon /></span>
              <div>
                <h3>{title}</h3>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>

        <p className="sg-promise-close">
          Scammers count on you being alone. <strong>With Saffron Guru, you never are.</strong>
        </p>

        <a className="sg-promise-call" href="tel:+18443134987">
          <FaPhoneAlt aria-hidden="true" /> Call 844-313-4987
        </a>

        <p className="sg-promise-family">Looking after a parent? We'll treat them like family.</p>
      </div>
    </section>
  );
}
