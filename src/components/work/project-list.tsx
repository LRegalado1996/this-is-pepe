/**
 * Numbered project rows that link to each case study. Used on a moss block
 * on the home page and on paper on the work index.
 */
import Link from 'next/link';
import { clsx } from 'clsx';
import { ArrowUpRight } from 'lucide-react';
import { Chip } from '@/components/ui/chip';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { getProjects } from '@/content/projects';
import { getDictionary } from '@/content/site';
import { projectPath, type Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
  onDark?: boolean;
}

export const ProjectList = ({ locale, onDark = false }: Props) => {
  const { selectedWork } = getDictionary(locale);

  return (
    <ol>
      {getProjects(locale).map((project, i) => (
        <li
          key={project.slug}
          className={clsx('border-t last:border-b', onDark ? 'border-paper/15' : 'border-ink/15')}
        >
          <Reveal>
            <Link
              href={projectPath(project.slug, locale)}
              className="group grid gap-4 md:grid-cols-[100px_1fr_1.3fr] md:gap-10 py-8 md:py-10"
            >
              <span
                className={clsx('font-display text-4xl md:text-5xl', onDark ? 'text-volt' : 'text-volt-dim')}
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <h3
                  className={clsx(
                    'font-display text-2xl md:text-4xl transition-colors',
                    onDark ? 'group-hover:text-volt' : 'text-ink group-hover:text-moss'
                  )}
                >
                  {project.title}
                </h3>
                <Eyebrow onDark={onDark} className="mt-3">
                  {project.context}
                </Eyebrow>
              </div>

              <div>
                <p className={clsx('max-w-[56ch]', onDark ? 'text-paper/85' : 'text-ink/85')}>
                  {project.summary}
                </p>
                <ul className="flex flex-wrap gap-1.5 mt-5">
                  {project.stack.slice(0, 5).map((item) => (
                    <li key={item}>
                      <Chip onDark={onDark}>{item}</Chip>
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1 mt-6 text-xs uppercase tracking-[0.14em] font-bold border-b-[3px] border-volt pb-1">
                  {selectedWork.readCase}
                  <ArrowUpRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    aria-hidden
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        </li>
      ))}
    </ol>
  );
};
