
export interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  reviews: number;
  price: string;
  originalPrice?: string;
  bestseller?: boolean;
  tag?: string;
}
