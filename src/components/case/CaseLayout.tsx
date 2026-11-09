import type { ComponentProps, CSSProperties, ReactNode } from 'react';
import { Section } from '../primitives/Section';
import { Container } from '../primitives/Container';
import { EditorialGridBackground } from '../primitives/EditorialGridBackground';
import { BodyText, DisplayHeading, EditorialHeading } from '../primitives/Typography';
import { TextLink } from '../primitives/TextLink';
import { Reveal } from '../../motion/Reveal';
import type { CaseDecision, CaseMedia, CaseMetaItem, CaseMosaicRow, CaseSwatch, CaseTheme } from '../../content/cases/types';
import { CaseFigure } from './CaseMedia';
import styles from './Case.module.css';

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(' ');

/**
 * Scopes a project's palette to its case page. Everything inside reads `--case-*`;
 * the global header, footer and type stay Frosa's.
 */
export function CaseTheme({ theme, children }: { theme: CaseTheme; children: ReactNode }) {
  const style = {
    '--case-base': theme.base,
    '--case-surface': theme.surface,
    '--case-accent': theme.accent,
    '--case-on-accent': theme.onAccent,
    '--case-line': theme.line,
    '--case-art': theme.art,
    '--case-art-deep': theme.artDeep,
  } as CSSProperties;
  return (
    <div className={styles.case} style={style}>
      {children}
    </div>
  );
}

type CaseSectionProps = {
  /**
   * `base`: the grained dark page. `surface`: the project's grained colour.
   * `paper`: the white Frosa editorial page.
   */
  tone: 'base' | 'surface' | 'paper';
  id?: string;
  labelledBy?: string;
  label?: string;
  className?: string;
  /** Draw the faint project-coloured grid behind a paper section. */
  grid?: boolean;
  children: ReactNode;
};

/** A full-width chapter band. Content goes in `<Container>`. */
export function CaseSection({ tone, id, labelledBy, label, className, grid = false, children }: CaseSectionProps) {
  return (
    <Section
      tone={tone === 'paper' ? 'light' : 'dark'}
      spacing="none"
      id={id}
      aria-labelledby={labelledBy}
      aria-label={labelledBy ? undefined : label}
      className={cx(styles.section, styles[tone], className)}
    >
      {grid && <EditorialGridBackground variant="paper" className={styles.gridFaint} />}
      {children}
    </Section>
  );
}

type GridProps = ComponentProps<typeof EditorialGridBackground>;

/**
 * Decorative grid in the project's line colour. `strong` draws full lines; `faint` a light tint;
 * `ink` the dark lines used on the coloured surface.
 */
export function CaseGridLines({ strength = 'strong', className, ...grid }: GridProps & { strength?: 'strong' | 'faint' | 'ink' }) {
  const tone = { strong: styles.gridStrong, faint: styles.gridFaint, ink: styles.gridInk }[strength];
  return <EditorialGridBackground {...grid} className={cx(tone, className)} />;
}

/**
 * The opening: full-width key art under the header, then the title, the project details,
 * the disciplines and the introduction in the centred editorial column.
 */
export function CaseHero({
  title,
  meta,
  disciplines,
  body,
  media,
}: {
  title: string;
  meta: CaseMetaItem[];
  disciplines: string[];
  body: string;
  media: CaseMedia;
}) {
  return (
    <CaseSection tone="base" labelledBy="case-title" className={styles.hero}>
      <div className={styles.heroMedia}>
        <CaseFigure media={media} ratio="1280 / 632" hideCaption />
      </div>
      <CaseGridLines region={{ right: 0, top: 14, width: 6, height: 15 }} hideBelow="tablet" />
      <Container>
        <div className={cx(styles.column, styles.columnWide)}>
          <DisplayHeading as="h1" id="case-title" text={title} className={styles.heroTitle} />
          <Reveal as="dl" delay={200} className={styles.meta}>
            {meta.map((item) => (
              <div key={item.label} className={styles.metaItem}>
                <dt>{item.label}</dt>
                <dd>{item.value}</dd>
              </div>
            ))}
          </Reveal>
          <Reveal delay={300}>
            <ul className={styles.disciplines} aria-label="Disciplines">
              {disciplines.map((discipline) => (
                <li key={discipline}>{discipline}</li>
              ))}
            </ul>
          </Reveal>
          <Reveal className={styles.columnBody}>
            <BodyText dropCap>{body}</BodyText>
          </Reveal>
        </div>
      </Container>
    </CaseSection>
  );
}

/**
 * A chapter opening in the centred editorial column: a small label, the serif heading, and the
 * narrow body text with a drop cap. Extra content (audiences, notes) follows the body.
 */
