export namespace Type {
  export type Rarity = "Thường" | "Hiếm" | "Rất hiếm" | "Sử thi" | "Huyền thoại";

  /** Một mốc trên timeline hành trình tư tưởng (năm tùy chọn + nội dung). */
  export interface TimelineMilestone {
    year?: string;
    text: string;
  }

  /** Loại bước trong hành trình cuộc đời (trang Khám phá → timeline). */
  export type LifeJourneyStepType =
    | 'birth'
    | 'early_life'
    | 'events'
    | 'turning_point'
    | 'formation'
    | 'influence';

  /** Một bước trên timeline hành trình cuộc đời. */
  export interface LifeJourneyStep {
    step: LifeJourneyStepType;
    year?: string;
    text: string;
  }

  export interface Philosopher {
    id: string;
    name: string;
    period: string;
    years: string;
    school: string;
    concept: string;
    quote: string;
    description: string;
    region: "Phương Tây" | "Phương Đông";
    rarity: Rarity;
    image: string;
    imagePosition?: string;
    /** 4–5 mốc quan trọng trong hành trình hình thành tư tưởng (trang Khám phá triết gia). */
    timeline?: TimelineMilestone[];
  }

  export interface Deck {
    id: string;
    name: string;
    cards: string[];
  }

  /** Di sản trí tuệ: tác phẩm, ý tưởng, lý thuyết (section Philosopher Heritage). */
  export interface IntellectualHeritageItem {
    id: string;
    title: string;
    shortDescription: string;
    year?: string;
    fullDescription: string;
    historicalContext: string;
    impactOnPhilosophy: string;
  }

  /** Di sản vật chất: địa điểm, di tích (section Philosopher Heritage). */
  export interface PhysicalHeritageItem {
    id: string;
    placeName: string;
    country: string;
    shortDescription: string;
    image: string;
    history: string;
    relationshipToPhilosopher: string;
    philosophicalSignificance: string;
  }
}
