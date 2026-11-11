/**
 * Infinite marquee band in display type: ink background, paper text, volt
 * separators. The track renders its items twice so the CSS loop is seamless.
 */
import { clsx } from 'clsx';

interface Props {
  items: string[];
  className?: string;
  durationSeconds?: number;
}

export const Marquee = ({ items, className, durationSeconds = 30 }: Props) => {
  const content = (ariaHidden: boolean) => (
    <span aria-hidden={ariaHidden} className="inline-flex items-baseline">
      {items.map((item) => (
        <span
          key={`${ariaHidden}-${item}`}
          className="font-display text-2xl md:text-3xl px-5 whitespace-nowrap inline-flex items-baseline gap-10"
        >
          {item}
          <span className="text-volt" aria-hidden>
            ·
          </span>
        </span>
      ))}
    </span>
  );

  return (
    <div
      className={clsx('w-full overflow-hidden bg-ink text-paper py-4', className)}
      style={{ ['--marquee-duration' as string]: `${durationSeconds}s` }}
    >
      <div className="marquee-track inline-flex whitespace-nowrap will-change-transform">
        {content(false)}
        {content(true)}
      </div>
    </div>
  );
};
