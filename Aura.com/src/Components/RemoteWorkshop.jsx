import React, { useEffect, useRef } from 'react';
import { FaUsers, FaLaptop, FaShieldAlt } from 'react-icons/fa';
import './RemoteWorkshop.css';

const RemoteWorkshop = () => {
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
            <FaUsers className="i-main" />
            <FaLaptop className="i-sub sub-a" />
            <FaShieldAlt className="i-sub sub-b" />
          </div>

          <h3 className="svc-head">✅ Remote Workforce Setup</h3>
        </div>

        <p className="svc-sub">
          Enable your team to work from anywhere without sacrificing security or productivity. This service covers the setup of remote access systems, VPN connections, and collaboration tools, ensuring smooth communication and file sharing across locations. Access rights are configured for each role, security measures protect against unauthorized entry, and any remote connectivity issues are resolved quickly to keep your operations running without interruption.
        </p>
      </div>
    </section>
  );
};

export default RemoteWorkshop;
