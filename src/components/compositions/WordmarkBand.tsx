import { Section } from '../primitives/Section';
import { OversizedWordmark } from '../primitives/OversizedWordmark';
import styles from './WordmarkBand.module.css';

/** Flat red band carrying the edge-to-edge FROSA wordmark (Figma: Home, under the hero). */
export function WordmarkBand() {
  return (
    <Section tone="red" texture={false} spacing="none" className={styles.band} aria-label="Frosa">
      <OversizedWordmark />
    </Section>
  );
}
