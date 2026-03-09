import type { Type } from './types';

const STEP_ORDER: Type.LifeJourneyStepType[] = [
  'birth',
  'early_life',
  'events',
  'turning_point',
  'formation',
  'influence',
];

/**
 * Hành trình cuộc đời 6 bước cho từng triết gia (id -> steps).
 * Triết gia không có trong map sẽ dùng bước sinh từ concept/description/quote.
 */
export const PHILOSOPHER_LIFE_JOURNEYS: Record<string, Type.LifeJourneyStep[]> = {
  socrates: [
    { step: 'birth', year: '470 TCN', text: 'Sinh tại Athens, Hy Lạp.' },
    { step: 'early_life', text: 'Làm thợ điêu khắc thời trẻ; sau chuyển sang triết học và đối thoại với công chúng.' },
    { step: 'events', text: 'Đi khắp Athens chất vấn các nhà thông thái và giới quyền lực.' },
    { step: 'turning_point', year: '399 TCN', text: 'Bị buộc tội làm bại hoại giới trẻ và bất kính với thần; chọn cái chết thay vì từ bỏ triết học.' },
    { step: 'formation', text: 'Phương pháp Socrates: đặt câu hỏi để bộc lộ mâu thuẫn và hướng tới định nghĩa rõ ràng.' },
    { step: 'influence', text: 'Nền tảng của triết học phương Tây; ảnh hưởng trực tiếp Plato và gián tiếp toàn bộ truyền thống Tây phương.' },
  ],
  plato: [
    { step: 'birth', year: '427 TCN', text: 'Sinh tại Athens trong gia đình quý tộc.' },
    { step: 'early_life', text: 'Học trò Socrates; chứng kiến phiên xử và cái chết của thầy.' },
    { step: 'events', text: 'Du hành Địa Trung Hải; thành lập Viện Hàn lâm (Academy) tại Athens.' },
    { step: 'turning_point', text: 'Quyết định ghi chép triết học qua đối thoại và xây dựng thuyết Forms.' },
    { step: 'formation', text: 'Thuyết hình thức (Forms): thế giới vật chất là cái bóng của thực tại lý tưởng; triết học chính trị trong Cộng hòa.' },
    { step: 'influence', text: 'Ảnh hưởng Aristotle, triết học Kitô giáo, và toàn bộ triết học Tây phương.' },
  ],
  aristotle: [
    { step: 'birth', year: '384 TCN', text: 'Sinh tại Stagira, Macedonia.' },
    { step: 'early_life', text: 'Học tại Viện Hàn lâm của Plato gần hai thập kỷ.' },
    { step: 'events', text: 'Gia sư Alexander Đại đế; sau thành lập Lyceum tại Athens.' },
    { step: 'turning_point', text: 'Tách khỏi Platon, nhấn mạnh quan sát và kinh nghiệm thay vì chỉ lý tính thuần túy.' },
    { step: 'formation', text: 'Đạo đức học đức hạnh, logic hình thức, sinh học và siêu hình học; hệ thống hóa tri thức.' },
    { step: 'influence', text: '"Thầy đầu tiên"; ảnh hưởng kinh viện, khoa học và đạo đức học phương Tây.' },
  ],
  kant: [
    { step: 'birth', year: '1724', text: 'Sinh tại Königsberg, Phổ.' },
    { step: 'early_life', text: 'Nghiên cứu triết học duy lý và kinh nghiệm; đọc Hume "đánh thức" khỏi giấc ngủ giáo điều.' },
    { step: 'events', year: '1781', text: 'Xuất bản Phê phán lý tính thuần túy; sau đó các tác phẩm đạo đức và mỹ học.' },
    { step: 'turning_point', text: 'Copernican turn: con người không chỉ tiếp nhận thế giới mà cấu trúc nó qua các phạm trù.' },
    { step: 'formation', text: 'Triết học siêu nghiệm; đạo đức học nghĩa vụ (categorical imperative); Khai sáng: dám biết.' },
    { step: 'influence', text: 'Ảnh hưởng Hegel, Schopenhauer, và toàn bộ triết học lục địa và phân tích.' },
  ],
  nietzsche: [
    { step: 'birth', year: '1844', text: 'Sinh tại Röcken, Đức.' },
    { step: 'early_life', text: 'Giáo sư ngữ văn cổ điển; từ bỏ Kitô giáo; sức khỏe kém.' },
    { step: 'events', text: 'Viết Zarathustra, Hoàng hôn của thần tượng; cô lập và bệnh tật cuối đời.' },
    { step: 'turning_point', text: 'Phá bỏ niềm tin vào chân lý, đạo đức và Thượng đế; "Thượng đế đã chết."' },
    { step: 'formation', text: 'Ý chí quyền lực, Siêu nhân, chủ nghĩa bi quan biện chứng; phê phán đạo đức nô lệ.' },
    { step: 'influence', text: 'Ảnh hưởng hiện sinh (Sartre, Camus), hậu hiện đại và văn hóa thế kỷ 20.' },
  ],
  confucius: [
    { step: 'birth', year: '551 TCN', text: 'Sinh tại ấp Trâu, nước Lỗ.' },
    { step: 'early_life', text: 'Tuổi trẻ nghèo, tự học; làm quan và dạy học.' },
    { step: 'events', text: 'Du thuyết nhiều nước, truyền bá Nhân, Lễ, Trung dung; biên soạn Ngũ Kinh.' },
    { step: 'turning_point', text: 'Quyết tâm phục hưng lễ nhạc và đạo đức thời Chu.' },
    { step: 'formation', text: 'Nho giáo: Tu thân, tề gia, trị quốc, bình thiên hạ; quan hệ và đức hạnh làm nền tảng xã hội.' },
    { step: 'influence', text: 'Vạn thế sư biểu; định hình văn hóa Đông Á hàng nghìn năm.' },
  ],
  descartes: [
    { step: 'birth', year: '1596', text: 'Sinh tại Pháp.' },
    { step: 'early_life', text: 'Học toán và khoa học; phục vụ quân đội; nghiên cứu độc lập.' },
    { step: 'events', year: '1637', text: 'Phát hành Phương pháp luận và các luận văn khoa học.' },
    { step: 'turning_point', text: 'Đêm "ba giấc mơ" — quyết định dùng toán và lý tính để xây dựng triết học.' },
    { step: 'formation', text: '"Cogito, ergo sum"; chủ nghĩa duy lý; dualism tâm–thể.' },
    { step: 'influence', text: 'Cha đẻ triết học hiện đại; ảnh hưởng Spinoza, Leibniz và khoa học.' },
  ],
  marx: [
    { step: 'birth', year: '1818', text: 'Sinh tại Trier, Đức.' },
    { step: 'early_life', text: 'Học luật và triết học; chịu ảnh hưởng Hegel rồi chuyển sang duy vật.' },
    { step: 'events', year: '1848', text: 'Tuyên ngôn Cộng sản (cùng Engels); cách mạng châu Âu.' },
    { step: 'turning_point', text: 'Phê phán Hegel: đảo ngược duy tâm thành duy vật lịch sử và đấu tranh giai cấp.' },
    { step: 'formation', text: 'Chủ nghĩa duy vật lịch sử; phê phán tư bản; chủ nghĩa xã hội khoa học.' },
    { step: 'influence', text: 'Ảnh hưởng toàn cầu về chính trị, kinh tế và xã hội học.' },
  ],
  buddha: [
    { step: 'birth', year: 'k. 563 TCN', text: 'Sinh tại Lumbini (Siddhartha Gautama), Nepal.' },
    { step: 'early_life', text: 'Lớn lên trong cung điện; chứng kiến già, bệnh, chết và người tu.' },
    { step: 'events', text: 'Từ bỏ cung điện, tu khổ hạnh rồi từ bỏ; ngồi thiền dưới cây Bồ đề.' },
    { step: 'turning_point', text: 'Giác ngộ — hiểu Tứ diệu đế và con đường thoát khổ.' },
    { step: 'formation', text: 'Tứ diệu đế, Bát chính đạo; Trung đạo; vô thường và vô ngã.' },
    { step: 'influence', text: 'Phật giáo lan khắp châu Á và thế giới.' },
  ],
  laozi: [
    { step: 'birth', text: 'Tương truyền sống vào thời Xuân Thu; thân thế có nhiều giả thuyết.' },
    { step: 'early_life', text: 'Làm quan lưu trữ; tiếp xúc nhiều truyền thống.' },
    { step: 'events', text: 'Để lại Đạo Đức Kinh (hoặc được tập hợp sau) rồi "đi về Tây".' },
    { step: 'turning_point', text: 'Nhận ra Đạo không thể nói bằng ngôn từ; chọn vô vi.' },
    { step: 'formation', text: 'Đạo và Đức; vô vi (hành động không ép buộc); tự nhiên, đơn giản.' },
    { step: 'influence', text: 'Đạo giáo; ảnh hưởng thiền, y học, chính trị Đông Á.' },
  ],
};

