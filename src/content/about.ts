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
  /** Reserved image slot. Add `src` and `alt` when the image is ready. */
  media: {
    type: 'image',
    aspectRatio: '2 / 1',
    placeholder: 'Image — early work or a personal moment',
  } satisfies MediaAsset,
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

/** End of chapter 2: the way back to chapter 1, in the same form as `nextChapter`. */
export const previousChapter = {
  eyebrow: 'Previous — About me',
  headline: 'The person behind Frosa.',
  body: 'A little about my background, experience, and the perspective I bring to design.',
  action: 'Explore About me',
};

/* ── Chapter 2 · About my work ──────────────────────────────────────── */

export type ToolEra = {
  /** The tool that defined the period. */
  tool: string;
  /** What the practice grew to include in that period. */
  text: string;
};

export const toolsTimeline = {
  headline: 'The tools change.\nThe thinking evolves.',
  intro:
    'I started in Photoshop, learning composition and typography pixel by pixel. Every tool since then has changed how I work, and each one widened what the work could include. The visual foundation stayed.',
  label: 'From Photoshop to AI-\u2060assisted tools',
  /** Runs alongside every era: no tool replaced it. */
  foundation: 'Visual foundation, throughout',
  // No dates: the order is verified, exact years are not.
  eras: [
    { tool: 'Photoshop', text: 'Visual foundations: typography, composition, identity and detail.' },
    { tool: 'Sketch', text: 'From individual layouts to websites, interfaces and user flows.' },
    { tool: 'Figma', text: 'Design systems, product teams and collaborative design.' },
    { tool: 'AI-\u2060assisted tools', text: 'Faster exploration, prototyping and working directly in product codebases.' },
  ] satisfies ToolEra[],
};

/**
 * Reserved image slots between the About my work sections (wide bands, like the portrait).
 * Each one becomes real by adding `src` and `alt`; no other change is needed.
 */
export const workImages = {
  /** After "How I approach a project": the process in practice. */
  process: {
    type: 'image',
    aspectRatio: '1280 / 565',
    placeholder: 'Image — work in progress: workshop, sketches or a Figma board',
  } satisfies MediaAsset,
  /** Between the tools and "Craft makes the difference": a close look at detail. */
  detail: {
    type: 'image',
    aspectRatio: '1280 / 565',
    placeholder: 'Image — detail: typography, early work or an interface close-up',
  } satisfies MediaAsset,
};

export type ProcessStage = { number: string; title: string; text: string };

export const process = {
  heading: 'How I approach\na project.',
  intro: 'Four stages I come back to on almost every project. The order bends to the problem; the attention to it doesn’t.',
  stages: [
    {
      number: '01',
      title: 'Understand',
      text: 'Talking to people, exploring the context and looking at the evidence to understand what really needs solving.',
    },
    {
      number: '02',
      title: 'Define & lead',
      text: 'Turning insights into direction. I lead design initiatives, align priorities and help teams move from decisions to action.',
    },
    {
      number: '03',
      title: 'Design & build',
      text: 'Shaping flows, interfaces and interactions with care and character. I prototype and build to make ideas tangible.',
    },
    {
      number: '04',
      title: 'Review & improve',
      text: 'Looking critically at the work, gathering feedback and refining what could be better, from the overall direction to the smallest details.',
    },
  ] satisfies ProcessStage[],
};

export const craft = {
  headline: 'Craft makes\nthe difference.',
  body: [
    'Good design is more than getting things to work. It’s knowing what to simplify, what deserves attention, and how to give an experience its own character.',
    'From the first decision to the smallest interaction, craft is the care behind the work.',
  ],
  capricho: 'In Brazil, we call that care “capricho”.',
};

export const collaboration = {
  headline: 'Better work\nhappens together.',
  body: [
    'I work alongside product managers, engineers, stakeholders and other designers, and I like to bring them in early. Good decisions come from sharing context: the user’s problem, the business goal and the technical constraints, in the same conversation.',
    'I write decisions down, show work before it’s finished and ask for feedback often. Engineers tell me what’s possible; I make sure the experience still holds together. Design isn’t a handoff, it’s a shared responsibility.',
  ],
};
