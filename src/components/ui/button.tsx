/**
 * Reusable button component with consistent styling and animations.
 */
'use client';

import { motion } from 'framer-motion';
import { clsx } from 'clsx';

interface Props {
  children: React.ReactNode;
  onClick: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  className?: string;
  variant?: 'primary' | 'secondary';
}

export const Button = ({
  children,
  onClick,
  type = 'button',
  disabled = false,
  className,
  variant = 'primary',
}: Props) => {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        // Base styles
        'py-2 px-4 rounded-lg text-sm uppercase font-semibold',
        'transition-all cursor-pointer',
        // Variants
        {
          'bg-primary hover:bg-dark-primary': variant === 'primary' && !disabled,
          'bg-secondary hover:bg-secondary/80': variant === 'secondary' && !disabled,
          'opacity-50 cursor-not-allowed': disabled,
        },
        // Custom classes
        className
      )}
      whileHover={!disabled ? { scale: 1.03, y: -2 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      transition={{ type: 'spring', stiffness: 500, damping: 25 }}
    >
      {children}
    </motion.button>
  );
};
