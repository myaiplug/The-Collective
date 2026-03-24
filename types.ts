export interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: 'cassette' | 'tool' | 'apparel' | 'gear';
  description?: string;
  quote?: string;
  benefits?: string[];
  license?: { yes: string[]; no: string[] };
  tags?: string[];
  features?: string[]; // For tools
  specs?: string; // For cassettes/gear
  artist?: string;
  audioPreview?: string; // URL for audio preview
  scarcity?: number; // Psychological hook: items left
  badges?: string[]; // e.g. "Best Seller", "Low Stock"
  videoPreview?: string; // YouTube ID or similar
  demo?: boolean; // For VST demos
  isLocked?: boolean; // For locked/unavailable items
}

export interface Artist {
  id: string;
  name: string;
  tagline: string;
  image: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export enum ViewState {
  HOME = 'HOME',
  PRODUCT = 'PRODUCT',
}