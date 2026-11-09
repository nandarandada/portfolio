import { GridPanelSection } from '../../components/compositions/GridPanelSection';
import { BodyText, EditorialHeading, SectionLabel } from '../../components/primitives/Typography';
import { Reveal } from '../../motion/Reveal';
import styles from './AboutSections.module.css';

type ChapterNextProps = {
  /** Small red label, e.g. "Next — About my work". */
  eyebrow: string;
  /** Serif headline introducing the other chapter. */
  headline: string;
  /** One line about what the other chapter holds. */
  body: string;
  /** The link that switches chapter, e.g. "Explore my process". */
  label: string;
  onClick: () => void;
  id?: string;
};

/**
 * End of a chapter: a teaser for the other one, on a paper panel over the grid. Used in both
 * directions (About me → About my work and back), so the two chapters link the same way.
 * The whole panel is the link target: the button's hit area stretches over the panel.
 */
export function ChapterNext({ eyebrow, headline, body, label, onClick, id = 'chapter-next' }: ChapterNextProps) {
  const headingId = `${id}-heading`;
  return (
    <GridPanelSection start={4} span={13} centered rowsAround={1} id={id} labelledBy={headingId}>
      <div className={styles.teaser}>
        <SectionLabel className={styles.teaserEyebrow}>{eyebrow}</SectionLabel>
        <EditorialHeading id={headingId} text={headline} />
        <Reveal>
          <BodyText className={styles.teaserBody}>{body}</BodyText>
        </Reveal>
        {/* Not inside Reveal: its transform would trap the full-panel hit area */}
        <button type="button" className={styles.chapterLink} onClick={onClick}>
          {label} <span className={styles.arrow} aria-hidden="true">→</span>
        </button>
      </div>
    </GridPanelSection>
  );
}
