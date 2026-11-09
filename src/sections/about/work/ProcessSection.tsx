import { GridPanelSection } from '../../../components/compositions/GridPanelSection';
import { BodyText, EditorialHeading } from '../../../components/primitives/Typography';
import { Reveal } from '../../../motion/Reveal';
import { useInView } from '../../../motion/useInView';
import { process } from '../../../content/about';
import styles from './ProcessSection.module.css';

/**
 * How I approach a project: four stages read as one editorial sequence down a fine
 * red line, in a narrow centered column on the paper grid. Not a diagram: each stage
 * is a serif heading with a small red number and a short paragraph.
 */
export function ProcessSection() {
  const [ref, inView] = useInView<HTMLOListElement>({ threshold: 0.1 });
  return (
    <GridPanelSection start={3} span={15} centered rowsAbove={2} rowsBelow={2} id="process" labelledBy="process-heading">
      <div className={styles.column}>
        <div className={styles.head}>
          <EditorialHeading id="process-heading" text={process.heading} className={styles.heading} />
          <BodyText className={styles.intro}>{process.intro}</BodyText>
        </div>
        <ol ref={ref} className={styles.stages} data-inview={inView}>
          {process.stages.map((stage) => (
            <Reveal as="li" key={stage.number} className={styles.stage}>
              <span className={styles.marker} aria-hidden="true" />
              <p className={styles.number}>{stage.number}</p>
              <h3 className={styles.title}>{stage.title}</h3>
              <p className={styles.text}>{stage.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </GridPanelSection>
  );
}
