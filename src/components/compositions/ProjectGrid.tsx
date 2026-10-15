import type { CSSProperties } from 'react';
import type { MediaAsset } from '../primitives/Media';
import { MediaPlaceholder } from '../primitives/Media';
import { ImageReveal } from '../../motion/ImageReveal';
import { CardCaption } from './CardCaption';
import styles from './ProjectGrid.module.css';

/** Where a card sits on the desktop 21-column grid, in cells (Figma: Home and Work project grids). */
export type GridPlacement = { col: number; span: number; row: number; rows: number };

export type ProjectCardData = {
  href: string;
  title: string;
  category: string;
  description?: string;
  media: MediaAsset;
  placement: GridPlacement;
};

/**
 * The asymmetric project grid. On desktop each card is placed on whole grid cells, image
 * first, caption on a clean surface in the row below. Below 1024px the cards flow in two
 * columns, then one, keeping each image's proportions.
 */
export function ProjectGrid({ items, label }: { items: ProjectCardData[]; label: string }) {
  return (
    <ul className={styles.grid} aria-label={label}>
      {items.map((item, i) => {
        const { col, span, row, rows } = item.placement;
        const style = {
          gridColumn: `${col + 1} / span ${span}`,
          gridRow: `${row + 1} / span ${rows + 2}`, // image rows + two caption rows
          '--rows': rows,
          '--ratio': `${span} / ${rows}`,
        } as CSSProperties;
        return (
          <li key={item.href} className={styles.card} style={style}>
            <ImageReveal delay={(i % 2) * 120}>
              <MediaPlaceholder media={item.media} className={styles.media} />
            </ImageReveal>
            <CardCaption title={item.title} href={item.href} meta={item.category} summary={item.description} />
          </li>
        );
      })}
    </ul>
  );
}
