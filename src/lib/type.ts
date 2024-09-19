export type PaperType =
  | "Journal Article"
  | "Conference Paper"
  | "Conference Proceedings";
export type PublicationStatus =
  | "Published"
  | "Under Review"
  | "Accepted"
  | "In Preparation";

export interface Paper {
  id: number;
  title: string;
  authors: string[];
  type: PaperType;
  publicationDate?: string;
  status: PublicationStatus;
  venue?: string;
  doi?: string;
  link?: string;
  images?: string[];
}

export interface AcamdemicInfo {
  institution: string;
  location: {
    city: string;
    postalCode: string;
    country: string;
  };
  started: string;
  completed: string;
  degree?: {
    obtainedDegree: string;
    gradeObtained: number;
    maxGrade: number;
    gradeName: string;
    position?: number;
    totalPupil?: number;
    marksPercentage?: number;
  }[];
  reminisce: string;
  cover: string;
  logo: string;
}

export interface ResearchExperience {
  title: string;
  institution?: string;
  group?: string;
  supervisor?: string;
  startDate: string;
  endDate: string;
  type: "research" | "project" | "thesis";
  thesisTitle?: string;
  projectTitle?: string;
  images?: string[];
  description?: string[];
  competition?: string;
}

export interface ProfessionalExperience {
  company: string;
  formerName?: string;
  designation: string;
  startDate: string;
  endDate?: string;
  responsibilities: string[];
}

export interface Reference {
  name: string;
  title: string;
  department: string;
  institution: string;
  email: string;
  phone: string;
  image?: string;
}

export interface DesignPortfolioItem {
  id: number;
  name: string;
  platform: string[];
  images: string[];
  description?: string;
}
