import { GridPanelSection } from '../../../components/compositions/GridPanelSection';
import { BodyText, EditorialHeading } from '../../../components/primitives/Typography';
import { Reveal } from '../../../motion/Reveal';
import { collaboration } from '../../../content/about';
import styles from './CollaborationSection.module.css';

/** Better work happens together: a short editorial text on the paper panel, no framework. */
export function CollaborationSection() {
  return (
    <GridPanelSection start={4} span={13} centered id="collaboration" labelledBy="collaboration-heading">
      <div className={styles.stack}>
        <EditorialHeading id="collaboration-heading" text={collaboration.headline} className={styles.heading} />
        <Reveal className={styles.body}>
          {collaboration.body.map((paragraph) => (
            <BodyText key={paragraph} className={styles.paragraph}>
              {paragraph}
            </BodyText>
          ))}
        </Reveal>
      </div>
    </GridPanelSection>
  );
}
