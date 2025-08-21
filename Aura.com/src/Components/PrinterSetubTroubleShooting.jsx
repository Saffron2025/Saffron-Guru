import React from 'react';
import './PrinterSetubTroubleShooting.css';

const PrinterSupport = () => {
  return (
    <section className="printer-section">
      <div className="printer-card">
        <div className="printer-icon">🖨️</div>
        <h3 className="printer-title">✅ Printer Setup & Troubleshooting</h3>
        <p className="printer-description">
          We connect your printer to your computer, phone, or Wi-Fi network and make sure it can print, scan, and copy smoothly.
          <br /><br />
          Whether it’s paper jams, driver errors, wireless issues, or that frustrating “Printer Offline” message, we find the cause and get your printer working hassle-free.
        </p>
      </div>
    </section>
  );
};

export default PrinterSupport;
