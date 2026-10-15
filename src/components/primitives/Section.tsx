import { forwardRef, useRef, type ComponentPropsWithoutRef, type CSSProperties, type ElementType, type ReactNode } from 'react';
import { useGridSnap } from './useGridSnap';
import styles from './Section.module.css';

/**
 * Surface tones used across Frosa.
 * - dark:  near-black, textured (hero, statements)
 * - ink:   flat #1f1f1f (quiet dark sections)
 * - red:   brand red, textured (timeline, footer)
 * - light: white paper (editorial text, grid compositions)
 */
export type SectionTone = 'dark' | 'ink' | 'red' | 'light';

type SectionProps = {
  as?: ElementType;
  tone: SectionTone;
  /** Grain texture on dark and red tones (default true). Home's FROSA band is flat red in Figma. */
  texture?: boolean;
  /** Vertical rhythm. `none` lets the composition control its own spacing. */
  spacing?: 'none' | 'compact' | 'regular' | 'spacious';
  className?: string;
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<'section'>, 'className' | 'children'>;

/**
 * A full-bleed band with a Frosa surface. It establishes:
 * - the text color for its tone
 * - a stacking context (decorative layers stay below content)
 * - a container-query context, so EditorialGridBackground cells share one rhythm
 */
export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { as: Tag = 'section', tone, texture = true, spacing = 'regular', className, children, ...rest },
  ref,
) {
  return (
    <Tag
      ref={ref}
      data-tone={tone}
      className={[styles.section, styles[tone], !texture && styles.flat, styles[`space-${spacing}`], className].filter(Boolean).join(' ')}
      {...rest}
    >
      {children}
    </Tag>
  );
});

type SurfaceProps = {
  className?: string;
  children: ReactNode;
  /**
   * Grow the panel's background out to whole grid cells and draw the cell borders along its
   * edges, so the grid around it always ends in complete squares. `true` snaps at every width;
   * a number snaps only from that viewport width up (where the section's grid is visible).
   */
  snap?: boolean | number;
};

/**
 * A panel that repeats its section's surface so it can sit on top of a grid and keep text
 * on a clean background.
 */
export const Surface = forwardRef<HTMLDivElement, SurfaceProps>(function Surface({ className, children, snap = false }, ref) {
  const local = useRef<HTMLDivElement | null>(null);
  const box = useGridSnap(local, snap !== false, typeof snap === 'number' ? snap : 0);

  const setRefs = (node: HTMLDivElement | null) => {
    local.current = node;
    if (typeof ref === 'function') ref(node);
    else if (ref) ref.current = node;
  };

  return (
    <div ref={setRefs} className={[styles.surface, className].filter(Boolean).join(' ')} data-snapped={box ? 'true' : undefined}>
      {box && (
        <span
          aria-hidden="true"
          className={styles.backdrop}
          style={
            {
              // The backdrop covers the cells exactly, including their edge lines, and redraws
              // those edges itself (see .backdrop): one line per edge, no gaps, no stubs.
              left: box.left,
              top: box.top,
              width: box.width + 1,
              height: box.height + 1,
            } as CSSProperties
          }
        />
      )}
      {children}
    </div>
  );
});
