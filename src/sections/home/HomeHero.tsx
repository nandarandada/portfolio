import { EditorialHero } from '../../components/compositions/EditorialHero';
import { WordmarkBand } from '../../components/compositions/WordmarkBand';
import { homeHero } from '../../content/home';

/** Dark hero with the statement box on the red grid, followed by the flat red FROSA band (Figma 124:2). */
export function HomeHero() {
  return (
    <>
      <EditorialHero id="home-title" headline={homeHero.headline} statement={homeHero.statement} />
      <WordmarkBand />
    </>
  );
}
