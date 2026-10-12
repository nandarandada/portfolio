/**
 * About page content. Edit copy here; the section components only handle layout.
 * Copy revised in phase 2 (About evolution): current hands-\u2060on product work, not a future ambition.
 */
import type { MediaAsset } from '../components/primitives/Media';
import type { Principle } from '../components/compositions/PrinciplesGrid';
import type { Milestone } from '../components/compositions/TimelineSection';

// "AI-\u2060assisted", "hands-\u2060on": the word joiner (U+2060) keeps each compound on one line;
// it is invisible and needs no glyph.

export const aboutHero = {
  headline: 'When everyone can make, knowing what to make matters more.',
  statement: 'AI makes execution faster. Taste, judgment and strategy make it valuable.',
};

export const aboutIntroduction = {
  /** Full-width portrait (Figma Frame 521, 1278 × 565). Add `src` and `alt` when the photo is ready. */
  portrait: {
    type: 'image',
    aspectRatio: '1280 / 565',
    objectPosition: 'center 30%',
    placeholder: 'Portrait — Fernanda Rosa',
  } satisfies MediaAsset,
  metadata: ['Bachelor of Design.', 'Based in Heidelberg, Germany.', 'Originally from Brazil.'],
  body: [
    // Location and origin are already stated in `metadata` above, so they are not repeated here.
    'My name is Fernanda Rosa, and I’m a designer with 12+ years of experience across brand identity, digital experiences, and product design.',
    'Over time, my work has evolved from shaping how things look and feel to influencing how digital products work, what gets built, and how experiences can be improved.',
    'Today, I combine UX thinking, visual craft, and hands-\u2060on implementation to turn design decisions into functional experiences.',
  ],
};

export const experienceWorldMap = {
  heading: ['12+ Years of Experience', 'Projects in Multiple Countries'],
  /** Describes the highlighted regions for screen readers. */
  mapLabel: 'World map highlighting North America, South America, Europe and South Asia',
};

export const practiceEvolution = {
  evolution: ['Visual Design', 'Brand', 'Digital', 'Experience', 'Product', 'Strategy', 'Build'],
  body: [
    'Each stage of my career added a new perspective — from visual identity and digital experiences to product thinking, strategy, and building.',
    'Today, these disciplines work together, helping me move between understanding a problem, shaping an experience, and bringing it into a working product.',
  ],
};

export const newWayOfWorking = {
  headline: 'Less handoff. More ownership.',
  body: [
    'My work doesn’t always follow a traditional design-to-development handoff.',
    'When a UX improvement is needed, I can work directly in the product codebase, create a branch, and implement the experience using AI-\u2060assisted development.',
    'Working in the actual product makes it possible to evaluate interactions in context, test behavior, and refine decisions without always creating a separate high-fidelity prototype first.',
    'The goal isn’t to produce more screens or more code. It’s to make better product decisions and turn them into experiences that work.',
  ],
  process: ['Frame', 'Explore', 'Build', 'Test', 'Learn', 'Refine'],
};

export const qualityPrinciples = {
  headline: 'Faster shouldn’t mean careless.',
  intro: ['Speed alone doesn’t create quality — responsibility for the result has to keep pace.'],
  /** Titles only: taken word for word from the brief, no invented descriptions. */
  principles: [
    { title: 'Clear requirements' },
    { title: 'Documented decisions' },
    { title: 'Defined states and edge cases' },
    { title: 'Reusable systems' },
    { title: 'Continuous testing' },
  ] satisfies Principle[],
  closing:
    'Documentation isn’t the final step — it’s part of how quality is built into the product. Building faster only matters when the result is worth using.',
};

export const tasteAndJudgment = {
  headline: 'Knowing what not to build matters, too.',
  body: [
    'When creating becomes easier, deciding what deserves to exist becomes more important.',
    'Good product decisions come from understanding users, questioning assumptions, balancing constraints, and recognizing when a simpler solution is better.',
    'Technology expands what’s possible. Judgment gives it direction.',
  ],
};

export const experienceTimeline = {
  label: 'Experience timeline',
  milestones: [
    { year: '2014', title: 'Starting in Design', text: 'Brand identities, printed materials, and visual communication.' },
    { year: '2015', title: 'Building Brand Foundations', text: 'Developing identity systems and scalable visual languages.' },
    { year: '2016', title: 'From Identity to Digital', text: 'Translating visual identities into websites and digital experiences.' },
    { year: '2017', title: 'Designing for Complexity', text: 'Transforming complex information into intuitive experiences.' },
    { year: '2019', title: 'Modernizing Established Products', text: 'Balancing familiar experiences with the evolution of mature products.' },
    { year: '2022', title: 'Designing with Data at Scale', text: 'Working with multicultural teams, KPIs, customer insights, and rapid feedback.' },
    { year: '2023', title: 'Focused Product Collaborations', text: 'Short-term initiatives across the pet industry.' },
    { year: '2024', title: 'Growing Through Ownership', text: 'Working in a small German startup with greater responsibility for product outcomes.' },
    { year: '2026', title: 'Designing Closer to the Product', text: 'Working directly in product codebases, combining UX thinking, visual design, and hands-\u2060on implementation to build and refine real product experiences.' },
  ] satisfies Milestone[],
};

export const futureDirection = {
  headline: 'The tools will keep changing. The responsibility to make good decisions won’t.',
  body: [
    'My interest lies in a future where designers can contribute across more of the product journey — from understanding opportunities to shaping, building, and improving experiences.',
    'Working directly in products is already part of my practice. What I want to keep developing is the technical understanding, product judgment, and responsibility needed to make that work more meaningful, reliable, and impactful.',
    'In the end, the measure isn’t how much gets built, but whether people’s experience genuinely improves.',
  ],
};

export const aboutCTA = {
  statements: ['Have a problem worth solving?'],
  action: { label: 'Let’s talk.', href: '/contact' },
};
