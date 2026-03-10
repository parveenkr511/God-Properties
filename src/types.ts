export type PropertyCategory = 'Flats 1bhk, 2bhk, 3bhk, 4bhk' | 'Villas' | 'Commercial' | 'Plots';

export interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  type: string;
  category: PropertyCategory;
  bedrooms?: number;
  bathrooms?: number;
  area: number; // in sq ft
  images: string[];
  description: string;
  amenities: string[];
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  image: string;
}
