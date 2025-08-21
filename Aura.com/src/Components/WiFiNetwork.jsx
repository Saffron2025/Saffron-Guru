import React, { useEffect, useRef } from 'react';
import { FaWifi } from 'react-icons/fa';
import './WiFiNetwork.css';

const WiFiNetwork = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="svc-banner">
      <div className="svc-bg" />
      <div className="svc-card">
        <div className="svc-header">
          <div className="svc-icon"><FaWifi /></div>
          <h3 className="svc-head">✅ Wi-Fi Network & Access Point Configuration</h3>
        </div>
        <p className="svc-sub">
          We set up and configure a secure, high-performance wireless network for your business, ensuring strong coverage and fast, reliable connections in every workspace. This includes selecting the right hardware, configuring routers and access points, optimizing signal strength, and applying security protocols to protect your data. Whether you have a single office or multiple locations, we make sure your Wi-Fi supports every employee, device, and business application without interruptions.
        </p>
      </div>
    </section>
  );
};

export default WiFiNetwork;
