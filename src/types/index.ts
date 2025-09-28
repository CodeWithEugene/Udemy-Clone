export interface Course {
  id: number;
  title: string;
  instructor: string;
  image: string;
  rating: number;
  reviews: number;
  price: number;
  originalPrice?: number;
  bestseller?: boolean;
  category: string;
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

export type IconType = 'search' | 'cart' | 'starFull' | 'starHalf' | 'starEmpty' | 'globe' | 'menu' | 'chevronLeft' | 'chevronRight' | 'play' | 'check' | 'alert' | 'closedCaption' | 'infinity' | 'mobile' | 'trophy' | 'plus' | 'minus' | 'heart' | 'share' | 'trash';
