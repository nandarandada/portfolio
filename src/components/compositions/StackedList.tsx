import type { CSSProperties } from 'react';
import { useInView } from '../../motion/useInView';
import styles from './StackedList.module.css';

type StackedListProps = {
  items: string[];
  label: string;
  /** `ordered` for sequences (a process), `unordered` for sets (disciplines). */
  ordered?: boolean;
};

/**
 * Tracked uppercase labels stacked vertically (Home: BRANDING / PRODUCT DESIGN / DIGITAL STRATEGY).
 * Items start in the muted tone used in Figma and turn to ink one after another when the
 * list enters the viewport, reading as a sequence.
 */
export function StackedList({ items, label, ordered = true }: StackedListProps) {
  const [ref, inView] = useInView<HTMLOListElement & HTMLUListElement>({ threshold: 0.4 });
  const Tag = ordered ? 'ol' : 'ul';
  return (
    <Tag ref={ref} className={styles.list} aria-label={label} data-inview={inView}>
      {items.map((item, i) => (
        <li key={item} className={styles.item} style={{ '--i': i } as CSSProperties}>
          {item}
        </li>
      ))}
    </Tag>
  );
}
