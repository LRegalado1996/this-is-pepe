/**
 * Two-line display heading used at the top of page sections.
 */
import { clsx } from 'clsx';

interface Props {
  lines: [string, string];
  className?: string;
}

export const SectionHeading = ({ lines, className }: Props) => (
  <h2 className={clsx('font-display text-[clamp(2.6rem,7vw,5.5rem)]', className)}>
    {lines[0]} <br />
    {lines[1]}
  </h2>
);
