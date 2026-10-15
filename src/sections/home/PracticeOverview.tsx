import { GridSection } from '../../components/compositions/GridSection';
import { MediaPlaceholder } from '../../components/primitives/Media';
import { Surface } from '../../components/primitives/Section';
import { BodyText, EditorialHeading } from '../../components/primitives/Typography';
import { ImageReveal } from '../../motion/ImageReveal';
import { Reveal } from '../../motion/Reveal';
import { practiceOverview } from '../../content/home';
import styles from './HomeSections.module.css';

/**
 * A short editorial statement beside the large image (Figma: Home practice composition).
 * The disciplines already live in the expertise strip, so this section states the idea instead.
 */
export function PracticeOverview() {
  return (
    <GridSection labelledBy="practice-heading" rowsAbove={1} rowsBelow={2}>
      <div className={styles.overview}>
        <Surface className={styles.overviewText} snap>
          <EditorialHeading id="practice-heading" text={practiceOverview.heading} />
          <Reveal delay={200}>
            <BodyText className={styles.overviewBody}>{practiceOverview.body}</BodyText>
          </Reveal>
        </Surface>
        <ImageReveal className={styles.overviewMedia}>
          <MediaPlaceholder media={practiceOverview.media} className={styles.overviewFrame} />
        </ImageReveal>
      </div>
    </GridSection>
  );
}
