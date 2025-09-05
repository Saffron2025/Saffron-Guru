import React, { useEffect, useRef } from 'react';
import { FaPrint } from 'react-icons/fa';
import './MultiplePrinter.css';

const MultiplePrinter = () => {
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
    <section ref={ref} className="printer-banner">
      <div className="printer-card">
        <div className="printer-header">
          <div className="printer-icon"><FaPrint /></div>
          <h3 className="printer-head">
            🖨️ Multiple Printer Setup, Shared Printing & Troubleshooting
          </h3>
        </div>
        <p className="printer-sub">
          We professionally configure and integrate your office printers for seamless shared access
          across the network, enabling authorized employees to print from any workstation or device
          without interruption. Our service covers print server configuration, user permission management,
          and optimization for speed, quality, and cost efficiency.
        </p>
        <p className="printer-sub">
          In addition, we provide comprehensive troubleshooting to quickly resolve print queue errors,
          driver conflicts, connectivity problems, and other technical issues — keeping your printing
          systems reliable, efficient, and ready for business.
        </p>
      </div>
    </section>
  );
};

export default MultiplePrinter;
