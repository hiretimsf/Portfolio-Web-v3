import type { flag } from "country-flag-icons";
import type { LucideIcon } from "lucide-react";
import type { IconType } from "react-icons";

export interface HeadType {
  page: string;
  title: string;
  description: string;
  slug: string;
}

export interface NavigationLink {
  href: string;
  label: string;
}

export interface SocialLink {
  href: string;
  label: string;
}
export interface Project {
  id: number;
  type: string;
  subType: string;
  title: string;
  features: Feature[];
  description: string;
  imageUrlHorizontal: string;
  imageUrlVertical: string;
  href: string;
}

export interface CurrentProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  href: string;
  githubLink?: string;
  downloadLink?: string;
}

export interface EarlyProject {
  id: number;
  year: number;
  status: string;
  section: string;
  type: string;
  subType: string;
  title: string;
  description: string;
  video: string;
  videoAlt: string;
}

export interface WebProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  github?: string;
  liveDemo?: string;
}

export interface ModernProject {
  id: number;
  year: number;
  status: string;
  section: string;
  type: string;
  subType: string;
  title: string;
  description: string;
  video: string;
  videoAlt: string;
  github: string;
  download?: string;
  liveDemo: string;
  features: Feature[];
}

export interface Feature {
  feature: string;
}

export interface BulletListItem {
  name?: string;
  description: string;
  href?: string;
}

export interface Shoutout {
  type: string;
  url?: string;
  id?: string;
}

export interface CheckoutItem {
  name: string;
  description: string;
  image: string;
  link: string;
}

export interface AndroidApp {
  id: number;
  title: string;
  image: string;
  description: string;
  liveDemo?: string;
  github?: string;
  download?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export type ExperiencePositionItemType = {
  id: string;
  title: string;
  employmentPeriod: string;
  employmentDuration?: string;
  employmentType?: string;
  description?: string;
  icon?: LucideIcon | IconType | React.ReactNode;
  skills?: string[];
  isExpanded?: boolean;
};

export type ExperienceItemType = {
  id: string;
  companyName: string;
  companyWebsite?: string;
  companyLogo?: string;
  companyLogoAlt?: string;
  companyLocation?: string;
  country?: flag;
  positions: ExperiencePositionItemType[];
  isCurrentEmployer?: boolean;
};
