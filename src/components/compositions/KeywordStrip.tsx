import type { CSSProperties } from 'react';
import styles from './KeywordStrip.module.css';

type KeywordStripProps = {
  items: string[];
  /** Accessible name for the list, e.g. 'How the practice evolved'. */
  label: string;
  /**
   * `scroll` (default): the line slides sideways as the page scrolls, never on its own.
   * `loop`: the line runs continuously, as an endless band (pauses on hover).
   */
  motion?: 'scroll' | 'loop';
  /** Seconds for one full cycle in `loop` mode. */
  duration?: number;
};

const Items = ({ items, trailing }: { items: string[]; trailing: boolean }) => (
  <>
    {items.map((item, i) => (
      <li key={`${i}-${item}`} className={styles.item}>
        {item}
        {(trailing || i < items.length - 1) && (
          <span className={styles.bullet} aria-hidden="true">
            •
          </span>
        )}
      </li>
    ))}
  </>
);

/**
 * One line of tracked uppercase keywords separated by bullets (Figma: "AND CODE • FIGMA • …").
 * With reduced motion, either mode wraps into centered static lines. Screen readers always
 * get one plain list; the repeated copies of the loop are hidden from them.
 */
export function KeywordStrip({ items, label, motion = 'scroll', duration = 36 }: KeywordStripProps) {
  if (motion === 'loop') {
    return (
      <div className={`${styles.strip} ${styles.loop}`} style={{ '--duration': `${duration}s` } as CSSProperties}>
        <ol className={styles.staticList} aria-label={label}>
          <Items items={items} trailing={false} />
        </ol>
        <div className={styles.marquee} aria-hidden="true">
          {[0, 1].map((copy) => (
            <ul key={copy} className={styles.group}>
              {/* each group is repeated so even a short list fills the widest screens */}
              <Items items={[...items, ...items]} trailing />
            </ul>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className={styles.strip}>
      <ol className={styles.track} aria-label={label}>
        <Items items={items} trailing={false} />
      </ol>
    </div>
  );
}
