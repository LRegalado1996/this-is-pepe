/**
 * Writing page: articles by Lucas, linking out to the published originals.
 */
import type { Metadata } from 'next';
import { ArticleCard } from '@/components/writing/article-card';
import { ClosingCta } from '@/components/ui/closing-cta';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { buildPageMetadata, structuredData } from '@/lib/seo/config';
import { articles } from '@/lib/writing/articles';

export const metadata: Metadata = buildPageMetadata({
  title: 'Writing · AI Agents and Software Engineering',
  description:
    'Articles by Lucas Regalado on working with AI agents: automating daily tasks with scheduled routines and reducing Claude Code token usage with subagents.',
  path: '/writing',
  keywords: ['AI agents articles', 'Claude Code token usage', 'automate daily tasks AI agent'],
});

export default function WritingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData.articles()) }}
      />

      <PageHero eyebrow="Articles — AI agents and engineering" lines={['Writing']}>
        <p>
          Notes from putting AI agents to work on the routine around the code: what I built, what
          it cost and what I would do again.
        </p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4">
        <div className="grid md:grid-cols-2 gap-4">
          {articles.map((article, i) => (
            <Reveal key={article.url} delay={i * 0.08} className="h-full">
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </section>

      <ClosingCta />
    </>
  );
}
