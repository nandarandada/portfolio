/**
 * Pawprint Oxygen (2021–2022): an e-commerce experience for pet owners and veterinarians,
 * designed at Oowlish for its client Pawprint Oxygen.
 *
 * Source: the original Pawprint Oxygen portfolio page (Figma "My website", node 473:9040).
 * Every fact, finding and quote below comes from that page or from the case brief. Nothing is
 * measured after launch: the original was published before the final release, without analytics.
 *
 * Media without `src` render as editorial placeholders with guidance for the missing asset.
 */
import type { CaseDecision, CaseMedia, CaseMetaItem, CaseSwatchGroup, CaseTheme } from './types';
import type { CaseSitemapSection } from '../../components/case/CaseSitemap';

const dir = '/work/pawprint-oxygen';

/** The project's own colours (style guide): navy, yellow and the secondary blue. */
export const pawprintTheme: CaseTheme = {
  base: '#183852', // Primary Blue
  surface: '#0D86E2', // Secondary Blue
  accent: '#FFD43D', // Primary Yellow
  onAccent: '#183852',
  line: '#2E6A99', // a quieter step of the blues, for grid lines
  art: '#1F4766',
  artDeep: '#10273A',
};

export const project = {
  title: 'Pawprint Oxygen',
  meta: [
    { label: 'Client', value: 'Pawprint Oxygen, through Oowlish' },
    { label: 'Period', value: '2021–2022' },
  ] satisfies CaseMetaItem[],
  disciplines: ['Product Design', 'UX/UI', 'E-commerce'],
  /** The live site has evolved since this first version (original page: “take a look at the latest versions”). */
  live: { label: 'pawprintoxygen.com', href: 'https://pawprintoxygen.com/', note: 'The live site, evolved since this first version.' },
  headline: 'Making a complex purchase feel simpler.',
  body: 'Designing a clearer shopping experience for pet owners and veterinarians, balancing specialized product information with everyday usability.',
  // desktop and phone in one composition, framed in the image itself (transparent around it)
  hero: {
    id: 'PO-01',
    title: 'Home page, desktop and mobile',
    type: 'image',
    src: `${dir}/hero-screens.webp`,
    alt: 'The Pawprint Oxygen home page on desktop and on a phone: a navy header with the yellow logo, the headline “Oxygen for pets, shipped right to your door” over a photo of a dog wearing an oxygen mask, and a yellow Visit Store button.',
    aspectRatio: '1932 / 1499',
    objectFit: 'contain',
  } satisfies CaseMedia,
};

export const challenge = {
  label: 'The challenge',
  heading: 'Two audiences. Different needs. One experience.',
  body: [
    'Pawprint Oxygen needed to introduce its products to new customers and create clearer paths to purchase. Pet owners needed help understanding unfamiliar products and the ordering process, while veterinarians needed access to professional information, resources and purchasing options.',
  ],
  audiences: [
    {
      name: 'Pet owners',
      text: 'Need oxygen for their pet, and an easy way to get it.',
      story: 'As a pet owner, I want a solution to buy and receive an oxygen pet kit so that I can worry less about my pet’s health routine.',
      media: {
        id: 'PO-03',
        title: 'The pet owners’ entry',
        type: 'image',
        src: `${dir}/audience-owners.jpg`,
        alt: 'Home page hero: “Oxygen for pets, shipped right to your door”, a Visit Store button, and a line for vets pointing to the vet store.',
        aspectRatio: '846 / 426',
      } satisfies CaseMedia,
    },
    {
      name: 'Veterinarians',
      text: 'Look for oxygen solutions and innovation for their practice.',
      story: 'As a veterinarian, I want oxygen solutions so that I can complete my medical arsenal.',
      media: {
        id: 'PO-04',
        title: 'The veterinarians’ entry',
        type: 'image',
        src: `${dir}/audience-vets.jpg`,
        alt: 'The For Vets page: two cards, “For your practice” with an Order Online button and “For your clients” with a Download RX Form button.',
        aspectRatio: '680 / 438',
      } satisfies CaseMedia,
    },
  ],
};

