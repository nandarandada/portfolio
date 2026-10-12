import type { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from './useInView';
import styles from './motion.module.css';

type RevealProps = {
  as?: ElementType;
  delay?: number;
  className?: string;
  children: ReactNode;
};

/** Fade-and-rise for paragraphs, lists and small groups. */
export function Reveal({ as: Tag = 'div', delay = 0, className, children }: RevealProps) {
  const [ref, inView] = useInView<HTMLElement>();
  return (
    <Tag
      ref={ref}
      data-inview={inView}
      className={[styles.reveal, className].filter(Boolean).join(' ')}
      style={{ '--delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
