/**
 * Outlined uppercase pill used for skills and topics.
 */
import { clsx } from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}

export const Chip = ({ children, className, onDark = false }: Props) => (
  <span
    className={clsx(
      'inline-block text-[0.66rem] uppercase tracking-[0.12em] font-bold rounded-full px-3 py-1.5 border',
      onDark ? 'border-paper/30 text-paper/90' : 'border-ink/25 text-moss',
      className
    )}
  >
    {children}
  </span>
);
