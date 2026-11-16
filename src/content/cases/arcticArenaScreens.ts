/**
 * Arctic Arena — the final screens, for the screen navigator.
 *
 * Source: the project's Figma file, page "Site Step 3 - UI". Notes are taken from the file's
 * "Documentation" frames, written for development.
 *
 * Added for the portfolio (disclosed under the navigator): the design's placeholder boxes hold
 * invented sponsor and team logos (Nordlys Energy, Polar Byte, Fjell Audio and others: none is a
 * real company); stream, news and product slots show the project's own artwork and merchandise
 * mockups. The two remaining photos of real people (About, influences) are blurred.
 *
 * Hotspots are the site's own links, in Figma frame pixels: [x, y, width, height, target].
 */
import type { CaseScreenPage } from './types';

const dir = '/work/arctic-arena/screens';

/** The main site header (1440 wide). */
const siteMenu: CaseScreenPage['hotspots'] = [
  [110, 18, 180, 58, 'home'],
  [386, 24, 72, 46, 'event'],
  [482, 24, 74, 46, 'about'],
  [584, 24, 102, 46, 'sponsors'],
  [712, 24, 68, 46, 'news'],
  [806, 24, 84, 46, 'shop'],
  [914, 24, 96, 46, 'join'],
];

/** The shop header: categories lead to the product list. */
const shopMenu: CaseScreenPage['hotspots'] = [
  [115, 18, 196, 58, 'shop'],
  [362, 24, 86, 46, 'product-list'],
  [487, 24, 72, 46, 'product-list'],
  [595, 24, 64, 46, 'product-list'],
  [700, 24, 90, 46, 'product-list'],
  [1142, 24, 104, 46, 'sign-in'],
];

/** The shop footer, anchored to the bottom of each page (frame height `h`). */
const shopFooter = (h: number): CaseScreenPage['hotspots'] => [
  [112, h - 214, 70, 32, 'help'],
  [112, h - 180, 110, 32, 'track'],
  [340, h - 247, 130, 32, 'help'],
  [340, h - 214, 130, 32, 'help'],
];

const card = (x: number, y: number, w: number, h: number, target: string): [number, number, number, number, string] => [x, y, w, h, target];

