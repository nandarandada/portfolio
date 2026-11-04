import { GridPanelSection } from '../../../components/compositions/GridPanelSection';
import { PrinciplesGrid } from '../../../components/compositions/PrinciplesGrid';
import { BodyText, EditorialHeading } from '../../../components/primitives/Typography';
import { Reveal } from '../../../motion/Reveal';
import { collaboration } from '../../../content/about';
import styles from './CollaborationSection.module.css';

/**
 * Good design is a team effort: four disciplines whose lines converge on one shared point,
 * then the practices that keep a team aligned (ringed principles, as in the Figma About).
 */
export function CollaborationSection() {
  return (
    <GridPanelSection start={2} span={17} id="collaboration" labelledBy="collaboration-heading">
      <div className={styles.head}>
        <EditorialHeading id="collaboration-heading" text={collaboration.headline} />
        <Reveal>
          <BodyText>{collaboration.body}</BodyText>
        </Reveal>
      </div>
      <Reveal className={styles.team}>
        <ul className={styles.disciplines} aria-label="One team">
          {collaboration.disciplines.map((d) => (
            <li key={d}>{d}</li>
          ))}
        </ul>
        <svg className={styles.converge} viewBox="0 0 400 60" preserveAspectRatio="none" aria-hidden="true">
          {[50, 150, 250, 350].map((x) => (
            <line key={x} x1={x} y1="0" x2="200" y2="56" />
          ))}
          <circle cx="200" cy="56" r="4" />
        </svg>
      </Reveal>
      <PrinciplesGrid items={collaboration.practices} label="How I work with teams" />
    </GridPanelSection>
  );
}
