import { GridPanelSection } from '../../components/compositions/GridPanelSection';
import { StackedList } from '../../components/compositions/StackedList';
import { BodyText, EditorialHeading } from '../../components/primitives/Typography';
import { Reveal } from '../../motion/Reveal';
import { newWayOfWorking } from '../../content/about';
import styles from './AboutSections.module.css';

/** Process list on the left, statement and copy on the right (Home: BRANDING / PRODUCT DESIGN / … composition). */
export function NewWayOfWorking() {
  return (
    <GridPanelSection start={2} span={17} id="new-way-of-working" labelledBy="new-way-of-working-heading">
      <div className={styles.split}>
        <StackedList items={newWayOfWorking.process} label="Process" />
        <div className={styles.splitMain}>
          <EditorialHeading id="new-way-of-working-heading" text={newWayOfWorking.headline} />
          <Reveal className={styles.copy}>
            {newWayOfWorking.body.map((paragraph, i) => (
              <BodyText key={i}>{paragraph}</BodyText>
            ))}
          </Reveal>
        </div>
      </div>
    </GridPanelSection>
  );
}
