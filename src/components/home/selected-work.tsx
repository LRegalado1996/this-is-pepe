/**
 * Selected work on the home page: project rows on a moss block.
 */
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { SectionHeading } from '@/components/ui/section-heading';
import { ProjectList } from '@/components/work/project-list';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
}

export const SelectedWork = ({ locale }: Props) => {
  const { selectedWork } = getDictionary(locale);

  return (
    <section className="w-full bg-moss text-paper">
      <div className="max-w-[1280px] m-auto px-4 py-20 md:py-28">
        <div className="flex items-end justify-between gap-6 mb-10 md:mb-14">
          <SectionHeading lines={selectedWork.title} />
          <Link
            href={routePath('work', locale)}
            className="group inline-flex items-center gap-1 text-xs md:text-sm uppercase tracking-[0.14em] font-bold border-b-[3px] border-volt pb-1 hover:text-volt transition-colors shrink-0"
          >
            {selectedWork.allWork}
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>

        <ProjectList locale={locale} onDark />
      </div>
    </section>
  );
};
