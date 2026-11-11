/**
 * Home composition: hero, skills marquee, the pinned On Stack / Off Stack
 * horizontal track, career seasons, brand callout and the contact CTA.
 */
import { Marquee } from '@/components/ui/marquee';
import { Hero } from './sections/hero';
import { OnOffStack } from './sections/on-off-stack';
import { Seasons } from './sections/seasons';
import { Callout } from './sections/callout';
import { ContactCta } from './sections/contact-cta';

const marqueeItems = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'MongoDB',
  'Senior Full Stack',
];

export const HomeContent = () => {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <OnOffStack />
      <Seasons />
      <Callout />
      <ContactCta />
    </>
  );
};
