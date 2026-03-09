import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Landmark, LayoutGrid, ScrollText, Compass, Menu, X } from 'lucide-react';
import './Navbar.css';

const GOLD = '#d4af37';

const navItems = [
  { path: '/', label: 'Thánh Điện', icon: Landmark },
  { path: '/gallery', label: 'Bộ Bài', icon: LayoutGrid },
  { path: '/kham-pha-triet-gia', label: 'Khám phá triết gia', icon: Compass },
  { path: '/about', label: 'Truyền Thuyết', icon: ScrollText },
];

export const Navbar: React.FC = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header className="navbar-header sticky top-0 z-[100] w-full backdrop-blur-md">
      <div className="navbar-inner">
        <Link
          to="/"
          className="navbar-logo"
          onClick={() => setMobileOpen(false)}
        >
          <img src="/logo.png" alt="" className="navbar-logo-icon" />
          <span className="navbar-logo-text">Triết Học TCG</span>
        </Link>

        <nav className="desktop-nav">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`nav-link ${isActive ? 'is-active' : ''}`}
              >
                <div className="nav-link-icon-wrap">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <span>{item.label}</span>
                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="nav-link-underline"
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <button
          type="button"
          aria-label={mobileOpen ? 'Đóng menu' : 'Mở menu'}
          onClick={() => setMobileOpen((o) => !o)}
          className="hamburger-btn p-2 rounded-lg transition-colors"
          style={{ color: GOLD, width: 40, height: 40 }}
        >
          {mobileOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="navbar-mobile-overlay md:hidden"
          >
            <nav className="navbar-mobile-inner">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileOpen(false)}
                    className={`navbar-mobile-link ${isActive ? 'is-active' : ''}`}
                  >
                    <div className="nav-link-icon-wrap">
                      <Icon size={18} strokeWidth={2} />
                    </div>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
