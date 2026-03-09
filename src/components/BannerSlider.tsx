import React, { useEffect, useState } from 'react';
import './BannerSlider.css';

// Public paths (under /public) – served from the app root at runtime
const BANNERS = [
  '/images/Socrates/banner/banner1.jpg',
  '/images/Socrates/banner/banner2.jpg',
  '/images/Socrates/banner/banner3.jpg',
];

export const BannerSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % BANNERS.length);
    }, 3000);
    return () => window.clearInterval(id);
  }, []);

  const goTo = (index: number) => {
    const len = BANNERS.length;
    setActiveIndex(((index % len) + len) % len);
  };

  if (!BANNERS.length) return null;

  return (
    <section className="banner-slider" aria-label="Bộ banner triết học">
      <div className="banner-slider-track">
        {BANNERS.map((src, index) => (
          <div
            key={src}
            className={`banner-slide ${index === activeIndex ? 'is-active' : ''}`}
          >
            <img src={src} alt="" className="banner-image" />
          </div>
        ))}
      </div>

      <div className="banner-controls">
        <button
          type="button"
          className="banner-arrow banner-arrow--left"
          onClick={() => goTo(activeIndex - 1)}
          aria-label="Banner trước"
        >
          ‹
        </button>
        <div className="banner-dots" aria-hidden>
          {BANNERS.map((src, index) => (
            <button
              key={src}
              type="button"
              className={`banner-dot ${index === activeIndex ? 'is-active' : ''}`}
              onClick={() => goTo(index)}
            />
          ))}
        </div>
        <button
          type="button"
          className="banner-arrow banner-arrow--right"
          onClick={() => goTo(activeIndex + 1)}
          aria-label="Banner tiếp theo"
        >
          ›
        </button>
      </div>
    </section>
  );
};

