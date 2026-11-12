/**
 * Home composition: hero, skills marquee, the pinned On Stack / Off Stack
 * horizontal track, career seasons, selected work, writing, brand callout
 * and the closing call to action.
 */
import { ClosingCta } from '@/components/ui/closing-cta';
import { Marquee } from '@/components/ui/marquee';
import { Hero } from './sections/hero';
import { OnOffStack } from './sections/on-off-stack';
import { Seasons } from './sections/seasons';
import { SelectedWork } from './sections/selected-work';
import { WritingPreview } from './sections/writing-preview';
import { Callout } from './sections/callout';

const marqueeItems = [
  'React',
  'Next.js',
  'TypeScript',
  'Node.js',
  'PostgreSQL',
  'AI Agents',
  'Claude Code',
  'Senior Full Stack',
];

export const HomeContent = () => {
  return (
    <>
      <Hero />
      <Marquee items={marqueeItems} />
      <OnOffStack />
      <Seasons />
      <SelectedWork />
      <WritingPreview />
      <Callout />
      <ClosingCta />
    </>
  );
};
