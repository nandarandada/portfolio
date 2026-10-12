import type { CSSProperties, ReactNode } from 'react';
import { useInView } from './useInView';
import styles from './motion.module.css';

type ImageRevealProps = {
  delay?: number;
  className?: string;
  children: ReactNode;
};

/**
 * Opens a media frame with an overflow mask while the media settles inside it.
 * The observed wrapper carries no clip-path: a fully clipped element never reports
 * an intersection, so the mask lives on the inner element.
 */
export function ImageReveal({ delay = 0, className, children }: ImageRevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.05 });
  return (
    <div ref={ref} data-inview={inView} className={className} style={{ '--delay': `${delay}ms` } as CSSProperties}>
      <div className={styles.imageReveal}>{children}</div>
    </div>
  );
}
