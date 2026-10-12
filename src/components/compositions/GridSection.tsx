import { useRef, type ComponentProps, type ReactNode } from 'react';
import { Section } from '../primitives/Section';
import type { SectionTone } from '../primitives/Section';
import { EditorialGridBackground } from '../primitives/EditorialGridBackground';
import { useCellSnap } from './useCellSnap';
import styles from './GridSection.module.css';

type GridSectionProps = {
  tone?: SectionTone;
  /** Draw the faint paper grid across the whole section (light tone). */
  paper?: boolean;
  grids?: ComponentProps<typeof EditorialGridBackground>[];
  /** Grid rows of breathing room above and below the content. */
  rowsAbove?: number;
  rowsBelow?: number;
  id?: string;
  label?: string;
  labelledBy?: string;
  className?: string;
  children: ReactNode;
};

/**
 * A section whose height is a whole number of grid cells, for compositions laid out
 * directly on the grid (project grid, practice overview, collaborations). Text placed
 * on it should sit on a `Surface` so grid lines never run behind it.
 */
export function GridSection({
  tone = 'light',
  paper = tone === 'light',
  grids = [],
  rowsAbove = 2,
  rowsBelow = 2,
  id,
  label,
  labelledBy,
  className,
  children,
}: GridSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useCellSnap(sectionRef, sectionRef, contentRef);

  return (
    <Section
      ref={sectionRef}
      tone={tone}
      spacing="none"
      id={id}
      aria-label={labelledBy ? undefined : label}
      aria-labelledby={labelledBy}
      className={[styles.section, className].filter(Boolean).join(' ')}
      style={{ paddingTop: `calc(var(--cell) * ${rowsAbove})`, paddingBottom: `calc(var(--cell) * ${rowsBelow})` }}
    >
      {paper && <EditorialGridBackground variant="paper" />}
      {grids.map((grid, i) => (
        <EditorialGridBackground key={i} {...grid} />
      ))}
      <div ref={contentRef} className={styles.content}>
        {children}
      </div>
    </Section>
  );
}
