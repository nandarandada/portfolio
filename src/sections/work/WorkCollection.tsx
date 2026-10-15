import type { ReactNode } from 'react';
import { GridSection } from '../../components/compositions/GridSection';
import type { Project } from '../../content/projects';
import { WorkCard, type CardSlot } from './WorkCard';
import styles from './WorkCollection.module.css';

/**
 * The editorial rhythm of the Work collection. Projects are laid out band by band, in
 * curated order, and the sequence repeats every six projects:
 *
 *   feature  — one project, oversized media with the caption beside it
 *   pair     — two projects, tall left / wide right, the right one dropped three rows
 *   pause    — one project on a dark band, wide media: a visual breath
 *   pair     — mirrored: wide left (dropped) / tall right
 *
 * Every band is its own grid row-group, so cards can never overlap, whatever the count.
 * On the second cycle the feature is mirrored. A pair with a single project left becomes
 * a feature (facing away from the previous one), so the page always ends on a complete
 * composition.
 */
type BandKind = 'feature' | 'pair' | 'pause' | 'pairMirrored';
const RHYTHM: BandKind[] = ['feature', 'pair', 'pause', 'pairMirrored'];

const featureSlot = (mirrored: boolean): CardSlot =>
  mirrored
    ? { col: 7, span: 12, rows: 8, caption: 'side', captionCol: 2, captionSpan: 4 }
    : { col: 2, span: 13, rows: 8, caption: 'side', captionCol: 15, captionSpan: 5 };

const pairSlots: Record<'pair' | 'pairMirrored', [CardSlot, CardSlot]> = {
  pair: [
    { col: 2, span: 7, rows: 9, caption: 'below' },
    { col: 11, span: 8, rows: 6, offset: 3, caption: 'below' },
  ],
  pairMirrored: [
    { col: 2, span: 8, rows: 6, offset: 3, caption: 'below' },
    { col: 12, span: 7, rows: 9, caption: 'below' },
  ],
};

const pauseSlot: CardSlot = { col: 2, span: 17, rows: 8, caption: 'below' };

type Band = { kind: BandKind; projects: Project[]; slots: CardSlot[] };

export function buildBands(projects: Project[]): Band[] {
  const bands: Band[] = [];
  let i = 0;
  let step = 0;
  let lastFeatureMirrored: boolean | null = null;
  while (i < projects.length) {
    const kind = RHYTHM[step % RHYTHM.length];
    const mirrored = Math.floor(step / RHYTHM.length) % 2 === 1;
    const remaining = projects.length - i;
    if ((kind === 'pair' || kind === 'pairMirrored') && remaining >= 2) {
      bands.push({ kind, projects: projects.slice(i, i + 2), slots: pairSlots[kind] });
      i += 2;
    } else if (kind === 'pause') {
      bands.push({ kind, projects: [projects[i]], slots: [pauseSlot] });
      i += 1;
    } else {
      // A planned feature follows the cycle; a pair with one project left becomes a
      // feature facing the opposite way from the previous one, so two never repeat.
      const facing: boolean = kind === 'feature' ? mirrored : !(lastFeatureMirrored ?? mirrored);
      bands.push({ kind: 'feature', projects: [projects[i]], slots: [featureSlot(facing)] });
      lastFeatureMirrored = facing;
      i += 1;
    }
    step += 1;
  }
  return bands;
}

function BandGrid({ band, onDark = false }: { band: Band; onDark?: boolean }) {
  return (
    <ul className={styles.band} data-kind={band.kind}>
      {band.projects.map((project, j) => (
        <WorkCard key={project.slug} project={project} slot={band.slots[j]} onDark={onDark} />
      ))}
    </ul>
  );
}

/**
 * The collection opens in black, continuing the dark intro: every band up to and including the
 * first pause sits on one dark textured section (captions directly on the texture).
 * After that, light bands run together on the paper grid, and each later pause interrupts them
 * with a dark section.
 */
export function WorkCollection({ projects, label }: { projects: Project[]; label: string }) {
  const bands = buildBands(projects);
  const firstPause = bands.findIndex((band) => band.kind === 'pause');
  const openingEnd = firstPause === -1 ? bands.length : firstPause + 1;
  const opening = bands.slice(0, openingEnd);
  const rest = bands.slice(openingEnd);

  const chunks: ReactNode[] = [];
  let light: Band[] = [];

  if (opening.length) {
    chunks.push(
      <GridSection
        key="opening"
        tone="dark"
        label={label}
        rowsAbove={2}
        rowsBelow={3}
        grids={[{ region: { right: 0, top: 2, width: 2, height: 6 }, hideBelow: 'desktop' }]}
      >
        <div className={styles.stack}>
          {opening.map((band, k) => (
            <BandGrid key={k} band={band} onDark />
          ))}
        </div>
      </GridSection>,
    );
  }

  const flushLight = () => {
    if (!light.length) return;
    const group = light;
    chunks.push(
      <GridSection key={`light-${chunks.length}`} label={label} rowsAbove={3} rowsBelow={3}>
        <div className={styles.stack}>
          {group.map((band, k) => (
            <BandGrid key={k} band={band} />
          ))}
        </div>
      </GridSection>,
    );
    light = [];
  };

  rest.forEach((band, k) => {
    if (band.kind === 'pause') {
      flushLight();
      chunks.push(
        <GridSection
          key={`pause-${k}`}
          tone="dark"
          label={label}
          rowsAbove={3}
          rowsBelow={3}
          grids={[{ region: { right: 0, top: 2, width: 2, height: 6 }, hideBelow: 'desktop' }]}
        >
          <BandGrid band={band} onDark />
        </GridSection>,
      );
    } else {
      light.push(band);
    }
  });
  flushLight();

  return <div className={styles.collection}>{chunks}</div>;
}
