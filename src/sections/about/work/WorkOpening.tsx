import { EditorialTextSection } from '../../../components/compositions/EditorialTextSection';
import { workOpening } from '../../../content/about';

/** Opening of the "About my work" chapter: serif statement, then the narrow drop-cap column. */
export function WorkOpening() {
  return (
    <EditorialTextSection
      id="work-opening"
      tone="dark"
      heading={workOpening.headline}
      body={[workOpening.body]}
      grids={[{ region: { right: 0, top: 2, width: 3, height: 4 }, hideBelow: 'desktop' }]}
    />
  );
}
