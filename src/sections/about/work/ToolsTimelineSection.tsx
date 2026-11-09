import type { CSSProperties } from 'react';
import { Section } from '../../../components/primitives/Section';
import { Container } from '../../../components/primitives/Container';
import { BodyText, EditorialHeading } from '../../../components/primitives/Typography';
import { useInView } from '../../../motion/useInView';
import { toolsTimeline } from '../../../content/about';
import styles from './ToolsTimelineSection.module.css';

/**
 * The tools change, the thinking evolves: Photoshop → Sketch → Figma → AI-assisted tools as
 * one narrow editorial sequence, each era opened by a fine red rule. A quiet dashed line runs
 * beside all four, labelled "visual foundation", so no tool reads as replacing the last.
 * Motion: the sequence reveals once, as one gesture: the rules sweep in and the tool names
 * rise from behind a mask (like the headings), in a short stagger.
 */
export function ToolsTimelineSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.2 });
  return (
    <Section tone="dark" spacing="spacious" aria-labelledby="tools-heading">
      <Container>
        <div className={styles.column}>
          <div className={styles.head}>
            <EditorialHeading id="tools-heading" text={toolsTimeline.headline} className={styles.heading} />
            <BodyText className={styles.intro}>{toolsTimeline.intro}</BodyText>
          </div>
          <div ref={ref} className={styles.timeline} data-inview={inView}>
            <ol className={styles.eras} aria-label={toolsTimeline.label}>
              {toolsTimeline.eras.map((era, i) => (
                <li key={era.tool} className={styles.era} style={{ '--i': i } as CSSProperties}>
                  <span className={styles.number} aria-hidden="true">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className={styles.body}>
                    <h3 className={styles.tool}>
                      <span className={styles.toolInner}>{era.tool}</span>
                    </h3>
                    <p className={styles.text}>{era.text}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.foundation}>{toolsTimeline.foundation}</p>
          </div>
        </div>
      </Container>
    </Section>
  );
}