export const screenPages: CaseScreenPage[] = [
  /* ── Main site ── */
  {
    id: 'home',
    label: 'Home',
    group: 'Main site',
    desktop: { src: `${dir}/d-home.jpg`, width: 1440, height: 3578 },
    mobile: { src: `${dir}/m-home.jpg`, width: 320, height: 4331 },
    hotspots: [
      ...siteMenu,
      [811, 1343, 154, 40, 'event'],
      [1159, 1686, 118, 40, 'join'],
      [1149, 2721, 133, 40, 'shop'],
      [1101, 3162, 181, 40, 'news'],
      card(171, 2831, 354, 316, 'news-detail'),
      card(542, 2831, 354, 316, 'news-detail'),
      card(917, 2831, 354, 316, 'news-detail'),
    ],
    notes: [
      'Start scrolls the page to the first section.',
      'The dots at the side mark the section in view and stay fixed while scrolling.',
      'Twitch streams open the channel in a new tab.',
      'Choosing a social network changes the image to illustrate its content; the link opens it in a new tab.',
      'The shop opens in a new tab.',
      'Cards have their own hover states.',
    ],
  },
  {
    id: 'event',
    label: 'Event',
    group: 'Main site',
    desktop: { src: `${dir}/d-event.jpg`, width: 1440, height: 4608 },
    mobile: { src: `${dir}/m-event.jpg`, width: 320, height: 4555 },
    hotspots: [
      ...siteMenu,
      card(368, 2375, 705, 414, 'event-detail'),
      card(368, 3055, 705, 414, 'event-detail'),
      card(368, 3735, 705, 414, 'event-detail'),
      card(171, 1713, 354, 316, 'news-detail'),
      card(542, 1713, 354, 316, 'news-detail'),
      card(917, 1713, 354, 316, 'news-detail'),
    ],
    notes: [
      'The banner is a suggestion the client can change. It stays full width on every screen, with the words kept inside the grid.',
      'Each year has its own dot in the side navigation: more editions, more dots.',
      'Rules, illustration and logos can be downloaded.',
      'Rewind opens the page of that edition.',
    ],
  },
  {
    id: 'event-detail',
    label: 'Edition',
    group: 'Main site',
    desktop: { src: `${dir}/d-event-detail.jpg`, width: 1440, height: 2625 },
    mobile: { src: `${dir}/m-event-detail.jpg`, width: 320, height: 3843 },
    hotspots: [...siteMenu, [110, 140, 110, 44, 'event']],
    notes: ['One page per edition, with its games, teams and winners.', 'The tabs scroll the page to their section.'],
  },
  {
    id: 'about',
    label: 'About',
    group: 'Main site',
    desktop: { src: `${dir}/d-about.jpg`, width: 1440, height: 3198 },
    mobile: { src: `${dir}/m-about.jpg`, width: 320, height: 4967 },
    hotspots: [...siteMenu],
    notes: ['History, influences, Svalbard and values, each reachable from the tabs.', 'The dots at the side mark the section in view.'],
  },
  {
    id: 'sponsors',
    label: 'Sponsors',
    group: 'Main site',
    desktop: { src: `${dir}/d-sponsors.jpg`, width: 1440, height: 2058 },
    mobile: { src: `${dir}/m-sponsors.jpg`, width: 320, height: 3462 },
    hotspots: [...siteMenu, [1159, 1346, 118, 40, 'join']],
    notes: ['The banner is a suggestion the client can change.', 'Join us opens the partner page in a new tab.'],
  },
  {
    id: 'news',
    label: 'News',
    group: 'Main site',
    desktop: { src: `${dir}/d-news.jpg`, width: 1440, height: 2016 },
    mobile: { src: `${dir}/m-news.jpg`, width: 320, height: 3513 },
    hotspots: [
      ...siteMenu,
      ...[170, 541, 916].flatMap((x) => [190, 540, 891, 1242].map((y) => card(x, y, 354, 316, 'news-detail'))),
    ],
  },
  {
    id: 'news-detail',
    label: 'Article',
    group: 'Main site',
    desktop: { src: `${dir}/d-news-detail.jpg`, width: 1440, height: 1832 },
    mobile: { src: `${dir}/m-news-detail.jpg`, width: 320, height: 3020 },
    hotspots: [...siteMenu, [110, 140, 110, 44, 'news']],
  },

  /* ── Partners: its own page, opened in a new tab ── */
  {
    id: 'join',
    label: 'Join us',
    group: 'Partners',
    desktop: { src: `${dir}/d-join.jpg`, width: 1440, height: 2560 },
    mobile: { src: `${dir}/m-join.jpg`, width: 320, height: 2969 },
    hotspots: [[110, 18, 180, 58, 'home']],
    notes: [
      'Why participate, why it is special, the games and a direct contact.',
      'Each dot stands for a part of the page; it stays fixed on scroll and marks where you are.',
      'The banner is a suggestion the client can change.',
    ],
  },

  /* ── Shop: opened in a new tab ── */
  {
    id: 'shop',
    label: 'Shop',
    group: 'Shop',
    desktop: { src: `${dir}/d-shop.jpg`, width: 1440, height: 2345 },
    mobile: { src: `${dir}/m-shop.jpg`, width: 320, height: 2885 },
    hotspots: [
      ...shopMenu, ...shopFooter(2345),
      card(245, 593, 455, 398, 'product-list'),
      card(740, 593, 455, 398, 'product-list'),
      ...[171, 451, 730, 1010].flatMap((x) => [1016, 1484].map((y) => card(x, y, 260, 438, 'product'))),
    ],
    notes: [
      'The banner is a placeholder: the client will add one with the real products.',
      'Categories lead to the product list; each product to its page.',
    ],
  },
  {
    id: 'product-list',
    label: 'Product list',
    group: 'Shop',
    desktop: { src: `${dir}/d-product-list.jpg`, width: 1440, height: 2623 },
    mobile: { src: `${dir}/m-product-list.jpg`, width: 320, height: 2414 },
    hotspots: [...shopMenu, ...shopFooter(2623), ...[356, 646, 936].flatMap((x) => [280, 748, 1216, 1684].map((y) => card(x, y, 260, 438, 'product')))],
    notes: ['Filters on the left; each product opens its page.'],
  },
  {
    id: 'product',
    label: 'Product',
    group: 'Shop',
    desktop: { src: `${dir}/d-product.jpg`, width: 1440, height: 1968 },
    mobile: { src: `${dir}/m-product.jpg`, width: 320, height: 2851 },
    hotspots: [...shopMenu, ...shopFooter(1968), ...[171, 447, 729, 1009].map((x) => card(x, 1107, 260, 438, 'product'))],
  },
  {
    id: 'help',
    label: 'Help',
    group: 'Shop',
    desktop: { src: `${dir}/d-help.jpg`, width: 1440, height: 1832 },
    mobile: { src: `${dir}/m-help.jpg`, width: 320, height: 3222 },
    hotspots: [...shopMenu, ...shopFooter(1832)],
    notes: ['One generic layout for every simple text page: help, safe shopping, returns.'],
  },
  {
    id: 'track',
    label: 'Track order',
    group: 'Shop',
    desktop: { src: `${dir}/d-track.jpg`, width: 1440, height: 1772 },
    mobile: { src: `${dir}/m-track.jpg`, width: 320, height: 2613 },
    hotspots: [...shopMenu, ...shopFooter(1772)],
    notes: ['Each ordered product links to its page, and can be added to the bag again.'],
  },
  {
    id: 'sign-in',
    label: 'Sign in',
    group: 'Shop',
    desktop: { src: `${dir}/d-sign-in.jpg`, width: 1440, height: 988 },
    mobile: { src: `${dir}/m-sign-in.jpg`, width: 320, height: 1315 },
    hotspots: [...shopMenu, ...shopFooter(988), [712, 310, 156, 34, 'register'], [633, 534, 172, 34, 'forgot']],
  },
  {
    id: 'register',
    label: 'Register',
    group: 'Shop',
    desktop: { src: `${dir}/d-register.jpg`, width: 1440, height: 1121 },
    mobile: { src: `${dir}/m-register.jpg`, width: 320, height: 1514 },
    hotspots: [...shopMenu, ...shopFooter(1121)],
  },
  {
    id: 'forgot',
    label: 'Forgot password',
    group: 'Shop',
    desktop: { src: `${dir}/d-forgot.jpg`, width: 1440, height: 1007 },
    mobile: { src: `${dir}/m-forgot.jpg`, width: 320, height: 1327 },
    hotspots: [...shopMenu, ...shopFooter(1007)],
  },

  /* ── States ── */
  {
    id: 'error',
    label: 'Error',
    group: 'States',
    desktop: { src: `${dir}/d-error.jpg`, width: 1440, height: 787 },
    mobile: { src: `${dir}/m-error.jpg`, width: 320, height: 1007 },
    hotspots: [...siteMenu],
  },
  {
    id: 'offline',
    label: 'No connection',
    group: 'States',
    desktop: { src: `${dir}/d-offline.jpg`, width: 1440, height: 820 },
    mobile: { src: `${dir}/m-offline.jpg`, width: 320, height: 1007 },
    hotspots: [...siteMenu],
  },
];
