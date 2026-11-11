/**
 * Navigation link with an animated volt underline for hover/active states.
 */
'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import type { PagesType } from './types';

interface Props {
  page: PagesType;
}

export const HeaderLink = ({ page }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === page.href;

  return (
    <Link
      href={page.href}
      aria-label={page.ariaLabel}
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'relative group inline-block py-2 px-3',
        'text-xs md:text-sm uppercase tracking-[0.14em] font-semibold',
        'transition-colors hover:text-moss'
      )}
    >
      {page.name}
      <span
        className={clsx(
          'absolute left-3 right-3 bottom-1 h-[3px] bg-volt',
          'origin-left transition-transform duration-200',
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        )}
      />
    </Link>
  );
};
