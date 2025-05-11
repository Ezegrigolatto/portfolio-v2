export interface Photo {
  key: string;
  url: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  full_description: string;
  images: Photo[];
  start_date: string;
  end_date: string;
  challenges: string;
  long_role_explanation: string;
  technologies: string[];
  slug: string;
}
