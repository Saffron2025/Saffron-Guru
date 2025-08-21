import React from 'react';
import './MonthlyDeviceSupport.css';

const MonthlyHealthCheck = () => {
  return (
    <section className="health-check-wrapper">
      <div className="health-check-card">
        <div className="health-check-icon">🧑‍⚕️</div>
        <h3 className="health-check-title">✅ Monthly Device Health Checkups & Support</h3>
        <p className="health-check-description">
          Comprehensive monthly service to keep your computer, laptop, smartphone, tablet, and printer running at peak performance.
          <br /><br />
          Each checkup includes full system scans, performance tune-ups, security and privacy inspections, and removal of unnecessary files or potential threats.
          <br /><br />
          Devices are monitored for early signs of problems to prevent sudden breakdowns. Any issues found are resolved on the spot, and unlimited tech support is available throughout the month for questions, fixes, or guidance — ensuring all your devices stay secure, fast, and reliable all year round.
        </p>
      </div>
    </section>
  );
};

export default MonthlyHealthCheck;
