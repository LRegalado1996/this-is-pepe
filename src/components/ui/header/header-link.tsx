/**
 * Navigation link component with active state and icon animation.
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import type { PagesType } from './types';

interface Props {
  page: PagesType;
}

export const HeaderLink = ({ page }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === page.href;
  const isHome = page.href === '/';

  return (
    <Link
      href={page.href}
      aria-label={page.ariaLabel}
      className={clsx(
        'flex justify-center items-center gap-1',
        'text-sm py-2 px-4 rounded-full w-fit',
        'transition-all cursor-pointer',
        'hover:bg-primary',
        isActive && !isHome && 'bg-light-primary font-semibold'
      )}
    >
      <motion.span
        whileHover={{ rotate: 5 }}
        transition={{ type: 'spring', stiffness: 300 }}
      >
        {page.icon}
      </motion.span>
      <span className="hidden md:block">{page.name}</span>
    </Link>
  );
};
