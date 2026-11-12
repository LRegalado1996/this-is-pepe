/**
 * Sticky header: paper glass over content, display wordmark, uppercase nav
 * with volt active/hover underlines, and a full-screen menu on mobile.
 */
'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';
import { navPages } from '../navigation';
import { HeaderLink } from './header-link';
import { MobileMenu } from './mobile-menu';

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <motion.header
        className={clsx(
          'w-full sticky top-0 z-20 border-b transition-colors duration-300',
          menuOpen
            ? 'bg-moss text-paper border-paper/15'
            : 'backdrop-blur-lg bg-paper/85 border-ink/10'
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ type: 'spring', stiffness: 120, damping: 20 }}
      >
        <nav
          aria-label="Primary"
          className="flex items-center justify-between max-w-[1280px] py-3 px-4 m-auto"
        >
          <Link
            href="/"
            aria-label="Go to Home"
            onClick={closeMenu}
            className={clsx(
              'font-display text-xl md:text-2xl tracking-tight transition-colors',
              !menuOpen && 'hover:text-moss'
            )}
          >
            Lucas Regalado
            <span className={menuOpen ? 'text-volt' : 'text-volt-dim'}>.</span>
          </Link>

          <ul className="hidden md:flex items-center gap-2">
            {navPages.map((page) => (
              <li key={page.href}>
                <HeaderLink page={page} />
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="md:hidden -mr-2 p-2 cursor-pointer"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </nav>
      </motion.header>

      <MobileMenu open={menuOpen} onClose={closeMenu} />
    </>
  );
};
