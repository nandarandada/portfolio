import { useParams } from 'react-router-dom';
import { PlaceholderPage } from './PlaceholderPage';
import { findProject, workTypeLabels } from '../content/projects';

/** /work/[slug] — case studies are not designed yet; the route resolves the project from content. */
export function ProjectPage() {
  const { slug = '' } = useParams();
  const project = findProject(slug);
  if (!project) return <NotFoundPage />;
  const note = project.placeholder
    ? 'Placeholder project, used while real work is being added.'
    : `${workTypeLabels[project.workType]}. This project story is in progress.`;
  return <PlaceholderPage title={project.title} note={note} />;
}

/** No Contact frame exists in Figma yet; this stays a route-level placeholder in the shared system. */
export function ContactPage() {
  return <PlaceholderPage title="Contact" note="Write to f.rosa.design@gmail.com while this page is in progress." />;
}

export function NotFoundPage() {
  return <PlaceholderPage title="Page not found" note="This page doesn’t exist." />;
}
