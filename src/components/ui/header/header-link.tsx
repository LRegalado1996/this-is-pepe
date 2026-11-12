/**
 * Navigation link with an animated volt underline for hover/active states.
 */
'use client';

import Link from 'next/link';
import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';

interface Props {
  href: string;
  children: React.ReactNode;
}

export const HeaderLink = ({ href, children }: Props) => {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(`${href}/`);

  return (
    <Link
      href={href}
      aria-current={isActive ? 'page' : undefined}
      className={clsx(
        'relative group inline-block py-2 px-2.5 lg:px-3',
        'text-xs lg:text-sm uppercase tracking-[0.14em] font-semibold',
        'transition-colors hover:text-moss'
      )}
    >
      {children}
      <span
        className={clsx(
          'absolute left-2.5 right-2.5 lg:left-3 lg:right-3 bottom-1 h-[3px] bg-volt',
          'origin-left transition-transform duration-200',
          isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
        )}
      />
    </Link>
  );
};
