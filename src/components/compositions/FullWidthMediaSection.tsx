import type { MediaAsset } from '../primitives/Media';
import { MediaPlaceholder } from '../primitives/Media';
import { ImageReveal } from '../../motion/ImageReveal';
import styles from './FullWidthMediaSection.module.css';

/** Edge-to-edge image or video band (Figma: the 1280 × 565 portrait and illustration frames). */
export function FullWidthMediaSection({ media, label }: { media: MediaAsset; label?: string }) {
  return (
    <section className={styles.band} aria-label={label}>
      <ImageReveal>
        <MediaPlaceholder media={media} className={styles.media} />
      </ImageReveal>
    </section>
  );
}
