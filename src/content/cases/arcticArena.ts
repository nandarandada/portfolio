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
import type { CaseDecision, CaseMedia, CaseMetaItem, CaseMosaicRow, CaseSwatch, CaseTheme } from './types';

const dir = '/work/arctic-arena';

// Page surfaces follow the Figma layout (node 326:2): Frosa's grained black for the opening and
// the final chapter, the grained indigo for the identity, purple grid lines. The project's own
// navy and purple stay behind its artwork.
export const arcticArenaTheme: CaseTheme = {
  base: '#1F1F1F',
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
  hero: {
    id: 'AA-01',
    title: 'Key art',
    type: 'image',
    src: `${dir}/sign.jpg`,
    alt: 'The Arctic Arena logo rendered as a relief of purple dots on a dark purple background.',
    aspectRatio: '2000 / 1400',
    objectPosition: 'center 45%',
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
    'The brief pointed to the valknut, a Norse symbol of interlocking triangles, and asked for two interlocked A’s, simple enough to be reduced. The final emblem draws both A’s as one geometric mark, used on its own or above the logotype.',
  ],
  exploration: {
    id: 'AA-03',
    title: 'Logo exploration',
    type: 'image',
    aspectRatio: '16 / 9',
    recommendation: 'Add early sketches or logo iterations showing how the final Arctic Arena symbol evolved.',
    tip: 'Prefer 3–5 meaningful explorations rather than a large collection of similar sketches.',
  } satisfies CaseMedia,
  emblem: {
    id: 'AA-04',
    title: 'Emblem',
    type: 'image',
    src: `${dir}/emblem.svg`,
    alt: 'The Arctic Arena emblem: two interlocked A-shaped triangles in warm yellow, among small stars.',
    aspectRatio: '1 / 1',
    artwork: true,
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
  // Colours sampled from the logo files and the screens. No rationale is stated: the brief
  // asked for purple tones and to avoid black and blue; anything beyond that is unconfirmed.
  palette: {
    label: 'Colour',
    note: 'Deep purples for the night, warm yellow for type and key actions, and a pink-to-gold gradient in the dotted ring.',
    swatches: [
      { name: 'Navy', hex: '#13032A' },
      { name: 'Purple', hex: '#29064C' },
      { name: 'Warm yellow', hex: '#FFDD85' },
      { name: 'Gold', hex: '#FFAC60' },
      { name: 'Pink', hex: '#E01974' },
    ] satisfies CaseSwatch[],
  },
  typography: {
    id: 'AA-07',
    title: 'Typography',
    type: 'image',
    aspectRatio: '3 / 2',
    recommendation: 'Export the Fonts frame from the design system page of the Figma file: the headings, the logotype lettering and the body text together.',
    tip: 'Crop close enough that the letterforms read clearly. One specimen is better than a full style list.',
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
  merch: {
    id: 'AA-10',
    title: 'Brand in use',
    type: 'image',
    aspectRatio: '4 / 5',
    recommendation: 'Add a real application of the identity: a T-shirt, a flag, a ticket or signage.',
    tip: 'Only real, produced items or mockups made for the project. Show one application well rather than many small ones.',
  } satisfies CaseMedia,
};

/* ── Designing the experience ─────────────────────────────────────────── */

export const experience = {
  label: 'Designing the experience',
  heading: 'Clear paths through an expressive brand.',
  intro: 'Before the screens, I mapped every page and what each audience would look for. The sitemap, with notes on how each element behaves, was documented in Figma for development.',
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
  // Each decision is visible in the sitemap or the final screens. Reasons behind them are
  // not documented, so they are described rather than explained.
  decisions: [
    {
      title: 'One main story',
      // REVIEW: the reason (keeping buying and partnering from interrupting the story) is not documented.
      text: 'Event, About, Sponsors and News carry the main story. The shop and the business area open in a new tab.',
    },
    {
      title: 'A path for partners',
      text: 'Partners have their own page: why take part, what makes the event special, the games and a direct contact.',
    },
    {
      title: 'Every edition',
      text: 'Each edition has its own page, labelled by year, with games, teams and winners.',
    },
    {
      title: 'Live, close at hand',
      text: 'Twitch streams and the event’s channels sit on the home page, and every header links to them.',
    },
    {
      title: 'Bold, then calm',
      text: 'Each page opens with a large branded hero, then moves to framed blocks with section names set vertically in the margin.',
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
  earlyUx: {
    id: 'AA-11',
    title: 'Early UX exploration',
    type: 'image',
    aspectRatio: '4 / 3',
    recommendation: 'Add a wireframe, sitemap detail, or early layout showing how event information was organized.',
    tip: 'Highlight a specific design decision rather than showing an entire unreadable document.',
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
  mobile: {
    label: 'Desktop and mobile',
    text: 'Every page was designed at 1440 and 320 pixels wide.',
    screens: [
      { id: 'AA-15a', title: 'Home, mobile', type: 'image', src: `${dir}/mobile-6.jpg`, alt: 'Mobile home: the dotted ring, the emblem and the headline “Are you ready”.', aspectRatio: '320 / 560' },
      { id: 'AA-15b', title: 'Event, mobile', type: 'image', src: `${dir}/mobile-9.jpg`, alt: 'Mobile event page with the headline “Arctic Arena”.', aspectRatio: '320 / 560' },
      { id: 'AA-15c', title: 'About, mobile', type: 'image', src: `${dir}/mobile-14.jpg`, alt: 'Mobile about page with the headline “About” and the section tabs.', aspectRatio: '320 / 560' },
      { id: 'AA-15d', title: 'Sponsors, mobile', type: 'image', src: `${dir}/mobile-17.jpg`, alt: 'Mobile sponsors page with the headline “Join us in this adventure”.', aspectRatio: '320 / 560' },
    ] satisfies CaseMedia[],
  },
};

/* ── The final experience ─────────────────────────────────────────────── */

export const finalExperience = {
  label: 'The final experience',
  heading: 'Under the Arctic sky.',
  home: {
    id: 'AA-16',
    title: 'Home',
    type: 'image',
    src: `${dir}/home-hero.jpg`,
    alt: 'Desktop home hero: the emblem inside the dotted ring and the headline “Are you ready”, “To be amongst the best players under the polar sky?”.',
    aspectRatio: '1440 / 650',
    caption: 'Home',
  } satisfies CaseMedia,
  // Stream thumbnails, product photos and news photos are blurred: their rights are unconfirmed.
  homeScroll: {
    id: 'AA-17',
    title: 'Home, full page',
    type: 'image',
    src: `${dir}/home-full.jpg`,
    alt: 'The full desktop home page: hero, Twitch streams, event, sponsors, channels, shop and news. Photos are blurred.',
    aspectRatio: '960 / 2386',
    caption: 'The full home page. Third-party photos are blurred.',
  } satisfies CaseMedia,
  edition: {
    id: 'AA-19',
    title: 'Event edition',
    type: 'image',
    src: `${dir}/event-edition.jpg`,
    alt: 'Event page for the 2021 edition, with the dotted emblem as key art and tabs for games, teams and winners.',
    aspectRatio: '1440 / 780',
    caption: 'An edition page',
  } satisfies CaseMedia,
  pages: [
    {
      id: 'AA-20',
      title: 'About',
      type: 'image',
      src: `${dir}/about.jpg`,
      alt: 'About page: the headline “About” beside the emblem in a ring of dots, with tabs for history, influences, Svalbard and values.',
      aspectRatio: '1440 / 1000',
      caption: 'About',
    },
    {
      id: 'AA-21',
      title: 'Sponsors',
      type: 'image',
      src: `${dir}/sponsors.jpg`,
      alt: 'Sponsors page hero: “Join us in this adventure” over a purple concert scene with lasers.',
      aspectRatio: '1440 / 620',
      caption: 'Sponsors',
    },
  ] satisfies CaseMedia[],
  commerce: [
    {
      id: 'AA-22',
      title: 'Shop',
      type: 'image',
      src: `${dir}/shop.jpg`,
      alt: 'Shop home: a T-shirt banner with the Arctic Arena ring printed on the back, and large Tickets and Flags categories.',
      aspectRatio: '1440 / 960',
      caption: 'Shop',
    },
    {
      id: 'AA-23',
      title: 'Sign in',
      type: 'image',
      src: `${dir}/sign-in.jpg`,
      alt: 'Shop sign-in page with email and password fields and a yellow sign-in button.',
      aspectRatio: '1440 / 988',
      caption: 'Sign in',
    },
  ] satisfies CaseMedia[],
  motion: {
    id: 'AA-18',
    title: 'Identity in motion',
    type: 'video',
    aspectRatio: '1 / 1',
    recommendation: 'Add a short loop animating the Arctic Arena emblem or dotted-ring graphic.',
    format: 'WebM or MP4, with a static fallback.',
    tip: 'Keep it short and seamless, 4–8 seconds.',
  } satisfies CaseMedia,
  closing: 'The brand identity and digital experience were developed, and an initial website version was partially implemented.',
  next: { label: 'Back to all work', href: '/work' },
};

/* ── Image mosaics ────────────────────────────────────────────────────── */
// Edge-to-edge rows of images between chapters, as in the Figma layout. Each item's width is
// its share of the row at 1280px; the row height is shared, so every image is cropped to fit.

/** After the opening: the finished site, before the story of how it was made. */
export const screensMosaic = {
  label: 'Screens from the Arctic Arena website',
  rows: [
    { height: 565, items: [{ media: finalExperience.home, width: 1280 }] },
    {
      height: 440,
      items: [
        { media: finalExperience.edition, width: 641 },
        { media: finalExperience.pages[0], width: 641 },
      ],
    },
    {
      height: 440,
      items: [
        { media: finalExperience.pages[1], width: 849 },
        { media: identity.applications[0], width: 433 },
      ],
    },
  ] satisfies CaseMosaicRow[],
};

/** After the challenge: the place and the night sky the identity grew from. */
export const placeMosaic = {
  label: 'Svalbard and the polar night, in the site’s imagery',
  rows: [
    {
      height: 440,
      items: [
        { media: challenge.media[0], width: 641 },
        { media: identity.aurora, width: 641 },
      ],
    },
    {
      height: 440,
      items: [
        { media: identity.applications[1], width: 849 },
        { media: challenge.media[1], width: 433 },
      ],
    },
  ] satisfies CaseMosaicRow[],
};
