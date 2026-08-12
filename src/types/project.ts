export type ProjectStatus = "completed" | "in-progress";

export type ProjectCategory =
  | "e-commerce"
  | "business-website"
  | "blog-content"
  | "real-estate"
  | "custom-software";

export interface ProjectScreenshot {
  src: string;
  alt: string;
  caption?: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  description: string;

  category: ProjectCategory;
  status: ProjectStatus;

  featured: boolean;
  priority: number;
  heroShowcase: boolean;

  industry: string;

  services: string[];
  technologies: string[];

  thumbnail: string;
  heroImage: string;

  liveUrl?: string;
  githubUrl?: string;

  caseStudy?: {
    challenge: string;
    solution: string;
    outcome: string;
  };
  screenshots?: ProjectScreenshot[];
}