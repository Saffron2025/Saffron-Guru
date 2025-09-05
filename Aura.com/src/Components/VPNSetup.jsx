import React, { useEffect, useRef } from 'react';
import { FaLock, FaGlobe, FaNetworkWired } from 'react-icons/fa';
import './VPNSetup.css';

const VPNSetup = () => {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => e.isIntersecting && e.target.classList.add('in')),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={ref} className="vpn-banner">
      <div className="vpn-card">
        <div className="vpn-header">
          {/* Icon cluster */}
          <div className="vpn-icon">
            <FaLock />
            <FaGlobe />
            <FaNetworkWired />
          </div>

          <h3 className="vpn-head">🔒 VPN Setup & Remote Access Help</h3>
        </div>

        <p className="vpn-sub">
          Remote work is only as safe as the connection that supports it. 
          This service ensures your team can log in from anywhere through 
          a secure, encrypted VPN, with permissions matched to their role.
        </p>
        <p className="vpn-sub">
          Integrated directly into your network, it keeps data protected while 
          eliminating connection errors, login failures, and performance issues 
          that slow teams down — so your team stays safe and productive from anywhere.
        </p>
      </div>
    </section>
  );
};

export default VPNSetup;
