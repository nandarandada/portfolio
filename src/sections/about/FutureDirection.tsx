import { EditorialTextSection } from '../../components/compositions/EditorialTextSection';
import { futureDirection } from '../../content/about';

/** Closing statement on dark, with the red grid block at the right edge (About: "Creating work that…"). */
export function FutureDirection() {
  return (
    <EditorialTextSection
      id="future"
      tone="dark"
      heading={futureDirection.headline}
      body={futureDirection.body}
      grids={[{ region: { right: 0, top: 2, width: 6, height: 'full' }, hideBelow: 'desktop' }]}
    />
  );
}
