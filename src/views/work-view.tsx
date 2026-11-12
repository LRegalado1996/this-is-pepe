/**
 * Work index: every case study as a numbered row.
 */
import { JsonLd } from '@/components/seo/json-ld';
import { ClosingCta } from '@/components/ui/closing-cta';
import { PageHero } from '@/components/ui/page-hero';
import { ProjectList } from '@/components/work/project-list';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';
import { structuredData } from '@/lib/seo/config';

interface Props {
  locale: Locale;
}

export const WorkView = ({ locale }: Props) => {
  const { work, nav } = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={structuredData.breadcrumbs(locale, [
          { name: nav.labels.work, path: routePath('work', locale) },
        ])}
      />

      <PageHero eyebrow={work.eyebrow} lines={work.title}>
        <p>{work.lead}</p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4">
        <ProjectList locale={locale} />
      </section>

      <ClosingCta locale={locale} />
    </>
  );
};
