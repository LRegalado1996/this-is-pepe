/**
 * Experience cards component displaying company logos with link to full work experience page.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { companies } from './data';

interface Props {
  className?: string;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 },
  },
};

export const ExperienceCards = ({ className }: Props) => {
  return (
    <motion.div
      className={clsx('flex flex-col gap-6', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Cards Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {companies.map((company, index) => (
          <motion.div
            key={index}
            className={clsx(
              'backdrop-blur-md bg-light-primary/90 rounded-xl p-4',
              'flex flex-col items-center justify-center gap-3',
              'transition-all',
              {
                'border-4 border-dark-primary shadow-xl': company.current,
                'border-2 border-dark-primary/50 shadow-lg': !company.current,
              }
            )}
            variants={itemVariants}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="relative w-16 h-16 rounded-full overflow-hidden bg-white">
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                fill
                sizes="64px"
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <h3 className="text-tertiary text-xs font-semibold mb-1">
                {company.name}
              </h3>
              <p className="text-secondary text-xs">{company.period}</p>
              {company.current && (
                <span className="inline-block mt-2 px-2 py-1 rounded-full text-xs font-semibold bg-dark-primary text-light-primary">
                  Current
                </span>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <motion.div
        className="flex justify-center"
        variants={itemVariants}
      >
        <Link href="/work-experience" className="group">
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
              View Full Work Experience
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
    </motion.div>
  );
};

