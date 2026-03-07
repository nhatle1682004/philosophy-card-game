import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Shield, History, LayoutGrid } from 'lucide-react';
import '../components/About.css';

const pillars = [
  {
    icon: Shield,
    title: 'Tính xác thực',
    desc: 'Mọi trích dẫn và khái niệm đều được xác minh dựa trên các văn bản triết học gốc.',
  },
  {
    icon: History,
    title: 'Di sản',
    desc: 'Bao quát các trường phái tư tưởng phương Tây, phương Đông, cổ đại và hiện đại.',
  },
  {
    icon: Sparkles,
    title: 'Thẩm mỹ',
    desc: 'Được thiết kế với tâm hồn thư viện cổ điển để truyền cảm hứng cho sự tập trung và tôn kính.',
  },
];

const miniQuotes = [
  { text: 'Một cuộc đời không được xem xét thì không đáng sống.', author: 'Socrates' },
  { text: 'Tôi tư duy, vậy tôi tồn tại.', author: 'René Descartes' },
  { text: 'Con người bị kết án tự do.', author: 'Jean-Paul Sartre' },
];

export const About: React.FC = () => {
  return (
    <div className="about-page">
      <div className="container section-spacing">
        {/* Header: TRUYỀN THUYẾT */}
        <header className="about-header" aria-labelledby="about-title">
          <h1 id="about-title" className="about-header__title">
            Truyền thuyết
          </h1>
          <p className="about-header__desc">
            Câu chuyện về thư viện thẻ bài triết học — nơi trí tuệ nghìn năm được gói trong từng lá bài.
          </p>
        </header>

        {/* Câu chuyện (trái) + Số liệu & Hành trình (phải) */}
        <section className="about-main-row" aria-labelledby="story-title">
          <div className="about-section">
            <p className="about-section__label">Biên niên</p>
            <h2 id="story-title" className="about-section__title">
              Nguồn gốc
            </h2>
            <motion.div
              className="about-story-card"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.4 }}
            >
              <p>
                Thẻ bài Triết học ra đời từ một câu hỏi đơn giản: Làm thế nào chúng ta có thể làm cho lịch sử phức tạp của tư tưởng nhân loại trở nên hấp dẫn như một trò chơi hiện đại?
              </p>
              <p>
                Bằng cách chắt lọc hàng ngàn năm trí tuệ vào một định dạng trực quan, có thể sưu tầm, chúng tôi mong muốn hạ thấp rào cản đối với tư duy sâu sắc. Mỗi lá bài là một cánh cổng dẫn vào một cách nhìn thế giới khác nhau.
              </p>
            </motion.div>
          </div>
          <motion.aside
            className="about-side-card"
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
            aria-label="Số liệu và hành trình"
          >
            <div className="about-stats">
              <div className="about-stat">
                <span className="about-stat__value">50+</span>
                <span className="about-stat__label">Triết gia</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__value">5</span>
                <span className="about-stat__label">Thời đại</span>
              </div>
              <div className="about-stat">
                <span className="about-stat__value">2</span>
                <span className="about-stat__label">Khu vực</span>
              </div>
            </div>
            <p className="about-side-card__title">Hành trình</p>
            <ul className="about-journey-list">
              <li>Sưu tầm thẻ theo thời đại và trường phái</li>
              <li>Đọc trích dẫn và khái niệm cốt lõi</li>
              <li>Xây bộ bài mười lá cho riêng mình</li>
              <li>Chiêm nghiệm tư tưởng mỗi ngày</li>
            </ul>
          </motion.aside>
        </section>

        {/* Trích dẫn */}
        <div className="about-quote-wrap">
          <motion.blockquote
            className="about-quote"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-20px' }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="about-quote__mark" aria-hidden>
              "
            </span>
            <p className="about-quote__text">
              Trí tuệ không phải là sản phẩm của việc học ở trường mà là nỗ lực suốt đời để đạt được nó.
            </p>
          </motion.blockquote>
        </div>

        {/* Danh ngôn từ bộ sưu tập */}
        <section className="about-quotes-row" aria-labelledby="quotes-row-title">
          <p id="quotes-row-title" className="about-quotes-row__title">
            Danh ngôn từ bộ sưu tập
          </p>
          <div className="about-quotes-grid">
            {miniQuotes.map((item, i) => (
              <motion.div
                key={i}
                className="about-quote-mini"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-20px' }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
              >
                <p className="about-quote-mini__text">&quot;{item.text}&quot;</p>
                <span className="about-quote-mini__author">— {item.author}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Trụ cột cốt lõi */}
        <section className="about-pillars-wrap" aria-labelledby="pillars-title">
          <h2 id="pillars-title" className="about-pillars-title">
            Trụ cột cốt lõi
          </h2>
          <div className="about-pillars">
            {pillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={i}
                  className="about-pillar"
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-20px' }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                >
                  <Icon className="about-pillar__icon" aria-hidden />
                  <h3 className="about-pillar__title">{item.title}</h3>
                  <p className="about-pillar__desc">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </section>

        {/* CTA + chân trang */}
        <footer className="about-cta">
          <Link to="/gallery" className="about-cta__link">
            <LayoutGrid size={18} strokeWidth={2} aria-hidden />
            Khám phá phòng trưng bày
          </Link>
          <p className="about-footer-note">
            Hãy cùng theo đuổi cuộc sống tốt đẹp — một lá bài mỗi ngày.
          </p>
        </footer>
      </div>
    </div>
  );
};
