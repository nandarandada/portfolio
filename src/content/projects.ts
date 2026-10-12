/**
 * Projects: the single source of truth for Home → Selected Work, the Work collection and
 * the /work/[slug] routes.
 *
 * Two independent dimensions describe a project:
 * - `workType`: how the work is presented (a case study, a focused improvement, a live product).
 * - `disciplines`: what the work involved (any combination, e.g. strategy + UX + brand).
 *
 * Real projects have not been supplied yet. Every entry below is a PLACEHOLDER
 * (`placeholder: true`), mirroring the Figma cards ("Project name" / "User Experience"),
 * kept only to evaluate layout and responsiveness. Placeholders are labelled as such on the
 * Work page and must be replaced, not edited into real-looking work.
 */
import type { MediaAsset } from '../components/primitives/Media';
import type { GridPlacement, ProjectCardData } from '../components/compositions/ProjectGrid';

export type WorkType = 'product-case' | 'product-improvement' | 'live-product';

export const workTypeLabels: Record<WorkType, string> = {
  'product-case': 'Product Case Study',
  'product-improvement': 'Product Improvement',
  'live-product': 'Live Product',
};

export type Project = {
  slug: string;
  title: string;
  /** One concise sentence, only when verified. */
  summary?: string;
  /** Areas of work, in display order. The first one is shown on Home cards. */
  disciplines: string[];
  workType: WorkType;
  /** Still image or video. Its aspect ratio is a fallback: layouts crop to their own slot. */
  cover: MediaAsset;
  /** Short interaction video shown in the Work collection instead of the cover. */
  preview?: MediaAsset;
  /** Before / after pair shown side by side in the Work collection instead of the cover. */
  comparison?: { before: MediaAsset; after: MediaAsset };
  /** Verified public demo. Shown as a secondary link; the card itself still opens /work/[slug]. */
  liveUrl?: string;
  /** Shown in Home → Selected Work (first four, by `order`). */
  featured?: boolean;
  /** Curated position in the Work collection (ascending). */
  order: number;
  /** Development stand-in, not real work. */
  placeholder?: boolean;
};

const types: WorkType[] = ['product-case', 'product-improvement', 'live-product'];

const placeholder = (n: number, extra: Partial<Project> = {}): Project => ({
  slug: `placeholder-${String(n).padStart(2, '0')}`,
  title: 'Project name',
  disciplines: ['User Experience'],
  workType: types[(n - 1) % types.length],
  cover: { type: 'image', aspectRatio: '16 / 10', placeholder: 'Project image' },
  featured: n <= 4,
  order: n,
  placeholder: true,
  ...extra,
});

export const projects: Project[] = [
  placeholder(1),
  placeholder(2, { preview: { type: 'video', aspectRatio: '16 / 10', placeholder: 'Interaction video' } }),
  placeholder(3),
  placeholder(4),
  placeholder(5, {
    comparison: {
      before: { type: 'image', aspectRatio: '4 / 5', placeholder: 'Project image' },
      after: { type: 'image', aspectRatio: '4 / 5', placeholder: 'Project image' },
    },
  }),
  placeholder(6),
  placeholder(7),
  placeholder(8),
  placeholder(9),
  placeholder(10),
  placeholder(11),
  placeholder(12),
];

/** The Work collection, in curated order. */
export const workCollection = () => [...projects].sort((a, b) => a.order - b.order);

export const findProject = (slug: string) => projects.find((project) => project.slug === slug);

/* ── Home → Selected Work ─────────────────────────────────────────────── */

/** The four card positions from the Figma Home project grid (desktop cells). */
export const projectGridPlacements: GridPlacement[] = [
  { col: 2, span: 9, row: 0, rows: 6 },
  { col: 12, span: 7, row: 0, rows: 7 },
  { col: 2, span: 5, row: 8, rows: 6 },
  { col: 8, span: 11, row: 9, rows: 6 },
];

/** Turns projects into Home grid cards, assigning the Figma placements in order. */
export const toProjectCards = (list: Project[]): ProjectCardData[] =>
  list.map((project, i) => ({
    href: `/work/${project.slug}`,
    title: project.title,
    category: project.disciplines[0] ?? '',
    description: project.summary,
    media: project.cover,
    placement: projectGridPlacements[i % projectGridPlacements.length],
  }));
