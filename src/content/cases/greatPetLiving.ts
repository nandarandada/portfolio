/**
 * Great Pet Living (2022): a UI redesign that gave Great Pet Care's entertainment site its own
 * visual identity. UI design within the Oowlish team, for its client Great Pet Care. Separate
 * from the Great Pet Care website and the Great Pet Care Account.
 *
 * Source: the 2022 portfolio page (Figma "My website", page "Problematic project", frame
 * 634:48647; also ~/Downloads/living.pdf, from which every screen here is rendered). It gives the
 * year, the role, the goals, the three tries with the team's feedback, the mood boards, the
 * style guide and the final desktop and mobile screens. The user confirmed: only the final try
 * was built; she drew the second try's dog illustrations and the final category collages.
 * No metrics: nothing here was measured.
 *
 * Edits to the renders, disclosed on the page: ads in the designs are shown as empty slots,
 * people's faces in the editorial photos are blurred, and typos in the files are corrected
 * ("Entretaniment", "Fesrtival", "SUBMITE", "Advertisment", and a placeholder "goop" in the
 * newsletter consent line). The mood boards are other people's work, shown small and labelled.
 */
import type { CaseMedia, CaseMetaItem, CaseTheme } from './types';

const dir = '/work/great-pet-living';

/** One authentic screen or crop, with its intrinsic size (so the space is reserved before it loads). */
export type Shot = CaseMedia & { width: number; height: number };

const shot = (id: string, title: string, file: string, alt: string, size: [number, number], extra: Partial<Shot> = {}): Shot => ({
  id,
  title,
  type: 'image',
  src: `${dir}/${file}`,
  alt,
  aspectRatio: `${size[0]} / ${size[1]}`,
  width: size[0],
  height: size[1],
  ...extra,
});

/** A tall full-page screen, with a narrower copy for phones (very tall images exceed their decode limits). */
const page = (id: string, title: string, file: string, alt: string, size: [number, number], small?: string): Shot =>
  shot(id, title, file, alt, size, small ? { smallSrc: `${dir}/${small}` } : {});

/** Great Pet Living's own colours, from its style guide. */
export const greatPetLivingTheme: CaseTheme = {
  base: '#004A3E', // the deep green of the footer and buttons
  surface: '#0E5A4D',
  accent: '#9AC4D9', // Living's light blue: links and coloured text on the green
  onAccent: '#004A3E',
  line: '#007FC6', // the blue of the category labels
  art: '#0B5A4C',
  artDeep: '#00352C',
};

/** The speckled paper behind Living's pages: one tile from the design file, repeated. */
export const speckle = `${dir}/speckle.webp`;

/** Living's three typefaces, loaded for this page only so the style guide is set in them. */
export const livingFonts =
  'https://fonts.googleapis.com/css2?family=Aleo:wght@400;600&family=Archivo+Black&family=Nunito+Sans:wght@300;400;700&display=swap';

export const project = {
  title: 'Great Pet Living',
  meta: [
    { label: 'Client', value: 'Great Pet Care, through Oowlish' },
    { label: 'Year', value: '2022' },
    { label: 'Role', value: 'UI design, as part of the Oowlish team' },
  ] satisfies CaseMetaItem[],
  disciplines: ['UI Design', 'Visual Identity', 'Editorial'],
  link: { label: 'living.greatpetcare.com', href: 'https://living.greatpetcare.com/' },
  linkNote: 'The live site has evolved since this redesign.',
  headline: 'A more playful side of pet care.',
  body: 'Great Pet Care publishes articles by veterinarians. Great Pet Living, part of the same group of sites, is the lighter side: funny stories, pet photos, quizzes and inspiration. Its first version reused the Great Pet Care template to save time, so the two sites looked almost the same. This project was a UI redesign to give Living a look of its own.',
  desktop: shot('GL-01', 'Home, desktop', 'hero-desktop.webp', 'The redesigned Great Pet Living home page: a speckled white page with cards on offset blue and yellow blocks, a pink pug as the main story, and a Trending list on cream.', [2400, 1610]),
  mobile: shot('GL-02', 'Home, mobile', 'hero-mobile.webp', 'The same home page on a phone: the pug story on a yellow block, then the Trending list.', [696, 1440]),
};

