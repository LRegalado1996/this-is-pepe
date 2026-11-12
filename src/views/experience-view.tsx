/**
 * Work Experience page: the full career timeline, season by season.
 */
import { Timeline } from '@/components/experience/timeline';
import { JsonLd } from '@/components/seo/json-ld';
import { ClosingCta } from '@/components/ui/closing-cta';
import { PageHero } from '@/components/ui/page-hero';
import { careerStartYear } from '@/content/jobs';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';
import { structuredData } from '@/lib/seo/config';

interface Props {
  locale: Locale;
}

export const ExperienceView = ({ locale }: Props) => {
  const { experience, nav } = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={structuredData.breadcrumbs(locale, [
          { name: nav.labels.experience, path: routePath('experience', locale) },
        ])}
      />

      <PageHero eyebrow={experience.eyebrow(careerStartYear)} lines={experience.title}>
        <p>{experience.lead}</p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4">
        <Timeline locale={locale} />
      </section>

      <ClosingCta locale={locale} />
    </>
  );
};
