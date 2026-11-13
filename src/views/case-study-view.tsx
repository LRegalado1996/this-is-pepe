/**
 * Case study page: the challenge, the approach step by step, the outcome
 * with its numbers, and a link on to the next project.
 */
import Link from 'next/link';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { JsonLd } from '@/components/seo/json-ld';
import { Chip } from '@/components/ui/chip';
import { ClosingCta } from '@/components/ui/closing-cta';
import { CountUp } from '@/components/ui/count-up';
import { Eyebrow } from '@/components/ui/eyebrow';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { getProjects, type Project } from '@/content/projects';
import { getDictionary } from '@/content/site';
import { projectPath, routePath, type Locale } from '@/lib/i18n/config';
import { formatMonthYear } from '@/lib/i18n/format-date-range';
import { structuredData } from '@/lib/seo/config';

interface Props {
  project: Project;
  locale: Locale;
}

const sectionGrid = 'grid gap-6 md:grid-cols-[minmax(180px,1fr)_3fr] md:gap-10';
const sectionTitle = 'font-display text-3xl md:text-4xl';

export const CaseStudyView = ({ project, locale }: Props) => {
  const { work, nav, writing } = getDictionary(locale);
  const projects = getProjects(locale);
  const index = projects.findIndex((item) => item.slug === project.slug);
  const next = projects[(index + 1) % projects.length];

  const facts = [
    { label: work.role, value: project.role },
    { label: work.period, value: project.period },
  ];

  return (
    <>
      <JsonLd
        data={[
          structuredData.project(project, locale),
          structuredData.breadcrumbs(locale, [
            { name: nav.labels.work, path: routePath('work', locale) },
            { name: project.title, path: projectPath(project.slug, locale) },
          ]),
        ]}
      />

      <PageHero eyebrow={`${work.caseStudy} — ${project.context}`} lines={[project.title]}>
        <p>{project.summary}</p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4">
        <dl className="grid gap-x-10 gap-y-6 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_2fr] py-8 border-y border-ink/15">
          {facts.map((fact) => (
            <div key={fact.label}>
              <dt>
                <Eyebrow>{fact.label}</Eyebrow>
              </dt>
              <dd className="font-semibold text-ink mt-2">{fact.value}</dd>
            </div>
          ))}
          <div className="sm:col-span-2 lg:col-span-1">
            <dt>
              <Eyebrow>{work.stack}</Eyebrow>
            </dt>
            <dd className="mt-2">
              <ul className="flex flex-wrap gap-1.5">
                {project.stack.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        </dl>
      </section>

      <section className="w-full max-w-[1280px] px-4 py-16 md:py-24">
        <Reveal className={sectionGrid}>
          <h2 className={`${sectionTitle} text-ink`}>{work.challenge}</h2>
          <div className="flex flex-col gap-5 max-w-[64ch] text-ink/85 md:text-lg">
            {project.challenge.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="w-full bg-paper-2">
        <div className="max-w-[1280px] m-auto px-4 py-16 md:py-24">
          <div className={sectionGrid}>
            <h2 className={`${sectionTitle} text-ink`}>{work.approach}</h2>
            <ol>
              {project.approach.map((step, i) => (
                <li key={step.title} className="border-t border-ink/15 first:border-t-0 first:pt-0 py-7 last:pb-0">
                  <Reveal className="grid gap-3 sm:grid-cols-[70px_1fr]">
                    <span className="font-display text-3xl md:text-4xl text-volt-dim" aria-hidden>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div>
                      <h3 className="font-display text-xl md:text-2xl text-ink">{step.title}</h3>
                      <p className="max-w-[60ch] text-ink/80 mt-3">{step.text}</p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="w-full bg-moss text-paper">
        <div className="max-w-[1280px] m-auto px-4 py-16 md:py-24">
          <div className={sectionGrid}>
            <h2 className={sectionTitle}>{work.outcome}</h2>
            <div>
              <ul className="flex flex-col gap-4 max-w-[64ch] md:text-lg">
                {project.outcome.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-[0.6em] h-2 w-2 shrink-0 bg-volt" aria-hidden />
                    <span className="text-paper/90">{item}</span>
                  </li>
                ))}
              </ul>

              {project.stats && (
                <>
                  <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-14 pt-10 border-t border-paper/20">
                    {project.stats.map((stat, i) => (
                      <Reveal key={stat.label} delay={i * 0.07} className="flex flex-col-reverse gap-2">
                        <dt className="text-[0.7rem] md:text-xs uppercase tracking-[0.16em] font-semibold text-paper/70">
                          {stat.label}
                        </dt>
                        <dd className="font-display text-6xl md:text-7xl text-volt">
                          <CountUp value={stat.value} />
                        </dd>
                      </Reveal>
                    ))}
                  </dl>
                  {project.statsNote && (
                    <p className="text-sm text-paper/60 mt-6">{project.statsNote}</p>
                  )}
                </>
              )}

              {project.hasArticles && (
                <Link
                  href={routePath('writing', locale)}
                  className="group inline-flex items-center gap-1 mt-10 text-xs uppercase tracking-[0.14em] font-bold border-b-[3px] border-volt pb-1 transition-colors hover:text-volt"
                >
                  {work.readArticles}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </Link>
              )}
            </div>
          </div>
        </div>
      </section>

      {project.mentions && project.mentions.length > 0 && (
        <section className="w-full max-w-[1280px] px-4 pt-16 md:pt-24">
          <div className={sectionGrid}>
            <h2 className={`${sectionTitle} text-ink`}>{work.mentions}</h2>
            <ul>
              {project.mentions.map((mention) => (
                <li
                  key={mention.url}
                  className="border-t border-ink/15 first:border-t-0 first:pt-0 py-7 last:pb-0"
                >
                  <Reveal>
                    <p className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-moss/70">
                      <time dateTime={mention.publishedAt}>
                        {formatMonthYear(mention.publishedAt, locale)}
                      </time>
                      {' · '}
                      {mention.source}
                    </p>
                    <a
                      href={mention.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group inline-flex items-start gap-2 mt-3"
                    >
                      <span className="font-display text-xl md:text-2xl text-ink transition-colors group-hover:text-moss">
                        {mention.title}
                      </span>
                      <ArrowUpRight
                        className="w-[0.85em] h-[0.85em] mt-[0.2em] text-volt-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        strokeWidth={2.5}
                        aria-hidden
                      />
                    </a>
                    <p className="max-w-[60ch] text-ink/80 mt-3">{mention.text}</p>
                    {mention.slidesUrl && (
                      <p className="text-sm text-ink/70 mt-4">
                        <a
                          href={mention.slidesUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          hrefLang="es"
                          type="application/pdf"
                          className="group inline-flex items-center gap-1 mr-3 text-xs uppercase tracking-[0.14em] font-bold text-ink"
                        >
                          <span className="border-b-[3px] border-volt pb-1">{writing.seeSlides}</span>
                          <ArrowUpRight
                            size={16}
                            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                            aria-hidden
                          />
                        </a>
                        {writing.slidesNote}
                      </p>
                    )}
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <section className="w-full max-w-[1280px] px-4 pt-16 md:pt-24">
        <div className="flex flex-wrap items-end justify-between gap-8">
          <Link href={projectPath(next.slug, locale)} className="group block">
            <Eyebrow className="mb-3">{work.nextProject}</Eyebrow>
            <span className="inline-flex items-start gap-2 font-display text-[clamp(2.2rem,6vw,4.5rem)] text-ink transition-colors group-hover:text-moss">
              {next.title}
              <ArrowUpRight
                className="w-[0.5em] h-[0.5em] mt-[0.1em] text-volt-dim transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                strokeWidth={2.5}
                aria-hidden
              />
            </span>
          </Link>
          <Link
            href={routePath('work', locale)}
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-bold border border-ink/30 rounded-full px-4 py-2 transition-colors hover:bg-volt hover:border-volt"
          >
            <ArrowLeft size={14} aria-hidden />
            {work.backToWork}
          </Link>
        </div>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
};
