import React from "react";
import "./MostParentalCantrollers.css";

const MostParentalCantrollers = () => {
  return (
    <section className="nethaven-banner">
      <div className="nethaven-overlay"></div>

      <div className="nethaven-wrapper">
        {/* Left Image */}
        <div className="nethaven-image">
          <img
            src="/Hero/MostParentalCantrollers.WebP" 
            alt="NetHaven Parental Control Protection"
            loading="lazy"
          />
        </div>

        {/* Right Content */}
        <div className="nethaven-content">
          <h2 className="nethaven-heading">
            Most Parental Controls Can Be Outsmarted.
            <br /> <span className="highlight-accent">NetHaven™ Can’t.</span>
          </h2>
          <p className="nethaven-text">
            Kids today are tech-savvy. They know loopholes, they find workarounds,
            and they can slip into unsafe spaces without even realizing it.
            <br />
            <strong>
              NetHaven™ goes beyond basic parental controls — closing the gaps and
              adapting instantly to new threats.
            </strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MostParentalCantrollers;
