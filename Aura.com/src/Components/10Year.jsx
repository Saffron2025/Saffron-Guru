
import React from "react";
import { Link } from "react-router-dom";
import "./10Year.css";

const TenYear = () => {
  return (
    <section className="saffron-10-years-section">

      {/* Background ambient glow */}
      <div className="anniversary-orb anniversary-orb-one"></div>
      <div className="anniversary-orb anniversary-orb-two"></div>

      <div className="saffron-10-years-content">

        {/* LEFT - IMAGE */}
        <div className="saffron-10-years-image-column">

          <div className="saffron-10-years-image-wrapper">

            {/* Moving light sweep */}
            <span className="anniversary-light-sweep"></span>

            <img
              src="/Products/10th Year Aniv.webp"
              alt="10 Years of Saffron Guru"
              className="saffron-10-years-image"
            />

            {/* Image Corner Highlights */}
            <span className="image-corner image-corner-tl"></span>
            <span className="image-corner image-corner-tr"></span>
            <span className="image-corner image-corner-bl"></span>
            <span className="image-corner image-corner-br"></span>

          </div>

        </div>


        {/* RIGHT - CONTENT */}
        <div className="saffron-10-years-text">

          <span className="anniversary-small-label">
            OUR JOURNEY
          </span>

          <h2>
            Celebrating <span>10 Years</span> of IT Support
            &amp; Digital Security
          </h2>

          <p>
            Helping homes and small businesses stay connected,
            supported and protected since 2016.
          </p>

          <Link
            to="/our-story"
            className="anniversary-story-btn"
          >
            Read Our Story
            <span className="story-arrow">→</span>
          </Link>

        </div>

      </div>

    </section>
  );
};

export default TenYear;

