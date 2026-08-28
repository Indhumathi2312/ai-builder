export interface NavItem {
  label: string;
  href: string;
  hasDropdown?: boolean;
  isBadge?: boolean;
  badgeText?: string;
  items?: { title: string; description?: string; href: string; icon?: string }[];
}

export interface HeroData {
  title: string;
  subtitle: string;
  inputPlaceholder: string;
  buttonLabel: string;
  hints: string[];
  trustpilotScore: string;
  trustpilotReviews: string;
}

export interface BadgeItem {
  id: string;
  label: string;
}

export interface ShowcaseCategory {
  id: string;
  name: string;
  title: string;
  description: string;
  imageSrc: string;
  mediaType: "image" | "video";
}

export interface ServiceCard {
  id: string;
  number: string;
  title: string;
  description: string;
  badge?: string;
  imageSrc?: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  originalPrice: string;
  currentPrice: string;
  period: string;
  renewPrice: string;
  discountBadge: string;
  features: string[];
  buttonText: string;
  isPopular?: boolean;
}

export interface CompareFeatureItem {
  category: string;
  features: {
    name: string;
    premium: boolean | string;
    business: boolean | string;
    cloud: boolean | string;
  }[];
}

export interface TemplateCard {
  id: string;
  title: string;
  category: string;
  imageSrc: string;
  demoUrl?: string;
}

export interface ReviewItem {
  id: string;
  author: string;
  role?: string;
  avatarSrc: string;
  rating: number;
  content: string;
}

export interface FooterColumn {
  title: string;
  links: { label: string; href: string }[];
}
