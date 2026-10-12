import { Reveal } from '../../motion/Reveal';
import styles from './PrinciplesGrid.module.css';

export type Principle = {
  title: string;
  /** Optional supporting line. Leave it out rather than inventing copy. */
  text?: string;
};

/**
 * Three-column set of short principles, each marked with the small red ring
 * (Figma: About "Product Experiences / Identity Systems / …", Frame 526–528).
 */
export function PrinciplesGrid({ items, label }: { items: Principle[]; label: string }) {
  return (
    <ul className={styles.grid} aria-label={label}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} delay={(i % 3) * 90} className={styles.item}>
          <span className={styles.ring} aria-hidden="true" />
          <h3 className={styles.title}>{item.title}</h3>
          {item.text && <p className={styles.text}>{item.text}</p>}
        </Reveal>
      ))}
    </ul>
  );
}
