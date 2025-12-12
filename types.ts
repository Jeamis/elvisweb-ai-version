export interface ServicePack {
  id: string;
  title: string;
  price: number;
  period?: string; // e.g., "/mois" or "" for one-shot
  description: string;
  features: string[];
  isPopular?: boolean;
  category: 'web' | 'marketing';
  image?: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

export interface OrderConfig {
  packId: string;
  packName: string;
  price: number;
  options: {
    hosting: boolean;
    maintenance: boolean;
  }
}