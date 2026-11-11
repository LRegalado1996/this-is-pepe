/**
 * "On Stack / Off Stack" — the signature section: a pinned horizontal track.
 * Vertical scroll drives lateral travel across three screen-wide panels,
 * moving from the professional world into the personal one.
 */
'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import Image from 'next/image';

const stackChips = ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'MongoDB'];

const Panel = ({ children, className }: { children: React.ReactNode; className?: string }) => (
  <div className={`w-screen h-full shrink-0 flex items-center ${className ?? ''}`}>
    <div className="max-w-[1280px] w-full m-auto px-6">{children}</div>
  </div>
);

const PanelsContent = () => (
  <>
    <Panel className="bg-paper">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-[clamp(3.5rem,9vw,8rem)] text-ink">
            On
            <br />
            Stack
          </h2>
          <p className="max-w-[46ch] mt-6 text-ink/85">
            Product-minded engineering: scalable architectures, clean
            interfaces and performance that moves business metrics. From
            clinical trials platforms to e-commerce serving all of Uruguay.
          </p>
          <div className="flex flex-wrap gap-2 mt-6">
            {stackChips.map((chip) => (
              <span
                key={chip}
                className="text-[0.68rem] uppercase tracking-[0.12em] font-bold border border-ink/30 rounded-full px-3 py-1.5"
              >
                {chip}
              </span>
            ))}
          </div>
        </div>
        <div className="duotone rounded-2xl overflow-hidden aspect-[4/3] hidden md:block">
          <Image
            src="/images/brand/desk.jpg"
            alt="Lucas working at his desk with two monitors"
            width={900}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Panel>

    <Panel className="bg-paper-2">
      <div className="max-w-[760px]">
        <p className="text-[0.7rem] uppercase tracking-[0.2em] font-semibold text-moss/70 mb-5">
          How I work
        </p>
        <p className="font-display text-[clamp(1.9rem,4.5vw,3.6rem)] text-moss">
          Sparse requirements or detailed specs — I adapt fast, lift the team
          and ship.
        </p>
        <p className="max-w-[52ch] mt-6 text-ink/85">
          Led backend teams across time zones, drove a PHP-to-Next.js
          migration for a national e-commerce, and built products end to end
          with a human-centered, sustainable approach.
        </p>
      </div>
    </Panel>

    <Panel className="bg-moss text-paper">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="font-display text-[clamp(3.5rem,9vw,8rem)] text-paper">
            Off
            <br />
            Stack
          </h2>
          <p className="max-w-[46ch] mt-6 text-paper/85">
            Mate always within reach. Father of a skater, Nacional supporter,
            F1 on race weekends and uruguayan rock as the soundtrack. That
            balance is part of how I build.
          </p>
        </div>
        <div className="duotone rounded-2xl overflow-hidden aspect-[4/3] hidden md:block">
          <Image
            src="/images/brand/focus.jpg"
            alt="Lucas from behind at his desk, mate at hand"
            width={900}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </Panel>
  </>
);

export const OnOffStack = () => {
  const trackRef = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: trackRef });
  const x = useTransform(scrollYProgress, [0, 1], ['0vw', '-200vw']);

  if (prefersReducedMotion) {
    return (
      <section aria-label="On stack and off stack" className="w-full [&>div>div]:py-16 [&>div]:w-full [&>div]:h-auto">
        <PanelsContent />
      </section>
    );
  }

  return (
    <section ref={trackRef} aria-label="On stack and off stack" className="relative h-[320vh] w-full">
      <div className="sticky top-0 h-screen overflow-hidden">
        <motion.div style={{ x }} className="flex h-full will-change-transform">
          <PanelsContent />
        </motion.div>
      </div>
    </section>
  );
};
