/**
 * Article card linking out to the published original.
 */
import { ArrowUpRight } from 'lucide-react';
import { Chip } from '@/components/ui/chip';
import { formatArticleDate, type Article } from '@/content/articles';
import { getDictionary } from '@/content/site';
import type { Locale } from '@/lib/i18n/config';

interface Props {
  article: Article;
  locale: Locale;
}

export const ArticleCard = ({ article, locale }: Props) => (
  <a
    href={article.url}
    target="_blank"
    rel="noopener noreferrer"
    className="group flex flex-col h-full bg-paper-2 border border-ink/10 rounded-xl p-6 md:p-8 transition-all duration-200 hover:-translate-y-1 hover:border-volt-dim hover:shadow-[0_8px_30px_rgba(21,22,15,0.08)]"
  >
    <p className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-moss/70">
      <time dateTime={article.publishedAt}>{formatArticleDate(article.publishedAt, locale)}</time>
      {' · '}
      {article.publisher}
    </p>

    <h3 lang="en" className="font-display text-2xl md:text-3xl text-ink mt-4">
      {article.title}
    </h3>
    <p className="text-ink/80 mt-4">{article.summary}</p>

    <ul className="flex flex-wrap gap-1.5 mt-5">
      {article.topics.map((topic) => (
        <li key={topic}>
          <Chip>{topic}</Chip>
        </li>
      ))}
    </ul>

    <span className="inline-flex items-center gap-1 mt-auto pt-8 text-xs uppercase tracking-[0.14em] font-bold">
      <span className="border-b-[3px] border-volt pb-1">
        {getDictionary(locale).writing.readOn(article.publisher)}
      </span>
      <ArrowUpRight
        size={16}
        className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        aria-hidden
      />
    </span>
  </a>
);
