/**
 * Arctic Arena — case study content.
 *
 * Sources: the original project folder (logos, site artwork, final screens, Figma
 * screen recordings) and the client's briefing deck. The briefing is client material: it is
 * quoted only where marked "From the client brief", never shown as Fernanda's work.
 *
 * To replace a placeholder, add `src` (and `alt`) to its media entry. Nothing else changes.
 * Assets live in /public/work/arctic-arena/.
 *
 * REVIEW notes mark interpretations that are not documented in the project files.
 */
import type { CaseDecision, CaseMedia, CaseMetaItem, CaseSwatchGroup, CaseTheme, CaseVoiceGroup } from './types';
import type { CaseLogoStage } from '../../components/case/CaseLogoStages';
import type { CaseSitemapSection } from '../../components/case/CaseSitemap';

const dir = '/work/arctic-arena';

// Page surfaces follow the Figma layout (node 326:2): a near-black purple (#180531) with grain for
// the opening, the identity and the final chapter, the grained indigo for the identity, purple grid lines. The project's own
// navy and purple stay behind its artwork.
export const arcticArenaTheme: CaseTheme = {
  base: '#180531',
  surface: '#413184',
  accent: '#FFDD85',
  onAccent: '#13032A',
  line: '#6420A8',
  art: '#29064C',
  artDeep: '#13032A',
};

/* ── The project ──────────────────────────────────────────────────────── */

export const project = {
  title: 'Arctic Arena',
  body: 'Arctic Arena was a new gaming event planned for Svalbard, Norway: an annual event in November, under the dark polar sky. Working in partnership with another freelancer, I led the brand identity and the UX/UI design of its website.',
  meta: [
    // The partnership and the role are stated in the body text below, so they aren't repeated here.
    { label: 'Project type', value: 'Freelance collaboration' },
    { label: 'Year', value: '2021' },
  ] satisfies CaseMetaItem[],
  disciplines: ['Brand identity', 'Information architecture', 'UI design', 'Design system'],
  // The key art's sky colour, carried up behind the site header so image and menu read as one.
  heroSky: '#180838',
  hero: {
    id: 'AA-01',
    title: 'Key art',
    type: 'image',
    src: `${dir}/key-art.webp`,
    alt: 'The Arctic Arena emblem in warm yellow under an arc of pink and gold dots, above dark mountains and a starry purple sky.',
    aspectRatio: '2000 / 1140',
  } satisfies CaseMedia,
};

/* ── The challenge ────────────────────────────────────────────────────── */

export const challenge = {
  label: 'Challenge',
  heading: 'A new event, for players and partners.',
  body: [
    'The client needed an energetic brand and a website for an event no one had seen yet. The brief asked for something informal and modern, rooted in the Arctic, appealing to young players and strong enough for merchandise.',
  ],
  audiences: [
    { title: 'Players', text: 'What is it, when is it, and where can I follow it?' },
    { title: 'Partners', text: 'Why take part, and what makes this event different?' },
    // REVIEW: "hold more than one edition" reads the event page (labelled 2021, with games,
    // teams and winners) as an archive. Confirm that this was the intent.
    { title: 'Every year', text: 'An annual event, so the site had to hold more than one edition.' },
  ] satisfies CaseDecision[],
  /** Personality words listed in the client's briefing deck. */
  brief: {
    label: 'From the client brief',
    words: ['Magnetic', 'Bold', 'Mysterious', 'Nerdy', 'Majestic', 'Inclusive'],
  },
  media: [
    {
      id: 'AA-02',
      title: 'Svalbard',
      type: 'image',
      src: `${dir}/svalbard.jpg`,
      alt: 'A purple-toned Svalbard landscape: dark sea, low mountains and a cloudy sky.',
      aspectRatio: '1320 / 480',
      objectPosition: '78% center',
    },
    {
      id: 'AA-02b',
      title: 'Mountain',
      type: 'image',
      src: `${dir}/mountain.jpg`,
      alt: 'A snowy mountain peak in a violet haze.',
      aspectRatio: '1430 / 860',
      blend: true,
    },
  ] satisfies CaseMedia[],
};

