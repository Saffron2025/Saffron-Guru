import React from "react";
import { Container } from "react-bootstrap";
import "./SmartScreenTimeBanner.css";

const SmartScreenTimeBanner = () => {
  return (
    <section className="screen-banner">
      <div className="screen-overlay"></div>

      <Container>
        <div className="screen-content">
          <h2 className="screen-heading">⏳ Smart Screen Time Management</h2>
          <p className="screen-text">
            NetHaven™ gives you full control over when and how long your child can use each device. 
            Set daily or weekly screen time limits, create custom schedules for homework and bedtime, 
            and instantly pause devices when it’s time for family or study.
            <br /><br />
            Powered by AI, Smart Screen Time Management adapts to your rules and ensures kids develop 
            healthier online habits — without arguments or constant supervision.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default SmartScreenTimeBanner;
