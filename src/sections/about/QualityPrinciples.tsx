import { GridPanelSection } from '../../components/compositions/GridPanelSection';
import { PrinciplesGrid } from '../../components/compositions/PrinciplesGrid';
import { BodyText, EditorialHeading } from '../../components/primitives/Typography';
import { Reveal } from '../../motion/Reveal';
import { qualityPrinciples } from '../../content/about';
import styles from './AboutSections.module.css';

/** Statement, then the principles in the ringed three-column set (Figma: About principles panel). */
export function QualityPrinciples() {
  return (
    <GridPanelSection start={2} span={17} rowsAround={1} id="quality" labelledBy="quality-heading">
      <div className={styles.intro}>
        <EditorialHeading id="quality-heading" text={qualityPrinciples.headline} />
        <Reveal>
          {qualityPrinciples.intro.map((paragraph) => (
            <BodyText key={paragraph}>{paragraph}</BodyText>
          ))}
        </Reveal>
      </div>
      <PrinciplesGrid items={qualityPrinciples.principles} label="Quality practices" />
      <Reveal className={styles.closing}>
        <BodyText>{qualityPrinciples.closing}</BodyText>
      </Reveal>
    </GridPanelSection>
  );
}