/* ── Building the identity ────────────────────────────────────────────── */

export const identity = {
  label: 'Building the identity',
  heading: 'Two A’s, one emblem.',
  body: [
    'The brief pointed to the valknut, a Norse symbol of interlocking triangles, and asked for two interlocked A’s. The final emblem draws both as one geometric mark.',
    // From the Figma file: "Step 1 - Initial Study", "Step 2 - Presentation" (three concepts) and
    // "Step 3 - Brand Guide".
    'After a study of esports and game brands, I presented three concepts. The chosen one, the emblem inside a ring of dots like an aurora, was handed over as a full brand guide.',
  ],
  emblem: {
    id: 'AA-04',
    title: 'Emblem',
    type: 'image',
    src: `${dir}/emblem.svg`,
    alt: 'The Arctic Arena emblem: two interlocked A-shaped triangles in warm yellow, among small stars.',
    aspectRatio: '1 / 1',
    artwork: true,
  } satisfies CaseMedia,
  // Brand guide page 08 (Figma node 280:15155): how the emblem was built.
  concept: {
    id: 'AA-04c',
    title: 'Emblem concept',
    type: 'image',
    src: `${dir}/brand/concept-hd.jpg`,
    alt: 'Brand guide page: the emblem built from the A of Arctic and the A of Arena, interlocked, plus the mountains of Svalbard.',
    aspectRatio: '842 / 595',
    caption: 'From the brand guide: Arctic + Arena + Svalbard.',
  } satisfies CaseMedia,
  lockup: {
    id: 'AA-04b',
    title: 'Horizontal logo',
    type: 'image',
    src: `${dir}/logo-horizontal.svg`,
    alt: 'The horizontal Arctic Arena logo in warm yellow, emblem beside the logotype, among small stars.',
    aspectRatio: '1 / 1',
    artwork: true,
  } satisfies CaseMedia,
  versions: [
    {
      id: 'AA-05a',
      title: 'Logo with dotted ring',
      type: 'image',
      src: `${dir}/logo-ring.svg`,
      alt: 'Arctic Arena logo in yellow, framed by a ring of pink and gold dots.',
      aspectRatio: '1 / 1',
      caption: 'Primary',
      artwork: true,
    },
    {
      id: 'AA-05b',
      title: 'Logo, white',
      type: 'image',
      src: `${dir}/logo-ring-white.svg`,
      alt: 'Arctic Arena logo in white inside the dotted ring.',
      aspectRatio: '1 / 1',
      caption: 'White',
      artwork: true,
    },
    {
      id: 'AA-05c',
      title: 'Logo for light backgrounds',
      type: 'image',
      src: `${dir}/logo-ring-dark.svg`,
      alt: 'Arctic Arena logo in dark purple inside the dotted ring, on a light background.',
      aspectRatio: '1 / 1',
      caption: 'On light',
      onLight: true,
      artwork: true,
    },
    {
      id: 'AA-05d',
      title: 'Logo without the ring',
      type: 'image',
      src: `${dir}/logo-stacked.svg`,
      alt: 'Arctic Arena logo in yellow, emblem above the logotype, without the ring.',
      aspectRatio: '1 / 1',
      caption: 'Without the ring',
      artwork: true,
    },
  ] satisfies CaseMedia[],
  // The full palette from the brand guide (page "Colors"), with its names and values.
  palette: {
    label: 'Colour',
    note: 'Deep purples for the night; yellows, orange and pinks for the type and the dotted ring.',
    groups: [
      {
        label: 'Primary',
        swatches: [
          { name: 'Main Yellow Font', hex: '#FFDD85', rgb: '255 221 133', cmyk: 'C 0% M 13% Y 48% K 0%' },
          { name: 'Detail Yellow Font', hex: '#D2A530', rgb: '210 165 48', cmyk: 'C 0% M 18% Y 64% K 18%' },
          { name: 'Dots 1 Yellow', hex: '#FFD260', rgb: '255 210 96', cmyk: 'C 0% M 18% Y 62% K 0%' },
          { name: 'Dots 2 Orange', hex: '#FFAC60', rgb: '255 172 96', cmyk: 'C 0% M 33% Y 62% K 0%' },
          { name: 'Dots 3 Light Pink', hex: '#F14B8F', rgb: '241 75 143', cmyk: 'C 0% M 65% Y 38% K 5%' },
          { name: 'Dots 4 Mid Pink', hex: '#EE2C7B', rgb: '238 44 123', cmyk: 'C 0% M 76% Y 45% K 7%' },
          { name: 'Dots 5 Dark Pink', hex: '#E01974', rgb: '224 25 116', cmyk: 'C 0% M 78% Y 42% K 12%' },
        ],
      },
      {
        label: 'Secondary',
        swatches: [
          { name: 'Main Background', hex: '#13032A', rgb: '19 3 42', cmyk: 'C 9% M 15% Y 0% K 84%' },
          { name: 'Light Effect', hex: '#29064C', rgb: '41 6 76', cmyk: 'C 14% M 27% Y 0% K 70%' },
        ],
      },
    ] satisfies CaseSwatchGroup[],
  },
  // Brand guide page 39, "Arctic Arena Voice" (Figma node 300:7318), text as in the file,
  // lightly tidied (spacing and line breaks only).
  voice: {
    label: 'Voice',
    groups: [
      {
        title: 'Functional',
        traits: [
          { name: 'Casual', text: 'How we’d talk to the sports community. Slang most internet users would understand.', example: 'Social media posts, Reddit, Twitch' },
          { name: 'Neutral', text: 'The shortest route possible. Firm, brave, grandiose.', example: 'The Game Awards' },
        ],
      },
      {
        title: 'Emotional',
        traits: [
          { name: 'Celebratory', text: 'An esports event brand: the communication is always commemorative.', example: 'GG!' },
          { name: 'Organizational', text: 'Organized and inclusive, with the confidence of trust and belonging.', example: 'Join us!' },
          { name: 'Inclusive', text: 'Everyone is invited. Neutral, while making every participant comfortable.' },
        ],
      },
    ] satisfies CaseVoiceGroup[],
  },
  // The brand texture, full width (Figma node 294:959, page “Step 3 - Brand Guide”). Add
  // `src: \`${dir}/brand/texture.svg\``, `alt` and the real `aspectRatio` once exported.
  texture: {
    id: 'AA-09c',
    title: 'Brand texture',
    type: 'image',
    // From the brand guide's texture (Figma node 294:959): its embedded pattern at 80%, on the
    // page's navy, cropped to a wide band.
    src: `${dir}/brand/texture-rows.jpg`,
    alt: 'The Arctic Arena texture: interlocking triangles drawn in thin gold and pink lines on navy.',
    aspectRatio: '2469 / 1215',
  } satisfies CaseMedia,
  aurora: {
    id: 'AA-08',
    title: 'Aurora',
    type: 'image',
    src: `${dir}/auroras.jpg`,
    alt: 'Soft pink and violet aurora ribbons across a dark, star-filled sky.',
    aspectRatio: '2000 / 857',
    objectPosition: '30% center',
  } satisfies CaseMedia,
  applications: [
    {
      id: 'AA-09a',
      title: 'App icon',
      type: 'image',
      src: `${dir}/app-icon.svg`,
      alt: 'App icon: the yellow emblem on a dark purple rounded square with small stars.',
      aspectRatio: '1 / 1',
      caption: 'App icon',
      artwork: true,
    },
    {
      id: 'AA-09b',
      title: 'Social cover',
      type: 'image',
      src: `${dir}/social-cover.jpg`,
      alt: 'Social media cover: the Arctic Arena logo and dotted ring on a starry purple background.',
      aspectRatio: '820 / 312',
      caption: 'Social cover',
    },
  ] satisfies CaseMedia[],
  // REVIEW: supplied by Fernanda; confirm whether this is a mockup or a produced jacket, and
  // that the photo can be shown (the wearer's chin is cropped out).
  merch: {
    id: 'AA-10',
    title: 'Brand in use',
    type: 'image',
    src: `${dir}/brand/jacket.jpg`,
    alt: 'The Arctic Arena emblem and dotted ring on the chest of a black and pink jacket.',
    aspectRatio: '1400 / 827',
    caption: 'The emblem on a jacket.',
  } satisfies CaseMedia,
};

