/**
 * Message composer: collects a name, a topic and a message, then hands the
 * text to the visitor's own email client or WhatsApp. Nothing is sent to or
 * stored by this site.
 */
'use client';

import { useId, useState } from 'react';
import { clsx } from 'clsx';
import { getDictionary } from '@/content/site';
import type { Locale } from '@/lib/i18n/config';
import { author, socialProfiles } from '@/lib/seo/config';
import { Eyebrow } from '../ui/eyebrow';

interface Props {
  locale: Locale;
}

const fieldClass =
  'w-full bg-paper border border-ink/20 rounded-lg px-4 py-3 text-ink placeholder:text-ink/40 transition-colors focus:border-ink focus:outline-none';
const labelClass = 'block text-[0.7rem] uppercase tracking-[0.16em] font-semibold text-moss/80 mb-2';
const buttonClass =
  'text-[0.7rem] uppercase tracking-[0.14em] font-bold rounded-full px-5 py-2.5 cursor-pointer transition-colors disabled:opacity-40 disabled:cursor-not-allowed';

export const MessageForm = ({ locale }: Props) => {
  const { form } = getDictionary(locale).contact;
  const id = useId();
  const [name, setName] = useState('');
  const [topic, setTopic] = useState(form.topics[0]);
  const [message, setMessage] = useState('');

  const isReady = message.trim().length > 0;
  const body = name.trim() ? `${message.trim()}\n\n${form.signature(name.trim())}` : message.trim();

  const openEmail = () => {
    const subject = encodeURIComponent(form.subject(topic));
    window.location.href = `mailto:${author.email}?subject=${subject}&body=${encodeURIComponent(body)}`;
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(`${topic}\n\n${body}`);
    window.open(`${socialProfiles.whatsapp}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <form
      className="flex flex-col bg-paper-2 border border-ink/10 rounded-xl p-6 md:p-8"
      onSubmit={(event) => {
        event.preventDefault();
        if (isReady) openEmail();
      }}
    >
      <Eyebrow>{form.eyebrow}</Eyebrow>
      <h2 className="font-display text-3xl md:text-4xl text-ink mt-4">{form.title}</h2>
      <p className="text-ink/80 mt-3 max-w-[44ch]">{form.description}</p>

      <div className="grid gap-5 sm:grid-cols-2 mt-8">
        <div>
          <label htmlFor={`${id}-name`} className={labelClass}>
            {form.name}
          </label>
          <input
            id={`${id}-name`}
            type="text"
            autoComplete="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
          />
        </div>
        <div>
          <label htmlFor={`${id}-topic`} className={labelClass}>
            {form.topic}
          </label>
          <select
            id={`${id}-topic`}
            value={topic}
            onChange={(event) => setTopic(event.target.value)}
            className={fieldClass}
          >
            {form.topics.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor={`${id}-message`} className={labelClass}>
          {form.message}
        </label>
        <textarea
          id={`${id}-message`}
          required
          rows={5}
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder={form.messagePlaceholder}
          data-lenis-prevent
          className={clsx(fieldClass, 'resize-y')}
        />
      </div>

      <div className="flex flex-wrap gap-3 mt-6">
        <button
          type="submit"
          disabled={!isReady}
          className={clsx(buttonClass, 'bg-ink text-paper hover:bg-volt hover:text-ink disabled:hover:bg-ink disabled:hover:text-paper')}
        >
          {form.sendEmail}
        </button>
        <button
          type="button"
          disabled={!isReady}
          onClick={openWhatsApp}
          className={clsx(buttonClass, 'border border-ink/30 hover:bg-volt hover:border-volt disabled:hover:bg-transparent disabled:hover:border-ink/30')}
        >
          {form.sendWhatsApp}
        </button>
      </div>
      <p className="text-xs text-ink/75 mt-4">{form.note}</p>
    </form>
  );
};
