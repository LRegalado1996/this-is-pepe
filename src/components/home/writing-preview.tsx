/**
 * Latest articles on the home page, linking out to the published originals.
 */
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Reveal } from '@/components/ui/reveal';
import { ArticleCard } from '@/components/writing/article-card';
import { getArticles } from '@/content/articles';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
}

export const WritingPreview = ({ locale }: Props) => {
  const { writing } = getDictionary(locale);

  return (
    <section className="w-full max-w-[1280px] px-4 py-20 md:py-28">
      <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
        <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] text-ink">{writing.title}</h2>
        <Link
          href={routePath('writing', locale)}
          className="group inline-flex items-center gap-1 text-xs md:text-sm uppercase tracking-[0.14em] font-bold border-b-[3px] border-volt pb-1 hover:text-moss transition-colors shrink-0"
        >
          {writing.allArticles}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {getArticles(locale)
          .slice(0, 2)
          .map((article, i) => (
            <Reveal key={article.url} delay={i * 0.08} className="h-full">
              <ArticleCard article={article} locale={locale} />
            </Reveal>
          ))}
      </div>
    </section>
  );
};
