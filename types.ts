
export type Language = 'it' | 'en' | 'es' | 'fr';

export interface Achievement {
  title: string;
  count: number;
  icon: string;
}

export interface StaffMember {
  name: string;
  role: string;
  bio: string[];
  image: string;
  category: 'leadership' | 'coaching' | 'analytics' | 'performance';
}

export interface Facility {
  id: string;
  titleKey: string;
  descriptionKey: string;
  noteKey?: string;
  coverImage: string;
  galleryImages: string[];
  galleryDescriptionKey?: string;
  secondaryGallery?: {
    titleKey: string;
    descriptionKey?: string;
    images: string[];
  };
}

export interface Program {
  id: string;
  title: string;
  target: string;
  timing: string;
  deadline?: string;
  description: string;
  overview?: string;
  highlights: string[];
  image: string;
  detailImage?: string;
  details: string;
  successStoryLink?: string;
}