/**
 * Work Experience page: the full career timeline, season by season.
 */
import type { Metadata } from 'next';
import { careerStartYear, jobsData } from '@/components/experience/jobs-data';
import { Timeline } from '@/components/experience/timeline';
import { ClosingCta } from '@/components/ui/closing-cta';
import { PageHero } from '@/components/ui/page-hero';
import { buildPageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = buildPageMetadata({
  title: 'Work Experience',
  description:
    'The professional journey of Lucas Regalado, senior full stack developer: from tech support in 2016 to leading teams and building AI-driven products with React, Next.js and Node.js.',
  path: '/work-experience',
  keywords: ['work experience', 'Lucas Regalado resume'],
  type: 'profile',
});

export default function WorkExperiencePage() {
  return (
    <>
      <PageHero eyebrow={`Work experience — ${careerStartYear} to today`} lines={['Career', 'Seasons']}>
        <p>
          From installing invoicing systems to leading distributed teams and building AI-driven
          products. Every season taught me something I still use.
        </p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4">
        <Timeline jobs={jobsData} />
      </section>

      <ClosingCta />
    </>
  );
}
