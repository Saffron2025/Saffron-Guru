import React, { useEffect, useRef } from 'react';
import { FaLock, FaGlobe, FaNetworkWired } from 'react-icons/fa';
import './VPNSetup.css';

const VPNSetup = () => {
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
          {/* Icon cluster */}
          <div className="svc-icon">
            <FaLock className="i-main" />
            <FaGlobe className="i-sub sub-a" />
            <FaNetworkWired className="i-sub sub-b" />
          </div>

          <h3 className="svc-head">✅ VPN Setup & Remote Access Help</h3>
        </div>

        <p className="svc-sub">
          Remote work is only as safe as the connection that supports it. This service ensures your team can log in from anywhere through a secure, encrypted VPN, with permissions matched to their role. Integrated directly into your network, it keeps data protected while eliminating the connection errors, login failures, and performance issues that slow teams down.
        </p>
      </div>
    </section>
  );
};

export default VPNSetup;
