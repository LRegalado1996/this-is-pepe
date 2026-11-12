/**
 * Number that counts up from zero the first time it scrolls into view. The
 * final value is what gets server-rendered, so it reads correctly without
 * JavaScript and for visitors who prefer reduced motion.
 */
'use client';

import { useEffect, useRef } from 'react';
import { animate, useInView, useReducedMotion } from 'framer-motion';

interface Props {
  value: number;
  durationSeconds?: number;
}

export const CountUp = ({ value, durationSeconds = 1.2 }: Props) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const node = ref.current;
    if (!node || !inView || prefersReducedMotion) return;

    const controls = animate(0, value, {
      duration: durationSeconds,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        node.textContent = String(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [inView, value, durationSeconds, prefersReducedMotion]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
};
