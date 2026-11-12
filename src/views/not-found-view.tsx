/**
 * 404 page in the brand voice.
 */
import Link from 'next/link';
import { PageHero } from '@/components/ui/page-hero';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';

interface Props {
  locale: Locale;
}

export const NotFoundView = ({ locale }: Props) => {
  const { notFound } = getDictionary(locale);

  return (
    <>
      <PageHero eyebrow={notFound.eyebrow} lines={notFound.title}>
        <p>{notFound.lead}</p>
      </PageHero>
      <section className="w-full max-w-[1280px] px-4 pb-24">
        <Link
          href={routePath('home', locale)}
          className="inline-block bg-volt text-ink text-[0.7rem] uppercase tracking-[0.14em] font-bold rounded-full px-5 py-2.5 transition-transform hover:scale-[1.04]"
        >
          {notFound.home}
        </Link>
      </section>
    </>
  );
};