export const start = {
  label: 'The starting point',
  heading: 'Too close to the parent brand.',
  body: [
    'Living launched on the Great Pet Care template. Only the fonts, the colours and a few graphic details told the two sites apart. The question was how to show readers that this site had a different purpose — and a sense of fun.',
  ],
  goals: [
    { title: 'Its own identity', text: 'Make Living visually different from the Great Pet Care website, so readers understand that its purpose is different.' },
    { title: 'More liveliness', text: 'The content is fun, so the style should be too.' },
  ],
  caption: 'Living on the shared template, before the redesign.',
  desktop: page('GL-03', 'The template, desktop', 'page-template.webp', 'Living on the shared template, the full home page: a large dog photo, serif headlines, popular stories, quiz cards and a light blue community band.', [1600, 4456], 'page-template-small.webp'),
  mobile: page('GL-04', 'The template, mobile', 'template-mobile.webp', 'The template home page on a phone: stacked photo stories with serif headlines, then quiz cards.', [720, 6994]),
};

export type Exploration = {
  key: string;
  tab: string;
  title: string;
  text: string;
  /** The whole home page in this version. */
  page: Shot;
  /** The always-visible summary: what the version explored, the documented response, what followed. */
  summary: { explored: string; response: string; next: string };
  references?: { label: string; items: Shot[] };
};

export const explorations = {
  label: 'Finding the visual language',
  heading: 'Three tries,\none approved.',
  body: [
    'Each proposal started from references the team agreed on, and each round of feedback pushed the next one further from the template. Pick a version to see its whole home page.',
  ],
  summaryLabels: { explored: 'Explored', response: 'Feedback', next: 'Next' },
  referencesNote: 'Other designers’ work, collected as references.',

  steps: [
    {
      key: 'template',
      tab: 'Template',
      title: 'The shared template',
      text: 'The starting point: Great Pet Care’s layout and components, with Living’s fonts and colours.',
      page: page('GL-05', 'Template, full home page', 'page-template.webp', 'The template version of the home page, top to bottom: popular stories, quiz cards, the community band and more stories.', [1600, 4456], 'page-template-small.webp'),
      summary: {
        explored: 'Great Pet Care’s layout and components, with Living’s fonts and colours.',
        response: 'Too close to the parent site to show a different purpose.',
        next: 'Two goals: its own identity, and more liveliness.',
      },
    },
    {
      key: 'first',
      tab: 'First try',
      title: 'Not different enough',
      text: 'A first mood board set the style the team was looking for. This option kept the current colours and typefaces and changed only the style.',
      page: page('GL-06', 'First try, full home page', 'page-first.webp', 'The first try, top to bottom: photo stories with rounded corners, lowercase headings, an ad slot, the community band and more rounded cards.', [1600, 7808], 'page-first-small.webp'),
      summary: {
        explored: 'A new style on the current colours and typefaces.',
        response: 'Not what the team was looking for: they wanted more liveliness, and a layout truly different from the previous design.',
        next: 'A new mood board, to align expectations.',
      },
      references: {
        label: 'First mood board',
        items: [shot('GL-07', 'First mood board', 'references-1.webp', 'A collage of other studios’ pet-shop and brand websites, used as references.', [1248, 2372])],
      },
    },
    {
      key: 'second',
      tab: 'Second try',
      title: 'Halfway there',
      text: 'The layout changed more, with elements the Great Pet Care site didn’t have — illustrated categories, textures, background graphics, card details. I drew the dog illustrations for the categories.',
      page: page('GL-08', 'Second try, full home page', 'page-second.webp', 'The second try, top to bottom: dark green category tiles with white dog illustrations, textured backgrounds, the community band and illustrated cards.', [1600, 8318], 'page-second-small.webp'),
      summary: {
        explored: 'Illustrated categories, textures, background graphics and card details.',
        response: 'The team liked the graphic details, not the dog illustrations: it felt halfway there and needed more style.',
        next: 'The same references, plus posters.',
      },
      references: {
        label: 'Second mood board',
        items: [
          shot('GL-09', 'Categories with illustrations', 'ref-categories.webp', 'Reference: an app with illustrated category cards.', [882, 596], { caption: 'Illustrated categories' }),
          shot('GL-10', 'Textures and illustrations', 'ref-textures.webp', 'Reference: a yellow textured poster with a hand-lettered title.', [882, 596], { caption: 'Textures' }),
          shot('GL-11', 'Background graphics', 'ref-background.webp', 'Reference: a repeated black-and-white wordmark as a background.', [882, 560], { caption: 'Background graphics' }),
          shot('GL-12', 'Card details', 'ref-cards.webp', 'Reference: illustrated content cards from an app.', [882, 432], { caption: 'Card details' }),
        ],
      },
    },
    {
      key: 'final',
      tab: 'Approved',
      title: 'Approved',
      text: 'Posters brought styles from other kinds of design work into the interface. The categories became cut-out collages, which I made.',
      page: page('GL-13', 'Approved, full home page', 'home-desktop.webp', 'The approved home page, top to bottom: cards on offset blocks, collaged categories, an outlined headline, the community band, what’s new, trend week, quizzes, sign-up and the footer.', [1600, 9028], 'home-desktop-small.webp'),
      summary: {
        explored: 'Poster-inspired composition; categories as cut-out collages.',
        response: 'Approved.',
        next: 'Built — the only one of the three tries that was.',
      },
      references: {
        label: 'Posters',
        items: [shot('GL-14', 'Poster references', 'references-3.webp', 'Six posters by other designers: collage, bold geometric shapes and illustration.', [1440, 1309], { caption: 'Posters' })],
      },
    },
  ] satisfies Exploration[],
};

