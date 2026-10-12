import type { ComponentProps } from 'react';
import type { SectionTone } from '../primitives/Section';
import { Section } from '../primitives/Section';
import { Container } from '../primitives/Container';
import { BodyText, EditorialHeading } from '../primitives/Typography';
import { EditorialGridBackground } from '../primitives/EditorialGridBackground';
import { Reveal } from '../../motion/Reveal';
import styles from './EditorialTextSection.module.css';

type GridConfig = ComponentProps<typeof EditorialGridBackground>;

export type EditorialTextContent = {
  /** Serif statement (40px) above or below the body column. */
  heading?: string;
  /** Short serif lines set as a list, e.g. the About metadata. */
  lines?: string[];
  /** Body paragraphs in the narrow editorial column. The first one opens with a drop cap. */
  body?: string[];
};

type EditorialTextSectionProps = EditorialTextContent & {
  tone: SectionTone;
  spacing?: ComponentProps<typeof Section>['spacing'];
  /** Body before heading, as in the About intro of the Figma file. */
  order?: 'heading-first' | 'body-first';
  /** `'word'` makes the whole first word the initial (acronyms such as "AI"). */
  dropCap?: boolean | 'word';
  /** Decorative grid regions; keep them in the margins, away from the centered column. */
  grids?: GridConfig[];
  /** Accessible name when the section has no visible heading. */
  label?: string;
  /** Heading element; `h1` when the section opens a page (About). Defaults to `h2`. */
  headingAs?: 'h1' | 'h2';
  id?: string;
};

/**
 * The quiet Frosa editorial composition: a centered column of serif statement and
 * narrow sans body copy, with optional grid regions in the margins.
 * Figma references: About intro (126:1891), metadata (127:2391), "Over the years" (Frame 512).
 */
export function EditorialTextSection({
  tone,
  spacing = 'spacious',
  heading,
  lines,
  body,
  order = 'heading-first',
  dropCap = true,
  grids = [],
  label,
  id,
  headingAs = 'h2',
}: EditorialTextSectionProps) {
  const headingId = heading && id ? `${id}-heading` : undefined;

  const headingNode = heading ? <EditorialHeading as={headingAs} id={headingId} text={heading} className={styles.heading} /> : null;

  const bodyNode = body?.length ? (
    <Reveal className={styles.body}>
      {body.map((paragraph, i) => (
        <BodyText key={i} measure="narrow" dropCap={i === 0 ? dropCap : false}>
          {paragraph}
        </BodyText>
      ))}
    </Reveal>
  ) : null;

  return (
    <Section tone={tone} spacing={spacing} id={id} aria-labelledby={headingId} aria-label={headingId ? undefined : label}>
      {grids.map((grid, i) => (
        <EditorialGridBackground key={i} {...grid} />
      ))}
      <Container className={styles.column}>
        {lines?.length ? (
          <Reveal as="ul" className={styles.lines}>
            {lines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </Reveal>
        ) : null}
        {order === 'heading-first' ? (
          <>
            {headingNode}
            {bodyNode}
          </>
        ) : (
          <>
            {bodyNode}
            {headingNode}
          </>
        )}
      </Container>
    </Section>
  );
}
