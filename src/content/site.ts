/** Site-wide content: navigation and footer. Edit text here, not in the components. */

export type NavItem = { label: string; href: string };

export const navigation: NavItem[] = [
  { label: 'work', href: '/work' },
  { label: 'about', href: '/about' },
  { label: 'contact', href: '/contact' },
];

export type FooterLink = {
  label: string;
  /** Leave undefined until the real URL is known; the label then renders as plain text. */
  href?: string;
};

export const footer = {
  signature: 'Frosa 2026',
  links: [
    { label: 'f.rosa.design@gmail.com', href: 'mailto:f.rosa.design@gmail.com' },
    // TODO(assets): Instagram and LinkedIn URLs were not supplied.
    { label: 'Instagram', href: undefined },
    { label: 'LinkedIn', href: undefined },
  ] satisfies FooterLink[],
  description:
    'Frosa is the independent design practice of Fernanda Rosa, connecting product strategy, experience design, and hands-on building. With 12+ years of experience across brands and digital products, the practice combines thoughtful decisions, visual craft, and AI-assisted development. Based in Heidelberg, Germany, and originally from Brazil.',
};