export type DetailEvidence = Shot & { caption: string };

export type Detail = {
  key: 'type' | 'cards' | 'categories' | 'texture';
  tab: string;
  text: string;
  evidence: DetailEvidence[];
  /** The template's equivalent, shown smaller as the point of comparison. */
  before?: Shot;
};

const evidence = (id: string, title: string, file: string, alt: string, size: [number, number], caption: string): DetailEvidence => ({
  ...shot(id, title, file, alt, size),
  caption,
});

export const details = {
  label: 'Design details',
  heading: 'A brand built through the interface.',
  body: ['The identity lives in the UI itself. Enlarged crops of the approved design, with the template it replaced.'],
  beforeLabel: 'The template, before',
  items: [
    {
      key: 'type',
      tab: 'Typography',
      text: 'Archivo Black for headlines, Aleo for titles, Nunito Sans for reading — heavy, all-caps display type against a calm body.',
      evidence: [
        evidence('GL-15', 'Article headline', 'type-article.webp', 'An article opening: the “At Home” label, the headline “How to get cat hair off clothes” in heavy capitals, and two paragraphs of Nunito Sans.', [1800, 732], 'Article opening: the display headline over a quiet body.'),
        evidence('GL-16', 'Outlined banner', 'type-display.webp', 'An outlined headline running across the page, “Bringing together the dogs of Instagram”, over the green heading “Submit your photos and videos”.', [2400, 300], 'An outlined headline runs edge to edge above the community call.'),
        evidence('GL-17', 'Trending list', 'type-trending.webp', 'The Trending list on cream: blue category labels over Aleo titles, with square thumbnails.', [600, 1020], 'Trending: blue labels, Aleo titles.'),
      ],
      before: shot('GL-18', 'Template typography', 'detail-type-before.webp', 'Template typography: thin serif headlines and small grey summaries.', [1460, 700]),
    },
    {
      key: 'cards',
      tab: 'Cards',
      text: 'Cards sit on offset blocks of blue and yellow instead of soft shadows; labels are small blue tags, titles heavy and centred.',
      evidence: [
        evidence('GL-19', 'Home cards', 'detail-cards-after.webp', 'Two square cards on offset light blue blocks, with “Christmas” and “Family” tags, a “Cool!” speech bubble and three hand-drawn strokes.', [720, 1300], 'Home: square cards on offset blue.'),
        evidence('GL-20', 'Feature card', 'card-whatsnew.webp', 'A feature card with two running dogs, a “Family” tag and the title “How to take photos of dogs who won’t sit still”, on an offset yellow block.', [1600, 1353], 'What’s new: one story, on an offset yellow block.'),
        evidence('GL-21', 'Article cards', 'cards-grid.webp', 'Six article cards in two rows, each with a photo, a blue category tag — Cleaning, Decor, City Guides, Christmas — and a heavy title, on offset light blue blocks.', [1989, 1201], 'The article grid: six cards, each tagged by category.'),
      ],
      before: shot('GL-22', 'Template cards', 'detail-cards-before.webp', 'Template cards: white rounded cards with soft shadows.', [1520, 520]),
    },
    {
      key: 'categories',
      tab: 'Categories',
      text: 'Each category is a cut-out collage — a dog, objects, stripes of colour, a handwritten note — so it reads before its label does.',
      evidence: [
        evidence('GL-23', 'Entertainment', 'category-entertainment.webp', 'Entertainment: a dog in a hat and red jumper, holding grey balloons, with hand-drawn hearts.', [800, 960], 'Entertainment: balloons and a hat.'),
        evidence('GL-24', 'Pet Travel', 'category-pet-travel.webp', 'Pet Travel: a corgi in a jacket with a plane, a bag and a hand-drawn tick.', [850, 960], 'Pet Travel: a plane, a bag, a tick.'),
        evidence('GL-25', 'At Home', 'category-at-home.webp', 'At Home: a dog in a towel and bathrobe with cucumber eyes, and a “Busy” bubble.', [810, 960], 'At Home: spa day, “Busy”.'),
        evidence('GL-26', 'Inspiration', 'category-inspiration.webp', 'Inspiration: a dog with a medal and confetti under a “Success!” note.', [770, 960], 'Inspiration: a medal, “Success!”.'),
      ],
      before: shot('GL-27', 'Template featured cards', 'detail-categories-before.webp', 'Template featured cards: four dark photo cards with centred serif titles.', [1520, 600]),
    },
    {
      key: 'texture',
      tab: 'Texture',
      text: 'A speckled paper texture runs behind the pages: a transparent layer of beige and red flecks over the white. Move the magnifier over the page to see it up close.',
      evidence: [],
    },
  ] satisfies Detail[],
};