/* ── Designing the experience ─────────────────────────────────────────── */

export const experience = {
  label: 'Behind the experience',
  heading: 'Clear paths through an expressive brand.',
  // From the Figma file: "Site Step 1 - Study", "Site Step 2 - Wireframe", "Site Step 3 - UI".
  intro: 'Before the screens, I studied event, esports and game sites, then mapped every page and what each audience would look for. Wireframes came next, then the final design, documented in Figma for development: the sitemap, and notes on how each element behaves.',
  sitemap: {
    id: 'AA-12',
    title: 'Sitemap',
    type: 'image',
    src: `${dir}/sitemap.png`,
    alt: 'Sitemap: Home leads to Event, About, Sponsors, Blog, E-commerce and Business, each with its subpages. E-commerce and Business are marked as external, opening in a new tab.',
    aspectRatio: '1440 / 1018',
    objectFit: 'cover',
    caption: 'Sitemap. The shop and the business area are marked to open in a new tab.',
  } satisfies CaseMedia,
  // The sitemap from the Figma documentation (Site Step 3 - UI, "Site Map"), redrawn in HTML.
  // Page names as in the file.
  sitemapTree: {
    label: 'Sitemap of the Arctic Arena website',
    root: 'Home',
    groups: { main: 'Main story', external: 'Opens in a new tab' },
    caption: 'The sitemap, from the documentation for development. The shop and the business area open in a new tab, outside the main story.',
    sections: [
      { title: 'Event', pages: ['Summary', 'Event summary', 'Sponsors logos', 'Channels', 'Twitch videos', 'Products links'] },
      { title: 'About', pages: ['Arctic Arena', 'Svalbard', 'History', 'Values', 'Channels'] },
      { title: 'Sponsors', pages: ['List', 'About sponsors'] },
      { title: 'Blog', pages: ['News'] },
      {
        title: 'E-commerce',
        external: true,
        pages: ['Home', 'Product list', 'Product page', 'Help', 'Safe shopping', 'X-day return', 'My account / Login', 'Track order'],
      },
      { title: 'Business', external: true, note: 'For partners', pages: ['Why participate', 'Why special', 'Games', 'Contact us'] },
    ] satisfies CaseSitemapSection[],
  },
  // Each decision is visible in the sitemap, the final screens or the Figma documentation. Reasons
  // behind them are not documented, so they are described rather than explained. Further notes
  // (streams, social channels, hover states) live in the screen navigator.
  decisions: [
    {
      title: 'Two audiences, two paths',
      text: 'Players follow the event, the streams and the news. Partners get their own page: why take part, what makes the event special, and a direct contact.',
    },
    {
      title: 'Built for every edition',
      text: 'Each edition has its own page, labelled by year, with its games, teams and winners. The side navigation grows with them: more editions, more dots.',
    },
    {
      title: 'Expressive, then clear',
      text: 'Each page opens with a bold branded hero, then settles into framed blocks, section names in the margin, and a fixed marker of where you are.',
    },
  ] satisfies CaseDecision[],
  documentation: {
    id: 'AA-13',
    title: 'Documentation',
    type: 'video',
    src: `${dir}/figma-6.mp4`,
    poster: `${dir}/figma-6.jpg`,
    alt: 'Screen recording of the Figma documentation: the sitemap, then page sections annotated with behaviour notes.',
    aspectRatio: '1280 / 628',
    caption: 'The documentation in Figma: structure first, then the behaviour of each element.',
  } satisfies CaseMedia,
  system: {
    label: 'Design system',
    text: 'Fonts, atoms, forms, buttons and the grid were collected in a small design system, so the pages could be built consistently.',
    media: {
      id: 'AA-14',
      title: 'Design system',
      type: 'video',
      src: `${dir}/figma-2.mp4`,
      poster: `${dir}/figma-2.jpg`,
      alt: 'Screen recording of the design system in Figma: fonts, social icons, atoms, forms, buttons and grid.',
      aspectRatio: '1280 / 628',
      caption: 'The design system in Figma.',
    } satisfies CaseMedia,
  },
};

