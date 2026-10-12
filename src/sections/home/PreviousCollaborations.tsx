import { GridSection } from '../../components/compositions/GridSection';
import { CollaborationsGrid } from '../../components/compositions/CollaborationsGrid';
import { collaborations } from '../../content/collaborations';
import { previousCollaborations } from '../../content/home';

export function PreviousCollaborations() {
  return (
    <GridSection labelledBy="collaborations-heading" rowsAbove={2} rowsBelow={2}>
      <CollaborationsGrid heading={previousCollaborations.heading} headingId="collaborations-heading" items={collaborations} />
    </GridSection>
  );
}