export const strategy = {
  label: 'The strategy',
  heading: 'Starting with what matters.',
  body: [
    'To move faster, the team chose to adapt an existing e-commerce template. The challenge was to work within its constraints while creating an information structure that supported the business goals and the needs of both audiences.',
  ],
  decisions: [
    {
      title: 'Build on a template',
      text: 'Starting from a purchased template limited some UX and UI choices, but it saved time and let the product be tested early, in a lean way.',
    },
    {
      title: 'Organize around the audiences',
      text: 'Pet parents and vets each have their own way in: the store for owners, and a page for vets with ordering options, the prescription form and flow-rate guidelines.',
    },
    {
      title: 'Make the purchase legible',
      text: 'Categories lead the store, and the home page spells out how an order works, including the vet’s approval, before anyone reaches the checkout.',
    },
  ] satisfies CaseDecision[],
  template: {
    id: 'PO-05',
    title: 'The template',
    type: 'image',
    src: undefined as string | undefined,
    alt: 'The e-commerce template the site was built on.',
    aspectRatio: '520 / 506',
    caption: 'The template used as the base, to speed up development.',
    recommendation: 'The template screenshot from the original page (“This is the template used to speed up the development process”).',
    tip: 'Original page, section “Who is this for”, image beside “How can we leverage B2C sales?”. Show it whole.',
  } satisfies CaseMedia,
  journey: {
    id: 'PO-06',
    title: 'The purchase journey',
    type: 'image',
    src: undefined as string | undefined,
    alt: 'The journey in three phases: pre-sale (vet diagnostic, search options, simulating prices), purchase (buy a pack, create an account, receive the product) and after-sales (use, review and repurchase).',
    aspectRatio: '1200 / 400',
    caption: 'The journey agreed with the client and the strategy team, from the vet’s diagnosis to a repurchase.',
    recommendation: 'A legible crop of the product plan: the three phase headers and the eight steps, without the long notes below them.',
    tip: 'Original page, “Product plan”. Crop to the header row and steps; about 3:1.',
  } satisfies CaseMedia,
  journeyNote:
    'Account creation and checkout came with the platform: the journey marks them as an important touch point, outside the scope of this design work.',
  steps: {
    id: 'PO-07',
    title: 'How an order works',
    type: 'image',
    src: `${dir}/steps.jpg`,
    alt: 'Home page section “How to get oxygen for your pet”: 01 Order online, 02 We contact your vet, 03 We ship your order, beside a photo of someone browsing the site on a laptop.',
    aspectRatio: '846 / 598',
    caption: 'On the home page, the three steps of an order, with the vet’s approval in the middle.',
  } satisfies CaseMedia,
  sitemap: {
    label: 'Sitemap of the Pawprint Oxygen website',
    root: 'Home',
    groups: { main: 'Main navigation', external: '' },
    sections: [
      { title: 'For Vets', pages: [] },
      { title: 'Store', pages: ['Product list', 'Product details', 'Cart page'] },
      { title: 'Product details', pages: ['Quick guide', 'How it works', 'FAQs', 'Reviews', 'Add to cart'], note: 'Tabs, then the cart' },
      { title: 'About', pages: [] },
      { title: 'Log in', pages: [] },
    ] satisfies CaseSitemapSection[],
    caption: 'A hierarchical structure: from the home page to the main pages, then to the details.',
  },
};

/** A tested pair: the first alternative, the preferred one, and the original finding. */
export type CaseComparison = {
  title: string;
  question: string;
  finding: string;
  options: [CaseMedia, CaseMedia];
};

export const testing = {
  label: 'User tests',
  heading: 'Testing the details that matter.',
  body: [
    'Two interface decisions were explored during the wireframing stage, comparing alternatives for product selection and product information.',
    'Oxygen is a health product, and not a common one: feeling safe while choosing it was essential to the client.',
  ],
  comparisons: [
    {
      title: 'Product selection',
      question: 'How should people choose mask size, flow rate and the number of canisters?',
      finding: 'The second option was preferred: participants could identify and select the product options more quickly.',
      options: [
        {
          id: 'PO-08',
          title: 'Product selection, option 1',
          type: 'image',
          src: undefined as string | undefined,
          alt: 'Option 1: product page wireframe with the options listed one after another.',
          aspectRatio: '738 / 537',
          recommendation: 'Wireframe “Desktop - 8” from the user tests (the first selection option).',
          tip: 'Original page, “User tests”, first pair. Show the whole frame.',
        },
        {
          id: 'PO-09',
          title: 'Product selection, option 2',
          type: 'image',
          src: undefined as string | undefined,
          alt: 'Option 2, preferred: product page wireframe with mask size, flow rate and canisters as compact selectors beside the price.',
          aspectRatio: '738 / 537',
          recommendation: 'Wireframe “Desktop - 9” from the user tests (marked “Winner option”).',
          tip: 'Original page, “User tests”, first pair. Show the whole frame.',
        },
      ],
    },
    {
      title: 'Product information',
      question: 'How should the guide, how-it-works, FAQs and reviews sit on the product page?',
      finding: 'The second option was easier to navigate: the first hid part of the content when its sections expanded.',
      options: [
        {
          id: 'PO-10',
          title: 'Product information, option 1',
          type: 'image',
          src: undefined as string | undefined,
          alt: 'Option 1: product information in expanding sections.',
          aspectRatio: '754 / 640',
          recommendation: 'Wireframe “5 Product Detail - Quick Guide” (the first information option).',
          tip: 'Original page, “User tests”, second pair. Show the whole frame.',
        },
        {
          id: 'PO-11',
          title: 'Product information, option 2',
          type: 'image',
          src: `${dir}/info-b.jpg`,
          alt: 'Option 2, preferred: product information in tabs (Quick Guide, How it works, FAQs, Reviews), with the parts of the kit explained beside a product photo.',
          aspectRatio: '754 / 489',
        },
      ],
    },
  ] satisfies CaseComparison[],
};

