/**
 * Selected work: numbered project rows on a moss block. Projects are
 * described generically, without naming clients.
 */
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Chip } from '@/components/ui/chip';
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { projects } from '@/lib/work/projects';

export const SelectedWork = () => (
  <section className="w-full bg-moss text-paper">
    <div className="max-w-[1280px] m-auto px-4 py-20 md:py-28">
      <h2 className="font-display text-[clamp(2.6rem,7vw,5.5rem)] mb-10 md:mb-14">
        Selected
        <br />
        Work
      </h2>

      <ol>
        {projects.map((project, i) => (
          <li key={project.id} className="border-t border-paper/15 last:border-b">
            <Reveal className="grid gap-4 md:grid-cols-[100px_1fr_1.3fr] md:gap-10 py-8 md:py-10">
              <span className="font-display text-4xl md:text-5xl text-volt" aria-hidden>
                {String(i + 1).padStart(2, '0')}
              </span>

              <div>
                <h3 className="font-display text-2xl md:text-4xl">{project.title}</h3>
                <Eyebrow onDark className="mt-3">
                  {project.context}
                </Eyebrow>
              </div>

              <div>
                <p className="text-paper/85 max-w-[56ch]">{project.description}</p>
                <ul className="flex flex-wrap gap-1.5 mt-5">
                  {project.stack.map((item) => (
                    <li key={item}>
                      <Chip onDark>{item}</Chip>
                    </li>
                  ))}
                </ul>
                {project.href && (
                  <Link
                    href={project.href}
                    className="group inline-flex items-center gap-1 mt-6 text-xs uppercase tracking-[0.14em] font-bold border-b-[3px] border-volt pb-1 transition-colors hover:text-volt"
                  >
                    {project.linkLabel ?? 'Read more'}
                    <ArrowUpRight
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      aria-hidden
                    />
                  </Link>
                )}
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </div>
  </section>
);
