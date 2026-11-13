/**
 * Writing page: articles by Lucas linking out to the published originals,
 * followed by his talks and the community events he takes part in.
 */
import { ArrowUpRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { ClosingCta } from '@/components/ui/closing-cta';
import { Eyebrow } from '@/components/ui/eyebrow';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { ArticleCard } from '@/components/writing/article-card';
import { getArticles } from '@/content/articles';
import { getDictionary } from '@/content/site';
import { getCommunityItems, getTalks } from '@/content/talks';
import { routePath, type Locale } from '@/lib/i18n/config';
import { formatMonthYear } from '@/lib/i18n/format-date-range';
import { structuredData } from '@/lib/seo/config';

interface Props {
  locale: Locale;
}

const talkLink =
  'group inline-flex items-center gap-1 text-xs uppercase tracking-[0.14em] font-bold';
const talkLinkArrow =
  'transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5';

export const WritingView = ({ locale }: Props) => {
  const { writing, nav } = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={[
          structuredData.articles(locale),
          structuredData.talks(locale),
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

      <section className="w-full max-w-[1280px] px-4 pt-20 md:pt-28">
        <Reveal>
          <SectionHeading lines={writing.talksTitle} className="text-ink" />
          <p className="max-w-[56ch] text-ink/80 mt-6 md:text-lg">{writing.talksLead}</p>
        </Reveal>

        <ol className="mt-12 md:mt-16">
          {getTalks(locale).map((talk, i) => (
            <li key={talk.url} className="border-t border-ink/15 py-8 md:py-10">
              <Reveal className="grid gap-3 sm:grid-cols-[70px_1fr]">
                <span className="font-display text-3xl md:text-4xl text-volt-dim" aria-hidden>
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <p className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-moss/70">
                    <time dateTime={talk.date}>{formatMonthYear(talk.date, locale)}</time>
                    {' · '}
                    {talk.event}
                    {' · '}
                    {talk.location}
                  </p>
                  <h3 className="font-display text-2xl md:text-4xl text-ink mt-3">{talk.title}</h3>
                  <p className="max-w-[64ch] text-ink/80 mt-4">{talk.description}</p>
                  <div className="flex flex-wrap gap-x-8 gap-y-4 mt-6">
                    {talk.slidesUrl && (
                      <a
                        href={talk.slidesUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        hrefLang={talk.language}
                        type="application/pdf"
                        className={talkLink}
                      >
                        <span className="border-b-[3px] border-volt pb-1">{writing.seeSlides}</span>
                        <ArrowUpRight size={16} className={talkLinkArrow} aria-hidden />
                      </a>
                    )}
                    <a href={talk.url} target="_blank" rel="noopener noreferrer" className={talkLink}>
                      <span className="border-b-[3px] border-volt pb-1">{writing.seePost}</span>
                      <ArrowUpRight size={16} className={talkLinkArrow} aria-hidden />
                    </a>
                  </div>
                  {talk.slidesUrl && (
                    <p className="text-sm text-ink/70 mt-4">{writing.slidesNote}</p>
                  )}
                </div>
              </Reveal>
            </li>
          ))}
        </ol>

        <div className="border-t border-ink/15 pt-10 md:pt-12">
          <Eyebrow>{writing.communityEyebrow}</Eyebrow>
          <ul className="grid md:grid-cols-3 gap-4 mt-6">
            {getCommunityItems(locale).map((item, i) => (
              <li key={item.title} className="h-full">
                <Reveal
                  delay={i * 0.08}
                  className="h-full bg-paper-2 border border-ink/10 rounded-xl p-6 md:p-8"
                >
                  <h3 className="font-display text-xl md:text-2xl text-ink">{item.title}</h3>
                  <p className="text-ink/80 mt-3">{item.description}</p>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
};
