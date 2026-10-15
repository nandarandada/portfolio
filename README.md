# Frosa

The website of Frosa, the independent design practice of Fernanda Rosa.
React + TypeScript + Vite, CSS Modules, React Router. No other runtime dependencies.

The visual source of truth is the Figma file **Portifolio** (`MAwHszHhrAYrm7dxDuzTgq`):
frames *Home* (124:2), *Work* (142:367), *About* (126:1213) and the brand sheet (42:3).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # type-check + production build into dist/
npm run preview    # serve the production build
```

Node 22 LTS is installed in `~/.local/node` on this Mac (added to `PATH` in `~/.zshrc`).

## Routes

| Path | Page | Status |
| --- | --- | --- |
| `/` | Home | implemented (Figma 124:2) |
| `/work` | Work | unified editorial collection (phase 3) |
| `/work/:slug` | Case study | route resolves the project from `content/projects.ts`; page is a placeholder |
| `/about` | About | implemented (Figma 126:1213) |
| `/contact` | Contact | placeholder (no Figma frame yet) |

The FROSA logo links to `/`; there is no "home" label in the navigation.

Each route mounts on its own (`src/App.tsx`) with a short fade-and-rise page transition.

## Structure

```
src/
  styles/        tokens.css (design tokens) · base.css (reset, global rules)
  motion/        useInView, Reveal, TextReveal, ImageReveal (+ motion.module.css)
  components/
    primitives/    Level A — Section, Surface, Container, Typography, TextLink,
                   MediaPlaceholder, EditorialGridBackground, Wordmark, OversizedWordmark
    compositions/  Level B — EditorialHero, WordmarkBand, EditorialTextSection,
                   FullWidthMediaSection, KeywordStrip, GridSection, GridPanelSection,
                   ProjectGrid, CollaborationsGrid, StackedList, PrinciplesGrid,
                   StatementSection, TimelineSection, AnimatedWorldMap (+ useCellSnap)
    layout/        SiteHeader, SiteFooter
  sections/home/   Level C — HomeHero, HomeManifesto, ExpertiseStrip, SelectedWork,
                   CaprichoStatement, PracticeOverview, PreviousCollaborations
  sections/about/  Level C — AboutHero, AboutIntroduction, ExperienceWorldMapSection,
                   PracticeEvolution, NewWayOfWorking, QualityPrinciples, TasteAndJudgment,
                   ExperienceTimeline, FutureDirection, AboutCTA
  sections/work/   Level C — WorkCollection (editorial rhythm), WorkCard
  content/         site.ts, home.ts, about.ts, work.ts, projects.ts, collaborations.ts,
                   worldMap.ts (the About map's dot artwork)
  pages/           HomePage, WorkPage, AboutPage, placeholder pages, routes
public/
  brand/         wordmark + petal pattern (vectors exported from Figma)
  textures/      noise.jpg (the cardboard grain from Figma, compressed)
```

**Rule of thumb:** content lives in `src/content`, layout lives in compositions, and a
page section only wires the two together. A Level C section should be a few lines long.

## Design system

A small set of tokens and components that every page is built from. In development,
**/design-system** shows them all, rendered with the real components.

| Layer | Pieces |
| --- | --- |
| Tokens (`styles/tokens.css`) | colour, type scale, `--lh-tight`, `--opacity-soft` / `--opacity-muted`, spacing `--space-2xs … --space-xl`, grid columns, motion |
| Type (`primitives/Typography`) | `DisplayHeading`, `EditorialHeading`, `BodyText` (drop cap), `ItemTitle`, `MetaText`, `SectionLabel` |
| Primitives | `Section` / `Surface` (grid-snapped panels), `Container`, `EditorialGridBackground`, `MediaPlaceholder`, `TextLink` (shared underline, also used by the nav), `Wordmark` |
| Compositions | `CardCaption` (every project label), `ProjectGrid`, `KeywordStrip` (loop / scroll), `GridSection`, `GridPanelSection`, `StatementSection`, `EditorialTextSection`, `TimelineSection`, `CollaborationsGrid`, `AnimatedWorldMap` |
| Hooks | `useGridSnap` (panels to whole cells), `useCellSnap` (sections to whole rows), `useInView` |

Rules: panels on the grid always cover whole cells; text sits `--space-md` (16px) inside a
panel's edge; captions are `--space-lg` below media with `--space-xs` between lines.

## Design tokens (`src/styles/tokens.css`)

| Token | Value | Source |
| --- | --- | --- |
| `--color-red` | `#9E1C1C` | Figma style "red" |
| `--color-red-deep` | `#840909` | timeline band |
| `--color-ink` | `#1F1F1F` | text and dark surfaces |
| `--color-placeholder` | `#E6E6E6` | image placeholders only |
| `--color-grid-light` | `#F2E8E8` | paper grid lines |
| `--font-display` | Libre Baskerville | headlines, statements, drop caps |
| `--font-body` / `--font-ui` | General Sans | body, nav, labels |
| `--fs-display` … `--fs-small` | 60 / 40 / 34 / 20 / 18 / 16px at 1280px | Figma text styles, fluid down to 375px |
| `--grid-cols` | 21 / 14 / 8 | 61px cells at 1280px |

Surfaces (`Section tone`): `dark` (ink + grain, color-burn), `ink` (flat), `red` (red + grain,
color-burn), `light` (paper). The grain blend reproduces the Figma layers without lightening
the color, so contrast stays intact.

## The grid (`EditorialGridBackground`)

- Each `Section` is a size container and defines `--cell = section width / --grid-cols`.
  Every grid region uses that cell, so lines fall on the same columns across the page.
- Regions are placed in **cells**, e.g. `{ right: 0, top: 3, width: 6, height: 4 }`.
- The grid layer is `aria-hidden`, ignores the pointer and sits under content (`z-index: 0`).
- Text never sits on grid lines. Either place the region in a margin, or put the content
  on a `Surface`, which repeats the section background and covers the lines. That is how
  the hero statement box and `GridPanelSection` work.
- `GridPanelSection` rounds its panel's height up to whole cells, so the rows around it keep
  their rhythm.
- `hideBelow="desktop"` or `"tablet"` simplifies the grid on smaller screens; `variant="paper"`
  draws the faint pink-grey grid; `inkVerticals` draws the alternating ink lines of the
  metadata composition; `fade` softens a region toward one edge.

## Replacing image and video placeholders

Every media slot is a `MediaAsset` object in `src/content`. The gray box is only a
stand-in. To use the real asset:

1. Put the file in `public/media/…` (for example `public/media/about/portrait.jpg`).
2. Add `src` and `alt` to the slot. Nothing else changes, because the aspect ratio is
   already fixed:

```ts
portrait: {
  type: 'image',
  src: '/media/about/portrait.jpg',
  alt: 'Fernanda Rosa in her studio in Heidelberg',
  aspectRatio: '1280 / 565',
  objectPosition: 'center 30%',
},
```

For video, set `type: 'video'` and `poster`. Videos autoplay muted, loop, and play inline.

## Adding a section

1. Put the copy in the page's content file (`src/content/<page>.ts`).
2. Choose a composition from `components/compositions`. Use the closest match to an
   existing Figma pattern; add a new composition only when no existing one fits.
3. Create `src/sections/<page>/<Name>.tsx`, which passes the content into the composition.
4. Add it to the page component. The page's section order is the narrative order.

## Adding a page

1. Add `src/content/<page>.ts` and `src/pages/<Page>Page.tsx`; call `usePageTitle`.
2. Register the route in `src/App.tsx`, replacing the placeholder.
3. Pages open on a dark surface because the header is white and overlaid. If a page needs
   a light top, give `SiteHeader` a tone prop first.

## Motion

| Primitive | Use | Notes |
| --- | --- | --- |
| `TextReveal` (via `DisplayHeading text=…` / `EditorialHeading text=…`) | headlines, statements | lines measured from the real layout, masked, staggered; re-measured on width change |
| `Reveal` | paragraphs, lists, small groups | fade and 18px rise |
| `ImageReveal` | media | clip opens upward while the media settles from 1.08 scale |
| `StackedList` | process lists | items turn from muted to ink in sequence |
| `KeywordStrip` | keyword lines | scroll-linked sideways travel (CSS scroll timelines); static centered lines otherwise |
| Footer wordmark, full-width media | parallax | CSS `animation-timeline: view()`, progressive enhancement |
| `AnimatedWorldMap` | About world map | plays once at 30% visibility: dots fade in (0.9s), then each red region turns from white to red, center outward, west to east (≈2.4s total) |
| Page transition | route changes | 700ms fade-and-rise of `<main>`, non-blocking |

`prefers-reduced-motion: reduce` turns all of this off and shows the final state.
Scrolling is always native, and nothing hijacks it.

## Fonts

Libre Baskerville (Google Fonts) and General Sans (Fontshare) are loaded in `index.html`,
matching the families used in Figma. When the licensed font files arrive, put them in
`public/fonts/`, declare them with `@font-face` in `src/styles/fonts.css`, import that
file in `src/main.tsx`, and remove the two `<link>` tags. The `--font-*` tokens stay the same.

## Projects

`src/content/projects.ts` is the single source of truth for Home → Selected Work, the Work
collection and `/work/[slug]`. Two independent dimensions describe each project:

- `workType`: `product-case` | `product-improvement` | `live-product` (presentation, shown as a quiet text label)
- `disciplines`: any combination, e.g. `['Product Strategy', 'Experience Design']`

Other fields: `summary`, `cover`, `preview` (interaction video), `comparison` (before/after
pair), `liveUrl` (secondary link; the card still opens the project page), `featured` (Home,
first four), `order` (curated position), `placeholder`.

All current entries are placeholders (`placeholder: true`), labelled "Placeholder" on the Work
page. Replace them; don't edit them into real-looking work.

### Work collection layout

`sections/work/WorkCollection.tsx` lays projects out band by band, repeating every six:
feature (oversized media, caption beside) → pair (tall + wide, dropped) → pause (dark band,
wide media) → mirrored pair; the feature mirrors on alternate cycles. Each band is its own grid
group, so cards never overlap at any count; a pair with one project left becomes a feature
facing away from the previous one. Tablet: pairs side by side; mobile: one column.
In development, `/work?count=4` previews the page with fewer projects.

## Hosting note

Routes use the browser history API. On a static host, serve `index.html` for unknown
paths (GitHub Pages: copy `dist/index.html` to `dist/404.html` after building).

## Open questions and missing assets

- Seal (Home manifesto) and client logos (GreatPetCare, The Lanners, Guaw): export as SVG
  from Figma into `public/brand/`; slots are in `content/home.ts` and `content/collaborations.ts`.
- Real projects: titles, disciplines, images, slugs (`content/projects.ts`).
- Portrait photo for the About page (slot: `aboutIntroduction.portrait`).
- Brand font files, if self-hosting is preferred over Google Fonts / Fontshare.
- Instagram and LinkedIn URLs (`src/content/site.ts`).
- Work section headings: Figma reads "Branding / Product Design / Product Design";
  the build uses Brand Identity / Experience Design / Product Strategy (`content/work.ts`).
- Contact page design (no Figma frame yet).
- World map: `content/worldMap.ts` was rebuilt dot for dot from the Figma render (the Figma
  connection was rate-limited). If you export the original map vector, it can replace the data.
- About sections in Figma still not built (tools strip, animated illustration, five discipline
  cards): confirm whether they stay.
