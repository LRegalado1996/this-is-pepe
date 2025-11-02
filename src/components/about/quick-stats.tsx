/**
 * Quick stats component displaying career highlights with dynamic year calculation.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Briefcase, Calendar, Code, Sparkles } from 'lucide-react';
import { careerStartYear, companies } from './data';

interface Props {
  className?: string;
}

interface Stat {
  id: string;
  label: string;
  value: string | number;
  icon: React.ReactNode;
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
    transition: { type: 'spring' as const, stiffness: 100 },
  },
};

export const QuickStats = ({ className }: Props) => {
  const yearsOfExperience = Math.max(0, new Date().getFullYear() - careerStartYear);

  const stats: Stat[] = [
    {
      id: 'years',
      label: 'Years Experience',
      value: `${yearsOfExperience}+`,
      icon: <Calendar size={28} strokeWidth={1.5} className="text-secondary" aria-hidden="true" />,
    },
    {
      id: 'companies',
      label: 'Companies',
      value: companies.length,
      icon: <Briefcase size={28} strokeWidth={1.5} className="text-secondary" aria-hidden="true" />,
    },
    {
      id: 'projects',
      label: 'Projects Delivered',
      value: '10+',
      icon: <Code size={28} strokeWidth={1.5} className="text-secondary" aria-hidden="true" />,
    },
    {
      id: 'focus',
      label: 'Tech Focus',
      value: 'Full-Stack',
      icon: <Sparkles size={28} strokeWidth={1.5} className="text-secondary" aria-hidden="true" />,
    },
  ];

  return (
    <motion.div
      className={clsx('grid grid-cols-2 md:grid-cols-4 gap-4', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {stats.map((stat) => (
        <motion.div
          key={stat.id}
          className={clsx(
            'backdrop-blur-md bg-light-primary/90 border-2 border-dark-primary/50',
            'rounded-xl p-6 shadow-lg',
            'flex flex-col items-center justify-center text-center gap-3'
          )}
          variants={itemVariants}
          whileHover={{ scale: 1.05, y: -5 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          {stat.icon}
          <div>
            <p className="text-3xl font-bold text-tertiary mb-1">{stat.value}</p>
            <p className="text-xs text-secondary font-semibold uppercase">{stat.label}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

