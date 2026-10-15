import { GridSection } from '../../components/compositions/GridSection';
import { ProjectGrid } from '../../components/compositions/ProjectGrid';
import { Surface } from '../../components/primitives/Section';
import { EditorialHeading } from '../../components/primitives/Typography';
import { TextLink } from '../../components/primitives/TextLink';
import { Reveal } from '../../motion/Reveal';
import { projects, toProjectCards } from '../../content/projects';
import { selectedWork } from '../../content/home';
import styles from './HomeSections.module.css';

/**
 * Preview of featured projects on the paper grid; each card opens its /work/[slug] page.
 * The serif heading (same treatment as the Work page headings) sits two rows above the
 * grid, aligned with the first card; the link closes the grid on its right edge.
 */
export function SelectedWork() {
  const featured = projects.filter((project) => project.featured);
  return (
    <GridSection
      labelledBy="selected-work-heading"
      rowsAbove={1}
      rowsBelow={1}
      grids={[{ region: { left: 0, top: 5, width: 2, height: 11 }, inkVerticals: true, hideBelow: 'desktop' }]}
    >
      <div className={styles.workHeading}>
        <Surface className={styles.workHeadingSurface} snap>
          <EditorialHeading id="selected-work-heading" text={selectedWork.heading} />
        </Surface>
      </div>
      <ProjectGrid items={toProjectCards(featured)} label={selectedWork.heading} />
      <div className={styles.workLink}>
        <Reveal>
          <Surface className={styles.workLinkSurface} snap>
            <TextLink href={selectedWork.link.href}>
              {selectedWork.link.label} <span aria-hidden="true">→</span>
            </TextLink>
          </Surface>
        </Reveal>
      </div>
    </GridSection>
  );
}
