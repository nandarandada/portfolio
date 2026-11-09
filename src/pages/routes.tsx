import { useParams } from 'react-router-dom';
import { PlaceholderPage } from './PlaceholderPage';
import { findProject, workTypeLabels } from '../content/projects';
import { caseStudies } from './cases';

/** /work/[slug]: the designed case study when there is one, otherwise a placeholder page. */
export function ProjectPage() {
  const { slug = '' } = useParams();
  const project = findProject(slug);
  if (!project) return <NotFoundPage />;
  const CaseStudy = caseStudies[project.slug];
  if (CaseStudy) return <CaseStudy />;
  const note = project.placeholder
    ? 'Placeholder project, used while real work is being added.'
    : `${workTypeLabels[project.workType]}. This project story is in progress.`;
  return <PlaceholderPage title={project.title} note={note} />;
}

export function NotFoundPage() {
  return <PlaceholderPage title="Page not found" note="This page doesn’t exist." />;
}
