/**
 * Small uppercase label that sits above headings and sections.
 */
import { clsx } from 'clsx';

interface Props {
  children: React.ReactNode;
  className?: string;
  /** Use on moss/ink blocks where the default moss text would disappear. */
  onDark?: boolean;
}

export const Eyebrow = ({ children, className, onDark = false }: Props) => (
  <p
    className={clsx(
      'text-[0.7rem] md:text-xs uppercase tracking-[0.2em] font-semibold',
      onDark ? 'text-paper/70' : 'text-moss/70',
      className
    )}
  >
    {children}
  </p>
);
