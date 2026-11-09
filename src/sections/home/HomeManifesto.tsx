import { GridPanelSection } from '../../components/compositions/GridPanelSection';
import { MediaPlaceholder } from '../../components/primitives/Media';
import { BodyText } from '../../components/primitives/Typography';
import { Reveal } from '../../motion/Reveal';
import { useScrollTurn } from '../../motion/useScrollTurn';
import { homeManifesto } from '../../content/home';
import styles from './HomeSections.module.css';

/** Turns **phrase** into bold text; everything else stays plain. */
const withBold = (text: string) =>
  text.split(/(\*\*[^*]+\*\*)/).map((part, i) =>
    part.startsWith('**') && part.endsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part,
  );

/** The drop-cap manifesto column on paper, red grid margins and the Frosa seal (Figma: Home, under the FROSA band). */
export function HomeManifesto() {
  // The seal turns a little as the page scrolls past it, like a stamp (40° across its whole pass)
  const sealRef = useScrollTurn<HTMLDivElement>(40);
  return (
    <GridPanelSection
      // 21 columns: 4 on each side, so the panel (and the column inside it) is centred
      start={4}
      span={13}
      centered
      rowsAbove={0}
      rowsBelow={3}
      label="About Frosa"
      grids={[
        { region: { left: 0, top: 0, width: 4, height: 7 }, inkVerticals: true, hideBelow: 'desktop' },
        { region: { right: 0, top: 0, width: 2, height: 11 }, hideBelow: 'desktop' },
      ]}
      decoration={
        <div ref={sealRef} className={styles.seal} aria-hidden="true">
          <MediaPlaceholder media={homeManifesto.seal} className={styles.sealMedia} />
        </div>
      }
    >
      <Reveal className={styles.manifesto}>
        {homeManifesto.body.map((paragraph, i) => (
          <BodyText key={i} dropCap={i === 0}>
            {withBold(paragraph)}
          </BodyText>
        ))}
      </Reveal>
    </GridPanelSection>
  );
}
