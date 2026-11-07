import { GridPanelSection } from '../../components/compositions/GridPanelSection';
import { GridSection } from '../../components/compositions/GridSection';
import { Surface } from '../../components/primitives/Section';
import { BodyText, EditorialHeading, SectionLabel } from '../../components/primitives/Typography';
import { Reveal } from '../../motion/Reveal';
import styles from './AboutSections.module.css';

type ChapterNextProps = {
  /** The link that switches chapter, e.g. "Explore my process". */
  label: string;
  onClick: () => void;
  /** Optional teaser for the next chapter: small label, serif headline and one line. */
  eyebrow?: string;
  headline?: string;
  body?: string;
  id?: string;
};

const Arrow = () => <span aria-hidden="true">→</span>;

/**
 * End of a chapter. With a teaser it introduces the next chapter on a paper panel over the
 * grid (label, headline, one line and the link); without one it is a quiet link.
 */
export function ChapterNext({ label, onClick, eyebrow, headline, body, id = 'chapter-next' }: ChapterNextProps) {
  if (headline) {
    const headingId = `${id}-heading`;
    return (
      <GridPanelSection start={4} span={13} centered rowsAround={1} id={id} labelledBy={headingId}>
        <div className={styles.teaser}>
          {eyebrow && <SectionLabel className={styles.teaserEyebrow}>{eyebrow}</SectionLabel>}
          <EditorialHeading id={headingId} text={headline} />
          {body && (
            <Reveal>
              <BodyText className={styles.teaserBody}>{body}</BodyText>
            </Reveal>
          )}
          <Reveal delay={150}>
            <button type="button" className={styles.teaserAction} onClick={onClick}>
              {label} <Arrow />
            </button>
          </Reveal>
        </div>
      </GridPanelSection>
    );
  }
  return (
    <GridSection label="Chapters" rowsAbove={1} rowsBelow={1}>
      <div className={styles.chapterNextRow}>
        <Surface className={styles.chapterNextSurface} snap>
          <button type="button" className={styles.chapterNext} onClick={onClick}>
            {label} <Arrow />
          </button>
        </Surface>
      </div>
    </GridSection>
  );
}
