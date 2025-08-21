import React from "react";
import "./TimeTrackingBanner.css";

const TimeTrackingBanner = () => {
  return (
    <section className="time-banner">
      <div className="time-overlay"></div>

      <div className="time-content">
        <h2 className="time-heading">⏱️ Time Tracking</h2>
        <p className="time-text">
          Track exactly when your child is online, how long they spend on each device, 
          and what they’re doing during that time. NetHaven™ compiles detailed usage 
          patterns across all devices so you can spot unhealthy habits, late-night 
          browsing, or excessive screen time before it becomes a problem.
          <br /><br />
          With clear reports, you can guide your child toward a healthier balance 
          between online and offline life.
        </p>
      </div>
    </section>
  );
};

export default TimeTrackingBanner;
