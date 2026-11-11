/**
 * Home hero: full-width display headline revealed line by line, color
 * portrait with a clip-path entrance, and the availability chip.
 */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin } from 'lucide-react';

const lineReveal = {
  hidden: { y: '110%' },
  visible: (i: number) => ({
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const HeadlineLine = ({ text, index }: { text: string; index: number }) => (
  <span className="block overflow-hidden">
    <motion.span
      className="block"
      custom={index}
      variants={lineReveal}
      initial="hidden"
      animate="visible"
    >
      {text}
    </motion.span>
  </span>
);

export const Hero = () => {
  return (
    <section className="w-full max-w-[1280px] px-4 pt-14 pb-16 md:pt-20 md:pb-24">
      <motion.p
        className="text-[0.7rem] md:text-xs uppercase tracking-[0.2em] font-semibold text-moss/70 mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        Senior Full Stack Developer — Montevideo, Uruguay
      </motion.p>

      <div className="grid md:grid-cols-[1.5fr_1fr] gap-10 md:gap-14 items-end">
        <div>
          <h1 className="font-display text-[clamp(3.8rem,13vw,10.5rem)] text-ink">
            <HeadlineLine text="Lucas" index={0} />
            <HeadlineLine text="Regalado" index={1} />
          </h1>

          <motion.p
            className="max-w-[52ch] text-base md:text-lg mt-8 text-ink/85"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            I build web products that scale. 8+ years shipping with React,
            Next.js and TypeScript for teams in the US, Europe and Uruguay.
          </motion.p>

          <motion.div
            className="flex flex-wrap items-center gap-3 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.75, duration: 0.6 }}
          >
            <span className="inline-block bg-volt text-ink text-[0.7rem] uppercase tracking-[0.14em] font-bold rounded-full px-4 py-2">
              Open to work
            </span>
            <span className="inline-flex items-center gap-1.5 border border-ink/30 text-[0.7rem] uppercase tracking-[0.14em] font-semibold rounded-full px-4 py-2">
              <MapPin size={13} strokeWidth={1.75} />
              Montevideo, UY
            </span>
          </motion.div>
        </div>

        <motion.div
          className="relative justify-self-center md:justify-self-end w-full max-w-[340px]"
          initial={{ clipPath: 'inset(100% 0 0 0)' }}
          animate={{ clipPath: 'inset(0% 0 0 0)' }}
          transition={{ delay: 0.4, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        >
          <Image
            src="/images/brand/portrait.jpg"
            alt="Lucas Regalado smiling, wearing a black t-shirt"
            width={680}
            height={680}
            priority
            className="w-full aspect-square object-cover rounded-2xl border border-ink/15"
          />
        </motion.div>
      </div>
    </section>
  );
};
