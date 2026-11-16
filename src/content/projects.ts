/**
 * Projects: the single source of truth for Home → Selected Work, the Work collection and
 * the /work/[slug] routes.
 *
 * Two independent dimensions describe a project:
 * - `workType`: how the work is presented (a case study, a focused improvement, a live product).
 * - `disciplines`: what the work involved (any combination, e.g. strategy + UX + brand).
 *
 * Arctic Arena, Pawprint Oxygen and Great Pet Care Account are real projects. Every other entry below is a PLACEHOLDER
 * (`placeholder: true`), mirroring the Figma cards ("Project name" / "User Experience"),
 * kept only to evaluate layout and responsiveness. Placeholders are labelled as such on the
 * Work page and must be replaced, not edited into real-looking work.
 */
import type { MediaAsset } from '../components/primitives/Media';
import type { GridPlacement, ProjectCardData } from '../components/compositions/ProjectGrid';

export type WorkType = 'case-study' | 'product-case' | 'product-improvement' | 'live-product';

export const workTypeLabels: Record<WorkType, string> = {
  'case-study': 'Case Study',
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
  {
    slug: 'arctic-arena',
    title: 'Arctic Arena',
    summary: 'Brand identity and website for a new gaming event in Svalbard, Norway.',
    disciplines: ['Brand Identity', 'UX/UI Design'],
    workType: 'case-study',
    cover: {
      type: 'image',
      src: '/work/arctic-arena/key-art.webp',
      alt: 'The Arctic Arena emblem in warm yellow under an arc of pink and gold dots, above dark mountains and a starry purple sky.',
      aspectRatio: '2000 / 1140',
    },
    // Not featured: Home → Selected Work is decided after the full portfolio is reviewed.
    featured: false,
    order: 0,
  },
  {
    slug: 'pawprint-oxygen',
    title: 'Pawprint Oxygen',
    summary: 'A clearer shopping experience for pet owners and veterinarians, designed at Oowlish.',
    disciplines: ['Product Design', 'UX/UI', 'E-commerce'],
    workType: 'product-case',
    cover: {
      type: 'image',
      src: '/work/pawprint-oxygen/hero-desktop.jpg',
      alt: 'The Pawprint Oxygen home page: “Oxygen for pets, shipped right to your door” over a photo of a dog wearing an oxygen mask.',
      aspectRatio: '846 / 760',
    },
    // Not featured: Home → Selected Work is decided after the full portfolio is reviewed.
    featured: false,
    order: 1,
  },
  {
    slug: 'great-pet-care',
    title: 'Great Pet Care Account',
    summary: 'A growing set of pet-care tools made simple again, on the web and in the app, designed at Oowlish.',
    disciplines: ['Product Design', 'UX/UI', 'Mobile'],
    workType: 'product-case',
    cover: {
      type: 'image',
      src: '/work/great-pet-care/dashboard.webp',
      alt: 'The Great Pet Care app dashboard: “Welcome, Nick!”, four pets, two actions and a saved vet.',
      aspectRatio: '720 / 1558',
    },
    // Not featured: Home → Selected Work is decided after the full portfolio is reviewed.
    featured: false,
    order: 2,
  },
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
