import { GridSection } from '../../components/compositions/GridSection';
import { Surface } from '../../components/primitives/Section';
import styles from './AboutSections.module.css';

/** Quiet link at the end of a chapter that switches to the other one, on the paper grid. */
export function ChapterNext({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <GridSection label="Chapters" rowsAbove={1} rowsBelow={1}>
      <div className={styles.chapterNextRow}>
        <Surface className={styles.chapterNextSurface} snap>
          <button type="button" className={styles.chapterNext} onClick={onClick}>
            {label} <span aria-hidden="true">→</span>
          </button>
        </Surface>
      </div>
    </GridSection>
  );
}
