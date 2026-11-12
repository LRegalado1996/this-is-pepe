/**
 * Contact page: direct channels first, with the calendar and message form
 * loaded on demand.
 */
import type { Metadata } from 'next';
import { ContactChannels } from '@/components/contact/contact-channels';
import { LazyEmbed } from '@/components/contact/lazy-embed';
import { PageHero } from '@/components/ui/page-hero';
import { buildPageMetadata } from '@/lib/seo/config';

export const metadata: Metadata = buildPageMetadata({
  title: 'Contact',
  description:
    'Get in touch with Lucas Regalado, senior full stack developer in Montevideo, Uruguay. Email, LinkedIn, WhatsApp or a 30-minute call, in English or Spanish.',
  path: '/contact',
  keywords: ['contact lucas regalado'],
});

export default function ContactPage() {
  return (
    <>
      <PageHero eyebrow="Contact — English or Spanish" lines={["Let's", 'talk']}>
        <p>
          A project, a talk, an idea you want a second opinion on, or just to say hello. I read
          everything and I answer.
        </p>
      </PageHero>

      <section className="w-full max-w-[1280px] px-4">
        <ContactChannels />
      </section>

      <section className="w-full max-w-[1280px] px-4 py-20 md:py-28">
        <div className="grid gap-4 md:grid-cols-2 items-start">
          <LazyEmbed
            eyebrow="30 minutes"
            title="Book a call"
            description="Pick a slot that works for you and we talk face to face."
            buttonLabel="Open the calendar"
            iframeTitle="Schedule a meeting with Lucas Regalado"
            src="https://calendly.com/lucas-regalado-pereyra/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f0f1e6&text_color=15160f&primary_color=262a1d"
          />
          <LazyEmbed
            eyebrow="No rush"
            title="Send a message"
            description="Prefer writing? Leave me a note and I'll get back to you."
            buttonLabel="Open the form"
            iframeTitle="Contact form"
            src="https://docs.google.com/forms/d/e/1FAIpQLSd5_Y749yiy8U2_aS0okWBZ-jvNg9VTXt8S1uQbTq_6fGgDLA/viewform?embedded=true"
          />
        </div>
      </section>
    </>
  );
}