/**
 * The texture under a magnifier: the top left of the approved home page, with its background
 * set in the vector texture tile from the file's "Background details" panel (the home page itself
 * holds a lower-resolution raster copy), so the flecks stay sharp when enlarged.
 */
export const loupe = {
  base: shot('GL-28', 'The home page, top left', 'loupe-base.webp', 'The top left of the approved home page: a “Cool!” sticker, a Christmas card on an offset blue block and the edge of the main story, on the speckled background.', [1140, 786]),
  hi: `${dir}/loupe-hi.webp`,
  caption: 'The texture in place, magnified — set from the vector tile in the design file. Hover, drag, or use the arrow keys.',
  label: 'Magnifier over the home page. Use the arrow keys to move it.',
};

/**
 * The "Background details" panel of the design file, rebuilt as two layers: a white card with
 * a soft shadow, and the transparent speckle texture (outlined in yellow) over it. Proportions
 * follow the panel (card 792 × 506, texture 705 × 525, in a 1040 × 686 frame).
 */
export const layers = {
  caption: 'How the layers stack: the speckles over a white card.',
  label: 'The texture layer over a white card, tilted in 3D.',
  apart: 'Put together',
  together: 'Pull apart',
};

export const system = {
  label: 'Style guide',
  intro: 'From the handover file: three typefaces, a palette of blues, green, yellow and paper tones, and the states of the main components. The type below is set live, in Living’s own fonts.',
  faces: [
    { name: 'Archivo Black', role: 'Headings', family: "'Archivo Black', sans-serif", weight: 400 },
    { name: 'Aleo', role: 'Headings and buttons', family: "'Aleo', serif", weight: 400 },
    { name: 'Nunito Sans', role: 'Body', family: "'Nunito Sans', sans-serif", weight: 400 },
  ],
  /** The heading scale, as documented in the style guide. */
  headings: [
    { label: 'Heading 1', size: 40, weight: 400, family: "'Archivo Black', sans-serif", note: '40 px · Archivo Black' },
    { label: 'Heading 2', size: 35, weight: 400, family: "'Archivo Black', sans-serif", note: '35 px · Archivo Black', green: true },
    { label: 'Heading 3', size: 35, weight: 600, family: "'Aleo', serif", note: '35 px · Aleo 600' },
    { label: 'Heading 4', size: 25, weight: 400, family: "'Archivo Black', sans-serif", note: '25 px · Archivo Black' },
    { label: 'Heading 5', size: 18, weight: 400, family: "'Archivo Black', sans-serif", note: '18 px · Archivo Black' },
    { label: 'Heading 6', size: 18, weight: 600, family: "'Aleo', serif", note: '18 px · Aleo 600' },
  ],
  body: [
    { label: 'Big', size: 20 },
    { label: 'Medium', size: 16 },
    { label: 'Small', size: 12 },
  ],
  bodySample: 'Our dogs are the most adorbs — and sometimes, it’s not just their cute faces.',
  palette: [
    { name: 'Green', hex: '#004A3E', light: false },
    { name: 'Yellow', hex: '#EAAA00', light: false },
    { name: 'Blue', hex: '#007FC6', light: false },
    { name: 'Light blue', hex: '#9AC4D9', light: true },
    { name: 'Pale blue', hex: '#B2D5E7', light: true },
    { name: 'Ice', hex: '#ECF9FF', light: true },
    { name: 'Sand', hex: '#EEE3CC', light: true },
    { name: 'Cream', hex: '#FBF4E6', light: true },
    { name: 'Ink', hex: '#2A2A2A', light: false },
    { name: 'Dark grey', hex: '#4E4E4E', light: false },
    { name: 'Grey', hex: '#818181', light: false },
    { name: 'Light grey', hex: '#A0A0A0', light: true },
    { name: 'Red', hex: '#EC2626', light: false },
  ],
  componentsLabel: 'Component demo',
  /** Rebuilt from the style guide's states, so they can be used: hover, focus, type, submit. */
  live: {
    button: 'Join the club',
    /** shown under the field after a valid address: the demo never sends or stores anything */
    valid: 'Valid address. This is only a demo: nothing was sent or stored.',
    inputLabel: 'E-mail',
    inputPlaceholder: 'you@example.com',
    error: 'Enter a valid e-mail address.',
    note: 'Not a real sign-up. The button and input are rebuilt from the style guide so their states can be tried: default, hover and disabled; standard, focus and error. Nothing you type leaves this page.',
  },
  buttons: shot('GL-32', 'Buttons', 'buttons.webp', 'The “Join the club” button: default, hover and disabled.', [1575, 142], { caption: 'Buttons: default, hover, disabled.' }),
  inputs: shot('GL-33', 'Inputs', 'inputs.webp', 'Text inputs: standard, focus, and error with a message.', [1575, 127], { caption: 'Inputs: standard, focus, error.' }),
};

