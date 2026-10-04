import React from 'react';
import './EmailOutlook.css';

const EmailSupport = () => {
  return (
    <section className="email-support-wrapper">
      <div className="email-support-card">
        <img
          className="service-photo"
          src="/Services/saffron-guru-email-outlook-setup-support.webp"
          alt="Saffron Guru email and Outlook setup and support on laptop and phone"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <h3 className="email-title">✅ Email & Outlook Setup & Support</h3>
        <p className="email-description">
          Configuration of new and existing email accounts, including Microsoft Outlook and other popular email platforms.
          <br /><br />
          Service covers account setup, synchronization across devices, contact and calendar integration, security settings, and resolution of issues such as login errors, sending/receiving failures, and spam filtering problems.
        </p>
      </div>
    </section>
  );
};

export default EmailSupport;
