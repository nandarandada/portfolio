import { Wordmark } from './Wordmark';
import styles from './OversizedWordmark.module.css';

/**
 * The FROSA wordmark set edge to edge, as in the Home band and the footer.
 * `cropBottom` trims the foot of the letters (footer). `parallax` lets it rise
 * slightly while it scrolls into view (footer only in the approved design).
 */
export function OversizedWordmark({ cropBottom = false, parallax = false }: { cropBottom?: boolean; parallax?: boolean }) {
  return (
    <div className={[styles.wrap, cropBottom && styles.crop].filter(Boolean).join(' ')} aria-hidden="true">
      <Wordmark className={[styles.wordmark, parallax && styles.parallax].filter(Boolean).join(' ')} title="" />
    </div>
  );
}