/* ── Explore the website: the screen navigator ────────────────────────── */

export const explore = {
  label: 'Explore the website',
  heading: 'Every page, as designed.',
  // The screens come from the final Figma file; the implemented site differs from it in places.
  text: 'Move through the final screens with the site’s own menu and links, or pick a page from the list. Switch between desktop and mobile to see every page at both sizes.',
  navigatorLabel: 'The Arctic Arena website: final screens, desktop and mobile',
  // Agreed disclosure: the logos are invented examples, the images come from the project's own artwork.
  navigatorNote: 'The sponsor and team logos in these screens are fictional examples made for this portfolio, not event partners or client assets. The delivered design used placeholder boxes, and the stream, news and shop images were added from the project’s own artwork. Photos of people are blurred.',
  closing: 'The brand identity and digital experience were developed, and an initial website version was partially implemented.',
  next: { label: 'Back to all work', href: '/work' },
};

/* ── Image mosaics ────────────────────────────────────────────────────── */
// Edge-to-edge rows of images between chapters, as in the Figma layout. Each item's width is
// its share of the row at 1280px; the row height is shared, so every image is cropped to fit.

/**
 * After the challenge: the logo in one place while its brand-guide pages change around it.
 * Pages from the Figma file, "Step 3 - Brand Guide": the logo (node 280:15776, drawn here from the
 * vector logo file), construction (277:7646), colours (279:9539) and opacity (277:9091).
 * `place` aligns each page on the wordmark (measured on the exports), in % of an 842 × 595 frame.
 */
