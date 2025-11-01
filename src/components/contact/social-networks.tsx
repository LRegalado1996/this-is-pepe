/**
 * Social networks list component with animated links to external profiles.
 */
'use client';

import type { ReactNode } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Instagram, Linkedin, Mail, MessageCircle, X } from 'lucide-react';
import { Subtitle } from '../ui/subtitle';

interface Props {
  className?: string;
}

type SocialNetworksType = {
  name: string;
  icon: ReactNode;
  href: string;
};

const socialNetworks: SocialNetworksType[] = [
  {
    name: 'Linkedin',
    icon: <Linkedin size={20} strokeWidth={1} />,
    href: 'https://www.linkedin.com/in/lucas-regalado',
  },
  {
    name: 'Whatsapp',
    icon: <MessageCircle size={20} strokeWidth={1} />,
    href: 'https://wa.me/59891475727',
  },
  {
    name: 'E-mail',
    icon: <Mail size={20} strokeWidth={1} />,
    href: 'mailto:lucasregalado@hotmail.com',
  },
  {
    name: 'Instagram',
    icon: <Instagram size={20} strokeWidth={1} />,
    href: 'https://www.instagram.com/lucas.regalado18?igsh=aWw1dzBmMGExOGV3&utm_source=qr',
  },
  {
    name: 'ex-Twitter',
    icon: <X size={20} strokeWidth={1} />,
    href: 'https://x.com/lucasregalado5',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: 'spring' as const, stiffness: 100 },
  },
};

export const SocialNetworks = ({ className }: Props) => {
  return (
    <div className={clsx('mb-8', className)}>
      <Subtitle className="mb-2">My Social Networks</Subtitle>

      <motion.ul
        className="flex flex-col md:flex-row gap-2 flex-wrap"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {socialNetworks.map((socialNetwork, i) => (
          <motion.li key={i} variants={itemVariants}>
            <motion.div
              whileHover={{ scale: 1.05, x: 5 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Link
                href={socialNetwork.href}
                target="_blank"
                className={clsx(
                  'flex items-center gap-2 py-2 px-4 rounded-full w-fit',
                  'transition-all hover:bg-primary'
                )}
              >
                {socialNetwork.icon}
                <h3>{socialNetwork.name}</h3>
              </Link>
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
};
