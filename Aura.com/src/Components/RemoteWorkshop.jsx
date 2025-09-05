import React, { useEffect, useRef } from 'react';
import { FaUsers, FaLaptop, FaShieldAlt } from 'react-icons/fa';
import './RemoteWorkshop.css';

const RemoteWorkshop = () => {
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
    <section ref={ref} className="workshop-banner">
      <div className="workshop-card">
        <div className="workshop-header">
          {/* Icon cluster */}
          <div className="workshop-icon">
            <FaUsers />
            <FaLaptop />
            <FaShieldAlt />
          </div>

          <h3 className="workshop-head">👥💻🛡️ Remote Workforce Setup</h3>
        </div>

        <p className="workshop-sub">
          Enable your team to work from anywhere without sacrificing security or productivity. 
          This service covers the setup of remote access systems, VPN connections, and collaboration tools, 
          ensuring smooth communication and file sharing across locations.
        </p>
        <p className="workshop-sub">
          Access rights are configured for each role, security measures protect against unauthorized entry, 
          and any remote connectivity issues are resolved quickly to keep your operations running without interruption.
        </p>
      </div>
    </section>
  );
};

export default RemoteWorkshop;
