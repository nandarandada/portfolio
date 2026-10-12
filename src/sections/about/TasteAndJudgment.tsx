import { EditorialTextSection } from '../../components/compositions/EditorialTextSection';
import { tasteAndJudgment } from '../../content/about';

/** Dark editorial statement with the narrow drop-cap column; red grid in the right margin. */
export function TasteAndJudgment() {
  return (
    <EditorialTextSection
      id="taste-and-judgment"
      tone="dark"
      heading={tasteAndJudgment.headline}
      body={tasteAndJudgment.body}
      grids={[{ region: { right: 0, bottom: 0, width: 6, height: 4 }, hideBelow: 'desktop' }]}
    />
  );
}
