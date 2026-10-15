import type { CSSProperties } from 'react';
import styles from './EditorialGridBackground.module.css';

/** Offsets and sizes in grid cells. Use `'full'` for an edge-to-edge span. */
type CellValue = number | 'full';

export type GridRegion = {
  /** Distance from the section's left edge, in cells. Omit when anchoring with `right`. */
  left?: number;
  /** Distance from the section's right edge, in cells. */
  right?: number;
  /** Distance from the section's top edge, in cells. Omit when anchoring with `bottom`. */
  top?: number;
  bottom?: number;
  width: CellValue;
  height: CellValue;
};

type EditorialGridBackgroundProps = {
  region?: GridRegion;
  /**
   * `brand`: the fine red line (or a soft white line on red surfaces).
   * `paper`: the faint pink-grey line used on white editorial pages.
   */
  variant?: 'brand' | 'paper';
  /** Line opacity, 0–1. */
  opacity?: number;
  /** Draw every second vertical in ink, as in the Figma metadata composition. */
  inkVerticals?: boolean;
  /** Fade the region out toward one side so it recedes behind the composition. */
  fade?: 'left' | 'right' | 'top' | 'bottom';
  /** Below this breakpoint the region is not drawn (mobile simplification). */
  hideBelow?: 'tablet' | 'desktop';
  className?: string;
};

const toLength = (value: CellValue | undefined) =>
  value === undefined ? undefined : value === 'full' ? '100%' : `calc(var(--cell) * ${value})`;

/**
 * The Frosa red grid as a decorative layer.
 * - Cells come from the section (`--cell`), so every region on the page shares
 *   one rhythm and lines land on the same columns across sections.
 * - Regions are placed in cell units, never in pixels, so they adapt to the width.
 * - The layer sits below content (z-index 0) and ignores the pointer.
 * Keep text off the grid: place regions in margins, or put content on a `Surface`.
 */
export function EditorialGridBackground({
  region = { left: 0, top: 0, width: 'full', height: 'full' },
  variant = 'brand',
  opacity = 1,
  inkVerticals = false,
  fade,
  hideBelow,
  className,
}: EditorialGridBackgroundProps) {
  // A full-height region stops at its last complete row (see .fullHeight), so the grid
  // never ends in cut-off squares at the bottom of a section.
  const fullHeight = region.height === 'full' && region.bottom === undefined;
  const style = {
    left: toLength(region.left),
    right: toLength(region.right),
    top: toLength(region.top),
    bottom: toLength(region.bottom),
    width: toLength(region.width),
    height: fullHeight ? undefined : toLength(region.height),
    '--top': toLength(region.top ?? 0),
    opacity,
  } as CSSProperties;

  return (
    <div
      aria-hidden="true"
      className={[
        styles.grid,
        styles[variant],
        fullHeight && styles.fullHeight,
        inkVerticals && styles.inkVerticals,
        fade && styles[`fade-${fade}`],
        hideBelow && styles[`hide-${hideBelow}`],
        region.right !== undefined && styles.alignRight,
        region.bottom !== undefined && styles.alignBottom,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      style={style}
    />
  );
}
