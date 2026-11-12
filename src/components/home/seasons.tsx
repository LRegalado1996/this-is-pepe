/**
 * Career Seasons: work history as a grid of "seasons" (the Hall of Fame
 * pattern) with staggered reveal. Cards flip to moss and volt on hover.
 */
'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { formatSeasonYears, getJobs } from '@/content/jobs';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
}

export const Seasons = ({ locale }: Props) => {
  const { seasons } = getDictionary(locale);
  const experienceHref = routePath('experience', locale);

  return (
    <section className="w-full max-w-[1280px] px-4 py-20 md:py-28">
      <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
        <SectionHeading lines={seasons.title} className="text-ink" />
        <Link
          href={experienceHref}
          className="group inline-flex items-center gap-1 text-xs md:text-sm uppercase tracking-[0.14em] font-bold border-b-[3px] border-volt pb-1 hover:text-moss transition-colors shrink-0"
        >
          {seasons.fullHistory}
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </Link>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {getJobs(locale).map((job, i) => (
          <motion.div
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ delay: i * 0.07, duration: 0.5 }}
          >
            <Link
              href={experienceHref}
              className="group block h-full bg-paper-2 border border-ink/10 rounded-xl p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-moss hover:border-moss hover:shadow-[0_12px_36px_rgba(21,22,15,0.18)]"
            >
              <p className="font-display text-3xl md:text-4xl text-stone group-hover:text-volt transition-colors duration-300">
                {formatSeasonYears(job)}
              </p>
              <h3 className="font-display text-xl md:text-2xl text-ink group-hover:text-paper transition-colors duration-300 mt-3">
                {job.company.shortName ?? job.company.name}
              </h3>
              <p className="text-sm text-ink/70 group-hover:text-paper/75 transition-colors duration-300 mt-1">
                {job.role}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-4">
                {job.featuredSkills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[0.62rem] uppercase tracking-[0.1em] font-bold text-moss/80 border border-ink/15 group-hover:text-paper/90 group-hover:border-paper/30 transition-colors duration-300 rounded-full px-2.5 py-1"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
