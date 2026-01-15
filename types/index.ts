export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  emoji?: string;
  featured?: boolean;
  created_at?: string;
}
