import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { PHILOSOPHERS } from '../data';
import { PhilosopherCard } from '../components/PhilosopherCard';
import { Search, Filter, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import '../components/GallerySectionHeader.css';
import '../components/GallerySearch.css';

export const Gallery: React.FC = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState('');
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>(null);
  const [selectedSchool, setSelectedSchool] = useState<string | null>(null);

  const periods = useMemo(() => Array.from(new Set(PHILOSOPHERS.map((p) => p.period))).sort(), []);
  const schools = useMemo(() => Array.from(new Set(PHILOSOPHERS.map((p) => p.school))).sort(), []);

  const filteredPhilosophers = PHILOSOPHERS.filter((p) => {
    const matchSearch =
      p.name.toLowerCase().includes(search.toLowerCase().trim()) ||
      p.school.toLowerCase().includes(search.toLowerCase().trim()) ||
      p.concept.toLowerCase().includes(search.toLowerCase().trim());
    const matchPeriod = !selectedPeriod || p.period === selectedPeriod;
    const matchSchool = !selectedSchool || p.school === selectedSchool;
    return matchSearch && matchPeriod && matchSchool;
  });

  const hasActiveFilters = search.trim() || selectedPeriod || selectedSchool;

  const clearFilters = () => {
    setSearch('');
    setSelectedPeriod(null);
    setSelectedSchool(null);
  };

  return (
    <>
      {/* Section header - nền tím đậm, gradient, phong cách thư viện huyền bí */}
      <section className="gallery-header" aria-labelledby="gallery-title">
        <div className="gallery-header__inner">
          <h1 id="gallery-title" className="gallery-header__title">
            PHÒNG TRƯNG BÀY VĨ ĐẠI
          </h1>
          <p className="gallery-header__desc">
            Duyệt qua bộ sưu tập trí tuệ hoàn chỉnh. Lọc theo thời đại, trường phái hoặc độ hiếm để tìm những nhà tư tưởng sẽ tạo nên bộ bài của bạn.
          </p>
          <div className="gallery-header__stats" aria-label="Thống kê bộ sưu tập">
            <div className="gallery-header__stat">
              <span className="gallery-header__stat-value">{PHILOSOPHERS.length}+</span>
              <span className="gallery-header__stat-label">Triết gia</span>
            </div>
            <div className="gallery-header__stat">
              <span className="gallery-header__stat-value">{periods.length}</span>
              <span className="gallery-header__stat-label">Thời đại</span>
            </div>
            <div className="gallery-header__stat">
              <span className="gallery-header__stat-value">{schools.length}</span>
              <span className="gallery-header__stat-label">Trường phái</span>
            </div>
          </div>
        </div>
      </section>

      <div className="container section-spacing gallery-content">
        {/* Thanh tìm kiếm + bộ lọc - thiết kế lại */}
        <div className="gallery-search" role="search">
          <div className="gallery-search__row">
            <div className="gallery-search__input-wrap">
              <Search className="gallery-search__icon" aria-hidden />
              <input
                type="search"
                className="gallery-search__input"
                placeholder="Tìm theo tên, trường phái hoặc khái niệm..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                aria-label="Tìm kiếm nhà tư tưởng"
              />
            </div>
            <div className="gallery-search__filters">
              <div className="gallery-search__filter-group">
                <label htmlFor="gallery-filter-period">Thời đại</label>
                <select
                  id="gallery-filter-period"
                  className="gallery-search__select gallery-search__select--period"
                  value={selectedPeriod ?? ''}
                  onChange={(e) => setSelectedPeriod(e.target.value || null)}
                  aria-label="Lọc theo thời đại"
                >
                  <option value="">Tất cả thời đại</option>
                  {periods.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
              </div>
              <div className="gallery-search__filter-group">
                <label htmlFor="gallery-filter-school">Trường phái</label>
                <select
                  id="gallery-filter-school"
                  className="gallery-search__select gallery-search__select--school"
                  value={selectedSchool ?? ''}
                  onChange={(e) => setSelectedSchool(e.target.value || null)}
                  aria-label="Lọc theo trường phái"
                >
                  <option value="">Tất cả trường phái</option>
                  {schools.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>
              {hasActiveFilters && (
                <button
                  type="button"
                  className="gallery-search__clear"
                  onClick={clearFilters}
                  aria-label="Xóa tất cả bộ lọc"
                >
                  <X aria-hidden />
                  Xóa lọc
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Grid thẻ bài - 5 desktop, 3 tablet, 1-2 mobile, gap 32px */}
        <div className="card-grid">
          {filteredPhilosophers.map((p) => (
            <PhilosopherCard
              key={p.id}
              philosopher={p}
              onClick={() => navigate(`/card/${p.id}`)}
            />
          ))}
        </div>

        {filteredPhilosophers.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <Filter className="w-14 h-14 text-[#d4af37]/30 mx-auto" />
            <p className="text-white/50 font-serif italic">
              Không tìm thấy nhà tư tưởng nào phù hợp với bộ lọc.
            </p>
          </div>
        )}
      </div>
    </>
  );
};
