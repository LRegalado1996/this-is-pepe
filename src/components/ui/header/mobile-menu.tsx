/**
 * Full-screen mobile navigation: moss overlay with display-size links.
 * Rendered outside the header because the header's backdrop filter would
 * otherwise become the containing block of this fixed overlay.
 */
'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { socialProfiles } from '@/lib/seo/config';
import { navPages } from '../navigation';

interface Props {
  open: boolean;
  onClose: () => void;
}

const links = [{ name: 'Home', href: '/', ariaLabel: 'Go to Home' }, ...navPages];

export const MobileMenu = ({ open, onClose }: Props) => {
  const pathname = usePathname();

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
          aria-label="Menu"
          data-lenis-prevent
          className="fixed inset-0 z-10 bg-moss text-paper md:hidden flex flex-col justify-between px-4 pt-24 pb-8 overflow-y-auto"
          initial={{ clipPath: 'inset(0 0 100% 0)' }}
          animate={{ clipPath: 'inset(0 0 0% 0)' }}
          exit={{ clipPath: 'inset(0 0 100% 0)' }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          <ul className="flex flex-col gap-2">
            {links.map((link, i) => (
              <motion.li
                key={link.href}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  onClick={onClose}
                  aria-current={pathname === link.href ? 'page' : undefined}
                  className={clsx(
                    'font-display text-[clamp(3rem,15vw,5rem)] block',
                    pathname === link.href ? 'text-volt' : 'text-paper'
                  )}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          <ul className="flex flex-wrap gap-x-6 gap-y-2 mt-10 text-xs uppercase tracking-[0.14em] font-semibold text-paper/70">
            <li>
              <a href={socialProfiles.linkedin} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a href={socialProfiles.twitter} target="_blank" rel="noopener noreferrer">
                X
              </a>
            </li>
            <li>
              <a href={socialProfiles.instagram} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