/** Mô tả ngắn theo step (dùng làm label hoặc fallback). */
const STEP_LABELS: Record<Type.LifeJourneyStepType, string> = {
  birth: 'Birth',
  early_life: 'Early life experience',
  events: 'Important life events',
  turning_point: 'Turning point',
  formation: 'Formation of philosophy',
  influence: 'Influence on later thinkers',
};

export const LIFE_JOURNEY_STEP_LABELS = STEP_LABELS;

/**
 * Trả về đủ 6 bước hành trình cuộc đời. Ưu tiên data có sẵn; thiếu thì điền từ concept/description/quote.
 */
export function getLifeJourneyForPhilosopher(p: {
  id: string;
  name: string;
  years: string;
  concept: string;
  quote: string;
  description: string;
  school: string;
}): Type.LifeJourneyStep[] {
  const custom = PHILOSOPHER_LIFE_JOURNEYS[p.id];
  if (custom && custom.length >= 6) return custom;

  const [birth, end] = p.years.split(/[–\-—]/).map((s) => s.trim()).filter(Boolean);
  const steps: Type.LifeJourneyStep[] = [];

  steps.push({
    step: 'birth',
    year: birth || undefined,
    text: birth ? `Sinh — ${p.name}.` : `Khởi đầu hành trình của ${p.name}.`,
  });
  steps.push({
    step: 'early_life',
    text: p.description.slice(0, 120) + (p.description.length > 120 ? '…' : ''),
  });
  steps.push({
    step: 'events',
    year: end || undefined,
    text: `Các sự kiện quan trọng trong cuộc đời và sự nghiệp.`,
  });
  steps.push({
    step: 'turning_point',
    text: `Bước ngoặt hình thành tư tưởng: ${p.concept}.`,
  });
  steps.push({
    step: 'formation',
    text: p.concept + (p.quote ? ` — "${p.quote.slice(0, 60)}…"` : '.'),
  });
  steps.push({
    step: 'influence',
    text: `Di sản và ảnh hưởng: trường phái ${p.school} và các thế hệ sau.`,
  });

  return steps;
}

/** Legacy: timeline dạng cũ (4–5 mốc) — giữ để tương thích nếu có chỗ dùng. */
export const PHILOSOPHER_TIMELINES: Record<string, Type.TimelineMilestone[]> = {};
export function getTimelineForPhilosopher(p: {
  id: string;
  name: string;
  years: string;
  concept: string;
  quote: string;
  description: string;
  school: string;
}): Type.TimelineMilestone[] {
  const journey = getLifeJourneyForPhilosopher(p);
  return journey.map((j) => ({ year: j.year, text: j.text }));
}
