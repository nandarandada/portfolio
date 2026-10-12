/** Home page content. Edit copy here; the section components only handle layout. */
import type { MediaAsset } from '../components/primitives/Media';

export const homeHero = {
  headline: 'Thoughtful design for everyday experiences.',
  statement: [
    'Frosa is an independent design practice connecting product thinking, visual craft, and hands-on building.',
    'From shaping the right experience to bringing thoughtful ideas to life.',
  ],
};

export const homeManifesto = {
  /** The first paragraph opens with the serif drop cap, as in the Figma manifesto column. */
  body: [
    'Great design lives in the details — and the decisions behind them.',
    'Good experiences are shaped by more than what appears on the screen. They come from understanding the problem, questioning assumptions, and making thoughtful decisions along the way.',
    'At Frosa, strategy, experience, and execution come together. From the first idea to a working product, every detail has a purpose.',
  ],
  /** The "Identity & Product · Frosa" seal. TODO(assets): export the seal as SVG to public/brand/seal.svg. */
  seal: { aspectRatio: '1 / 1', alt: '', placeholder: 'Seal' } satisfies MediaAsset,
};

export const expertise = ['Product Strategy', 'Experience Design', 'AI-Assisted Building'];

export const selectedWork = {
  heading: 'Selected Work',
  link: { label: 'Explore all work', href: '/work' },
};

export const capricho = {
  statements: ['We design with “capricho”.', 'A Brazilian sense of care, intention and dedication to every detail.'],
};

export const practiceOverview = {
  heading: 'From thinking to making.',
  body: 'Thoughtful decisions become more meaningful when they can be explored, built, and refined in context.',
  media: { type: 'image', aspectRatio: '672 / 427', placeholder: 'Practice image' } satisfies MediaAsset,
};

export const previousCollaborations = {
  heading: 'Previous Collaborations',
};
