import React, { useMemo } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Sparkles, BookOpen, Quote, Layers } from 'lucide-react';
import { PHILOSOPHERS } from '../data';
import '../components/Hero.css';
import '../components/IntroSection.css';
import '../components/HomeSections.css';

const FEATURED_QUOTE_INDICES = [0, 1, 4, 10]; /* Socrates, Plato, Democritus, Marcus Aurelius */

export const Home: React.FC = () => {
  const periods = useMemo(
    () => Array.from(new Set(PHILOSOPHERS.map((p) => p.period))).sort(),
    []
  );
  const featuredPhilosophers = useMemo(
    () => FEATURED_QUOTE_INDICES.map((i) => PHILOSOPHERS[i]).filter(Boolean),
    []
  );
  return (
    <div className="relative w-full overflow-x-hidden">
      {/* Hero Section - thiết kế chuẩn: gradient tím–tím xanh, container 1200px, căn trái */}
      <section className="hero-section">
        <div className="hero-bg" aria-hidden />
        <div className="hero-ambient" aria-hidden />

        <div className="hero-content">
          {/* Badge: icon trái + "Thư viện vĩ đại đã mở cửa", viền vàng, bo góc tròn */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="hero-badge"
          >
            <Sparkles size={14} strokeWidth={2} />
            <span>Thư viện vĩ đại đã mở cửa</span>
          </motion.div>

          {/* Tiêu đề 3 dòng rõ ràng: LÀM CHỦ (trắng) / NGHỆ THUẬT TƯ (vàng) / DUY (trắng) */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hero-title"
          >
            <span className="hero-title-line white">Làm Chủ</span>
            <span className="hero-title-line gold">Nghệ Thuật Tư</span>
            <span className="hero-title-line white">Duy</span>
          </motion.h1>

          {/* Đoạn mô tả: nghiêng, xám sáng, rộng 500–600px */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hero-desc"
          >
            &quot;Một cuộc đời không được xem xét thì không đáng sống.&quot; — Thu thập, nghiên cứu và làm chủ trí tuệ của các thời đại thông qua trò chơi thẻ bài triết học đỉnh cao.
          </motion.p>

          {/* Hai nút cùng hàng, cách nhau 16px */}
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

          {/* Hàng thống kê: cùng một hàng, khoảng cách đều */}
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
      </section>

      {/* Section giới thiệu - tri thức cổ điển, sang trọng, tối giản */}
      <section className="intro-section">
        <div className="intro-inner">
          <h2 className="intro-title">Cách học mới</h2>
          <p className="intro-desc">
            Triết học không nhất thiết phải là những cuốn sách bụi bặm. Tiếp cận những khái niệm cốt lõi của các bộ óc vĩ đại nhất lịch sử trong một định dạng trực quan, sinh động.
          </p>
          <div className="intro-cards">
            <Link to="/cach-hoc/kien-thuc-sau-sac" className="intro-card intro-card-link">
              <div className="intro-card-icon-wrap">
                <BookOpen size={28} strokeWidth={1.8} />
              </div>
              <h3 className="intro-card-title">Kiến Thức Sâu Sắc</h3>
              <p className="intro-card-desc">
                Mỗi lá bài là một bản tóm tắt tinh túy: thời đại, trường phái và khái niệm cốt lõi của từng triết gia. Học qua hình ảnh và cấu trúc rõ ràng thay vì hàng trăm trang sách.
              </p>
            </Link>
            <Link to="/cach-hoc/trich-dan-chuan-xac" className="intro-card intro-card-link">
              <div className="intro-card-icon-wrap">
                <Quote size={28} strokeWidth={1.8} />
              </div>
              <h3 className="intro-card-title">Trích Dẫn Chuẩn Xác</h3>
              <p className="intro-card-desc">
                Mỗi thẻ mang một câu danh ngôn đã được ghi chép trong lịch sử triết học. Từ Socrates đến Sartre, bạn tiếp xúc trực tiếp với tư tưởng gốc — ngắn gọn, dễ nhớ, dễ chiêm nghiệm.
              </p>
            </Link>
            <Link to="/cach-hoc/xay-dung-bo-bai" className="intro-card intro-card-link">
              <div className="intro-card-icon-wrap">
                <Layers size={28} strokeWidth={1.8} />
              </div>
              <h3 className="intro-card-title">Xây Dựng Bộ Bài</h3>
              <p className="intro-card-desc">
                Chọn mười nhà tư tưởng làm &quot;bộ bài&quot; của riêng bạn. Kết hợp Đông–Tây, cổ đại–hiện đại để tạo nên bộ sưu tập triết học phản chiếu thế giới quan và mục tiêu học tập của bạn.
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
            Khám phá theo thời đại
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
            Trích dẫn nổi bật
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
