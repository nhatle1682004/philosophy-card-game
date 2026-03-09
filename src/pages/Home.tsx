import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Quote, Layers, Users, Hourglass, Infinity as InfinityIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { PHILOSOPHERS } from '../data';
import '../components/Hero.css';
import '../components/IntroSection.css';
import '../components/HomeSections.css';

const FEATURED_QUOTE_INDICES = [0, 1, 4, 10]; /* Socrates, Plato, Democritus, Marcus Aurelius */

// Banner ảnh từ thư mục public/images/Socrates/banner
const HERO_BANNERS = [
  '/images/Socrates/banner/banner1.png',
  '/images/Socrates/banner/banner2.png',
  '/images/Socrates/banner/banner3.png',
];

export const Home: React.FC = () => {
  const periods = useMemo(
    () => Array.from(new Set(PHILOSOPHERS.map((p) => p.period))).sort(),
    []
  );
  const featuredPhilosophers = useMemo(
    () => FEATURED_QUOTE_INDICES.map((i) => PHILOSOPHERS[i]).filter(Boolean),
    []
  );

  const heroSlides = HERO_BANNERS;
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    if (heroSlides.length <= 1) return;
    const id = window.setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => window.clearInterval(id);
  }, [heroSlides.length]);

  const goToSlide = (index: number) => {
    setActiveSlide((index + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero: banner full ngang, nội dung chèn chồng lên ảnh */}
      <section className="hero-section" aria-label="Banner triết học">
        {/* Lớp ảnh banner full width (từ public/images/Socrates/banner) */}
        <div className="hero-banner-bg">
          {heroSlides.map((src, index) => (
            <div
              key={src}
              className={`hero-banner-slide ${index === activeSlide ? 'is-active' : ''}`}
              aria-hidden={index !== activeSlide}
            >
              <img src={src} alt="" className="hero-banner-image" />
            </div>
          ))}
        </div>
        {/* Overlay tối để chữ đọc rõ */}
        <div className="hero-banner-overlay" aria-hidden />
        {/* Nội dung chồng lên ảnh */}
        <div className="hero-content">
          <div className="hero-left">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="hero-badge"
            >
              <Sparkles size={14} strokeWidth={2} />
              <span>Thư viện triết học mở</span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="hero-title"
            >
              <span className="hero-title-line white">Làm chủ</span>
              <span className="hero-title-line gold">nghệ thuật tư duy</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="hero-desc"
            >
              Học triết không chỉ để thuộc khái niệm, mà để rèn một cách nhìn thế giới — mạch lạc, sâu sắc và nhân văn hơn mỗi ngày.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hero-buttons"
            >
              <Link to="/gallery" className="hero-btn-primary">
                Khám phá bộ bài
              </Link>
              <Link to="/about" className="hero-btn-secondary">
                Tìm hiểu thêm
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="hero-stats"
            >
              <div className="hero-stat-item">
                <span className="hero-stat-value">50+</span>
                <span className="hero-stat-label">Triết gia</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-value">5</span>
                <span className="hero-stat-label">Thời đại</span>
              </div>
              <div className="hero-stat-item">
                <span className="hero-stat-value">∞</span>
                <span className="hero-stat-label">Trí tuệ</span>
              </div>
            </motion.div>
          </div>
        </div>
        {/* Điều khiển slider trên banner */}
        <div className="hero-slider-nav">
          <div className="hero-slider-arrows">
            <button
              type="button"
              className="hero-slider-arrow"
              onClick={() => goToSlide(activeSlide - 1)}
              aria-label="Banner trước"
            >
              <ChevronLeft size={16} strokeWidth={2} />
            </button>
            <button
              type="button"
              className="hero-slider-arrow"
              onClick={() => goToSlide(activeSlide + 1)}
              aria-label="Banner tiếp theo"
            >
              <ChevronRight size={16} strokeWidth={2} />
            </button>
          </div>
          <div className="hero-slider-dots" aria-hidden>
            {heroSlides.map((src, index) => (
              <button
                key={src}
                type="button"
                className={`hero-slider-dot ${index === activeSlide ? 'is-active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Section giới thiệu - tri thức cổ điển, sang trọng, tối giản */}
      <section className="intro-section">
        <div className="intro-inner">
          <h2 className="intro-title">Cách học mới</h2>
          <p className="intro-desc">
            Một nền tảng học tập triết học hiện đại: trực quan, có cấu trúc, đủ chiều sâu để chiêm nghiệm lâu dài.
          </p>
          <div className="intro-cards">
            <Link to="/cach-hoc/kien-thuc-sau-sac" className="intro-card intro-card-link">
              <div className="intro-card-icon-wrap">
                <BookOpen size={28} strokeWidth={1.8} />
              </div>
              <h3 className="intro-card-title">Học qua thẻ bài trực quan</h3>
              <p className="intro-card-desc">
                Mỗi lá bài là một bố cục rõ ràng: chân dung, niên đại, trường phái, khái niệm cốt lõi và danh ngôn tiêu biểu — giúp bạn nắm bắt tư tưởng trong vài phút thay vì hàng trăm trang sách.
              </p>
            </Link>
            <Link to="/cach-hoc/trich-dan-chuan-xac" className="intro-card intro-card-link">
              <div className="intro-card-icon-wrap">
                <Quote size={28} strokeWidth={1.8} />
              </div>
              <h3 className="intro-card-title">Khám phá theo dòng thời gian</h3>
              <p className="intro-card-desc">
                Từ Hy Lạp cổ đại đến hiện sinh thế kỷ 20, bạn theo dõi dòng chảy tư tưởng qua các thời đại, thấy rõ cách các triết gia đối thoại, phản biện và kế thừa lẫn nhau.
              </p>
            </Link>
            <Link to="/cach-hoc/xay-dung-bo-bai" className="intro-card intro-card-link">
              <div className="intro-card-icon-wrap">
                <Layers size={28} strokeWidth={1.8} />
              </div>
              <h3 className="intro-card-title">Kết nối các trường phái tư tưởng</h3>
              <p className="intro-card-desc">
                Xây dựng bộ bài cá nhân kết hợp Đông–Tây, cổ đại–hiện đại. Đặt các trường phái bên cạnh nhau để nhìn thấy những căng thẳng, hòa giải và chiều sâu của một thế giới quan nhất quán.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Khám phá theo thời đại */}
      <section className="home-eras" aria-labelledby="home-eras-title">
        <div className="home-eras__inner">
          <p className="home-eras__label">Bộ sưu tập</p>
          <h2 id="home-eras-title" className="home-eras__title">
            KHÁM PHÁ THEO THỜI ĐẠI
          </h2>
          <div className="home-eras__grid">
            {periods.map((period) => (
              <Link
                key={period}
                to="/gallery"
                className="home-eras__link"
              >
                {period}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trích dẫn nổi bật */}
      <section className="home-quotes" aria-labelledby="home-quotes-title">
        <div className="home-quotes__inner">
          <p className="home-quotes__label">Danh ngôn</p>
          <h2 id="home-quotes-title" className="home-quotes__title">
            TRÍCH DẪN NỔI BẬT
          </h2>
          <div className="home-quotes__grid">
            {featuredPhilosophers.map((p) => (
              <Link
                key={p.id}
                to={`/card/${p.id}`}
                className="home-quote-card"
              >
                <p className="home-quote-card__text">&quot;{p.quote}&quot;</p>
                <span className="home-quote-card__author">— {p.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
