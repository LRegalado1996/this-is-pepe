/**
 * Sticky header: paper glass over content, display wordmark, uppercase nav
 * with volt active/hover underlines.
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { PagesType } from './types';
import { HeaderLink } from './header-link';

const pages: PagesType[] = [
  {
    name: 'About',
    href: '/about-me',
    ariaLabel: 'Go to About Me',
  },
  {
    name: 'Experience',
    href: '/work-experience',
    ariaLabel: 'Go to Work Experience',
  },
  {
    name: 'Contact',
    href: '/contact',
    ariaLabel: 'Go to Contact',
  },
];

export const Header = () => {
  return (
    <motion.header
      className={clsx(
        'w-full sticky top-0 z-20',
        'backdrop-blur-lg bg-paper/85',
        'border-b border-ink/10'
      )}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 120, damping: 20 }}
    >
      <nav className="flex items-center justify-between max-w-[1280px] py-3 px-4 m-auto">
        <Link
          href="/"
          aria-label="Go to Home"
          className="font-display text-xl md:text-2xl tracking-tight hover:text-moss transition-colors"
        >
          Lucas Regalado
          <span className="text-volt-dim">.</span>
        </Link>

        <ul className="flex items-center gap-1 md:gap-2">
          {pages.map((page) => (
            <li key={page.href}>
              <HeaderLink page={page} />
            </li>
          ))}
        </ul>
      </nav>
    </motion.header>
  );
};
