import React from 'react';
import { motion } from 'motion/react';
import { Type } from '../types';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
import './PhilosopherCard.css';

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface PhilosopherCardProps {
  philosopher: Type.Philosopher;
  onClick?: () => void;
  className?: string;
  isLarge?: boolean;
}

export const PhilosopherCard: React.FC<PhilosopherCardProps> = ({
  philosopher,
  onClick,
  className,
  isLarge = false,
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-20px' }}
      transition={{ duration: 0.35 }}
      onClick={onClick}
      className={cn(
        'philosopher-card cursor-pointer',
        isLarge && 'is-large mx-auto',
        className
      )}
    >
      <div className="philosopher-card__inner">
        <span
          className="philosopher-card__corner-icon philosopher-card__corner-icon--tl"
          aria-hidden="true"
        >
          ✦
        </span>
        <span
          className="philosopher-card__corner-icon philosopher-card__corner-icon--tr"
          aria-hidden="true"
        >
          ✦
        </span>
        {/* 1. Tên triết gia - căn giữa */}
        <h3 className="philosopher-card__name">{philosopher.name}</h3>

        {/* 2. Thanh niên đại - nhãn ngang: 470 – 399 TCN | SOCRATIC */}
        <p className="philosopher-card__meta">
          {philosopher.years} &nbsp;&nbsp;|&nbsp;&nbsp; {philosopher.school.toUpperCase()}
        </p>

        {/* 3. Ảnh tròn - chính giữa card */}
        <div className="philosopher-card__portrait-wrap">
          <div className="philosopher-card__portrait">
            <img
              src={philosopher.image}
              alt={philosopher.name}
              style={{ objectPosition: philosopher.imagePosition || 'center' }}
              referrerPolicy="no-referrer"
              onError={(e) => {
                e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(philosopher.name)}&background=D4AF37&color=fff&size=240`;
              }}
            />
          </div>
        </div>

        {/* 4. Tag KỸ NĂNG - ngay dưới ảnh */}
        <div className="philosopher-card__label-wrap">
          <span className="philosopher-card__label">Kỹ năng</span>
        </div>

        {/* 5. Tiêu đề kỹ năng - PHƯƠNG PHÁP SOCRATES */}
        <p className="philosopher-card__concept">{philosopher.concept}</p>

        {/* 6. Mô tả ngắn - căn giữa, sát Chiêm nghiệm */}
        <div className="philosopher-card__desc" title={philosopher.description}>
          <span className="philosopher-card__desc-inner">{philosopher.description}</span>
        </div>

        {/* 7. Gạch vàng — CHIÊM NGHIỆM — gạch vàng */}
        <div className="philosopher-card__contemplate-label-wrap">
          <span className="philosopher-card__contemplate-line" aria-hidden />
          <span className="philosopher-card__contemplate-label">Chiêm nghiệm</span>
          <span className="philosopher-card__contemplate-line" aria-hidden />
        </div>

        {/* 8. Câu trích dẫn triết học - nghiêng, sáng, căn giữa */}
        <blockquote className="philosopher-card__quote" cite="">
          &quot;{philosopher.quote}&quot;
        </blockquote>

        {/* 9. Thời đại / Khu vực / Trường phái — chỉ khi xem chi tiết (isLarge) */}
        {isLarge && (
          <div className="philosopher-card__footer-meta" aria-label="Thời đại, Khu vực, Trường phái">
            <div className="philosopher-card__footer-meta__col">
              <div className="philosopher-card__footer-meta__item">
                <span className="philosopher-card__footer-meta__label">Thời đại</span>
                <span className="philosopher-card__footer-meta__value">{philosopher.period.toUpperCase()}</span>
              </div>
              <div className="philosopher-card__footer-meta__item">
                <span className="philosopher-card__footer-meta__label">Khu vực</span>
                <span className="philosopher-card__footer-meta__value">{philosopher.region.toUpperCase()}</span>
              </div>
            </div>
            <div className="philosopher-card__footer-meta__col">
              <div className="philosopher-card__footer-meta__item">
                <span className="philosopher-card__footer-meta__label">Trường phái</span>
                <span className="philosopher-card__footer-meta__value">{philosopher.school.toUpperCase()}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};
