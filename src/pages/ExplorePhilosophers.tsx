import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { PHILOSOPHERS } from '../data';
import { getLifeJourneyForPhilosopher, LIFE_JOURNEY_STEP_LABELS } from '../philosopherTimelines';
import type { Type } from '../types';
import {
  ArrowLeft,
  Baby,
  BookOpen,
  Calendar,
  Zap,
  Lightbulb,
  GitBranch,
  ExternalLink,
  Compass,
} from 'lucide-react';
import './ExplorePhilosophers.css';

const STEP_ICONS: Record<Type.LifeJourneyStepType, React.ReactNode> = {
  birth: <Baby size={22} strokeWidth={1.8} />,
  early_life: <BookOpen size={22} strokeWidth={1.8} />,
  events: <Calendar size={22} strokeWidth={1.8} />,
  turning_point: <Zap size={22} strokeWidth={1.8} />,
  formation: <Lightbulb size={22} strokeWidth={1.8} />,
  influence: <GitBranch size={22} strokeWidth={1.8} />,
};

export const ExplorePhilosophers: React.FC = () => {
  const { id: paramId } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<string | null>(paramId ?? null);

  useEffect(() => {
    if (paramId) setSelectedId(paramId);
    else setSelectedId(null);
  }, [paramId]);

  const philosopher = selectedId ? PHILOSOPHERS.find((p) => p.id === selectedId) : null;

  return (
    <div className="explore-philosophers-page">
      <div className="explore-philosophers-container">
        {!philosopher ? (
          <>
            <header className="explore-philosophers-header">
              <h1 className="explore-philosophers-title">Khám phá triết gia</h1>
              <p className="explore-philosophers-subtitle">
                Bấm "Khám phá" để xem hành trình cuộc đời và hiểu tại sao triết học của họ được hình thành.
              </p>
            </header>

            <ul className="explore-philosophers-list" aria-label="Danh sách triết gia">
              {PHILOSOPHERS.map((p) => (
                <li key={p.id} className="explore-philosophers-item">
                  <article className="explore-philosophers-card explore-philosophers-card--list">
                    <div className="explore-philosophers-card-portrait-wrap">
                      <img
                        src={p.image}
                        alt=""
                        className="explore-philosophers-card-portrait"
                        style={{ objectPosition: p.imagePosition ?? 'center center' }}
                      />
                    </div>
                    <div className="explore-philosophers-card-info">
                      <h2 className="explore-philosophers-card-name">{p.name}</h2>
                      <p className="explore-philosophers-card-years">{p.years}</p>
                      <button
                        type="button"
                        className="explore-philosophers-btn-explore"
                        onClick={() => navigate(`/kham-pha-triet-gia/${p.id}`)}
                      >
                        <Compass size={18} strokeWidth={2} aria-hidden />
                        Khám phá
                      </button>
                    </div>
                  </article>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <PhilosopherJourneyView
            philosopher={philosopher}
            onBack={() => navigate('/kham-pha-triet-gia')}
          />
        )}
      </div>
    </div>
  );
};

function PhilosopherJourneyView({
  philosopher: p,
  onBack,
}: {
  philosopher: Type.Philosopher;
  onBack: () => void;
}) {
  const journey = getLifeJourneyForPhilosopher(p);

  return (
    <div className="explore-philosophers-journey">
      <button
        type="button"
        className="explore-philosophers-back"
        onClick={onBack}
        aria-label="Quay lại danh sách"
      >
        <ArrowLeft size={18} strokeWidth={2} aria-hidden />
        Quay lại danh sách
      </button>

      <header className="explore-philosophers-journey-header">
        <div className="explore-philosophers-journey-portrait-wrap">
          <img
            src={p.image}
            alt=""
            className="explore-philosophers-journey-portrait"
            style={{ objectPosition: p.imagePosition ?? 'center center' }}
          />
        </div>
        <div className="explore-philosophers-journey-meta">
          <h1 className="explore-philosophers-journey-name">{p.name}</h1>
          <p className="explore-philosophers-journey-years">{p.years}</p>
          <p className="explore-philosophers-journey-school">{p.school}</p>
        </div>
      </header>

      <div className="explore-philosophers-timeline-wrap">
        <h2 className="explore-philosophers-timeline-title">Hành trình cuộc đời</h2>
        <ul className="explore-philosophers-timeline" aria-label={`Hành trình ${p.name}`}>
          {journey.map((step, i) => (
            <li key={i} className="explore-philosophers-step" data-step={step.step}>
              <span className="explore-philosophers-step-icon" aria-hidden>
                {STEP_ICONS[step.step]}
              </span>
              <div className="explore-philosophers-step-body">
                <span className="explore-philosophers-step-label">
                  {LIFE_JOURNEY_STEP_LABELS[step.step]}
                </span>
                {step.year && (
                  <span className="explore-philosophers-step-year">{step.year}</span>
                )}
                <p className="explore-philosophers-step-text">{step.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <section className="explore-philosophers-formed" aria-labelledby="philosophy-formed-heading">
        <h2 id="philosophy-formed-heading" className="explore-philosophers-formed-title">
          Philosophy Formed
        </h2>
        <p className="explore-philosophers-formed-concept">{p.concept}</p>
        <p className="explore-philosophers-formed-desc">{p.description}</p>
        {p.quote && (
          <blockquote className="explore-philosophers-formed-quote">"{p.quote}"</blockquote>
        )}
      </section>

      <div className="explore-philosophers-actions">
        <Link to={`/card/${p.id}`} className="explore-philosophers-cta">
          <ExternalLink size={18} strokeWidth={2} aria-hidden />
          View Philosopher Card
        </Link>
      </div>
    </div>
  );
}
