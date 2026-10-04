import React from 'react';
import './IPhoneAndroid.css';

const MobileDeviceSupport = () => {
  return (
    <section className="mobile-support-wrapper">
      <div className="mobile-support-card">
        <img
          className="service-photo"
          src="/Services/saffron-guru-iphone-android-phone-tablet-help.webp"
          alt="Saffron Guru iPhone and Android phone and tablet help with a remote technician"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <h3 className="mobile-title">✅ iPhone & Android Phone/Tablet Help</h3>
        <p className="mobile-description">
          Assistance with setup, configuration, and optimization of iPhone, iPad, and Android devices.
          <br /><br />
          Service includes account setup, app installation, data transfer, email and messaging configuration, security settings, performance tuning, and resolution of common issues such as connectivity problems, storage management, and app errors.
        </p>
      </div>
    </section>
  );
};

export default MobileDeviceSupport;
