import type { ReactNode } from 'react';
import { Surface } from '../primitives/Section';
import { ItemTitle, MetaText } from '../primitives/Typography';
import { TextLink } from '../primitives/TextLink';
import styles from './CardCaption.module.css';

type CardCaptionProps = {
  title: string;
  href: string;
  /** Quiet line under the title: discipline, or work type · disciplines. */
  meta?: string;
  /** Optional one-line summary. */
  summary?: string;
  /** Small italic note above the title, e.g. "Placeholder". */
  note?: string;
  /** Secondary action below, e.g. a live-product link. It sits above the card link. */
  action?: ReactNode;
  /** `below` the media (default) or `side` (beside it, aligned to its foot). */
  placement?: 'below' | 'side';
  /** On dark surfaces the caption sits on the texture instead of a snapped paper panel. */
  onDark?: boolean;
  className?: string;
};

/**
 * The project label used on every card (Home → Selected Work, Work collection).
 * On paper it is a panel snapped to whole grid cells: 20px below the media, text inset 16px
 * from the grid lines, 8px between lines. The title link stretches over the whole card, so
 * the parent card must be `position: relative`.
 */
export function CardCaption({ title, href, meta, summary, note, action, placement = 'below', onDark = false, className }: CardCaptionProps) {
  const cls = [styles.caption, styles[placement], className].filter(Boolean).join(' ');
  const content = (
    <>
      {note && <p className={styles.note}>{note}</p>}
      <ItemTitle>
        <TextLink href={href} className={styles.link}>
          {title}
        </TextLink>
      </ItemTitle>
      {meta && (
        <MetaText>
          {/* parts separated by " · " stay whole; the line only breaks between them */}
          {meta.split(' · ').map((part, i, all) => (
            <span key={i} className={styles.metaPart}>
              {part}
              {i < all.length - 1 ? ' ·' : ''}
            </span>
          )).reduce<React.ReactNode[]>((acc, el, i) => (i ? [...acc, ' ', el] : [el]), [])}
        </MetaText>
      )}
      {summary && <p className={styles.summary}>{summary}</p>}
      {action && <div className={styles.action}>{action}</div>}
    </>
  );
  return onDark ? (
    <div className={cls}>{content}</div>
  ) : (
    <Surface className={cls} snap>
      {content}
    </Surface>
  );
}
