import React, { useEffect, useRef } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import './NetworkSecurity.css';

const NetworkSecurity = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        }),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="network-banner">
      <div className="network-card">
        <div className="network-header">
          <div className="network-icon"><FaShieldAlt /></div>
          <h3 className="network-head">🛡️ Network Security & Firewall Setup</h3>
        </div>
        <p className="network-sub">
          We protect your business network with advanced firewall configuration, 
          access controls, and encryption protocols to block unauthorized access 
          and safeguard sensitive company data.
        </p>
        <p className="network-sub">
          Our service includes installing and configuring firewalls, setting up secure remote access, 
          segmenting networks for different departments, and monitoring for suspicious activity. 
          We also conduct regular security reviews and updates to address evolving threats — keeping 
          your systems secure without slowing down daily operations.
        </p>
      </div>
    </section>
  );
};

export default NetworkSecurity;
