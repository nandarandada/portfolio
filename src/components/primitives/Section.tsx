import { forwardRef, type ComponentPropsWithoutRef, type ElementType, type ReactNode } from 'react';
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

/** A panel that repeats its section's surface so it can sit on top of a grid and keep text on a clean background. */
export const Surface = forwardRef<HTMLDivElement, { className?: string; children: ReactNode }>(function Surface(
  { className, children },
  ref,
) {
  return (
    <div ref={ref} className={[styles.surface, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  );
});
