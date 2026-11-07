/**
 * About page content, organised as two chapters: "About me" and "About my work".
 * Edit copy here; the section components only handle layout.
 * Facts come only from the brief and earlier verified copy. Items marked CONFIRM need
 * Fernanda's confirmation before launch.
 */
import type { MediaAsset } from '../components/primitives/Media';

// "AI-⁠assisted", "hands-⁠on": the word joiner (U+2060) keeps each compound on one line;
// it is invisible and needs no glyph.

export const aboutHero = {
  headline: 'When everyone can make, knowing what to make matters more.',
  statement: 'AI makes execution faster. Taste, judgment and strategy make it valuable.',
};

export const aboutTabs = {
  label: 'About',
  tabs: [
    { id: 'me', label: 'About me' },
    { id: 'work', label: 'About my work' },
  ],
} as const;

export type AboutTabId = (typeof aboutTabs.tabs)[number]['id'];

/* ── Chapter 1 · About me ────────────────────────────────────────────── */

export const aboutIntroduction = {
  /** Full-width portrait (Figma Frame 521, 1278 × 565). Add `src` and `alt` when the photo is ready. */
  portrait: {
    type: 'image',
    aspectRatio: '1280 / 565',
    objectPosition: 'center 30%',
    placeholder: 'Portrait — Fernanda Rosa',
  } satisfies MediaAsset,
  metadata: ['Bachelor of Design.', 'Based in Heidelberg, Germany.', 'Originally from Brazil.'],
  // Fernanda's wording, built on the original Figma About opening. **…** marks bold.
  body: [
    'Frosa is the independent practice of designer Fernanda Rosa, focused on **identity systems**, **digital products**, **user experience strategy** and the details that shape everyday experiences.',
    'I’m a designer with **more than 12 years of experience** across branding, ecommerce, SaaS products, hospitality and pet care. My foundation is visual: **typography, composition and detail**. I work at the intersection of visual design, product thinking and business strategy, with the same goal:',
  ],
  /** The goal the second paragraph leads into, set as the serif statement below it. */
  goal: 'Creating work that feels thoughtful, useful, and carefully crafted with purpose.',
};

export const fromPhotoshop = {
  headline: 'From Photoshop to product strategy.',
  body: [
    'Over 12 years in design, from visual identities and digital experiences to UX research and product strategy.',
    'The tools have changed. My attention to detail hasn’t.',
  ],
};

export const experienceWorldMap = {
  /** Accessible name of the section (no visible heading). */
  label: 'Projects in multiple countries',
  /** Describes the highlighted regions for screen readers. */
  mapLabel: 'World map highlighting North America, South America, Europe and South Asia',
};

export type Milestone = {
  year: string;
  title: string;
  text: string;
  /** Organisation or context, as written in the original Figma timeline. */
  org?: string;
};

export type CareerStage = {
  title: string;
  /**
   * Milestones from the original Figma About timeline (126:1213), plus 2026 from the later
   * brief. CONFIRM: dates differ from the phase-1 brief (2012 vs 2014 start, 2021 vs 2022,
   * 2022 vs 2023), and the grouping into stages is an editorial choice.
   */
  milestones: Milestone[];
};

export const careerTimeline = {
  label: 'Career timeline',
  heading: 'How my work grew.',
  intro: 'Each stage added a new layer to the one before. Visual craft runs through all of them.',
  craftThread: 'Visual craft, throughout',
  stages: [
    {
      title: 'Graphic design foundations',
      milestones: [
        { year: '2012', title: 'Starting a career in design', text: 'Brand identities, printed materials and marketing assets. A strong foundation in visual communication.', org: '3 Comunicação' },
        { year: '2014', title: 'Bachelor of Visual Design', text: 'With a focus on marketing.', org: 'ESPM' },
      ],
    },
    {
      title: 'Brand identity and visual systems',
      milestones: [
        { year: '2015', title: 'Building strong brand foundations', text: 'How brands communicate through consistency, typography and carefully built visual systems.' },
      ],
    },
    {
      title: 'Digital products and user experience',
      milestones: [
        { year: '2016', title: 'From identity to digital', text: 'Translating visual identities into digital experiences through interface design and user flows.', org: '3G Comunicação' },
        { year: '2017', title: 'Designing for complexity', text: 'My first large-scale UX project: complex information made clear, in a fast-moving startup.', org: '4all, Grupo Four' },
        { year: '2019', title: 'Modernizing established products', text: 'A mature hospitality platform, balancing familiar experiences with a modern, evolving product.', org: 'Pmweb, Let’s Book, CRM' },
      ],
    },
    {
      title: 'Research, strategy and product decisions',
      milestones: [
        { year: '2021', title: 'Designing at scale', text: 'Multicultural teams and data-informed products, improved through rapid feedback and customer insight.', org: 'GreatPetCare (Covetrus)' },
        { year: '2022', title: 'Designing across the pet industry', text: 'Short-term product and brand initiatives for pet-focused companies.', org: 'Guaw, Pawprint Oxygen, Angel Paw' },
        { year: '2024', title: 'Leading in a startup environment', text: 'A German startup where ownership, collaboration and rapid iteration were essential.', org: 'Appose' },
      ],
    },
    {
      title: 'Cross-functional collaboration and AI-\u2060assisted building',
      milestones: [
        { year: '2026', title: 'Designing closer to the product', text: 'Working in product codebases with engineers, using AI-\u2060assisted tools to prototype and refine.' },
      ],
    },
  ] as CareerStage[],
};

