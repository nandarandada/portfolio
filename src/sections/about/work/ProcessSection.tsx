import type { CSSProperties } from 'react';
import { GridPanelSection } from '../../../components/compositions/GridPanelSection';
import { BodyText, EditorialHeading } from '../../../components/primitives/Typography';
import { useInView } from '../../../motion/useInView';
import { process } from '../../../content/about';
import styles from './ProcessSection.module.css';

/* Two tracks across five stages: they cross at each stage's centre (10%, 30% … 90%), where
   the decision is made, and drift apart in between. Coordinates in a 1000 × 72 box. */
const wave = (start: number) => {
  let d = `M0 ${start}`;
  let y = start;
  for (let x = 0; x < 1000; x += 200) {
    const next = y === 12 ? 60 : 12;
    d += ` C${x + 70} ${y} ${x + 130} ${next} ${x + 200} ${next}`;
    y = next;
  }
  return d;
};
const HUMAN = wave(12);
const AI = wave(60);

/**
 * "How I work": five stages, each showing what I lead and where AI assists. On desktop the two
 * tracks are drawn as intertwined lines meeting at every stage marker; on smaller screens each
 * stage carries the two tracks as vertical rules beside its lists.
 */
export function ProcessSection() {
  const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.15 });
  return (
    <GridPanelSection start={1} span={19} rowsAbove={2} rowsBelow={2} id="process" labelledBy="process-heading">
      <div className={styles.head}>
        <EditorialHeading id="process-heading" text={process.heading} />
        <BodyText className={styles.intro}>{process.intro}</BodyText>
        <ul className={styles.legend} aria-label="Legend">
          <li className={styles.legendHuman}>{process.humanTrack}</li>
          <li className={styles.legendAi}>{process.aiTrack}</li>
        </ul>
      </div>

      <div ref={ref} className={styles.process} data-inview={inView}>
        <svg className={styles.tracks} viewBox="0 0 1000 72" preserveAspectRatio="none" aria-hidden="true">
          <path d={AI} className={styles.aiPath} />
          <path d={HUMAN} className={styles.humanPath} pathLength={1} />
        </svg>
        <ol className={styles.stages}>
          {process.stages.map((stage, i) => (
            <li key={stage.number} className={styles.stage} style={{ '--i': i } as CSSProperties}>
              <span className={styles.marker} aria-hidden="true" />
              <p className={styles.number}>{stage.number}</p>
              <h3 className={styles.title}>{stage.title}</h3>
              <p className={styles.text}>{stage.text}</p>
              <div className={styles.track} data-track="human">
                <p className={styles.trackLabel}>{process.humanTrack}</p>
                <ul>
                  {stage.human.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className={styles.track} data-track="ai">
                <p className={styles.trackLabel}>{process.aiTrack}</p>
                <ul>
                  {stage.ai.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              {stage.note && <p className={styles.note}>{stage.note}</p>}
            </li>
          ))}
        </ol>
      </div>
    </GridPanelSection>
  );
}
