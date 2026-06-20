export type Locale = "tr" | "en";

export type LocalizedString = {
  tr: string;
  en: string;
};

export type ImageAsset = {
  src: string;
  width: number;
  height: number;
  alt?: LocalizedString;
};

export type Project = {
  id: string;
  slug: string;
  title: LocalizedString;
  category: LocalizedString;
  description: LocalizedString;
  year?: number;
  tools: string[];
  cover: ImageAsset;
  details: ImageAsset[];
};

export type ExperienceEntry = {
  id: string;
  company: LocalizedString;
  role: LocalizedString;
  location: LocalizedString;
  period: LocalizedString;
  bullets: LocalizedString[];
};

export type SkillGroup = {
  id: string;
  label: LocalizedString;
  level: LocalizedString;
  items: LocalizedString[];
};

export type EducationEntry = {
  id: string;
  school: LocalizedString;
  degree: LocalizedString;
  years: string;
  location: LocalizedString;
};

export type LanguageEntry = {
  name: LocalizedString;
  level: LocalizedString;
};

export type Profile = {
  name: string;
  title: LocalizedString;
  location: string;
  email: string;
  bio: LocalizedString;
  education: EducationEntry[];
  languages: LanguageEntry[];
};
