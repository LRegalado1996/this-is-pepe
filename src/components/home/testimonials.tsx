/**
 * Testimonials from colleagues. Renders nothing until
 * `src/content/testimonials.ts` has entries.
 */
import { Eyebrow } from '@/components/ui/eyebrow';
import { Reveal } from '@/components/ui/reveal';
import { SectionHeading } from '@/components/ui/section-heading';
import { getDictionary } from '@/content/site';
import { testimonials } from '@/content/testimonials';
import type { Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
}

export const Testimonials = ({ locale }: Props) => {
  if (testimonials.length === 0) return null;

  const { testimonials: copy } = getDictionary(locale);

  return (
    <section className="w-full bg-paper-2">
      <div className="max-w-[1280px] m-auto px-4 py-20 md:py-28">
        <SectionHeading lines={copy.title} className="text-ink mb-10 md:mb-14" />
        <ul className="grid gap-10 md:grid-cols-3 md:gap-8">
          {testimonials.map((testimonial, i) => (
            <li key={testimonial.name}>
              <Reveal delay={i * 0.08}>
                <figure className="border-t-[3px] border-volt-dim pt-6">
                  <blockquote className="text-lg text-ink/90">“{testimonial.quote[locale]}”</blockquote>
                  <figcaption className="mt-6">
                    <p className="font-display text-xl text-ink">{testimonial.name}</p>
                    <Eyebrow className="mt-1">{testimonial.role[locale]}</Eyebrow>
                  </figcaption>
                </figure>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
