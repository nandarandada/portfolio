import type { MediaAsset } from '../primitives/Media';
import { MediaPlaceholder } from '../primitives/Media';
import { Surface } from '../primitives/Section';
import { ItemTitle } from '../primitives/Typography';
import { Reveal } from '../../motion/Reveal';
import styles from './CollaborationsGrid.module.css';

export type Collaboration = {
  name: string;
  /** Logo in its original colors. `aspectRatio` keeps the slot size until the file is supplied. */
  logo: MediaAsset;
  text: string;
};

/**
 * Three columns of client logo + short contribution (Figma: Home "Previous Collaborations").
 * Columns start on grid columns 3, 9 and 15. The whole block (title, logos, texts) sits on
 * one white panel snapped to whole grid cells.
 */
export function CollaborationsGrid({ heading, headingId, items }: { heading: string; headingId: string; items: Collaboration[] }) {
  return (
    <Surface className={styles.wrap} snap>
      <ItemTitle as="h2" id={headingId}>
        {heading}
      </ItemTitle>
      <ul className={styles.grid}>
        {items.map((item, i) => (
          <Reveal as="li" key={item.name} delay={i * 90} className={styles.item}>
            <div className={styles.logo}>
              <MediaPlaceholder media={{ ...item.logo, alt: item.logo.alt ?? item.name }} />
            </div>
            <p className={styles.text}>{item.text}</p>
          </Reveal>
        ))}
      </ul>
    </Surface>
  );
}
