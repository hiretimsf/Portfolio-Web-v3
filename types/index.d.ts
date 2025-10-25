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
  href: string;
  imageUrl: string;
  imageAlt: string;
  github: string;
  liveDemo: string;
  features: Feature[];
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
