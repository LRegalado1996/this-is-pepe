/**
 * Contact page: direct channels first, then the message composer and the
 * booking calendar (loaded on demand).
 */
import { CalendarEmbed } from '@/components/contact/calendar-embed';
import { ContactChannels } from '@/components/contact/contact-channels';
import { MessageForm } from '@/components/contact/message-form';
import { JsonLd } from '@/components/seo/json-ld';
import { PageHero } from '@/components/ui/page-hero';
import { getDictionary } from '@/content/site';
import { routePath, type Locale } from '@/lib/i18n/config';
import { structuredData } from '@/lib/seo/config';

interface Props {
  locale: Locale;
}

export const ContactView = ({ locale }: Props) => {
  const { contact, nav } = getDictionary(locale);

  return (
    <>
      <JsonLd
        data={structuredData.breadcrumbs(locale, [
          { name: nav.labels.contact, path: routePath('contact', locale) },
        ])}
      />

      <PageHero eyebrow={contact.eyebrow} lines={contact.title}>
        <p>{contact.lead}</p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4">
        <ContactChannels />
      </section>

      <section className="w-full max-w-[1280px] px-4 py-20 md:py-28">
        <div className="grid gap-4 md:grid-cols-2 items-start">
          <MessageForm locale={locale} />
          <CalendarEmbed locale={locale} />
        </div>
      </section>
    </>
  );
};
