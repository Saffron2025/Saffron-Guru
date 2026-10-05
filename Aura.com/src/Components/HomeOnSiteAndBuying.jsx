import React from 'react';
import { FaPhoneAlt, FaPowerOff, FaWifi, FaSearch, FaLaptop, FaHandshake, FaBoxOpen } from 'react-icons/fa';
import './HomeOnSiteAndBuying.css';

const PHONE_HREF = 'tel:+18443134987';
const PHONE_TEXT = '+1 844-313-4987';

function Block({ id, eyebrow, title, sub, children, points, close, showCall = false }) {
  return (
    <section className="sg-hb" id={id} aria-labelledby={`${id}-title`}>
      <div className="sg-hb-inner">
        <p className="sg-hb-eyebrow">{eyebrow}</p>
        <h2 id={`${id}-title`} className="sg-hb-title">{title}</h2>
        <p className="sg-hb-sub">{sub}</p>
        <div className="sg-hb-story">{children}</div>
        <ul className="sg-hb-points">
          {points.map(({ icon: Icon, text }) => (
            <li key={text}>
              <span className="sg-hb-icon" aria-hidden="true"><Icon /></span>
              <strong>{text}</strong>
            </li>
          ))}
        </ul>
        {close && <p className="sg-hb-close">{close}</p>}
        {showCall && (
          <a className="sg-hb-call" href={PHONE_HREF}>
            <FaPhoneAlt aria-hidden="true" /> Call {PHONE_TEXT}
          </a>
        )}
      </div>
    </section>
  );
}

export default function HomeOnSiteAndBuying() {
  return (
    <>
      <Block
        id="home-onsite"
        eyebrow="When you need someone there"
        title="Some Problems Need a Knock on the Door."
        sub="Where available, we'll send a technician to your home."
        points={[
          { icon: FaPowerOff, text: "Computer won't start? We get it running or get your files out safely." },
          { icon: FaWifi, text: 'No internet at all? We get you back online.' },
          { icon: FaSearch, text: "We find out what's wrong first, then send the right help." },
        ]}
      >
        <p>
          Your computer won't turn on. Ten years of family photos are inside it. There's no second
          computer in the house to make a repair disk, and no way for anyone to connect to it remotely.
        </p>
        <p>
          That's when you need someone at your door. Call us. We find out what's wrong first, and if it
          needs a pair of hands, we send a technician to your home.
        </p>
      </Block>

      <Block
        id="home-buying-advice"
        eyebrow="Before you buy"
        title="Call Us Before You Buy. Not After."
        sub="The salesperson works for the store. We work for you."
        points={[
          { icon: FaLaptop, text: 'Laptops, phones, tablets, printers, routers and TVs' },
          { icon: FaHandshake, text: 'Honest advice, no store pressure' },
          { icon: FaBoxOpen, text: 'When it arrives, we set it up for you' },
        ]}
        close={<>Spend less. Buy right. <strong>We'll handle the rest.</strong></>}
        showCall
      >
        <p>
          Walk into any electronics store and someone will happily sell you the $1,400 laptop, the
          extended warranty and the extra software you'll never use. Most people just want to check
          email, video-call the grandkids and print a boarding pass.
        </p>
        <p>
          Tell us what you use it for. We'll tell you what to buy, what to skip, and what you already
          own that still works fine.
        </p>
      </Block>
    </>
  );
}
