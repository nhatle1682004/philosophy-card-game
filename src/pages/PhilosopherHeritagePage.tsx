import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PHILOSOPHERS } from '../data';
import { getHeritageForPhilosopher } from '../philosopherHeritage';
import { ArrowLeft } from 'lucide-react';
import './PhilosopherHeritagePage.css';

const FALLBACK_IMAGE = 'https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80';

export const PhilosopherHeritagePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const philosopher = PHILOSOPHERS.find((p) => p.id === id);
  const heritage = id ? getHeritageForPhilosopher(id) : { intellectual: [], physical: [] };
  const hasAny = heritage.intellectual.length > 0 || heritage.physical.length > 0;

  if (!philosopher || !hasAny) {
    return (
      <div className="heritage-article-page">
        <div className="heritage-article-container">
          <p>Không tìm thấy nội dung di sản.</p>
          <Link to={philosopher ? `/card/${id}` : '/gallery'}>Quay lại</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="heritage-article-page">
      <article className="heritage-article">
        <header className="heritage-article-header">
          <button
            type="button"
            className="heritage-article-back"
            onClick={() => navigate(-1)}
            aria-label="Quay lại"
          >
            <ArrowLeft size={18} strokeWidth={2} aria-hidden />
            Quay lại thẻ triết gia
          </button>
        </header>

        {/* Hero: nếu có di sản vật chất thì dùng ảnh địa điểm đầu tiên; nếu không, dùng chân dung triết gia hoặc ảnh fallback */}
        <div className="heritage-article-hero">
          <img
            className="heritage-article-hero-img"
            src={heritage.physical[0]?.image ?? philosopher.image ?? FALLBACK_IMAGE}
            alt=""
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_IMAGE;
            }}
          />
          <p className="heritage-article-hero-caption">
            {heritage.physical[0]
              ? `${heritage.physical[0].placeName}, ${heritage.physical[0].country}`
              : `${philosopher.period} • ${philosopher.school}`}
          </p>
        </div>

        <div className="heritage-article-body">
          <h1 className="heritage-article-title">
            Di sản {philosopher.name}
          </h1>
          <p className="heritage-article-lead">
            Di sản trí tuệ và di sản vật chất mà {philosopher.name} để lại cho hậu thế.
          </p>

          {heritage.intellectual.length > 0 && (
            <section className="heritage-article-section" aria-labelledby="intellectual-heading">
              <h2 id="intellectual-heading" className="heritage-article-section-title">
                Di sản trí tuệ
              </h2>
              {heritage.intellectual.map((item) => (
                <div key={item.id} className="heritage-article-block">
                  <h3 className="heritage-article-block-title">{item.title}</h3>
                  {item.year && (
                    <p className="heritage-article-block-meta">{item.year}</p>
                  )}
                  <p className="heritage-article-block-p">{item.fullDescription}</p>
                  <h4 className="heritage-article-block-subtitle">Bối cảnh lịch sử</h4>
                  <p className="heritage-article-block-p">{item.historicalContext}</p>
                  <h4 className="heritage-article-block-subtitle">Ảnh hưởng lên triết học</h4>
                  <p className="heritage-article-block-p">{item.impactOnPhilosophy}</p>
                </div>
              ))}
            </section>
          )}

          {heritage.physical.length > 0 && (
            <section className="heritage-article-section" aria-labelledby="physical-heading">
              <h2 id="physical-heading" className="heritage-article-section-title">
                Di sản vật chất
              </h2>
              {heritage.physical.map((item) => (
                <div key={item.id} className="heritage-article-block heritage-article-block--place">
                  <figure className="heritage-article-figure">
                    <img
                      src={item.image}
                      alt=""
                      className="heritage-article-figure-img"
                      onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK_IMAGE; }}
                    />
                    <figcaption className="heritage-article-figure-caption">
                      {item.placeName}, {item.country}
                    </figcaption>
                  </figure>
                  <h3 className="heritage-article-block-title">{item.placeName}</h3>
                  <p className="heritage-article-block-meta">{item.country}</p>
                  <p className="heritage-article-block-p">{item.history}</p>
                  <h4 className="heritage-article-block-subtitle">Liên hệ với triết gia</h4>
                  <p className="heritage-article-block-p">{item.relationshipToPhilosopher}</p>
                  <h4 className="heritage-article-block-subtitle">Ý nghĩa triết học</h4>
                  <p className="heritage-article-block-p">{item.philosophicalSignificance}</p>
                </div>
              ))}
            </section>
          )}

          <footer className="heritage-article-footer">
            <Link to={`/card/${philosopher.id}`} className="heritage-article-footer-link">
              ← Xem thẻ {philosopher.name}
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
};
