import React from 'react';
import './SoftwareInstallation.css';

const SoftwareSupport = () => {
  return (
    <section className="software-support-wrapper">
      <div className="software-card">
        <img
          className="service-photo"
          src="/Services/saffron-guru-software-installation-support.webp"
          alt="Saffron Guru software installation and support for home computers"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <h3 className="software-title">✅ Software Installation, Fixes & Support (MS Office, Antivirus, Quicken, etc.)</h3>
        <p className="software-description">
          Installation and configuration of essential software including Microsoft Office, Internet Security Programs, Quicken, and more.
          <br /><br />
          Service covers activation, updates, and customization to user requirements, as well as diagnosing and resolving software issues such as crashes, errors, and performance problems to ensure smooth and reliable operation.
        </p>
      </div>
    </section>
  );
};

export default SoftwareSupport;
