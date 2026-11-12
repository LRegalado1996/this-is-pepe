/**
 * Link to the same page in the other language. A plain anchor on purpose:
 * each language has its own root layout, so the switch is a full page load.
 */
'use client';

import { clsx } from 'clsx';
import { usePathname } from 'next/navigation';
import { getDictionary } from '@/content/site';
import { alternatePath, type Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
  className?: string;
  /** Show the full label ("Ver en español") instead of the short code. */
  full?: boolean;
  onNavigate?: () => void;
}

export const LanguageSwitch = ({ locale, className, full = false, onNavigate }: Props) => {
  const pathname = usePathname();
  const target: Locale = locale === 'en' ? 'es' : 'en';
  const { switchLanguage, switchLanguageShort } = getDictionary(locale).nav;

  return (
    <a
      href={alternatePath(pathname, target)}
      hrefLang={target}
      lang={target}
      aria-label={switchLanguage}
      onClick={onNavigate}
      className={clsx(
        'inline-block text-[0.7rem] uppercase tracking-[0.14em] font-bold border rounded-full px-3 py-1.5 transition-colors',
        className
      )}
    >
      {full ? switchLanguage : switchLanguageShort}
    </a>
  );
};
