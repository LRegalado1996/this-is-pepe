/**
 * Header component with glassmorphism effect and navigation menu.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { ChevronsLeftRightEllipsis, FlaskConical, House, Info, MessageCircle } from 'lucide-react';
import { PagesType } from './types';
import { HeaderLink } from './header-link';

const pages: PagesType[] = [
  {
    name: '',
    icon: <House size={20} strokeWidth={1} />,
    href: '/',
    ariaLabel: 'Go to Home',
  },
  {
    name: 'About Me',
    icon: <Info size={20} strokeWidth={1} />,
    href: '/about-me',
    ariaLabel: 'Go to About Me',
  },
  {
    name: 'Work Experience',
    icon: <ChevronsLeftRightEllipsis size={20} strokeWidth={1} />,
    href: '/work-experience',
    ariaLabel: 'Go to Work Experience',
  },
  {
    name: 'Laboratory',
    icon: <FlaskConical size={20} strokeWidth={1} />,
    href: '/labs',
    ariaLabel: 'Go to Laboratory',
  },
  {
    name: 'Contact',
    icon: <MessageCircle size={20} strokeWidth={1} />,
    href: '/contact',
    ariaLabel: 'Go to Contact',
  },
];

export const Header = () => {
  return (
    <motion.header
      className={clsx(
        'w-full sticky top-0 z-10',
        'backdrop-blur-lg bg-dark-primary/90',
        'border-b border-dark-primary/50',
        'transition-all duration-300'
      )}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <ul className="flex gap-2 uppercase max-w-[1280px] py-2 px-4 m-auto">
        {pages.map((page, i) => (
          <motion.li
            key={i}
            className={clsx(i === 0 && 'flex-1')}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
          >
            <HeaderLink page={page} />
          </motion.li>
        ))}
      </ul>
    </motion.header>
  );
};
