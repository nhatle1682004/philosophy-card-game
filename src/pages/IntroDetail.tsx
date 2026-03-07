import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { BookOpen, Quote, Layers, ArrowLeft, LayoutGrid } from 'lucide-react';
import '../components/IntroDetail.css';

const INTRO_PAGES: Record<
  string,
  {
    title: string;
    lead: string;
    icon: React.ComponentType<{ size?: number; strokeWidth?: number }>;
    paragraphs: string[];
    ctaLabel: string;
    ctaTo: string;
  }
> = {
  'kien-thuc-sau-sac': {
    title: 'Kiến Thức Sâu Sắc',
    lead: 'Mỗi lá bài là một bản tóm tắt tinh túy — thời đại, trường phái và khái niệm cốt lõi của từng triết gia.',
    icon: BookOpen,
    paragraphs: [
      'Thẻ bài triết học không thay thế sách, mà nén lại những gì cốt lõi nhất: triết gia thuộc thời đại nào, theo trường phái gì, và khái niệm then chốt nào gắn với tên tuổi của họ. Bạn có thể nắm bắt toàn cảnh một nhà tư tưởng trong vài giây.',
      'Cấu trúc thống nhất (tên, niên đại, trường phái, kỹ năng/concept, mô tả ngắn, câu trích dẫn) giúp so sánh giữa các triết gia và ôn tập nhanh. Học qua hình ảnh và bố cục rõ ràng phù hợp với cả người mới bắt đầu lẫn người muốn hệ thống hóa lại kiến thức.',
    ],
    ctaLabel: 'Xem bộ sưu tập thẻ',
    ctaTo: '/gallery',
  },
  'trich-dan-chuan-xac': {
    title: 'Trích Dẫn Chuẩn Xác',
    lead: 'Mỗi thẻ mang một câu danh ngôn đã được ghi chép trong lịch sử triết học — từ Socrates đến Sartre.',
    icon: Quote,
    paragraphs: [
      'Các câu trích dẫn trên thẻ đều bám sát tư tưởng đã được ghi nhận của từng triết gia. Chúng không phải tóm tắt chung chung mà là cửa sổ trực tiếp vào cách họ diễn đạt ý tưởng.',
      'Việc đọc và ghi nhớ từng câu giúp bạn làm quen với ngôn ngữ triết học và tư duy phản biện. Bạn có thể dùng chúng như điểm khởi đầu để đào sâu thêm qua sách hoặc khóa học.',
    ],
    ctaLabel: 'Đọc trích dẫn trong phòng trưng bày',
    ctaTo: '/gallery',
  },
  'xay-dung-bo-bai': {
    title: 'Xây Dựng Bộ Bài',
    lead: 'Chọn mười nhà tư tưởng làm "bộ bài" của riêng bạn — kết hợp Đông–Tây, cổ đại–hiện đại.',
    icon: Layers,
    paragraphs: [
      'Trong mục Nhà Chiến Lược, bạn được chọn tối đa mười lá bài từ toàn bộ bộ sưu tập để tạo nên bộ bài cá nhân. Bộ bài này phản chiếu thế giới quan hoặc mục tiêu học tập của bạn: có thể cân bằng giữa triết học phương Tây và phương Đông, hoặc tập trung vào một thời kỳ nhất định.',
      'Ý tưởng "bộ bài" giúp bạn gắn kết với một nhóm triết gia nhất định, dễ ôn tập và chia sẻ. Bạn có thể thay đổi lựa chọn bất cứ lúc nào khi khám phá thêm các nhà tư tưởng mới.',
    ],
    ctaLabel: 'Vào Nhà Chiến Lược',
    ctaTo: '/deck',
  },
};

export const IntroDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const page = slug ? INTRO_PAGES[slug] : null;

  if (!page) {
    return (
      <div className="intro-detail-page">
        <div className="intro-detail-inner" style={{ paddingTop: '80px' }}>
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="intro-detail-back"
          >
            <ArrowLeft className="intro-detail-back-icon" aria-hidden />
            Quay lại
          </button>
          <h1 className="intro-detail-title">Không tìm thấy trang</h1>
          <p className="intro-detail-lead">Trang bạn tìm không tồn tại.</p>
          <div className="intro-detail-cta" style={{ marginTop: '1.5rem' }}>
            <Link to="/" className="intro-detail-cta-link">
              Về trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const Icon = page.icon;

  return (
    <div className="intro-detail-page">
      <div className="intro-detail-inner">
        <button
          type="button"
          onClick={() => navigate(-1)}
          className="intro-detail-back"
          aria-label="Quay lại trang chủ"
        >
          <ArrowLeft className="intro-detail-back-icon" aria-hidden />
          Quay lại
        </button>

        <motion.header
          className="intro-detail-header"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <div className="intro-detail-icon-wrap">
            <Icon size={36} strokeWidth={1.8} aria-hidden />
          </div>
          <h1 className="intro-detail-title">{page.title}</h1>
          <p className="intro-detail-lead">{page.lead}</p>
        </motion.header>

        <motion.div
          className="intro-detail-content"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          {page.paragraphs.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
          <div className="intro-detail-cta">
            <Link to={page.ctaTo} className="intro-detail-cta-link">
              <LayoutGrid size={18} strokeWidth={2} aria-hidden />
              {page.ctaLabel}
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
