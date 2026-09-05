export type Profile = {
  name: string;
  title: string;
  faculty: string;
  location: string;
  email: string;
  about: string;
  avatarUrl: string | null;
};

export type SocialLink = {
  id: string;
  label: string;
  url: string;
  published: boolean;
  sortOrder: number;
};

export type Project = {
  id: string;
  title: string;
  summary: string;
  description: string;
  imageUrl: string | null;
  liveUrl: string | null;
  repoUrl: string | null;
  tags: string[];
  featured: boolean;
  published: boolean;
  sortOrder: number;
};

export type Certificate = {
  id: string;
  title: string;
  issuer: string;
  imageUrl: string | null;
  url: string | null;
  issuedOn: string | null;
  published: boolean;
  sortOrder: number;
};

export type Experience = {
  id: string;
  title: string;
  organization: string;
  summary: string;
  startedOn: string | null;
  endedOn: string | null;
  published: boolean;
  sortOrder: number;
};

export type Skill = {
  id: string;
  name: string;
  group: string;
  published: boolean;
  sortOrder: number;
};

export type Education = {
  id: string;
  institution: string;
  program: string;
  summary: string;
  startedOn: string | null;
  endedOn: string | null;
  published: boolean;
  sortOrder: number;
};

export type ContentSnapshot = {
  profile: Profile;
  socials: SocialLink[];
  projects: Project[];
  certificates: Certificate[];
  experience: Experience[];
  skills: Skill[];
  education: Education[];
};
