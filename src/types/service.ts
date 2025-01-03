export type ServiceCategory = 'repair' | 'accessories' | 'other';

export interface Service {
  id: string;
  icon: any; // LucideIcon type
  title: string;
  description: string;
  price: string;
  category: ServiceCategory;
  longDescription?: string;
}