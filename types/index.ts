export interface InitialDataProps {
  title?: string;
  category?: string;
  tags?: string[];
  description?: string;
  coverImage?: string;
  imgs?: { url: string; name: string }[];
  pricingModel?: string;
  discount?: number;
  finalPrice?: number;
  basePrice?: number;
}