export const logoStages = {
  label: 'The Arctic Arena logo: construction, colours and opacity, from the brand guide',
  ratio: '842 / 595',
  background: 'radial-gradient(42% 52% at 58.8% 48.6%, #270747 0%, #13032A 100%)',
  stages: [
    {
      id: 'logo',
      label: 'Logo',
      // logo-ring.svg rendered once into the frame at 2×, aligned on the wordmark (the vector has
      // 76 filters and decodes too slowly to swap in live).
      src: `${dir}/brand/stage-1-hd.jpg`,
      alt: 'The Arctic Arena logo: the emblem and logotype in warm yellow inside a ring of pink and gold dots.',
      place: { left: 0, top: 0, width: 100 },
    },
    {
      id: 'construction',
      label: 'Construction',
      src: `${dir}/brand/stage-2-hd.jpg`,
      alt: 'Brand guide, construction: the logo drawn in outline on a grid, with its proportions measured in multiples of X, the smallest possible size.',
      place: { left: 14.28, top: 5.71, width: 88.7 },
    },
    {
      id: 'colour',
      label: 'Colour',
      src: `${dir}/brand/stage-3-hd.jpg`,
      alt: 'Brand guide, colours: the five dot colours from yellow #FFD260 to dark pink #E01974, and the main and detail yellows of the type, #FFDD85 and #D2A530.',
      place: { left: 0, top: 0, width: 100 },
    },
    {
      id: 'opacity',
      label: 'Opacity',
      src: `${dir}/brand/stage-4-hd.jpg`,
      alt: 'Brand guide, opacity: the ring of dots fading in steps from 100% to 10%.',
      place: { left: 0, top: 0, width: 100 },
    },
  ] satisfies CaseLogoStage[],
};
