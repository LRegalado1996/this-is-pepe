/**
 * Brand statement: full-bleed moss block with a word-by-word display reveal
 * over the duotone portrait.
 */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const words = ['I', 'build', 'web', 'products', 'that', 'scale.'];

export const Callout = () => {
  return (
    <section className="relative w-full bg-moss text-paper overflow-hidden">
      <div className="duotone absolute inset-y-0 right-0 w-full md:w-1/2 opacity-40 md:opacity-70">
        <Image
          src="/images/brand/fullbody.jpg"
          alt=""
          aria-hidden
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>

      <div className="relative z-10 max-w-[1280px] m-auto px-4 py-24 md:py-36">
        <h2 className="font-display text-[clamp(2.8rem,8vw,7rem)] max-w-[12ch]">
          {words.map((word, i) => (
            <motion.span
              key={`${word}-${i}`}
              className="inline-block mr-[0.28em]"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              {word === 'scale.' ? <span className="text-volt">{word}</span> : word}
            </motion.span>
          ))}
        </h2>
        <motion.p
          className="max-w-[46ch] mt-8 text-paper/85"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          8+ years shipping for teams in the US and Europe — from Montevideo,
          Uruguay.
        </motion.p>
      </div>
    </section>
  );
};
