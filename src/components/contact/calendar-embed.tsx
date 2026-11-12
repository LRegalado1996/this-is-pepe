/**
 * Booking calendar that only loads its third-party iframe once the visitor
 * asks for it, keeping the contact page light.
 */
'use client';

import { useState } from 'react';
import { getDictionary } from '@/content/site';
import type { Locale } from '@/lib/i18n/config';
import { Eyebrow } from '../ui/eyebrow';

interface Props {
  locale: Locale;
}

const calendarUrl =
  'https://calendly.com/lucas-regalado-pereyra/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=f0f1e6&text_color=15160f&primary_color=262a1d';

export const CalendarEmbed = ({ locale }: Props) => {
  const { call } = getDictionary(locale).contact;
  const [loaded, setLoaded] = useState(false);

  return (
    <div className="flex flex-col bg-paper-2 border border-ink/10 rounded-xl p-6 md:p-8">
      <Eyebrow>{call.eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl md:text-4xl text-ink mt-4">{call.title}</h2>
      <p className="text-ink/80 mt-3 max-w-[44ch]">{call.description}</p>

      {loaded ? (
        <iframe
          src={calendarUrl}
          title={call.iframeTitle}
          data-lenis-prevent
          className="w-full h-[720px] mt-6 rounded-lg border border-ink/10 bg-white"
        />
      ) : (
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="w-fit mt-6 bg-ink text-paper text-[0.7rem] uppercase tracking-[0.14em] font-bold rounded-full px-5 py-2.5 cursor-pointer transition-colors hover:bg-volt hover:text-ink"
        >
          {call.button}
        </button>
      )}
    </div>
  );
};
