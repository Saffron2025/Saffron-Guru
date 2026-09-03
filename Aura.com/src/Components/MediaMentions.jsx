import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import './MediaMentions.css';

const mediaHighlights = [
  { text: '10+ Years in Business', icon: '⏳' },
  { text: '5★ Rated Support, Trusted by Thousands', icon: '⭐' },
  { text: '7 Days a Week – Real Human Support', icon: '👩‍💻' },
  { text: '100,000+ Tech Issues Resolved', icon: '🛠️' },
  { text: 'ScamWatch360™ – Total Scam & Hack Defence', icon: '🛡️' },
];

const MediaMentions = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 300;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="media-section py-5">
      <Container>
        <h2 className="media-heading text-center mb-4">🔒 Why Millions Trust Us</h2>

        <div className="media-carousel-wrapper">
          <button className="arrow-btn left" onClick={() => scroll('left')}>←</button>

          <div className="media-highlight-row scrollable" ref={scrollRef}>
            {mediaHighlights.map((item, idx) => (
              <span key={idx} className="media-highlight-item">
                <span className="icon glow-icon">{item.icon}</span>
                <span className="highlight-text">{item.text}</span>
              </span>
            ))}
          </div>

          <button className="arrow-btn right" onClick={() => scroll('right')}>→</button>
        </div>
      </Container>
    </section>
  );
};

export default MediaMentions;
