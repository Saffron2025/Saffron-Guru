import React from 'react';
import './RouterNetwork.css';

const RouterNetworkSupport = () => {
  return (
    <section className="router-support-wrapper">
      <div className="router-card">
        <img
          className="service-photo"
          src="/Services/saffron-guru-router-network-setup-fixes.webp"
          alt="Saffron Guru router and home network setup and fixes over the phone"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <h3 className="router-title">✅ Router & Network – Setup & Fixes</h3>
        <p className="router-description">
          Installation and configuration of routers, modems, and home networks to ensure secure and stable connectivity.
          <br /><br />
          Service covers network naming, password setup or reset, device connections, range extension, and resolution of issues such as slow speeds, intermittent disconnections, and device pairing failures.
        </p>
      </div>
    </section>
  );
};

export default RouterNetworkSupport;
