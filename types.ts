
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
}

export interface Program {
  id: string;
  title: string;
  target: string;
  timing: string;
  description: string;
  highlights: string[];
  image: string;
  details: string;
}