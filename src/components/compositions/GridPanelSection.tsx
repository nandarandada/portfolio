import { useRef, type ComponentProps, type CSSProperties, type ReactNode } from 'react';
import { Section, Surface } from '../primitives/Section';
import { EditorialGridBackground } from '../primitives/EditorialGridBackground';
import { useCellSnap } from './useCellSnap';
import styles from './GridPanelSection.module.css';

type GridPanelSectionProps = {
  /** First grid column the panel covers (0-based, desktop 21-column grid). */
  start: number;
  /** Number of columns the panel spans on desktop. */
  span: number;
  /** Grid rows left visible above and below the panel. */
  rowsAround?: number;
  /** Override rows above / below independently. */
  rowsAbove?: number;
  rowsBelow?: number;
  /** Extra grid regions (e.g. red margins) drawn over the paper grid. */
  grids?: ComponentProps<typeof EditorialGridBackground>[];
  /** Decorative element positioned against the section, e.g. the Frosa seal. */
  decoration?: ReactNode;
  id?: string;
  label?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

/**
 * White editorial page laid over the faint paper grid (Home manifesto and "capricho",
 * About principles in Figma). The content panel covers whole grid cells, so every line
 * of text sits on clean paper while the grid frames it on all sides.
 * The panel's height is rounded up to whole cells, so the rows below it (and in the
 * next grid section) continue on the same rhythm.
 * On tablet the panel keeps one column of grid at each side; on mobile it goes full
 * width and the grid shows only above and below.
 */
export function GridPanelSection({
  start,
  span,
  rowsAround = 2,
  rowsAbove = rowsAround,
  rowsBelow = rowsAround,
  grids = [],
  decoration,
  id,
  label,
  labelledBy,
  className,
  children,
}: GridPanelSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useCellSnap(sectionRef, panelRef, contentRef);

  return (
    <Section
      ref={sectionRef}
      tone="light"
      spacing="none"
      id={id}
      aria-label={labelledBy ? undefined : label}
      aria-labelledby={labelledBy}
      className={[styles.section, className].filter(Boolean).join(' ')}
      style={{ '--start': start, '--span': span, '--rows-above': rowsAbove, '--rows-below': rowsBelow } as CSSProperties}
    >
      <EditorialGridBackground variant="paper" />
      {grids.map((grid, i) => (
        <EditorialGridBackground key={i} {...grid} />
      ))}
      {decoration}
      <Surface ref={panelRef} className={styles.panel} snap>
        <div ref={contentRef}>{children}</div>
      </Surface>
    </Section>
  );
}
