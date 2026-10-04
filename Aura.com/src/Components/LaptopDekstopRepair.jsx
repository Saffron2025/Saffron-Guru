import React from 'react';
import './LaptopDekstopRepair.css'

const LaptopDesktopRepair = () => {
  return (
    <section className="repair-section">
      <div className="repair-card">
        <img
          className="service-photo"
          src="/Services/saffron-guru-laptop-desktop-setup-repair.webp"
          alt="Saffron Guru laptop and desktop setup and repair with a live remote technician"
          width="1200"
          height="800"
          loading="lazy"
          decoding="async"
        />
        <h3 className="repair-title">✅ Laptop/Desktop Setup & Repair</h3>
        <p className="repair-description">
          We set up your new or existing computer so it’s ready to use, install essential software, and transfer your files safely.
          <br /><br />
          From small glitches to the most stubborn problems, we work patiently until your computer runs the way it should.
          <br /><br />
          Unlike others who tell you to “just buy a new one,” we fight for every fix — no matter how tough the job.
        </p>
      </div>
    </section>
  );
};

export default LaptopDesktopRepair;
