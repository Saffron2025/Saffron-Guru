import React from 'react';
import './SlowDevice.css';

const SlowDevicesFix = () => {
  return (
    <section className="slow-fix-wrapper">
      <div className="slow-fix-card">
        <div className="slow-fix-icon">🐢</div>
        <h3 className="slow-fix-title">✅ Slow Devices Fix</h3>
        <p className="slow-fix-description">
          Diagnosis and resolution of performance issues affecting computers, laptops, tablets, and smartphones.
          <br /><br />
          Service includes identifying causes such as excessive startup programs, insufficient memory, outdated software, malware, or system errors.
          <br /><br />
          Optimization steps may involve removing unnecessary files, adjusting settings, applying updates, and improving resource management to restore speed and responsiveness.
          <br /><br />
          Troubleshooting is provided for persistent slowdowns, with a system reset offered as a last resort to achieve the best possible performance.
        </p>
      </div>
    </section>
  );
};

export default SlowDevicesFix;