export const practiceEvolution = {
  evolution: ['Visual Design', 'Brand', 'Digital', 'Experience', 'Product', 'Strategy', 'Build'],
};

export const nextChapter = {
  eyebrow: 'Next — About my work',
  headline: 'How I approach the work.',
  body: 'Research, decisions, collaboration, and the craft behind the details.',
  action: 'Explore my process',
};

/* ── Chapter 2 · About my work ──────────────────────────────────────── */

export const workOpening = {
  headline: 'Good work starts with understanding the problem.',
  body: 'Before designing a screen or asking AI for a solution, I want to know what we’re trying to solve, who it’s for and what matters most. From there, I use research, design, collaboration and the right tools to move the work forward.',
};

export type ProcessStage = {
  number: string;
  title: string;
  text: string;
  human: string[];
  ai: string[];
  /** Short caveat under the stage. Optional. */
  note?: string;
};

export const process = {
  heading: 'How I work',
  intro: 'An approach I adapt to each project, not a fixed method. Two tracks run through it, my judgment and the tools that help me move faster, and they meet wherever a decision is made.',
  humanTrack: 'I lead',
  aiTrack: 'AI assists',
  stages: [
    {
      number: '01',
      title: 'Understand',
      text: 'The problem, the people, the business context, the constraints and the evidence we already have.',
      human: ['Listening to people', 'Asking questions', 'Understanding nuance', 'Noticing contradictions', 'Finding the real problem'],
      ai: ['Organising notes', 'Summarising material', 'Preparing research guides', 'Exploring hypotheses'],
      note: 'A summary never replaces reviewing the evidence.',
    },
    {
      number: '02',
      title: 'Define',
      text: 'Turning findings into decisions the team can act on.',
      human: ['Framing the problem', 'Seeing patterns', 'Prioritising', 'Weighing trade-offs', 'Aligning the team', 'Planning next steps'],
      ai: ['Exploring alternatives', 'Challenging assumptions', 'Organising information', 'Comparing approaches'],
    },
    {
      number: '03',
      title: 'Design',
      text: 'Flows, interfaces, systems and interactions that carry the direction.',
      human: ['Visual judgment', 'Originality and authorship', 'Typography and composition', 'Usability and accessibility', 'Brand expression', 'Refinement'],
      ai: ['Exploring variations', 'Supporting prototypes', 'Repetitive elements', 'Clearly defined tasks'],
    },
    {
      number: '04',
      title: 'Build & test',
      text: 'From concept to prototype or working interface change, together with engineering.',
      human: ['Judging quality', 'Making trade-offs', 'Working with engineers', 'Reviewing interactions', 'Testing assumptions', 'Keeping it coherent'],
      ai: ['Coding support', 'Prototyping', 'Technical exploration', 'Documentation', 'Repeatable checks'],
      note: 'I work in product codebases with AI-⁠assisted tools, alongside the engineers who own the release.',
    },
    {
      number: '05',
      title: 'Refine & learn',
      text: 'Reviewing the work, understanding feedback and improving what matters.',
      human: ['Interpreting feedback', 'Judging design quality', 'Spotting subtle problems', 'Final design decisions', 'Sharing what we learned'],
      ai: ['Organising feedback', 'Preparing comparisons', 'Helping iterate', 'Supporting documentation'],
    },
  ] satisfies ProcessStage[],
};

export const discovery = {
  headline: 'Discovery before automation.',
  body: [
    'Research needs people in the room. AI can help explore patterns and scale work that is already well understood, but the assumptions underneath it should be checked first.',
    'So I keep a simple order in mind. Not a mandatory workflow, just a habit.',
  ],
  steps: ['Understand', 'Explore', 'Test', 'Review', 'Scale'],
  scaleNote: 'when appropriate',
  loopNote: 'Not ready to scale? Back to understanding.',
};

export const collaboration = {
  headline: 'Good design is a team effort.',
  body: 'I work alongside product leaders, engineers and design directors, and product, business, design and engineering now sit closer together than ever. I like it that way. Design isn’t a handoff to development; it’s a conversation that starts early and keeps going.',
  disciplines: ['Product', 'Business', 'Design', 'Engineering'],
  practices: [
    { title: 'Sharing context early' },
    { title: 'Aligning on priorities' },
    { title: 'Talking through technical and business constraints' },
    { title: 'Making decisions together' },
    { title: 'Documenting decisions' },
    { title: 'Learning from feedback' },
  ],
};

export const craftThread = {
  headline: 'Craft is more than the final polish.',
  body: 'It’s in the questions we ask, the decisions we make and the details we choose not to overlook.',
  points: [
    'The quality of a research question',
    'The clarity of a decision',
    'The structure of a user flow',
    'The choice of typography',
    'The behaviour of an interaction',
    'The care taken in implementation',
  ],
};
