import { FullWidthMediaSection } from '../../components/compositions/FullWidthMediaSection';
import { EditorialTextSection } from '../../components/compositions/EditorialTextSection';
import { aboutIntroduction } from '../../content/about';

/** Portrait band, then the metadata and introduction on paper, framed by red grid margins. */
export function AboutIntroduction() {
  return (
    <>
      <FullWidthMediaSection media={aboutIntroduction.portrait} label="Portrait" />
      <EditorialTextSection
        id="introduction"
        tone="light"
        label="Introduction"
        lines={aboutIntroduction.metadata}
        body={aboutIntroduction.body}
        grids={[
          { region: { left: 0, top: 0, width: 4, height: 7 }, inkVerticals: true, hideBelow: 'desktop' },
          { region: { right: 0, top: 0, width: 5, height: 'full' }, variant: 'paper', hideBelow: 'desktop' },
          { region: { right: 0, top: 4, width: 2, height: 4 }, hideBelow: 'desktop' },
        ]}
      />
    </>
  );
}
