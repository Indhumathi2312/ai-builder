export interface FooterColumn {
  title: string;
  links: { name: string; href: string }[];
}

export const footerColumns: FooterColumn[] = [
  {
    title: "PRODUCT",
    links: [
      { name: "Pricing", href: "#pricing" },
      { name: "Roadmap", href: "#" },
      { name: "Features", href: "#" },
      { name: "No-code platform", href: "#" },
      { name: "1-click launch", href: "#" },
      { name: "Latest LLMs", href: "#" },
      { name: "Third-party integrations", href: "#" },
      { name: "Design from images", href: "#" },
      { name: "Content editing mode", href: "#" },
      { name: "Built-in SEO", href: "#" },
      { name: "Code editing", href: "#" },
    ],
  },
  {
    title: "RESOURCES",
    links: [
      { name: "Community", href: "#" },
      { name: "Tutorials", href: "#" },
      { name: "Videos", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Knowledge Base", href: "#" },
    ],
  },
  {
    title: "PARTNERSHIP",
    links: [
      { name: "Referral program", href: "#" },
      { name: "Affiliate program", href: "#" },
      { name: "Partners program", href: "#" },
    ],
  },
  {
    title: "MORE FROM HOSTINGER",
    links: [
      { name: "Web hosting", href: "#" },
      { name: "Hosting for WordPress", href: "#" },
      { name: "Hosting for WooCommerce", href: "#" },
      { name: "Cloud hosting", href: "#" },
      { name: "VPS hosting", href: "#" },
      { name: "Hosting for agencies", href: "#" },
      { name: "Domain name search", href: "#" },
      { name: "Domain transfer", href: "#" },
      { name: "Email marketing", href: "#" },
      { name: "Business email", href: "#" },
      { name: "Sitemap", href: "#" },
    ],
  },
  {
    title: "COMPANY",
    links: [
      { name: "About Hostinger", href: "#" },
      { name: "Our technology", href: "#" },
      { name: "Contact us", href: "#" },
    ],
  },
];
