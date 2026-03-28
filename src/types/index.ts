export interface Profile {
  name: string;
  title: string;
  department: string;
  institute: string;
  location: string;
  email: string;
  personalWebsite?: string;
  labWebsite: string;
  phone: string;
  profileImage: string;
  tagline: string;
  about: string;
  researchIntro: string;
  callForStudents: string;
  researchAreas: string[];
  teaching: TeachingEntry[];
  newCourseIntroduced?: string;
  contact: Contact;
  meetingLink?: string;
  twitter?: string;
  linkedin?: string;
}

export interface TeachingEntry {
  code: string;
  name: string;
  semesters: string;
}

export interface Contact {
  email: string;
  labWebsite: string;
  personalWebsite?: string;
  phone: string;
}

export interface NewsItem {
  date: string;
  title: string;
  description: string;
  image?: string;
}

export interface Person {
  name: string;
  role: string;
  topic?: string;
  fellowship?: string;
  notes?: string;
  image?: string;
  website?: string;
  email?: string;
}

export interface Publication {
  authors: string;
  title: string;
  venue: string;
  year?: string;
  volume?: string;
  pages?: string;
  doi?: string;
  link?: string;
}

export interface HonorItem {
  text: string;
  year?: string;
}

export interface LabInfo {
  name: string;
  fullName: string;
  description: string;
  researchAreas: string[];
  collaborations: string[];
}
