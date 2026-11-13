/**
 * Full-screen mobile navigation: moss overlay with display-size links.
 * Rendered outside the header because the header's backdrop filter would
 * otherwise become the containing block of this fixed overlay. Its z-index
 * must stay above page content (z-10 at most) and below the header (z-20).
 */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/content/site';
import { routePath, type Locale, type RouteKey } from '@/lib/i18n/config';
import { socialProfiles } from '@/lib/seo/config';
import { navRoutes } from '../navigation';
import { LanguageSwitch } from './language-switch';

interface Props {
  locale: Locale;
  open: boolean;
  onClose: () => void;
}

const menuRoutes: RouteKey[] = ['home', ...navRoutes];

const socials = [
  { name: 'LinkedIn', href: socialProfiles.linkedin },
  { name: 'GitHub', href: socialProfiles.github },
  { name: 'X', href: socialProfiles.twitter },
  { name: 'Instagram', href: socialProfiles.instagram },
];

export const MobileMenu = ({ locale, open, onClose }: Props) => {
  const pathname = usePathname();
  const { nav } = getDictionary(locale);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-menu"
          role="dialog"
          aria-modal="true"
          aria-label={nav.menu}
          data-lenis-prevent
          className="fixed inset-0 z-[15] bg-moss text-paper lg:hidden flex flex-col justify-between px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="flex flex-col gap-1">
            {menuRoutes.map((route, i) => {
              const href = routePath(route, locale);
              const isActive = pathname === href;

              return (
                <motion.li
                  key={route}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
                >
                  <Link
                    href={href}
                    onClick={onClose}
                    aria-current={isActive ? 'page' : undefined}
                    className={clsx(
                      'font-display text-[clamp(2.6rem,13vw,4.5rem)] block',
                      isActive ? 'text-volt' : 'text-paper'
                    )}
                  >
                    {nav.labels[route]}
                  </Link>
                </motion.li>
              );
            })}
          </ul>

          <div className="flex flex-wrap items-center justify-between gap-4 mt-10">
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-xs uppercase tracking-[0.14em] font-semibold text-paper/70">
              {socials.map((social) => (
                <li key={social.name}>
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
            <LanguageSwitch
              locale={locale}
              full
              onNavigate={onClose}
              className="border-paper/40 hover:bg-volt hover:text-ink hover:border-volt"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
