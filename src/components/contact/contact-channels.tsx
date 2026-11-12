/**
 * Direct contact channels as large rows: label, value and a volt hover.
 */
import { ArrowUpRight } from 'lucide-react';
import { author, socialProfiles } from '@/lib/seo/config';
import { Reveal } from '../ui/reveal';

const channels = [
  { label: 'Email', value: author.email, href: socialProfiles.email },
  { label: 'LinkedIn', value: 'in/lucas-regalado', href: socialProfiles.linkedin },
  { label: 'WhatsApp', value: '+598 91 475 727', href: socialProfiles.whatsapp },
  { label: 'X', value: '@lucasregalado5', href: socialProfiles.twitter },
  { label: 'Instagram', value: '@lucas.regalado18', href: socialProfiles.instagram },
];

export const ContactChannels = () => (
  <ul>
    {channels.map((channel, i) => (
      <li key={channel.label} className="border-t border-ink/15 last:border-b">
        <Reveal delay={i * 0.05}>
          <a
            href={channel.href}
            target={channel.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noopener noreferrer"
            className="group grid grid-cols-[1fr_auto] md:grid-cols-[200px_1fr_auto] items-center gap-x-6 gap-y-1 py-6 md:py-8 px-2 -mx-2 rounded-lg transition-colors hover:bg-volt"
          >
            <span className="col-span-2 md:col-span-1 text-[0.7rem] md:text-xs uppercase tracking-[0.2em] font-semibold text-moss/70 group-hover:text-ink">
              {channel.label}
            </span>
            <span className="font-display text-[clamp(1.4rem,5vw,3.2rem)] text-ink break-all">
              {channel.value}
            </span>
            <ArrowUpRight
              className="w-6 h-6 md:w-9 md:h-9 text-volt-dim group-hover:text-ink transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              strokeWidth={2.25}
              aria-hidden
            />
          </a>
        </Reveal>
      </li>
    ))}
  </ul>
);
