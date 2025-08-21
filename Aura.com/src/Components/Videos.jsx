import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Videos.css';

const videoIds = [
  'B3TRW0vQ-iY',
  'lB-l2pfJJbo',
  'u5l_PgazD-Q',
  '5fCDxqYR3BM',
  'UVM5d1zuZKM',
  'rcEQ8VQkgLQ',
  'l5Xi7UFYnas',
];

const newsLinks = [
  {
    icon: '/Hero/FoxNews.WebP',
    label: 'Fox: Social Security Scam',
    url: '/Fox',
  },
  {
    icon: '/Hero/CBS.WebP',
    label: 'CBS: Eagan Couple Nearly Scammed',
    url: '/CBS',
  },
  {
    icon: '/Hero/ABC11.WebP',
    label: 'ABC11: Tech Support Scam',
    url: '/ABC11',
  },
  {
    icon: '/Hero/NewYorkPolice.WebP',
    label: 'New York PD: Scam Alert',
    url: '/NewYorkPolice',
  },
  {
    icon: '/Hero/ABCNational.WebP',
    label: 'ABC: $4.8B Lost by Seniors',
    url: '/ABCNational',
  },
];

const Videos = () => {
  const sliderRef = useRef();
  const navigate = useNavigate();
  const [activeVideo, setActiveVideo] = useState(null);

  const scrollLeft = () => {
    sliderRef.current.scrollBy({ left: -1000, behavior: 'smooth' });
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 1000, behavior: 'smooth' });
  };

  return (
    <>
      {/* 🎥 Videos Section */}
      <div className="videos-section">
        <div className="video-heading">
          <span className="emoji-alert">🚨</span>
          <span className="heading-line">
            <h6>It Happened to Them —</h6>
            <em> Don’t Let It Happen to You or Your Loved Ones.</em>
          </span>
          <div className="subtitle">
            <span role="img" aria-label="chart">📊</span> News Reports & FBI Scam Stats Below
          </div>
        </div>

        <div className="carousel-container">
          <button className="nav-btn left-btn" onClick={scrollLeft}>
            &#8592;
          </button>

          <div className="slider-wrapper" ref={sliderRef}>
            {videoIds.map((id, index) => (
              <div className="video-wrapper" key={index}>
                {activeVideo === id ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${id}?autoplay=1`}
                    title={`YouTube Video ${index}`}
                    frameBorder="0"
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : (
                  <div
                    className="video-thumbnail"
                    onClick={() => setActiveVideo(id)}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt="Video thumbnail"
                    />
                    <div className="play-btn">▶</div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className="nav-btn right-btn" onClick={scrollRight}>
            &#8594;
          </button>
        </div>
      </div>

      {/* 📰 News Links Bar Below Videos */}
      <div className="news-links-wrapper">
        <div className="news-links-bar">
          {newsLinks.map((item, index) => (
            <div
              key={index}
              className="news-link"
              onClick={() => navigate(item.url)}
            >
              <img src={item.icon} alt="news" className="news-icon" />
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Videos;
