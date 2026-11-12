/**
 * Closing call to action shared by every page: the giant headline is itself
 * the link to the contact page, followed by the social links.
 */
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';
import { socialProfiles } from '@/lib/seo/config';
import { Eyebrow } from './eyebrow';
import { Reveal } from './reveal';

interface Props {
  locale: Locale;
}

const socials = [
  { name: 'LinkedIn', href: socialProfiles.linkedin },
  { name: 'X', href: socialProfiles.twitter },
  { name: 'Instagram', href: socialProfiles.instagram },
];

export const ClosingCta = ({ locale }: Props) => {
  const { closing } = getDictionary(locale);

  return (
    <section className="w-full max-w-[1280px] px-4 py-20 md:py-28">
      <Reveal>
        <Eyebrow className="mb-4">{closing.eyebrow}</Eyebrow>
        <Link
          href={routePath('contact', locale)}
          className="group inline-flex items-start gap-2 md:gap-4 w-fit"
        >
          <span className="font-display text-[clamp(3.2rem,11vw,9rem)] text-ink transition-colors group-hover:text-moss">
            {closing.cta}
          </span>
          <ArrowUpRight
            className="w-[clamp(1.8rem,6vw,5rem)] h-[clamp(1.8rem,6vw,5rem)] mt-1 md:mt-3 text-volt-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            strokeWidth={2.25}
            aria-hidden
          />
        </Link>

        <ul className="flex flex-wrap gap-3 mt-10">
          {socials.map((social) => (
            <li key={social.name}>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-[0.7rem] uppercase tracking-[0.14em] font-bold border border-ink/30 rounded-full px-4 py-2 transition-colors hover:bg-volt hover:border-volt"
              >
                {social.name}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  );
};
