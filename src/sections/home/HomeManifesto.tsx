import { GridPanelSection } from '../../components/compositions/GridPanelSection';
import { MediaPlaceholder } from '../../components/primitives/Media';
import { BodyText } from '../../components/primitives/Typography';
import { Reveal } from '../../motion/Reveal';
import { homeManifesto } from '../../content/home';
import styles from './HomeSections.module.css';

/** The drop-cap manifesto column on paper, red grid margins and the Frosa seal (Figma: Home, under the FROSA band). */
export function HomeManifesto() {
  return (
    <GridPanelSection
      start={4}
      span={12}
      rowsAbove={0}
      rowsBelow={3}
      label="About Frosa"
      grids={[
        { region: { left: 0, top: 0, width: 4, height: 7 }, inkVerticals: true, hideBelow: 'desktop' },
        { region: { right: 0, top: 0, width: 2, height: 11 }, hideBelow: 'desktop' },
      ]}
      decoration={
        <div className={styles.seal} aria-hidden="true">
          <MediaPlaceholder media={homeManifesto.seal} className={styles.sealMedia} />
        </div>
      }
    >
      <Reveal className={styles.manifesto}>
        {homeManifesto.body.map((paragraph, i) => (
          <BodyText key={i} measure="narrow" dropCap={i === 0}>
            {paragraph}
          </BodyText>
        ))}
      </Reveal>
    </GridPanelSection>
  );
}