export const experience = {
  label: 'The final experience',
  heading: 'Designed for clarity and confidence.',
  body: ['Pawprint’s navy and yellow on the template’s grid: a yellow action in every section, and For Vets in the main menu of every page.'],
  home: {
    id: 'PO-12',
    title: 'Home page, full length',
    type: 'image',
    src: `${dir}/home-page.jpg`,
    alt: 'The full home page: hero, reviews from pet parents, how to get oxygen for your pet, the two product families and the footer.',
    aspectRatio: '846 / 2690',
    caption: 'Home: the product in use, reviews from pet parents, and how ordering works.',
  } satisfies CaseMedia,
  vets: {
    id: 'PO-13',
    title: 'For Vets: resources',
    type: 'image',
    src: `${dir}/vets-resources.jpg`,
    alt: 'For Vets page section “Additional Resources & Flow Rate Guidelines”: RX approval form, therapy guide, flow rate and cage guidelines, each with a download link.',
    aspectRatio: '794 / 590',
    caption: 'For vets: the prescription form and the guidelines, ready to download.',
  } satisfies CaseMedia,
  vetsMobile: {
    id: 'PO-14',
    title: 'For Vets, mobile',
    type: 'image',
    src: `${dir}/m-vets.jpg`,
    alt: 'The For Vets page on a phone: “Your partner in oxygen therapy”, then the card for your practice.',
    aspectRatio: '577 / 1259',
  } satisfies CaseMedia,
  store: {
    id: 'PO-15',
    title: 'The store: categories',
    type: 'image',
    src: `${dir}/store-categories.jpg`,
    alt: 'The store opening with its categories in a carousel: rescue and transport oxygen, concentrators and cages, masks and accessories.',
    aspectRatio: '877 / 646',
    caption: 'The store opens on its categories, each with a line on when to use it.',
  } satisfies CaseMedia,
  kits: {
    id: 'PO-16',
    title: 'The store: kits',
    type: 'image',
    src: `${dir}/store-kits-v2.jpg`,
    alt: 'Rescue and transport oxygen kits, listed by pet type and weight, each with a price range and an Add to cart button.',
    aspectRatio: '875 / 456',
    caption: 'Kits named by pet and weight, so the right pack is easy to spot.',
  } satisfies CaseMedia,
  storeMobile: {
    id: 'PO-17',
    title: 'The store, mobile',
    type: 'image',
    src: `${dir}/m-store.jpg`,
    alt: 'The store on a phone, with the category carousel.',
    aspectRatio: '594 / 1295',
  } satisfies CaseMedia,
  homeMobile: {
    id: 'PO-18',
    title: 'Home, mobile',
    type: 'image',
    src: `${dir}/m-home.jpg`,
    alt: 'The home page on a phone.',
    aspectRatio: '254 / 551',
  } satisfies CaseMedia,
  product: {
    id: 'PO-19',
    title: 'Product page, final design',
    type: 'image',
    src: undefined as string | undefined,
    alt: 'The final product page.',
    aspectRatio: '16 / 9',
    caption: 'The product page: options and information as tested.',
    recommendation: 'The final, styled product page (desktop), with the tested selectors and tabs. Not in the original page: export it from the project’s Figma file if it exists.',
    tip: 'Crop to the product, its options and the tabs. Do not use a wireframe here.',
  } satisfies CaseMedia,
};

/** Colour and type, shown beside the finished interface. */
export const styleDetails = {
  label: 'Colour and type',
  palette: {
    label: 'Colour',
    groups: [
      {
        label: 'Primaries',
        swatches: [
          { name: 'Primary Blue', hex: '#183852' },
          { name: 'Primary Yellow', hex: '#FFD43D' },
          { name: 'Secondary Blue', hex: '#0D86E2' },
          { name: 'Primary Gray', hex: '#5E5E5E' },
        ],
      },
    ] satisfies CaseSwatchGroup[],
    note: 'Poppins for headings, Lato for text; icons at 24px.',
  },
  styleGuide: {
    id: 'PO-20',
    title: 'Style guide: colour scales',
    type: 'image',
    src: undefined as string | undefined,
    alt: 'The style guide colour scales: grays, primary blue, primary yellow and secondary blue, from 600 to 200.',
    aspectRatio: '1054 / 648',
    caption: 'The style guide: each primary in five steps.',
    recommendation: 'The colour scales from the original style guide.',
    tip: 'Original page, “Style guide → Colors”. Show it whole.',
  } satisfies CaseMedia,
};

/** The single conclusion: what was delivered, for which release, and with whom. */
export const delivery = {
  label: 'Delivery',
  heading: 'A foundation for the first release.',
  body: [
    'The work brought together research, information architecture, wireframes, interface design, testing and a visual style guide to support the first version of the experience.',
    'Pawprint Oxygen was an Oowlish client, and the project is also part of the portfolio of Oowlish and my colleagues there. It was documented before the final online release, so it includes no post-launch analytics; the live site has evolved since.',
  ],
  next: { label: 'Back to all work', href: '/work' },
};
