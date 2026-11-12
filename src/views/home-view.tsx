/**
 * Home composition: hero, skills marquee, the pinned On Stack / Off Stack
 * horizontal track, career seasons, selected work, testimonials, writing,
 * brand callout and the closing call to action.
 */
import { Callout } from '@/components/home/callout';
import { Hero } from '@/components/home/hero';
import { OnOffStack } from '@/components/home/on-off-stack';
import { Seasons } from '@/components/home/seasons';
import { SelectedWork } from '@/components/home/selected-work';
import { Testimonials } from '@/components/home/testimonials';
import { WritingPreview } from '@/components/home/writing-preview';
import { ClosingCta } from '@/components/ui/closing-cta';
import { Marquee } from '@/components/ui/marquee';
import { getDictionary } from '@/content/site';
import type { Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
}

export const HomeView = ({ locale }: Props) => (
  <>
    <Hero locale={locale} />
    <Marquee items={getDictionary(locale).marquee} />
    <OnOffStack locale={locale} />
    <Seasons locale={locale} />
    <SelectedWork locale={locale} />
    <Testimonials locale={locale} />
    <WritingPreview locale={locale} />
    <Callout locale={locale} />
    <ClosingCta locale={locale} />
  </>
);
