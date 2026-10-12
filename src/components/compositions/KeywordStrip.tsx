import styles from './KeywordStrip.module.css';

type KeywordStripProps = {
  items: string[];
  /** Accessible name for the list, e.g. 'How the practice evolved'. */
  label: string;
};

/**
 * One line of tracked uppercase keywords separated by bullets (Figma: "AND CODE • FIGMA • …").
 * Where scroll-driven animations are supported, the line slides sideways as the page
 * scrolls (it never moves on its own), so the full sequence can be read. Otherwise, and
 * with reduced motion, it wraps into centered static lines.
 */
export function KeywordStrip({ items, label }: KeywordStripProps) {
  return (
    <div className={styles.strip}>
      <ol className={styles.track} aria-label={label}>
        {items.map((item, i) => (
          <li key={item} className={styles.item}>
            {item}
            {i < items.length - 1 && (
              <span className={styles.bullet} aria-hidden="true">
                •
              </span>
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}
