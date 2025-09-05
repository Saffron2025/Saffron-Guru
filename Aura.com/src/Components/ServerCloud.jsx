import React, { useEffect, useRef } from 'react';
import { FaCloud, FaServer } from 'react-icons/fa';
import './ServerCloud.css';

const ServerCloud = () => {
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
    <section ref={ref} className="server-banner">
      <div className="server-card">
        <div className="server-header">
          {/* Icon cluster */}
          <div className="server-icon">
            <FaCloud className="i-main" />
            <FaServer className="i-sub" />
          </div>

          <h3 className="server-head">☁️ Server & Cloud Sync Support</h3>
        </div>

        <p className="server-sub">
          We set up, configure, and maintain secure server and cloud environments to keep your 
          business data accessible, synchronized, and protected. Our service includes connecting 
          on-premises servers or cloud platforms like Microsoft 365, Google Workspace, or Dropbox, 
          ensuring files are updated in real time across all authorized devices.
        </p>
        <p className="server-sub">
          We also manage user access permissions, troubleshoot sync errors, and apply best-practice 
          security measures to prevent data loss or unauthorized access — keeping your team connected 
          and productive from anywhere.
        </p>
      </div>
    </section>
  );
};

export default ServerCloud;
