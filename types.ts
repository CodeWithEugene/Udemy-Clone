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
  subtitle?: string;
  students?: number;
  lastUpdated?: string;
  language?: string;
  whatYoullLearn?: string[];
  requirements?: string[];
  longDescription?: string;
  instructorBio?: string;
  courseContent?: {
      sectionTitle: string;
      lectures: { title: string; duration: string; }[]
  }[];
}