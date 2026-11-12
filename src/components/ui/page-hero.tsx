/**
 * Inner-page hero: eyebrow, a giant display headline revealed line by line
 * and an optional lead paragraph. Mirrors the home hero.
 */
'use client';

import { motion } from 'framer-motion';
import { Eyebrow } from './eyebrow';

interface Props {
  eyebrow: string;
  /** Each entry renders as its own headline line. */
  lines: string[];
  children?: React.ReactNode;
}

const ease = [0.22, 1, 0.36, 1] as const;

export const PageHero = ({ eyebrow, lines, children }: Props) => (
  <section className="w-full max-w-[1280px] px-4 pt-14 pb-12 md:pt-20 md:pb-16">
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.1, duration: 0.6 }}>
      <Eyebrow className="mb-6">{eyebrow}</Eyebrow>
    </motion.div>

    <h1 className="font-display text-[clamp(3.4rem,12vw,9.5rem)] text-ink">
      {lines.map((line, i) => (
        <span key={line} className="block overflow-hidden">
          <motion.span
            className="block"
            initial={{ y: '110%' }}
            animate={{ y: 0 }}
            transition={{ delay: 0.15 + i * 0.12, duration: 0.7, ease }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>

    {children && (
      <motion.div
        className="max-w-[58ch] text-base md:text-lg mt-8 text-ink/85"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        {children}
      </motion.div>
    )}
  </section>
);
