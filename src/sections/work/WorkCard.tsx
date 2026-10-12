import type { CSSProperties } from 'react';
import { MediaPlaceholder } from '../../components/primitives/Media';
import { Surface } from '../../components/primitives/Section';
import { TextLink } from '../../components/primitives/TextLink';
import { ImageReveal } from '../../motion/ImageReveal';
import { Reveal } from '../../motion/Reveal';
import { workTypeLabels, type Project } from '../../content/projects';
import { workPage } from '../../content/work';
import styles from './WorkCard.module.css';

/** Where a card sits in its band, in grid cells (desktop, 21 columns). */
export type CardSlot = {
  col: number;
  span: number;
  /** Media height in cells. */
  rows: number;
  /** Rows the card is pushed down within its band (asymmetric pairs). */
  offset?: number;
  /** `side`: caption beside the media (feature bands). `below`: caption under it. */
  caption: 'side' | 'below';
  /** Caption column and span when `caption` is `side`. */
  captionCol?: number;
  captionSpan?: number;
};

/** The media a project chooses for the collection: before/after pair, interaction video, or cover. */
function ProjectMedia({ project }: { project: Project }) {
  if (project.comparison) {
    return (
      <div className={styles.comparison}>
        {(['before', 'after'] as const).map((side) => (
          <figure key={side} className={styles.half}>
            <MediaPlaceholder media={project.comparison![side]} className={styles.media} />
            <figcaption className={styles.halfLabel}>{side === 'before' ? 'Before' : 'After'}</figcaption>
          </figure>
        ))}
      </div>
    );
  }
  return <MediaPlaceholder media={project.preview ?? project.cover} className={styles.media} />;
}

/**
 * One project in the Work collection: media, then a restrained caption (title, a quiet
 * metadata line for work type and disciplines, optional summary, optional live link).
 * The whole card opens /work/[slug]; a live link is a separate, secondary action.
 */
export function WorkCard({ project, slot, onDark = false }: { project: Project; slot: CardSlot; onDark?: boolean }) {
  const style = {
    '--col': slot.col + 1,
    '--span': slot.span,
    '--rows': slot.rows,
    '--offset': slot.offset ?? 0,
    '--caption-col': (slot.captionCol ?? 0) + 1,
    '--caption-span': slot.captionSpan ?? 4,
    '--ratio': `${slot.span} / ${slot.rows}`,
    '--half-ratio': `${slot.span / 2} / ${slot.rows}`,
  } as CSSProperties;

  const meta = [workTypeLabels[project.workType], project.disciplines.join(', ')].filter(Boolean).join(' · ');
  const Caption = onDark ? 'div' : Surface;

  return (
    <li className={[styles.card, styles[slot.caption], project.placeholder && styles.isPlaceholder].filter(Boolean).join(' ')} style={style}>
      <ImageReveal className={styles.mediaWrap}>
        <ProjectMedia project={project} />
      </ImageReveal>
      <Reveal className={styles.captionWrap}>
        <Caption className={styles.caption}>
          {project.placeholder && <p className={styles.placeholderTag}>{workPage.placeholderLabel}</p>}
          <h3 className={styles.title}>
            <TextLink href={`/work/${project.slug}`} className={styles.link}>
              {project.title}
            </TextLink>
          </h3>
          <p className={styles.meta}>{meta}</p>
          {project.summary && <p className={styles.summary}>{project.summary}</p>}
          {project.liveUrl && (
            <p className={styles.live}>
              <TextLink href={project.liveUrl}>
                {workPage.liveLinkLabel} <span aria-hidden="true">↗</span>
              </TextLink>
            </p>
          )}
        </Caption>
      </Reveal>
    </li>
  );
}
