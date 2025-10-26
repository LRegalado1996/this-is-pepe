/**
 * Primary CTA component with prominent call-to-action button.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  className?: string;
}

export const PrimaryCTA = ({ className }: Props) => {
  return (
    <motion.div
      className={clsx('flex justify-center', className)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <Link href="/contact" className="group">
        <motion.div
          className={clsx(
            'backdrop-blur-md bg-primary border-2 border-dark-primary',
            'rounded-full px-6 py-3 shadow-lg',
            'flex items-center gap-2',
            'transition-all hover:bg-dark-primary hover:text-light-primary'
          )}
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 400 }}
        >
          <span className="font-semibold text-sm uppercase">
            Get in touch
          </span>
          <ArrowRight 
            size={20} 
            strokeWidth={2}
            className="transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </motion.div>
      </Link>
    </motion.div>
  );
};

