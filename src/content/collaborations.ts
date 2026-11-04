import type { Collaboration } from '../components/compositions/CollaborationsGrid';

/**
 * Previous collaborations (copy from the Figma Home frame).
 * TODO(assets): logo files were not exported — the Figma MCP connection hit its rate limit.
 * Export each logo from Figma as SVG into public/brand/clients/ and add `src` below.
 * Slot proportions are measured from the Figma render.
 */
export const collaborations: Collaboration[] = [
  {
    name: 'GreatPetCare',
    logo: { aspectRatio: '175 / 44', alt: 'Covetrus GreatPetCare', placeholder: 'Logo' },
    text: 'Product design, content experiences and brand evolution across GreatPetCare’s digital ecosystem, as part of the team during the Covetrus transition.',
  },
  {
    name: 'The Lanners',
    logo: { aspectRatio: '135 / 44', alt: 'The Lanners', placeholder: 'Logo' },
    text: 'I contributed to a strategic website redesign that reintroduced the brand and its evolving product portfolio.',
  },
  {
    name: 'Guaw',
    logo: { aspectRatio: '168 / 48', alt: 'Guaw', placeholder: 'Logo' },
    text: 'Design work on key ecommerce journeys and the purchase experience, during a period of rapid online growth.',
  },
];
