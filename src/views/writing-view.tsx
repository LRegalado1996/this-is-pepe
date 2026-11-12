/**
 * Writing page: articles by Lucas, linking out to the published originals.
 */
import { JsonLd } from '@/components/seo/json-ld';
import { ClosingCta } from '@/components/ui/closing-cta';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { ArticleCard } from '@/components/writing/article-card';
import { getArticles } from '@/content/articles';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';
import { structuredData } from '@/lib/seo/config';

interface Props {
  locale: Locale;
}

export const WritingView = ({ locale }: Props) => {
  const { writing, nav } = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={[
          structuredData.articles(locale),
          structuredData.breadcrumbs(locale, [
            { name: nav.labels.writing, path: routePath('writing', locale) },
          ]),
        ]}
      />

      <PageHero eyebrow={writing.eyebrow} lines={[writing.title]}>
        <p>{writing.lead}</p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4">
        <div className="grid md:grid-cols-2 gap-4">
          {getArticles(locale).map((article, i) => (
            <Reveal key={article.url} delay={i * 0.08} className="h-full">
              <ArticleCard article={article} locale={locale} />
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
};
