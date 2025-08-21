import React from 'react';
import './SocialMedia.css'; // Make sure this file is created

const SocialMedia = () => {
  return (
    <section className="social-media-section">
      <h2 className="social-title">Connect with Us on Social Media</h2>
      <div className="social-buttons">
        <a
          href="https://www.facebook.com/saffronguru/reviews" // Replace with real URL later
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn facebook"
        >
          <i className="fab fa-facebook-f"></i> Facebook
        </a>

        <a
          href="https://www.google.com/search?sca_esv=fd9de876da70e2b5&sxsrf=AE3TifOqmlALBU8JzoP8AGmyl30CphKQJg:1754330000165&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E3MDbUECk1DtoCL0I2CKbx1LvkOwSvM1_BjQbdNEXtLKRkwKt8tCbWpQfQy4Y6Kx0i6yiwmFQ_jH_lVv_FXdQJvsd7yt&q=Saffron+Guru+Reviews&sa=X&ved=2ahUKEwjm8unD3PGOAxXima8BHYy9AgoQ0bkNegQIIhAD&biw=1528&bih=738&dpr=1.25#cobssid=s" // Replace with real URL later
          target="_blank"
          rel="noopener noreferrer"
          className="social-btn google"
        >
          <i className="fab fa-google"></i> Google
        </a>
      </div>
    </section>
  );
};

export default SocialMedia;
