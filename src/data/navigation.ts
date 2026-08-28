import { NavItem } from "@/types";

export const topBannerData = {
  text: "Save up to 68% on AI Web App Builder + 2 months free",
  linkText: "Claim Deal",
  linkHref: "#pricing",
};

export const mainNavItems: NavItem[] = [
  {
    label: "Product",
    href: "#sub-menu-build",
    hasDropdown: true,
  },
  {
    label: "What you can build",
    href: "#sub-menu-templates",
    hasDropdown: true,
  },
  {
    label: "Pricing",
    href: "#pricing",
    hasDropdown: false,
  },
] as (NavItem & { hasDropdown?: boolean })[];
