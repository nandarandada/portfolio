import type { ElementType, ReactNode } from 'react';
import { TextReveal } from '../../motion/TextReveal';
import styles from './Typography.module.css';

type TextProps = {
  as?: ElementType;
  className?: string;
  id?: string;
};

const cx = (...names: Array<string | false | undefined>) => names.filter(Boolean).join(' ');

/**
 * Libre Baskerville Bold at display size (60px). Hero headlines and manifesto statements.
 * Pass `text` to get the masked line reveal; pass children for static/rich content.
 */
export function DisplayHeading({ as = 'h1', className, id, text, children }: TextProps & { text?: string; children?: ReactNode }) {
  if (text) return <TextReveal as={as} id={id} text={text} className={cx(styles.display, className)} />;
  const Tag = as;
  return (
    <Tag id={id} className={cx(styles.display, className)}>
      {children}
    </Tag>
  );
}

/** Libre Baskerville Bold at statement size (40px). Section headlines and editorial statements. */
export function EditorialHeading({ as = 'h2', className, id, text, children }: TextProps & { text?: string; children?: ReactNode }) {
  if (text) return <TextReveal as={as} id={id} text={text} className={cx(styles.editorial, className)} />;
  const Tag = as;
  return (
    <Tag id={id} className={cx(styles.editorial, className)}>
      {children}
    </Tag>
  );
}

/**
 * General Sans body copy (20px / 1.65).
 * `dropCap` opens the paragraph with a Libre Baskerville initial, as in the Figma editorial columns.
 * `dropCap="word"` sets the whole first word as the initial (for acronyms such as "AI").
 * `measure="narrow"` sets the ≈255px editorial column.
 */
export function BodyText({
  as: Tag = 'p',
  className,
  dropCap = false,
  measure,
  children,
}: TextProps & { dropCap?: boolean | 'word'; measure?: 'narrow' | 'wide'; children: ReactNode }) {
  if (dropCap === 'word' && typeof children === 'string') {
    const [first, ...rest] = children.split(' ');
    return (
      <Tag className={cx(styles.body, styles.dropWordParagraph, measure && styles[measure], className)}>
        <span className={styles.dropWord}>{first}</span> {rest.join(' ')}
      </Tag>
    );
  }
  return (
    <Tag className={cx(styles.body, dropCap && styles.dropCap, measure && styles[measure], className)}>{children}</Tag>
  );
}

/** General Sans Bold, uppercase, tracked 20%. Used for labels, keyword strips and stacked lists. */
export function SectionLabel({ as: Tag = 'p', className, id, children }: TextProps & { children: ReactNode }) {
  return (
    <Tag id={id} className={cx(styles.label, className)}>
      {children}
    </Tag>
  );
}