export const final = {
  label: 'The final experience',
  heading: 'Home and article, desktop and mobile.',
  body: ['The home page continues below the fold shown at the top of this page. The article gets a closer look: the whole page, then its body, a related article and the stories that follow.'],
  home: {
    title: 'Home',
    caption: 'Below the fold: categories, the community call, what’s new, trend week, quizzes, sign-up and the family of sites.',
    desktop: page('GL-34', 'Home, desktop, below the fold', 'home-desktop-rest.webp', 'The home page below the first screen: collaged categories, the community band, what’s new, trend week, quizzes, sign-up, the Great Pet family of sites and the footer.', [1600, 8028], 'home-desktop-rest-small.webp'),
    mobile: page('GL-35', 'Home, mobile, below the fold', 'home-mobile-rest.webp', 'The same sections on a phone, stacked.', [400, 12118]),
  },
  article: {
    title: 'Article',
    caption: 'A full-width photo, a display headline and share buttons; the body with side modules; the author and more stories.',
    desktop: page('GL-36', 'Article, desktop', 'article-desktop.webp', 'The article on desktop, top to bottom: a full-width photo of a kitten, the headline “How to get cat hair off clothes”, body text with photos and a sign-up module, a related article, the author box and more stories.', [1600, 7655], 'article-desktop-small.webp'),
    mobile: page('GL-37', 'Article, mobile', 'article-mobile.webp', 'The same article on a phone.', [540, 8736]),
    crops: [
      shot('GL-38', 'Article body', 'article-body.webp', 'A section of the article: a subheading in Aleo capitals, a photo on an offset blue block, body text, and a “Join our community” sign-up module beside it.', [1270, 720], { caption: 'The body, with a sign-up module beside it.' }),
      shot('GL-39', 'Related article', 'article-related.webp', 'A related-article module on light blue: a photo, the title “Best flooring for dogs: everything you need to know” and a Read more button.', [1240, 320], { caption: 'A related article, inside the text.' }),
      shot('GL-40', 'Author and more stories', 'article-author.webp', 'The author box on cream with a yellow offset block, then “More about At Home”: six article cards.', [1300, 1285], { caption: 'The author, then more stories from the same category.' }),
    ],
  },
};

/** Shown after the final gallery: how the screens on this page differ from the design file. */
export const screensNote = {
  label: 'About the screens',
  text: 'Every screen here comes from the original design file. For this page, ads are shown as empty slots, faces in the editorial photos are blurred, and typos in the files are corrected.',
};

export const credits = {
  label: 'Credits',
  statement: 'Great Pet Care was an Oowlish client. I worked on the project as part of the Oowlish team.',
  items: [
    { label: 'Client', value: 'Great Pet Care' },
    { label: 'With', value: 'Oowlish' },
    { label: 'My role', value: 'UI design' },
    { label: 'Year', value: '2022' },
  ] satisfies CaseMetaItem[],
  logos: [
    { name: 'Covetrus Great Pet Care', src: `${dir}/covetrus-great-pet-care-white.svg`, ratio: '152.5 / 38.2' },
    { name: 'Oowlish', src: `${dir}/oowlish.svg`, ratio: '328.2 / 65.6', mono: true },
  ],
  next: { label: 'Back to all work', href: '/work' },
};
