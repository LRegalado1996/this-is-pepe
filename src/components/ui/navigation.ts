/**
 * Primary navigation entries shared by the header, mobile menu and footer.
 */
export interface NavPage {
  name: string;
  href: string;
  ariaLabel: string;
}

export const navPages: NavPage[] = [
  { name: 'About', href: '/about-me', ariaLabel: 'Go to About Me' },
  { name: 'Experience', href: '/work-experience', ariaLabel: 'Go to Work Experience' },
  { name: 'Writing', href: '/writing', ariaLabel: 'Go to Writing' },
  { name: 'Contact', href: '/contact', ariaLabel: 'Go to Contact' },
];
