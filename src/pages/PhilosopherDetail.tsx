import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { PHILOSOPHERS } from '../data';
import { PhilosopherCard } from '../components/PhilosopherCard';
import { ArrowLeft, Book, History, Globe } from 'lucide-react';
import { motion } from 'motion/react';
import '../components/PhilosopherDetail.css';

export const PhilosopherDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const philosopher = PHILOSOPHERS.find((p) => p.id === id);

  if (!philosopher) {
    return (
      <div className="philosopher-detail-page">
        <div className="container philosopher-detail-notfound">
          <h1>Không tìm thấy nhà tư tưởng</h1>
          <Link to="/gallery">Quay lại phòng trưng bày</Link>
        </div>
      </div>
    );
  }

  const bioText = `${philosopher.description} Nhà tư tưởng này đại diện cho một thời điểm then chốt trong kỷ nguyên ${philosopher.period}, thách thức hiện trạng thông qua lăng kính của ${philosopher.school}. Công việc của họ tiếp tục ảnh hưởng đến các cuộc thảo luận hiện đại về ${philosopher.concept} và bản chất của sự tồn tại.`;

  return (
    <div className="philosopher-detail-page">
      <div className="container section-spacing">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="philosopher-detail-back"
          aria-label="Quay lại bộ sưu tập"
        >
          <ArrowLeft className="philosopher-detail-back-icon" aria-hidden />
          Quay lại bộ sưu tập
        </button>

        <div className="philosopher-detail-main">
          {/* Cột trái: thẻ bài + khối Thời đại / Khu vực / Trường phái */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="philosopher-detail-card-col"
          >
            <PhilosopherCard philosopher={philosopher} isLarge onClick={() => {}} />
          </motion.div>

          {/* Cột phải: thông tin chi tiết */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="philosopher-detail-info"
          >
            <h1 className="philosopher-detail-name">{philosopher.name}</h1>
            <p className="philosopher-detail-meta">
              {philosopher.years} • {philosopher.school}
            </p>

            <div className="philosopher-detail-blocks">
              <div className="philosopher-detail-block">
                <div className="philosopher-detail-block-label">
                  <Book aria-hidden />
                  Khái niệm cốt lõi
                </div>
                <p className="philosopher-detail-block-value">{philosopher.concept}</p>
              </div>
              <div className="philosopher-detail-block">
                <div className="philosopher-detail-block-label">
                  <Globe aria-hidden />
                  Khu vực triết học
                </div>
                <p className="philosopher-detail-block-value">Triết học {philosopher.region}</p>
              </div>
            </div>

            <div className="philosopher-detail-quote-wrap">
              <span className="philosopher-detail-quote-mark" aria-hidden>
                "
              </span>
              <p className="philosopher-detail-quote-text">&quot;{philosopher.quote}&quot;</p>
            </div>

            <section aria-labelledby="bio-heading">
              <h2 id="bio-heading" className="philosopher-detail-bio-title">
                <History aria-hidden />
                Tiểu sử và truyền thuyết
              </h2>
              <p className="philosopher-detail-bio-text">{bioText}</p>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
