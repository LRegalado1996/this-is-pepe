/**
 * Site-wide footer: wordmark, navigation, social links and small print.
 */
import Link from 'next/link';
import { getDictionary } from '@/content/site';
import { routePath, type Locale, type RouteKey } from '@/lib/i18n/config';
import { author, socialProfiles } from '@/lib/seo/config';
import { LanguageSwitch } from './header/language-switch';
import { navRoutes } from './navigation';

interface Props {
  locale: Locale;
}

const footerRoutes: RouteKey[] = ['home', ...navRoutes];

const linkClass = 'text-sm text-paper/75 transition-colors hover:text-volt';
const headingClass = 'text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-paper/50 mb-4';

export const Footer = ({ locale }: Props) => {
  const { nav, footer } = getDictionary(locale);

  const socials = [
    { name: 'LinkedIn', href: socialProfiles.linkedin },
    { name: 'GitHub', href: socialProfiles.github },
    { name: 'X', href: socialProfiles.twitter },
    { name: 'Instagram', href: socialProfiles.instagram },
    { name: footer.email, href: socialProfiles.email },
  ];

  return (
    <footer className="w-full bg-ink text-paper">
      <div className="max-w-[1280px] m-auto px-4 pt-14 pb-8">
        <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
          <div>
            <Link href={routePath('home', locale)} className="font-display text-3xl md:text-4xl">
              Lucas Regalado<span className="text-volt">.</span>
            </Link>
            <p className="max-w-[40ch] mt-4 text-sm text-paper/70">
              {footer.bio}{' '}
              <a
                href={author.employer.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4 hover:text-volt transition-colors"
              >
                {author.employer.name}
              </a>
              .
            </p>
            <LanguageSwitch
              locale={locale}
              full
              className="mt-6 border-paper/30 hover:bg-volt hover:text-ink hover:border-volt"
            />
          </div>

          <nav aria-label={nav.footer}>
            <p className={headingClass}>{footer.pages}</p>
            <ul className="flex flex-col gap-2">
              {footerRoutes.map((route) => (
                <li key={route}>
                  <Link href={routePath(route, locale)} className={linkClass}>
                    {nav.labels[route]}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className={headingClass}>{footer.elsewhere}</p>
            <ul className="flex flex-col gap-2">
              {socials.map((social) => (
                <li key={social.name}>
                  <a
                    href={social.href}
                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                    rel="noopener noreferrer me"
                    className={linkClass}
                  >
                    {social.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-3 mt-12 pt-6 border-t border-paper/15 text-xs text-paper/50">
          <span>
            © {new Date().getFullYear()} {author.name}
          </span>
          <span>{footer.madeIn}</span>
        </div>
      </div>
    </footer>
  );
};
