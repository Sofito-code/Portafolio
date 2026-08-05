export interface HeroData {
  name: string;
  role: string;
  about: string;
  contact: ContactInfo;
  photoPath: string;
}

export interface ContactInfo {
  linkedin?: string;
  github?: string;
  itch?: string;
  cv?: string;
  email?: string;
}

export interface JobExperience {
  company: string;
  location: string;
  period: string;
  role: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  location: string;
  period: string;
  degree: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ToolCategory {
  category: string;
  items: string[];
}

export interface ProfileData {
  experiences: JobExperience[];
  education: Education[];
  skills: SkillCategory[];
  tools: ToolCategory[];
}

export interface ProjectData {
  id: string;
  name: string;
  year: string;
  genre: string;
  platform: string;
  gifPath: string;
  iconPath: string;
  description: string;
  categories: string[];
  responsibilities: string[];
  playLink?: string;
  repoLink?: string;
}
