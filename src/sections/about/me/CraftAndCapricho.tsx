import { GridPanelSection } from '../../../components/compositions/GridPanelSection';
import { BodyText, DisplayHeading } from '../../../components/primitives/Typography';
import { Reveal } from '../../../motion/Reveal';
import { craftAndCapricho } from '../../../content/about';
import styles from './CraftAndCapricho.module.css';

/** A personal statement about craft on the paper panel, ending on "capricho" in the serif. */
export function CraftAndCapricho() {
  const [lead, ...rest] = craftAndCapricho.body;
  const closing = rest.pop();
  return (
    <GridPanelSection start={4} span={14} id="craft" labelledBy="craft-heading">
      <div className={styles.stack}>
        <DisplayHeading as="h2" id="craft-heading" text={craftAndCapricho.headline} />
        <Reveal className={styles.body}>
          <BodyText>{lead}</BodyText>
          {rest.map((paragraph) => (
            <BodyText key={paragraph}>{paragraph}</BodyText>
          ))}
        </Reveal>
        {closing && (
          <Reveal delay={150}>
            <p className={styles.closing}>{closing}</p>
          </Reveal>
        )}
      </div>
    </GridPanelSection>
  );
}