export function CaseIntro({
  id,
  label,
  heading,
  body = [],
  panel = false,
  className,
  children,
}: {
  id: string;
  label: string;
  heading: string;
  body?: string[];
  /** Sit on a white panel (for paper sections with a grid behind). */
  panel?: boolean;
  className?: string;
  children?: ReactNode;
}) {
  return (
    <header className={cx(styles.column, panel && styles.paperPanel, className)}>
      <p className={styles.columnLabel}>{label}</p>
      <EditorialHeading id={id} text={heading} className={styles.columnHeading} />
      {(body.length > 0 || children) && (
        <Reveal className={styles.columnBody}>
          {body.map((paragraph, i) => (
            <BodyText key={paragraph} dropCap={i === 0}>
              {paragraph}
            </BodyText>
          ))}
          {children}
        </Reveal>
      )}
    </header>
  );
}

/** Short titled items stacked in the narrow column (the audiences of the challenge). */
export function CaseAudiences({ items }: { items: CaseDecision[] }) {
  return (
    <dl className={styles.audiences}>
      {items.map((item) => (
        <div key={item.title} className={styles.audience}>
          <dt>{item.title}</dt>
          <dd>{item.text}</dd>
        </div>
      ))}
    </dl>
  );
}

/**
 * Edge-to-edge rows of images. Widths are shares of each row and the height is shared, so the
 * row lines up without gaps; small screens stack the images, each at its slot's ratio.
 */
export function CaseMosaic({ label, rows }: { label: string; rows: CaseMosaicRow[] }) {
  return (
    <section className={styles.mosaic} aria-label={label}>
      {rows.map((row, r) => (
        <div
          key={r}
          className={styles.mosaicRow}
          style={{ gridTemplateColumns: row.items.map((item) => `minmax(0, ${item.width}fr)`).join(' ') }}
        >
          {row.items.map((item, i) => (
            <CaseFigure
              key={item.media.id}
              media={item.media}
              ratio={`${item.width} / ${row.height}`}
              delay={i * 90}
              hideCaption
              className={styles.mosaicItem}
            />
          ))}
        </div>
      ))}
    </section>
  );
}

/**
 * A 12-column composition inside the container. Children are `CaseCell`s, placed by
 * column and span on desktop; tablet keeps pairs side by side, mobile stacks them.
 */
export function CaseGrid({ className, children }: { className?: string; children: ReactNode }) {
  return <div className={cx(styles.grid, className)}>{children}</div>;
}

export function CaseCell({
  col,
  span,
  drop = 0,
  tablet = 12,
  align,
  className,
  children,
}: {
  /** First column (1-based) and span on the 12-column desktop grid. */
  col: number;
  span: number;
  /** Push the cell down (asymmetric pairs), in steps of about one grid gap. */
  drop?: number;
  /** Span on tablet (of 12). Mobile always stacks. */
  tablet?: number;
  align?: 'start' | 'center' | 'end';
  className?: string;
  children: ReactNode;
}) {
  const style = { '--col': col, '--span': span, '--drop': drop, '--tspan': tablet, alignSelf: align } as CSSProperties;
  return (
    <div className={cx(styles.cell, className)} style={style}>
      {children}
    </div>
  );
}

/** Numbered design decisions, read top to bottom. */
export function CaseDecisions({ items, className }: { items: CaseDecision[]; className?: string }) {
  return (
    <ol className={cx(styles.decisions, className)}>
      {items.map((item, i) => (
        <Reveal as="li" key={item.title} className={styles.decision}>
          <span className={styles.decisionNumber} aria-hidden="true">
            {String(i + 1).padStart(2, '0')}
          </span>
          <div>
            <h3 className={styles.decisionTitle}>{item.title}</h3>
            <p className={styles.decisionText}>{item.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  );
}

/** Palette swatches with names and hex values. */
export function CaseSwatches({ label, note, swatches }: { label: string; note?: string; swatches: CaseSwatch[] }) {
  return (
    <div className={styles.swatchBlock}>
      <p className={styles.columnLabel}>{label}</p>
      <ul className={styles.swatches}>
        {swatches.map((swatch, i) => (
          <Reveal as="li" key={swatch.hex} delay={i * 70} className={styles.swatch}>
            <span className={styles.swatchChip} style={{ background: swatch.hex }} aria-hidden="true" />
            <span className={styles.swatchName}>{swatch.name}</span>
            <span className={styles.swatchHex}>{swatch.hex}</span>
          </Reveal>
        ))}
      </ul>
      {note && <p className={styles.note}>{note}</p>}
    </div>
  );
}

/** Small label + sentence used beside media (design system, mobile). */
export function CaseNote({ label, text, className }: { label: string; text: string; className?: string }) {
  return (
    <Reveal className={cx(styles.noteBlock, className)}>
      <p className={styles.columnLabel}>{label}</p>
      <p className={styles.note}>{text}</p>
    </Reveal>
  );
}

/** The closing line of a case and the way back to the collection. */
export function CaseClosing({ statement, link }: { statement: string; link: { label: string; href: string } }) {
  return (
    <div className={styles.closing}>
      <span className={styles.closingRule} aria-hidden="true" />
      <Reveal>
        <p className={styles.closingText}>{statement}</p>
      </Reveal>
      <Reveal delay={200}>
        <TextLink href={link.href} className={styles.closingLink}>
          {link.label} <span aria-hidden="true">→</span>
        </TextLink>
      </Reveal>
    </div>
  );
}
