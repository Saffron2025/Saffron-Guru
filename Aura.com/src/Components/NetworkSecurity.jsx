import React, { useEffect, useRef } from 'react';
import { FaShieldAlt } from 'react-icons/fa';
import './NetworkSecurity.css';

const NetworkSecurity = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('in');
      }),
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
          <div className="svc-icon"><FaShieldAlt /></div>
          <h3 className="svc-head">✅ Network Security &amp; Firewall Setup</h3>
        </div>
        <p className="svc-sub">
          We protect your business network with advanced firewall configuration, access controls, and encryption protocols 
          to block unauthorized access and safeguard sensitive company data. Our service includes installing and configuring firewalls, 
          setting up secure remote access, segmenting networks for different departments, and monitoring for suspicious activity. 
          We also conduct regular security reviews and updates to address evolving threats — keeping your systems secure without 
          slowing down daily operations.
        </p>
      </div>
    </section>
  );
};

export default NetworkSecurity;
