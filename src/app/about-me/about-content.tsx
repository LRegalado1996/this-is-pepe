/**
 * About page composition: hero, bio with portrait and stats, working
 * principles, stack, life off stack, the closing quote and the shared CTA.
 */
import Image from 'next/image';
import {
  aboutDescription,
  favoriteBands,
  hobbies,
  inspirationalQuote,
  principles,
  stackCategories,
} from '@/components/about/data';
import { careerStartYear, jobsData } from '@/components/experience/jobs-data';
import { Chip } from '@/components/ui/chip';
import { ClosingCta } from '@/components/ui/closing-cta';
import { Eyebrow } from '@/components/ui/eyebrow';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { articles } from '@/lib/writing/articles';

const sectionHeading = 'font-display text-[clamp(2.6rem,7vw,5.5rem)]';

export const AboutContent = () => {
  const yearsInTheField = new Date().getFullYear() - careerStartYear;

  const stats = [
    { value: `${yearsInTheField}`, label: 'Years shipping' },
    { value: `${jobsData.length}`, label: 'Teams' },
    { value: '3', label: 'Markets: US, Europe, Uruguay' },
    { value: `${articles.length}`, label: 'Articles published' },
  ];

  return (
    <>
      <PageHero eyebrow="About me — Pepe to friends" lines={['About', 'Lucas']}>
        <p>
          Senior full stack developer from Montevideo, Uruguay. Team player first, engineer right
          after.
        </p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4 pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16 items-start">
          <Reveal className="rounded-2xl overflow-hidden border border-ink/15">
            <Image
              src="/images/brand/desk.jpg"
              alt="Lucas working at his desk with two monitors"
              width={900}
              height={600}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="w-full h-full object-cover"
              priority
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5 text-ink/85 md:text-lg">
            {aboutDescription.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </Reveal>
        </div>

        <dl className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10 mt-16 md:mt-24 pt-10 border-t border-ink/15">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.07} className="flex flex-col-reverse gap-2">
              <dt className="text-[0.7rem] md:text-xs uppercase tracking-[0.16em] font-semibold text-moss/70">
                {stat.label}
              </dt>
              <dd className="font-display text-6xl md:text-8xl text-ink">{stat.value}</dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="w-full bg-paper-2">
        <div className="max-w-[1280px] m-auto px-4 py-20 md:py-28">
          <h2 className={`${sectionHeading} text-ink mb-10 md:mb-14`}>
            How I
            <br />
            Work
          </h2>
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {principles.map((principle, i) => (
              <li key={principle.title}>
                <Reveal delay={i * 0.08}>
                  <span className="font-display text-4xl text-volt-dim" aria-hidden>
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl text-ink mt-4">
                    {principle.title}
                  </h3>
                  <p className="text-ink/80 mt-3 max-w-[40ch]">{principle.description}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="w-full max-w-[1280px] px-4 py-20 md:py-28">
        <h2 className={`${sectionHeading} text-ink mb-10 md:mb-14`}>
          Stack &amp;
          <br />
          Tools
        </h2>
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {stackCategories.map((category, i) => (
            <Reveal key={category.title} delay={(i % 3) * 0.07} className="border-t border-ink/15 pt-5">
              <h3 className="text-sm uppercase tracking-[0.14em] font-bold text-ink">
                {category.title}
              </h3>
              <ul className="flex flex-wrap gap-1.5 mt-4">
                {category.items.map((item) => (
                  <li key={item}>
                    <Chip>{item}</Chip>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="relative w-full bg-moss text-paper overflow-hidden">
        <div className="max-w-[1280px] m-auto px-4 py-20 md:py-28">
          <div className="grid gap-10 md:grid-cols-[1.2fr_1fr] md:gap-16 items-end mb-12 md:mb-16">
            <div>
              <Eyebrow onDark className="mb-5">
                Beyond the code
              </Eyebrow>
              <h2 className={sectionHeading}>
                Off
                <br />
                Stack
              </h2>
            </div>
            <div className="duotone rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/brand/focus.jpg"
                alt="Lucas from behind at his desk, mate at hand"
                width={900}
                height={650}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {hobbies.map((hobby, i) => (
              <li key={hobby.id}>
                <Reveal delay={i * 0.07} className="border-t border-paper/20 pt-5">
                  <h3 className="font-display text-2xl md:text-3xl text-volt">{hobby.title}</h3>
                  <p className="text-paper/80 mt-3">{hobby.description}</p>
                  {hobby.id === 'music' && (
                    <ul className="flex flex-wrap gap-1.5 mt-4">
                      {favoriteBands.map((band) => (
                        <li key={band}>
                          <Chip onDark>{band}</Chip>
                        </li>
                      ))}
                    </ul>
                  )}
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="w-full max-w-[1280px] px-4 pt-20 md:pt-28">
        <Reveal>
          <figure className="max-w-[900px]">
            <blockquote
              lang="es"
              className="font-display text-[clamp(1.9rem,4.5vw,3.6rem)] text-moss"
            >
              “{inspirationalQuote.text}”
            </blockquote>
            <figcaption className="mt-6">
              <Eyebrow>{inspirationalQuote.author}</Eyebrow>
              <p className="max-w-[56ch] mt-4 text-ink/85">
                I deeply believe in this. Code is just the means; the goal is to build something
                worthwhile together.
              </p>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <ClosingCta />
    </>
  );
};
