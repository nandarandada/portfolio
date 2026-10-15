import { useLocation } from 'react-router-dom';
import { usePageTitle } from './usePageTitle';
import { StatementSection } from '../components/compositions/StatementSection';
import { WorkIntro } from '../sections/work/WorkIntro';
import { WorkCollection } from '../sections/work/WorkCollection';
import { workCollection } from '../content/projects';
import { workPage } from '../content/work';

/**
 * Work: the intro, the curated project collection (its first projects stay on black, continuing
 * the intro), then a quiet closing toward contact.
 * In development, `/work?count=4` (or 8, 12) previews the collection with fewer projects.
 */
export function WorkPage() {
  usePageTitle(workPage.title);
  const { search } = useLocation();
  const count = import.meta.env.DEV ? Number(new URLSearchParams(search).get('count')) || undefined : undefined;
  const projects = workCollection().slice(0, count);

  return (
    <>
      <WorkIntro />
      <WorkCollection projects={projects} label={workPage.collectionLabel} />
      <StatementSection
        id="work-closing"
        statements={workPage.closing.statements}
        supporting={workPage.closing.supporting}
        action={workPage.closing.action}
      />
    </>
  );
}
