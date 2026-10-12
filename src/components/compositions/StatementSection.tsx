import { DisplayHeading, BodyText } from '../primitives/Typography';
import { TextLink } from '../primitives/TextLink';
import { Reveal } from '../../motion/Reveal';
import { GridPanelSection } from './GridPanelSection';
import styles from './StatementSection.module.css';

export type StatementContent = {
  /** Display-size serif statements; each entry is its own paragraph with a blank line between. */
  statements: string[];
  /** Quieter sans line under the statements. */
  supporting?: string;
  action?: { label: string; href: string };
};

type StatementSectionProps = StatementContent & {
  id: string;
  /** Whether the first statement is the section's heading (h2) or a plain paragraph. */
  headingLevel?: 'h2' | 'p';
};

/**
 * A large serif manifesto set on a paper panel over the grid
 * (Home "We design with capricho", Figma 124:2). Also used for calls to action.
 */
export function StatementSection({ id, statements, supporting, action, headingLevel = 'h2' }: StatementSectionProps) {
  const headingId = `${id}-heading`;
  return (
    <GridPanelSection start={4} span={12} id={id} labelledBy={headingId}>
      <div className={styles.stack}>
        {statements.map((statement, i) => (
          <DisplayHeading key={statement} as={i === 0 ? headingLevel : 'p'} id={i === 0 ? headingId : undefined} text={statement} className={styles.statement} />
        ))}
        {supporting && (
          <Reveal delay={200}>
            <BodyText className={styles.supporting}>{supporting}</BodyText>
          </Reveal>
        )}
        {action && (
          <Reveal delay={300} className={styles.action}>
            <TextLink href={action.href}>{action.label}</TextLink>
          </Reveal>
        )}
      </div>
    </GridPanelSection>
  );
}
