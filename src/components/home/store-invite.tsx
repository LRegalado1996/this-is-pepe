/**
 * Invitation to LR Market: a centered moss dialog shown on the home, once per
 * browser session, only to visitors in Uruguay. The country comes from
 * /api/visitor-country, so the home itself stays static.
 */
'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUpRight, X } from 'lucide-react';
import { Eyebrow } from '@/components/ui/eyebrow';
import { getDictionary } from '@/content/site';
import type { Locale } from '@/lib/i18n/config';
import { storeUrl } from '@/lib/seo/config';

interface Props {
  locale: Locale;
}

const COUNTRY = 'UY';
const SEEN_KEY = 'store-invite-seen';
// Long enough for the page curtain and the hero's entrance to finish.
const DELAY_MS = 2200;
const ease = [0.22, 1, 0.36, 1] as const;

/** Session storage can throw in private windows; the invite then shows again. */
const wasSeen = () => {
  try {
    return sessionStorage.getItem(SEEN_KEY) === '1';
  } catch {
    return false;
  }
};

const markSeen = () => {
  try {
    sessionStorage.setItem(SEEN_KEY, '1');
  } catch {
    // Nothing to do: the invite simply is not remembered.
  }
};

export const StoreInvite = ({ locale }: Props) => {
  const { storeInvite } = getDictionary(locale);
  const [open, setOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLAnchorElement>(null);

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (wasSeen()) return;

    const controller = new AbortController();
    let timer: number | undefined;
    const mountedAt = performance.now();

    fetch(`/api/visitor-country${window.location.search}`, { signal: controller.signal })
      .then((response) => response.json())
      .then(({ country }: { country: string | null }) => {
        if (country !== COUNTRY) return;

        timer = window.setTimeout(
          () => {
            markSeen();
            setOpen(true);
          },
          Math.max(0, DELAY_MS - (performance.now() - mountedAt))
        );
      })
      .catch(() => {
        // Unknown country: no invitation.
      });

    return () => {
      controller.abort();
      window.clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!open) return;

    const previousFocus = document.activeElement as HTMLElement | null;
    ctaRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') return close();
      if (event.key !== 'Tab') return;

      // Keep the keyboard inside the dialog while it is open.
      const focusable = panelRef.current?.querySelectorAll<HTMLElement>('a[href], button');
      if (!focusable?.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.documentElement.style.overflow = 'hidden';
    window.addEventListener('keydown', onKeyDown);

    return () => {
      document.documentElement.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      previousFocus?.focus();
    };
  }, [open, close]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-30 flex items-center justify-center p-4 bg-ink/75"
          data-lenis-prevent
          onClick={close}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="store-invite-title"
            aria-describedby="store-invite-text"
            className="relative w-full max-w-[560px] bg-moss text-paper rounded-xl p-6 pt-8 md:p-10"
            onClick={(event) => event.stopPropagation()}
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            transition={{ duration: 0.5, ease }}
          >
            <Eyebrow onDark className="pr-12">
              {storeInvite.eyebrow}
            </Eyebrow>

            <h2 id="store-invite-title" className="font-display text-[clamp(3rem,11vw,5.5rem)] mt-5">
              {storeInvite.title.map((line, i) => (
                // Room above each line so the reveal mask does not clip accents.
                <span key={line} className="block overflow-hidden pt-[0.14em] -mt-[0.14em] first:mt-0">
                  <motion.span
                    className={line === storeInvite.highlight ? 'block text-volt' : 'block'}
                    initial={{ y: '110%' }}
                    animate={{ y: 0 }}
                    transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h2>

            <p id="store-invite-text" className="max-w-[40ch] mt-6 text-paper/85 md:text-lg">
              {storeInvite.text}
            </p>

            <a
              ref={ctaRef}
              href={storeUrl}
              target="_blank"
              rel="noopener"
              onClick={close}
              className="group inline-flex items-center gap-1.5 mt-8 bg-volt text-ink text-xs uppercase tracking-[0.14em] font-bold rounded-full px-5 py-3 transition-transform hover:scale-[1.04]"
            >
              {storeInvite.cta}
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden
              />
              <span className="sr-only">({storeInvite.newTab})</span>
            </a>

            <button
              type="button"
              onClick={close}
              aria-label={storeInvite.close}
              className="absolute top-4 right-4 inline-flex items-center justify-center h-10 w-10 rounded-full border border-paper/30 transition-colors hover:bg-volt hover:text-ink hover:border-volt"
            >
              <X size={18} aria-hidden />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
