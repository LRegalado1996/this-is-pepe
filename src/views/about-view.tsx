/**
 * About page composition: hero, bio with portrait and stats, working
 * principles, stack, life off stack, the closing quote and the shared CTA.
 */
import Image from 'next/image';
import { JsonLd } from '@/components/seo/json-ld';
import { Chip } from '@/components/ui/chip';
import { ClosingCta } from '@/components/ui/closing-cta';
import { CountUp } from '@/components/ui/count-up';
import { Eyebrow } from '@/components/ui/eyebrow';
import { PageHero } from '@/components/ui/page-hero';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { favoriteBands, getAboutContent } from '@/content/about';
import { articleCount } from '@/content/articles';
import { jobCount, yearsInTheField } from '@/content/jobs';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';
import { structuredData } from '@/lib/seo/config';

interface Props {
  locale: Locale;
}

export const AboutView = ({ locale }: Props) => {
  const dictionary = getDictionary(locale);
  const { about, onOff, nav } = dictionary;
  const content = getAboutContent(locale);

  const stats = [
    { value: yearsInTheField(), label: about.stats.years },
    { value: jobCount, label: about.stats.teams },
    { value: 3, label: about.stats.markets },
    { value: articleCount, label: about.stats.articles },
  ];

  return (
    <>
      <JsonLd
        data={[
          structuredData.profilePage(locale),
          structuredData.breadcrumbs(locale, [
            { name: nav.labels.about, path: routePath('about', locale) },
          ]),
        ]}
      />

      <PageHero eyebrow={about.eyebrow} lines={about.title}>
        <p>{about.lead}</p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4 pb-20 md:pb-28">
        <div className="grid gap-10 md:grid-cols-[1fr_1.3fr] md:gap-16 items-start">
          <Reveal className="rounded-2xl overflow-hidden border border-ink/15">
            <Image
              src="/images/brand/desk.jpg"
              alt={onOff.deskAlt}
              width={900}
              height={600}
              sizes="(min-width: 768px) 40vw, 100vw"
              className="w-full h-full object-cover"
              priority
            />
          </Reveal>

          <Reveal delay={0.1} className="flex flex-col gap-5 text-ink/85 md:text-lg">
            {content.bio.map((paragraph) => (
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
              <dd className="font-display text-6xl md:text-8xl text-ink">
                <CountUp value={stat.value} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </section>

      <section className="w-full bg-paper-2">
        <div className="max-w-[1280px] m-auto px-4 py-20 md:py-28">
          <SectionHeading lines={about.howTitle} className="text-ink mb-10 md:mb-14" />
          <ol className="grid gap-10 md:grid-cols-3 md:gap-8">
            {content.principles.map((principle, i) => (
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
        <SectionHeading lines={about.stackTitle} className="text-ink mb-10 md:mb-14" />
        <div className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {content.stack.map((category, i) => (
            <Reveal
              key={category.title}
              delay={(i % 3) * 0.07}
              className="border-t border-ink/15 pt-5"
            >
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
                {about.offEyebrow}
              </Eyebrow>
              <SectionHeading lines={['Off', 'Stack']} />
            </div>
            <div className="duotone rounded-2xl overflow-hidden aspect-[4/3]">
              <Image
                src="/images/brand/focus.jpg"
                alt={onOff.focusAlt}
                width={900}
                height={650}
                sizes="(min-width: 768px) 40vw, 100vw"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <ul className="grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
            {content.hobbies.map((hobby, i) => (
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
              “{content.quote.text}”
            </blockquote>
            <figcaption className="mt-6">
              <Eyebrow>{content.quote.author}</Eyebrow>
              <p className="max-w-[56ch] mt-4 text-ink/85">{content.quote.reflection}</p>
            </figcaption>
          </figure>
        </Reveal>
      </section>

      <ClosingCta locale={locale} />
    </>
  );
};
