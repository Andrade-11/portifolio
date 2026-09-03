export type Locale = 'en' | 'pt-BR';

export type LocalizedString = Record<Locale, string>;

export type LocalizedList = Record<Locale, string[]>;

export type ProjectScreenshot = {
  src: string;
  alt: LocalizedString;
  caption?: LocalizedString;
};

export type Project = {
  id: string;
  slug: string;
  name: string;
  tagline: LocalizedString;
  summary: LocalizedString;
  description?: LocalizedString;
  year?: string;
  status?: LocalizedString;
  category: LocalizedString;
  organization?: string;
  role?: LocalizedString;
  problem?: LocalizedString;
  solution?: LocalizedString;
  responsibilities?: LocalizedList;
  engineering?: LocalizedList;
  challenges?: LocalizedList;
  results?: LocalizedString;
  lessons?: LocalizedString;
  technologies: string[];
  screenshots?: ProjectScreenshot[];
  links?: { label: LocalizedString; href: string }[];
  featured: boolean;
};

export type Experience = {
  company: string;
  role: LocalizedString;
  start: string;
  end?: string;
  current?: boolean;
  employment?: LocalizedString;
  location?: LocalizedString;
  context?: LocalizedString;
  description?: LocalizedString;
  responsibilities?: LocalizedList;
  technologies?: string[];
};

export type AcademicItem = {
  id: string;
  title: LocalizedString;
  category: LocalizedString;
  context: LocalizedString;
  description: LocalizedString;
  institution?: LocalizedString;
  participation?: LocalizedString;
  activities?: LocalizedList;
  technologies?: string[];
  media?: ProjectScreenshot[];
  related?: {
    title: LocalizedString;
    subtitle?: LocalizedString;
    description?: LocalizedString;
    technologies?: string[];
    media?: ProjectScreenshot[];
  };
};

export type CurrentFocus = {
  label: LocalizedString;
  items: LocalizedList;
};
