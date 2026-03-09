import React, { useState } from 'react';
import { getHeritageForPhilosopher } from '../philosopherHeritage';
import type { Type } from '../types';
import { BookOpen, MapPin, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import './PhilosopherHeritage.css';

interface PhilosopherHeritageProps {
  philosopherId: string;
  philosopherName: string;
}

export const PhilosopherHeritage: React.FC<PhilosopherHeritageProps> = ({
  philosopherId,
  philosopherName,
}) => {
  const { intellectual, physical } = getHeritageForPhilosopher(philosopherId);
  const [selectedIntellectual, setSelectedIntellectual] = useState<Type.IntellectualHeritageItem | null>(null);
  const [selectedPhysical, setSelectedPhysical] = useState<Type.PhysicalHeritageItem | null>(null);

  const hasAny = intellectual.length > 0 || physical.length > 0;
  if (!hasAny) return null;

  return (
    <section className="philosopher-heritage" aria-labelledby="heritage-heading">
      <h2 id="heritage-heading" className="philosopher-heritage-title">
        Philosopher Heritage
      </h2>
      <p className="philosopher-heritage-intro">
        Di sản trí tuệ và di sản vật chất mà {philosopherName} để lại — trải nghiệm như trong bảo tàng số.
      </p>

      {intellectual.length > 0 && (
        <div className="philosopher-heritage-block">
          <h3 className="philosopher-heritage-block-title">
            <BookOpen size={20} strokeWidth={1.8} aria-hidden />
            Intellectual Heritage
          </h3>
          <ul className="philosopher-heritage-card-grid">
            {intellectual.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="philosopher-heritage-card philosopher-heritage-card--intellectual"
                  onClick={() => setSelectedIntellectual(item)}
                >
                  <span className="philosopher-heritage-card-title">{item.title}</span>
                  <p className="philosopher-heritage-card-desc">{item.shortDescription}</p>
                  {item.year && (
                    <span className="philosopher-heritage-card-year">{item.year}</span>
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {physical.length > 0 && (
        <div className="philosopher-heritage-block">
          <h3 className="philosopher-heritage-block-title">
            <MapPin size={20} strokeWidth={1.8} aria-hidden />
            Physical Heritage
          </h3>
          <ul className="philosopher-heritage-card-grid philosopher-heritage-card-grid--physical">
            {physical.map((item) => (
              <li key={item.id}>
                <button
                  type="button"
                  className="philosopher-heritage-card philosopher-heritage-card--physical"
                  onClick={() => setSelectedPhysical(item)}
                >
                  <div className="philosopher-heritage-card-image-wrap">
                    <img src={item.image} alt="" className="philosopher-heritage-card-image" />
                  </div>
                  <span className="philosopher-heritage-card-title">{item.placeName}</span>
                  <span className="philosopher-heritage-card-location">{item.country}</span>
                  <p className="philosopher-heritage-card-desc">{item.shortDescription}</p>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      <AnimatePresence>
        {selectedIntellectual && (
          <IntellectualDetailPanel
            item={selectedIntellectual}
            onClose={() => setSelectedIntellectual(null)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {selectedPhysical && (
          <PhysicalDetailPanel
            item={selectedPhysical}
            onClose={() => setSelectedPhysical(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

function IntellectualDetailPanel({
  item,
  onClose,
}: {
  item: Type.IntellectualHeritageItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="philosopher-heritage-detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="intellectual-detail-title"
    >
      <div className="philosopher-heritage-detail-backdrop" onClick={onClose} aria-hidden />
      <motion.div
        className="philosopher-heritage-detail-panel philosopher-heritage-detail-panel--intellectual"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="philosopher-heritage-detail-close"
          onClick={onClose}
          aria-label="Đóng"
        >
          <X size={22} strokeWidth={2} />
        </button>
        <h3 id="intellectual-detail-title" className="philosopher-heritage-detail-title">
          {item.title}
        </h3>
        {item.year && (
          <p className="philosopher-heritage-detail-meta">{item.year}</p>
        )}
        <div className="philosopher-heritage-detail-body">
          <p className="philosopher-heritage-detail-full-desc">{item.fullDescription}</p>
          <div className="philosopher-heritage-detail-section">
            <h4 className="philosopher-heritage-detail-section-title">Historical context</h4>
            <p>{item.historicalContext}</p>
          </div>
          <div className="philosopher-heritage-detail-section">
            <h4 className="philosopher-heritage-detail-section-title">Impact on philosophy</h4>
            <p>{item.impactOnPhilosophy}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

function PhysicalDetailPanel({
  item,
  onClose,
}: {
  item: Type.PhysicalHeritageItem;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="philosopher-heritage-detail-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="physical-detail-title"
    >
      <div className="philosopher-heritage-detail-backdrop" onClick={onClose} aria-hidden />
      <motion.div
        className="philosopher-heritage-detail-panel philosopher-heritage-detail-panel--physical"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 16 }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          className="philosopher-heritage-detail-close"
          onClick={onClose}
          aria-label="Đóng"
        >
          <X size={22} strokeWidth={2} />
        </button>
        <div className="philosopher-heritage-detail-hero">
          <img src={item.image} alt="" className="philosopher-heritage-detail-hero-image" />
        </div>
        <div className="philosopher-heritage-detail-content">
          <h3 id="physical-detail-title" className="philosopher-heritage-detail-title">
            {item.placeName}
          </h3>
          <p className="philosopher-heritage-detail-location">{item.country}</p>
          <div className="philosopher-heritage-detail-body">
            <div className="philosopher-heritage-detail-section">
              <h4 className="philosopher-heritage-detail-section-title">History</h4>
              <p>{item.history}</p>
            </div>
            <div className="philosopher-heritage-detail-section">
              <h4 className="philosopher-heritage-detail-section-title">Relationship to the philosopher</h4>
              <p>{item.relationshipToPhilosopher}</p>
            </div>
            <div className="philosopher-heritage-detail-section">
              <h4 className="philosopher-heritage-detail-section-title">Philosophical significance</h4>
              <p>{item.philosophicalSignificance}</p>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
