export interface ProductSpec {
  icon: string;
  name: string;
  desc: string;
  priceTag: string;
}

export interface Product {
  id: string;
  name: string;
  emoji: string;
  description: string;
  basePrice: number;
  minOrder: number;
  pricingTag: string;
  category: 'wear' | 'mug' | 'gift' | 'other';
  specs: string[];
}

export interface IndustryProduct {
  icon: string;
  name: string;
  desc: string;
  tag: string;
}

export interface Industry {
  id: string;
  emoji: string;
  label: string;
  title: string;
  subtitle: string;
  badgeText: string;
  gradientClass: string;
  themeColor: string; // Tailwind color, e.g., 'orange', 'blue', etc.
  products: IndustryProduct[];
}

export interface Testimonial {
  name: string;
  text: string;
  role: string;
  rating: number;
  initials: string;
  colorClass: string;
  category: 'all' | 'gym' | 'school' | 'team';
}
