/**
 * Sticky header: paper glass over content, display wordmark, uppercase nav
 * with volt active/hover underlines, the language switch and a full-screen
 * menu on smaller screens.
 */
'use client';

import { useCallback, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Menu, X } from 'lucide-react';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';
import { navRoutes } from '../navigation';
import { HeaderLink } from './header-link';
import { LanguageSwitch } from './language-switch';
import { MobileMenu } from './mobile-menu';

interface Props {
  locale: Locale;
}

export const Header = ({ locale }: Props) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);
  const { nav } = getDictionary(locale);

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
          aria-label={nav.primary}
          className="flex items-center justify-between max-w-[1280px] py-3 px-4 m-auto"
        >
          <Link
            href={routePath('home', locale)}
            onClick={closeMenu}
            className={clsx(
              'font-display text-xl md:text-2xl tracking-tight transition-colors',
              !menuOpen && 'hover:text-moss'
            )}
          >
            Lucas Regalado
            <span className={menuOpen ? 'text-volt' : 'text-volt-dim'}>.</span>
          </Link>

          <div className="hidden lg:flex items-center gap-3">
            <ul className="flex items-center gap-1">
              {navRoutes.map((route) => (
                <li key={route}>
                  <HeaderLink href={routePath(route, locale)}>{nav.labels[route]}</HeaderLink>
                </li>
              ))}
            </ul>
            <LanguageSwitch
              locale={locale}
              className="border-ink/30 hover:bg-volt hover:border-volt"
            />
          </div>

          <button
            type="button"
            className="lg:hidden -mr-2 p-2 cursor-pointer"
            aria-label={menuOpen ? nav.closeMenu : nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={24} strokeWidth={2} /> : <Menu size={24} strokeWidth={2} />}
          </button>
        </nav>
      </motion.header>

      <MobileMenu locale={locale} open={menuOpen} onClose={closeMenu} />
    </>
  );
};
