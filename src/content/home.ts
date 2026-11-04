/** Home page content. Edit copy here; the section components only handle layout. */
import type { MediaAsset } from '../components/primitives/Media';

export const homeHero = {
  headline: 'Thoughtful design for everyday experiences.',
  statement: [
    // *…* marks phrases set in the serif, uppercase (see EditorialHero).
    'I’m a designer working across *digital products*, *UX strategy* and *visual design*.',
    'I like to understand the problem first, then shape the solution and refine the details that make it work.',
  ],
};

export const homeManifesto = {
  /** The first paragraph opens with the serif drop cap, as in the Figma manifesto column. */
  body: [
    // Built on the original Figma manifesto, including its closing pen line.
    'Great design lives in the details. Small decisions, clear interactions and well-made systems change how everyday things feel.',
    'I pay attention to what often goes unnoticed: what people need before they ask, where they hesitate, what makes something easy to trust. Research shows me the problem, strategy decides what matters, usability keeps it simple and visual craft gives it character.',
    'At its best, design feels like finding a pen exactly when you need one.',
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
  statements: ['I design with “capricho”.', 'A Brazilian sense of care, intention and dedication to every detail.'],
};

export const practiceOverview = {
  heading: 'From thinking to making.',
  body: 'Some ideas are clear on paper. Others only make sense once they’re built, tested and refined in the real product, together with the people who will ship it.',
  media: { type: 'image', aspectRatio: '672 / 427', placeholder: 'Practice image' } satisfies MediaAsset,
};

export const previousCollaborations = {
  heading: 'Previous Collaborations',
};
