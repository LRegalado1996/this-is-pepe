/**
 * Site-wide footer: wordmark, navigation, social links and small print.
 */
import Link from 'next/link';
import { author, socialProfiles } from '@/lib/seo/config';
import { navPages } from './navigation';

const socials = [
  { name: 'LinkedIn', href: socialProfiles.linkedin },
  { name: 'X', href: socialProfiles.twitter },
  { name: 'Instagram', href: socialProfiles.instagram },
  { name: 'Email', href: socialProfiles.email },
];

const linkClass = 'text-sm text-paper/75 transition-colors hover:text-volt';
const headingClass = 'text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-paper/50 mb-4';

export const Footer = () => (
  <footer className="w-full bg-ink text-paper">
    <div className="max-w-[1280px] m-auto px-4 pt-14 pb-8">
      <div className="grid gap-10 md:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Link href="/" className="font-display text-3xl md:text-4xl">
            Lucas Regalado<span className="text-volt">.</span>
          </Link>
          <p className="max-w-[40ch] mt-4 text-sm text-paper/70">
            {author.jobTitle} from {author.location.city}, {author.location.country}. Currently
            building at{' '}
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
        </div>

        <nav aria-label="Footer">
          <p className={headingClass}>Pages</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/" className={linkClass}>
                Home
              </Link>
            </li>
            {navPages.map((page) => (
              <li key={page.href}>
                <Link href={page.href} className={linkClass}>
                  {page.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <p className={headingClass}>Elsewhere</p>
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
        <span>Made in Uruguay, mate within reach.</span>
      </div>
    </div>
  </footer>
);
