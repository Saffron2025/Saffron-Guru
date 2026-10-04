import React from 'react';
import './SmartTVSupport.css';

const SmartTVSupport = () => {
  return (
    <section className="tv-support-wrapper">
      <div className="tv-support-card">
        <img
          className="service-photo"
          src="/Services/saffron-guru-smart-tv-streaming-device-assistance.webp"
          alt="Saffron Guru smart TV and streaming device setup help at home"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <h3 className="tv-title">✅ Smart TV & Streaming Device Assistance</h3>
        <p className="tv-description">
          Setup and configuration of Smart TVs and streaming devices such as Roku, Amazon Fire Stick, Apple TV, and Chromecast.
          <br /><br />
          Service includes account linking, app installation, network connection, display adjustments, and troubleshooting of issues such as buffering, audio problems, or app errors to ensure optimal viewing experience.
        </p>
      </div>
    </section>
  );
};

export default SmartTVSupport;
