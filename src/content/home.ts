/** Home page content. Edit copy here; the section components only handle layout. */
import type { MediaAsset } from '../components/primitives/Media';

export const homeHero = {
  headline: 'Thoughtful design for everyday experiences.',
  statement: [
    // *…* marks phrases set in the serif, uppercase (see EditorialHero).
    // The original Figma statement. "PROPOSE" in the design was read as "purpose".
    'Creating identities and digital products with *purpose* for *people*, who believe details make the difference.',
  ],
};

export const homeManifesto = {
  /** The first paragraph opens with the serif drop cap, as in the Figma manifesto column. */
  // **…** marks words set in bold.
  body: [
    'Great design lives in the details. Small decisions, thoughtful interactions, and carefully crafted systems can transform everyday experiences.',
    'Frosa focuses on creating identities and digital products that are simple, intuitive, and meaningful. By anticipating needs and paying attention to what often goes unnoticed, we design experiences that feel natural, useful, and quietly delightful.',
    'Our approach brings together visual design, product strategy, and craft. In a world where almost anything can be created faster, knowing **what to create and how to make it matter** becomes even more important.',
  ],
  /** The "Identity & Product · Frosa" seal (decorative: the section is already named). */
  seal: { type: 'image', src: '/brand/seal.png', alt: '', aspectRatio: '1 / 1', objectFit: 'contain' } satisfies MediaAsset,
};

export const expertise = [
  'Product Design & UX',
  'Research & Product Strategy',
  'Brand Identity & Visual Design',
  'Prototyping & AI-\u2060Assisted Building',
];

export const selectedWork = {
  heading: 'Selected Work',
  link: { label: 'Explore all work', href: '/work' },
};

export const capricho = {
  statements: ['I design with “*capricho*”.', 'A Brazilian sense of care, intention and dedication to every detail.'],
};

export const practiceOverview = {
  heading: 'From thinking to making.',
  body: 'Some ideas are clear on paper. Others only make sense once they’re built, tested and refined in the real product, together with the people who will ship it.',
  media: { type: 'image', aspectRatio: '672 / 427', placeholder: 'Practice image' } satisfies MediaAsset,
};

export const previousCollaborations = {
  heading: 'Previous Collaborations',
};
