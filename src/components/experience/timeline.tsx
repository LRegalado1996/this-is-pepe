/**
 * Career timeline: one row per job with the season years in display type,
 * role, a one-line summary and an expandable full description.
 */
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { clsx } from 'clsx';
import { ArrowUpRight, Minus, Plus } from 'lucide-react';
import { formatSeasonYears, getJobs, type Job, type JobBlock } from '@/content/jobs';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';
import { formatDateRange } from '@/lib/i18n/format-date-range';
import { Chip } from '../ui/chip';
import { Eyebrow } from '../ui/eyebrow';
import { Reveal } from '../ui/reveal';

const Block = ({ block, locale }: { block: JobBlock; locale: Locale }) => {
  if (block.type === 'paragraph') {
    return (
      <p>
        {block.text}
        {block.link && (
          <>
            {' '}
            <Link href={routePath(block.link.route, locale)} className="font-semibold underline underline-offset-4">
              {block.link.label}
            </Link>
            .
          </>
        )}
      </p>
    );
  }

  return (
    <div>
      {block.intro && <p className="mb-3">{block.intro}</p>}
      <ol className="flex flex-col gap-3 ml-4">
        {block.items.map((item, i) => (
          <li key={item.title}>
            <h3 className="font-semibold text-ink mb-1">
              {i + 1}. {item.title}
            </h3>
            <p>{item.text}</p>
          </li>
        ))}
      </ol>
    </div>
  );
};

interface RowProps {
  job: Job;
  locale: Locale;
  defaultOpen: boolean;
}

const TimelineRow = ({ job, locale, defaultOpen }: RowProps) => {
  const [open, setOpen] = useState(defaultOpen);
  const { experience } = getDictionary(locale);
  const panelId = `job-details-${job.id}`;

  return (
    <li className="border-t border-ink/15 last:border-b">
      <Reveal className="grid gap-4 md:grid-cols-[minmax(180px,1fr)_3fr] md:gap-10 py-8 md:py-12">
        <p className="font-display text-4xl md:text-6xl text-stone">{formatSeasonYears(job)}</p>

        <div>
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-3xl md:text-5xl text-ink">
                <a
                  href={job.company.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-start gap-1 hover:text-moss transition-colors"
                >
                  {job.company.name}
                  <ArrowUpRight
                    className="w-[0.5em] h-[0.5em] mt-[0.1em] text-volt-dim transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.5}
                    aria-hidden
                  />
                </a>
              </h2>
              <p className="font-semibold text-ink mt-3">{job.role}</p>
              <Eyebrow className="mt-2">{formatDateRange(job.startDate, job.endDate, locale)}</Eyebrow>
            </div>

            <button
              type="button"
              onClick={() => setOpen((value) => !value)}
              aria-expanded={open}
              aria-controls={panelId}
              className="inline-flex items-center gap-1.5 text-[0.7rem] uppercase tracking-[0.14em] font-bold border border-ink/30 rounded-full px-4 py-2 cursor-pointer transition-colors hover:bg-volt hover:border-volt"
            >
              {open ? experience.less : experience.details}
              {open ? <Minus size={14} aria-hidden /> : <Plus size={14} aria-hidden />}
            </button>
          </div>

          <p className="max-w-[68ch] text-ink/85 md:text-lg mt-6">{job.summary}</p>

          <div
            id={panelId}
            className={clsx(
              'grid transition-[grid-template-rows,opacity] duration-300 ease-out',
              open ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
            )}
          >
            <div className={clsx('overflow-hidden', !open && 'invisible')}>
              <div className="flex flex-col gap-4 max-w-[68ch] text-ink/80 pt-6">
                {job.body.map((block, i) => (
                  <Block key={i} block={block} locale={locale} />
                ))}
              </div>
            </div>
          </div>

          <ul className="flex flex-wrap gap-1.5 mt-6">
            {job.skills.map((skill) => (
              <li key={skill}>
                <Chip>{skill}</Chip>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </li>
  );
};

interface Props {
  locale: Locale;
}

export const Timeline = ({ locale }: Props) => (
  <ol>
    {getJobs(locale).map((job, i) => (
      <TimelineRow key={job.id} job={job} locale={locale} defaultOpen={i === 0} />
    ))}
  </ol>
);
