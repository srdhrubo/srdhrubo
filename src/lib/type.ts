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
}
