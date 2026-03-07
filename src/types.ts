export namespace Type {
  export type Rarity = "Thường" | "Hiếm" | "Rất hiếm" | "Sử thi" | "Huyền thoại";

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
  }

  export interface Deck {
    id: string;
    name: string;
    cards: string[];
  }
}
