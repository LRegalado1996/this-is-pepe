/**
 * Hobbies card component displaying personal interests with icons and favorite bands.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Trophy, Flag, Heart, Music } from 'lucide-react';
import { hobbies, favoriteBands } from './data';

interface Props {
  className?: string;
}

const iconMap = {
  trophy: Trophy,
  flag: Flag,
  heart: Heart,
  music: Music,
};

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

export const HobbiesCard = ({ className }: Props) => {
  return (
    <motion.div
      className={clsx('grid grid-cols-1 md:grid-cols-2 gap-4', className)}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {hobbies.map((hobby) => {
        const IconComponent = iconMap[hobby.icon as keyof typeof iconMap];
        
        return (
          <motion.div
            key={hobby.id}
            className={clsx(
              'backdrop-blur-md bg-light-primary/90 border-2 border-dark-primary/50',
              'rounded-xl p-6 shadow-lg',
              'flex flex-col gap-4 h-full min-h-[160px]'
            )}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            <div className="flex gap-4 items-start">
              <div className="flex-shrink-0">
                <IconComponent
                  size={32}
                  strokeWidth={1.5}
                  className="text-secondary"
                  aria-hidden="true"
                />
              </div>
              <div className="flex-1">
                <h3 className="text-tertiary font-bold text-lg mb-2">{hobby.title}</h3>
                <p className="text-tertiary text-sm leading-relaxed">{hobby.description}</p>
              </div>
            </div>
            
            {hobby.id === 'music' && (
              <div className="flex flex-wrap gap-2 mt-auto">
                {favoriteBands.map((band, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-primary border border-dark-primary"
                  >
                    {band}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

