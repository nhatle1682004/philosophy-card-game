import React from 'react';
import { Navbar } from './Navbar';
import { motion, AnimatePresence } from 'motion/react';
import { useLocation, Link } from 'react-router-dom';
import './Footer.css';

const footerNav = [
  { to: '/', label: 'Thánh Điện' },
  { to: '/gallery', label: 'Bộ Bài' },
  { to: '/about', label: 'Truyền Thuyết' },
  { to: '/deck', label: 'Nhà Chiến Lược' },
];

export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();

  return (
    <div className="min-h-screen flex flex-col bg-[#0d0520] text-white overflow-x-hidden">
      <Navbar />
      <main className="flex-grow w-full overflow-x-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="w-full flex-1 flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <h2 className="footer-title">Thẻ bài triết học</h2>
          <p className="footer-desc">
            Một thánh điện tri thức kỹ thuật số giúp bạn khám phá trí tuệ nhân loại thông qua các thẻ bài triết học.
          </p>
          <nav className="footer-nav" aria-label="Điều hướng chính">
            {footerNav.map(({ to, label }) => (
              <Link key={to} to={to} className="footer-nav__link">
                {label}
              </Link>
            ))}
          </nav>
          <p className="footer-eras">
            Khám phá theo thời đại: Hy Lạp cổ đại · La Mã · Trung cổ · Khai sáng · Hiện đại · Thế kỷ 20 · Phương Đông · Ấn Độ · Đương đại
          </p>
          <nav className="footer-links" aria-label="Liên kết pháp lý">
            <a href="#terms">Điều khoản trí tuệ</a>
            <a href="#privacy">Quyền riêng tư tư tưởng</a>
            <a href="#contact">Liên hệ học viện</a>
          </nav>
          <p className="footer-ai-note">
            Phụ lục AI: Trang web này được thiết kế và tinh chỉnh với sự hỗ trợ của trợ lý lập trình AI (GPT) thông qua môi trường Cursor.
          </p>
        </div>
      </footer>
    </div>
  );
};
