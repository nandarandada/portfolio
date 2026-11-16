/**
 * Great Pet Care Account (2022): the pet-care account — on the web and in the iOS and Android
 * app — redesigned mobile first within the Oowlish team, for its client Great Pet Care. The
 * public Great Pet Care website is a separate case.
 *
 * Sources:
 * - The 2022 portfolio page (Figma "My website", node 557:52693; also ~/Downloads/Desktop - 88.pdf,
 *   from which the account screens are rendered): the year, the user stories and audiences, the
 *   two-step plan, the sitemap, the test method and tasks, the simple version, the screens before
 *   and after the test, and the desktop screens.
 * - The usability feedback document pasted on that page: participants' notes on task 1.
 * - The GPA-App Figma file (yeeM9XgAwhT3gh6EuPMN4v): the recolouring step, the per-screen change
 *   lists, the personas, the tech notes, and the real screenshots — the Pawprint app before, the
 *   Great Pet Care app as built.
 * - Public: the Google Play listing and account.greatpetcare.com.
 * No metrics: nothing here was measured, and the test scores are not presented.
 *
 * Kept out on purpose: screens showing personal details (names, email, phone), the medical
 * documents in the records viewer, and the public website's own design decisions.
 *
 * Media without `src` render as editorial placeholders with guidance for the missing asset.
 */
import type { CaseMedia, CaseMetaItem, CaseSwatchGroup, CaseTheme } from './types';
import type { CaseSitemapSection } from '../../components/case/CaseSitemap';

const dir = '/work/great-pet-care';

/** Phone screenshots at their own proportions (the status bar is part of the capture). */
const phone = (
  id: string,
  title: string,
  file: string,
  alt: string,
  size: [number, number],
  caption?: string,
): CaseMedia => ({
  id,
  title,
  type: 'image',
  src: `${dir}/${file}`,
  alt,
  aspectRatio: `${size[0]} / ${size[1]}`,
  objectPosition: 'top',
  caption,
});

/** Great Pet Care's colours, sampled from the released screens and the app icon. */
export const greatPetCareTheme: CaseTheme = {
  base: '#004D3D', // dark green: headers, buttons, the icon
  surface: '#145B4C', // a lighter step of the same green
  accent: '#FAAD36', // the orange of the icon's dot
  onAccent: '#004D3D',
  line: '#2B7262',
  art: '#0B5A49',
  artDeep: '#00342A',
};

export const project = {
  title: 'Great Pet Care Account',
  meta: [
    { label: 'Client', value: 'Great Pet Care, through Oowlish' },
    { label: 'Period', value: '2022' },
    { label: 'Role', value: 'UX/UI design, as part of the Oowlish team' },
  ] satisfies CaseMetaItem[],
  disciplines: ['Product Design', 'UX/UI', 'Mobile first'],
  links: [
    { label: 'account.greatpetcare.com', href: 'https://account.greatpetcare.com/app' },
    { label: 'Google Play', href: 'https://play.google.com/store/apps/details?id=com.pawprint.mobile&hl=en' },
  ],
  linksNote: 'The account and the app have evolved since this first version.',
  headline: 'From Pawprint to Great Pet Care.',
  body: 'The account keeps a pet’s records, reminders and vets in one place, on the web and in the app. Inherited from Pawprint and grown feature by feature, it needed a clearer structure — so the team rebranded it, reorganized it into four areas and redesigned it mobile first, testing as we went.',
  /** Three released app screens, shown as phones side by side. */
  hero: [
    phone('GA-01', 'Dashboard', 'dashboard.webp', 'The Great Pet Care app dashboard: “Welcome, Nick!”, four pets, shortcuts to manage medical records and add a reminder, and a saved vet.', [720, 1558]),
    phone('GA-02', 'Manage Medical Records', 'records.webp', 'Manage Medical Records: tabs for records and vaccine history, an Upload Records button and a list of records with View and Share.', [720, 1558]),
    phone('GA-03', 'Current reminders', 'reminders.webp', 'Current Reminders: flea and tick medication, breakfast, dinner and a medical appointment, each with its next date and an on/off switch.', [720, 1600]),
  ],
};

export const start = {
  label: 'The starting point',
  heading: 'An app that belonged to another brand.',
  body: [
    'The account began as Pawprint’s pet medical-records app: a dashboard of quick links and a profile of tabs. As features were added — health journal, care notes, caretakers, recalls, deals — each got its own way in, and a structure never designed for mobile grew harder to use.',
  ],
  screens: [
    phone('GA-04', 'Pawprint: welcome', 'pawprint-splash.webp', 'The original Pawprint app on its orange welcome screen: “The Official Pet Medical Record”, with Sign Up and Log In.', [591, 1280], 'The Pawprint app.'),
    phone('GA-05', 'Pawprint: dashboard', 'pawprint-dashboard.webp', 'The Pawprint dashboard: my pets, an empty recent-activity section and a grid of six quick links, from requesting records to finding a dog walker.', [591, 1280], 'Dashboard: six quick links.'),
    phone('GA-06', 'Pawprint: pet profile', 'pawprint-profile.webp', 'A Pawprint pet profile: a row of five tabs, a vaccination prompt and a panel of record cards.', [591, 1280], 'Profile: five tabs, prompts, cards.'),
  ],
  /** The two audiences and their user stories, from the original page. */
  audiences: [
    {
      name: 'Pet owners',
      text: 'In the USA, with one or more pets.',
      story: 'As a pet owner, I want an app that helps me organize all aspects of the pet’s life so that I have everything in the same place.',
    },
    {
      name: 'Veterinarians',
      text: 'Clinic professionals.',
      story: 'As a veterinarian, I want an easy way to send records so that I can offer this new option to clients.',
    },
  ],
};

export const rebrand = {
  label: 'A new brand',
  heading: 'New colours, the same app.',
  body: [
    'The first change kept every screen and swapped colours and type by component, not by screen: each kind of button, input, menu and title changed the same way, so the whole app moved at once.',
  ],
  /** One screen through the project. */
  evolution: [
    { step: 'Pawprint', media: phone('GA-07', 'Dashboard: Pawprint', 'pawprint-dashboard.webp', 'The Pawprint dashboard, in orange.', [591, 1280]) },
    { step: 'New brand', media: phone('GA-08', 'Dashboard: recoloured', 'recolour-dashboard.webp', 'The same dashboard in Great Pet Care green: the layout is unchanged, with recent activity and quick links.', [720, 1600]) },
    { step: 'Redesigned', media: phone('GA-09', 'Dashboard: redesigned', 'dashboard.webp', 'The redesigned dashboard: a greeting, the pets, two clear actions and a section for the saved vet.', [720, 1558]) },
  ],
  palette: {
    label: 'Colour',
    note: 'Sampled from the app’s screens and icon.',
    groups: [
      { label: 'Pawprint', swatches: [{ name: 'Orange red', hex: '#E05338' }] },
      {
        label: 'Great Pet Care',
        swatches: [
          { name: 'Dark green', hex: '#004D3D' },
          { name: 'Green', hex: '#145B4C' },
          { name: 'Pale green', hex: '#EEF6EE' },
          { name: 'Orange', hex: '#FAAD36' },
        ],
      },
    ] satisfies CaseSwatchGroup[],
  },
};

export type AppComparison = {
  title: string;
  /** The design decision in one line (main pages), drawn from the documented change list. */
  decision?: string;
  /** Testing only: what was evaluated, and the documented feedback (or a note that none is recorded). */
  evaluated?: string;
  feedback?: string;
  before: CaseMedia;
  after: CaseMedia;
  /** What changed: the change list written in the design file, or read from the screens. */
  changes: string[];
};

export const structure = {
  label: 'A simpler structure',
  heading: 'Every feature in four or five pages.',
  body: [
    'Every feature, current and planned, was listed and moved into as few pages as possible. The structure was then cut down to what existed: the focus of version one.',
  ],
  plan: {
    vision: {
      step: 'The full vision',
      tag: 'Explored, not in version one',
      text: 'Current and planned features together — appointments, messages, prescriptions, wellness plans.',
      screens: [
        phone('GA-35', 'Full vision: vet profile', 'vision-vet-profile.webp', 'A full-vision vet profile: request record, book appointment, message and online pharmacy, the pets this vet sees, and wellness plans.', [720, 2725]),
        phone('GA-37', 'Full vision: records', 'vision-records.webp', 'Full-vision records with a prescriptions tab: medicines to download, by pet.', [720, 2308]),
      ],
    },
    version: {
      step: 'Version one',
      tag: 'The proposal',
      text: 'Current features only, in four areas.',
      features: ['Pets', 'Reminders', 'Vets', 'Records', 'Recalls'],
    },
  },
  sitemap: {
    label: 'Sitemap of the Great Pet Care account',
    root: 'Dashboard',
    groups: { main: 'Main navigation', external: '' },
    sections: [
      { title: 'Dashboard', pages: ['Pet shortcuts', 'Suggestions', 'Create a reminder', 'Vet finder', 'Articles'] },
      { title: 'My Pets', pages: ['Pet profile', 'Add or edit a pet', 'Reminders', 'Food center'] },
      { title: 'Vets', pages: ['Vet list', 'Records list', 'Request a record'], note: 'Requests step by step' },
      { title: 'Profile', pages: ['Profile information', 'Notifications', 'Communication center', 'Password'] },
    ] satisfies CaseSitemapSection[],
    caption: 'Hierarchical, from the dashboard to the main pages; creating and requesting run as step-by-step flows.',
  },
  pagesIntro: 'In the app, each main page was redesigned around three personas — the healthy, the sick and the new pet parent — and handed over with a list of changes.',
  comparisons: [
    {
      title: 'Dashboard',
      decision: 'A greeting and two clear actions instead of six quick links.',
      before: phone('GA-11', 'Dashboard, before', 'pawprint-dashboard.webp', 'Before: the Pawprint dashboard with recent activity and six quick links.', [591, 1280]),
      after: phone('GA-12', 'Dashboard, after', 'dashboard.webp', 'After: “Welcome, Nick!”, the pets, two actions and the saved vet.', [720, 1558]),
      changes: ['A title that greets the pet parent', 'A new style for the main actions', 'A section for the pet’s vets', '“Add a Photo” and “Recent activity” removed', 'The navigation reordered'],
    },
    {
      title: 'All pets',
      decision: 'The pets become a page of their own, with one way to add another.',
      before: phone('GA-13', 'All pets, before', 'pawprint-pets.webp', 'Before: a pet switcher listing All Pets, one pet and Add New, over the profile.', [591, 1280]),
      after: phone('GA-14', 'All pets, after', 'pets.webp', 'After: a Pets page with three pet photos and an Add New Pet button.', [720, 1558]),
      changes: ['“All Pets” becomes the main page', 'A title', 'Filters and “Recent activity” removed', 'An “Add New Pet” button'],
    },
    {
      title: 'Pet profile',
      decision: 'A list of actions instead of a row of tabs.',
      before: phone('GA-15', 'Pet profile, before', 'pawprint-profile.webp', 'Before: the Pawprint pet profile with tabs and record cards.', [591, 1280]),
      after: phone('GA-16', 'Pet profile, after', 'pet-profile.webp', 'After: the pet’s details in a card, then a list of actions: health journal, care notes, reminders and medical records.', [720, 1558]),
      changes: ['The profile opens on its own page', 'A list of the pet’s details', 'Tabs replaced by a list of actions', 'Record cards moved out of the profile'],
    },
  ] satisfies AppComparison[],
};

/** Version one as proposed — before the test — grouped by task. */
export const versionOne = {
  label: 'Version one, mobile first',
  heading: 'One task, one place.',
  body: [
    'The simpler version as designed for the first release, on mobile first. Each area answers one need.',
  ],
  groups: [
    {
      title: 'Dashboard',
      text: 'Pets, reminders, vets, records and recalls on one page, each with its next action.',
      scroll: phone('GA-28', 'Dashboard', 'v1-dashboard.webp', 'The version-one dashboard, full length: pets, reminders, vets, records and pet product recalls.', [692, 3510]),
    },
    {
      title: 'Pets',
      text: 'All pets in one place; a profile with the pet’s details, its reminders and its records.',
      screens: [
        phone('GA-29', 'My Pets', 'v1-pets.webp', 'My Pets: Add New Pet, filters by kind of pet, and a confirmation that the pet profile was saved.', [692, 1321]),
        phone('GA-39', 'Pet profile', 'v1-pet-profile.webp', 'Toby’s profile: a photo, age, gender, type and breed, then tabs for reminders, weight and records, with Add Reminder.', [692, 2615]),
      ],
    },
    {
      title: 'Vets',
      text: 'Saved vets with their address and hours, and a search to add one.',
      screens: [
        phone('GA-30', 'My Vets', 'v1-vets.webp', 'My Vets: Add New Vet, a saved clinic with its address and hours, Request Records and Online Pharmacy.', [692, 1645]),
        phone('GA-31', 'Add Vet', 'v1-add-vet.webp', 'Add Vet: search by clinic name, a vet finder link, and recently contacted clinics, each with Add Vet.', [692, 2477]),
      ],
    },
    {
      title: 'Records and reminders',
      text: 'Records requested from the vet, ready to download; reminders set by pet.',
      screens: [
        phone('GA-26', 'My Pet Records', 'v1-records.webp', 'My Pet Records: request records directly from your vet, choose a pet, filter by date, and download or update each record.', [692, 1923]),
        phone('GA-27', 'My Reminders', 'v1-reminders.webp', 'My Reminders: reminders and alerts tabs, Add New Reminder, the pets, and a flea-and-tick reminder with its next date.', [692, 1805]),
      ],
    },
  ],
};

export const testing = {
  label: 'User testing',
  heading: 'Five tasks, rated one by one.',
  body: [
    'Figma prototypes were tested at the wireframe stage and again with the high-fidelity screens. The last test mattered most: the design was so different from the original that the team wasn’t sure the new actions and structure were easy to use.',
    'Participants followed the prototype and answered a questionnaire, rating each task from 1 (super easy and enjoyable) to 5 (not able to complete it) and adding comments. There was no direct observation, so behaviour and reactions weren’t captured — only what people wrote.',
  ],
  tasks: ['Add a pet', 'Find and save a vet', 'Request a vet record', 'Find the record', 'Download it'],
  /** The UI prototype, organised by test task (a capture of the Figma prototype map). */
  prototype: {
    id: 'GA-38',
    title: 'The prototype, by task',
    type: 'image',
    src: `${dir}/prototype-map.webp`,
    alt: 'The Figma prototype map for the test: the dashboard, my pet, vets, records and profile screens connected by flow lines, grouped under Task 1, add a pet, and Task 2, add a vet.',
    aspectRatio: '1998 / 1510',
    caption: 'The prototype as tested, organised by task.',
  } satisfies CaseMedia,
  /** Verbatim notes on task 1 from the feedback document (spelling kept). Scores are not shown. */
  quotes: {
    label: 'What participants wrote — task 1, add a pet',
    items: [
      { tone: 'issue', text: '“New pet?” is weird for a new user who may have multiple pets and is just adding them all in.' },
      { tone: 'issue', text: 'What is a “house” in the pet types?' },
      { tone: 'praise', text: 'The navigation at the bottom is top-notch and really allows users to easily change between the different screens.' },
      { tone: 'praise', text: 'I really like that it’s very accessible to add pets.' },
    ],
  },
  afterIntro: 'Two pages changed the most between the test and the final screens. The notes don’t record which comment led to each change, so the changes below are read from the screens.',
  /** Before and after the high-fidelity test, from the original page. */
  comparisons: [
    {
      title: 'Dashboard',
      evaluated: 'Where the prototype starts, and every task with it.',
      feedback: 'Participants praised the bottom navigation and how easy it was to add pets.',
      before: phone('GA-22', 'Dashboard, before the test', 'test-dashboard-before.webp', 'Before the test: the dashboard with one pet, a single vet, records, then a block for Toby with a vaccination prompt, products and an article.', [720, 4915]),
      after: phone('GA-23', 'Dashboard, after the test', 'test-dashboard-after.webp', 'After the test: pets in a row, My Vets with an Add Your Vet button, records, and a Pet Products Recalls section with Add Recall Alert.', [720, 3618]),
      changes: ['Pets in a row, with room for more than one', '“My Vet” becomes “My Vets”, with an “Add Your Vet” button', 'A recalls section with “Add Recall Alert”', 'The per-pet block moved off the dashboard', 'Reminders in the navigation bar'],
    },
    {
      title: 'Pet profile',
      evaluated: 'A pet’s page: details, reminders and records.',
      feedback: 'Not covered by the notes that remain.',
      before: phone('GA-24', 'Pet profile, before the test', 'test-profile-before.webp', 'Before the test: Toby’s profile with three tabs — reminders, weight and records — and a list of reminders.', [720, 2718]),
      after: phone('GA-25', 'Pet profile, after the test', 'test-profile-after.webp', 'After the test: two tabs, updates and records; reminders and alerts in a row; then products and articles for Toby.', [720, 3656]),
      changes: ['Three tabs become two: updates and records', 'Reminders and alerts in one row', 'One “Add Reminders” button after them', 'Products and articles for the pet, now on its profile'],
    },
  ] satisfies AppComparison[],
};

/** After the test: the desktop adaptation, two app flows and the notes for development. */
export const handover = {
  label: 'Handover',
  heading: 'Desktop, flows and notes for development.',
  body: [
    'After the test, the same structure was adapted to desktop, and the app’s everyday flows went to development with notes written beside each screen.',
  ],
  desktopLabel: 'The same structure on desktop',
  desktop: [
    { id: 'GA-32', title: 'Desktop: dashboard', type: 'image', src: `${dir}/v1-desktop-dashboard.webp`, alt: 'The dashboard on desktop: a profile-completion prompt, then my pets, reminders, my vets and records as cards, and pet product recalls.', aspectRatio: '1600 / 1136', objectPosition: 'top' },
    { id: 'GA-33', title: 'Desktop: records', type: 'image', src: `${dir}/v1-desktop-records.webp`, alt: 'My Pet Records on desktop: the pets in a row, Request Records, and records to download or update.', aspectRatio: '1600 / 1136', objectPosition: 'top' },
    { id: 'GA-34', title: 'Desktop: reminders', type: 'image', src: `${dir}/v1-desktop-reminders.webp`, alt: 'My Reminders on desktop, with the pets in a row and Add Reminder.', aspectRatio: '1600 / 1136', objectPosition: 'top' },
  ] satisfies CaseMedia[],
  flowsLabel: 'Two app flows',
  flows: [
    phone('GA-17', 'Reminder type', 'reminder-type.webp', '“What type of reminder are you creating?”: suggested reminders for flea and tick and heartworm, then medical, grooming, fitness, food, weight, potty, behaviour and other.', [591, 1280], 'Creating a reminder: suggested types first.'),
    phone('GA-20', 'Requesting records', 'records-request.webp', '“Where are we requesting records from?”: a search by clinic name and location, with a list of animal hospitals.', [720, 1600], 'Requesting records: find the vet first.'),
  ],
  /** Tech notes from the design file, condensed. */
  notes: [
    { title: 'One place for the main button', text: 'Some screens had the main button at the top, others at the bottom. The redesign put it at the bottom, everywhere.' },
    { title: 'Reminders from anywhere', text: 'The dashboard opens every pet’s reminders, with a filter; from a pet’s profile, that pet is already selected.' },
    { title: 'Weight that reads at a glance', text: 'The last 30 days by default, a graph that follows the filter, and the unit shown.' },
    { title: 'Web and app, aligned', text: 'An “Add Recall Alert” button on the home screen, and the same section names as on the web.' },
  ],
};

export const delivery = {
  label: 'Delivery',
  heading: 'What was designed.',
  body: [
    'The rebrand of the inherited app; the feature inventory, sitemap and two-level product plan; wireframes, prototypes and user tests; the version-one screens for mobile and desktop; notes for development; and the app’s store assets — icons for iOS and Android, and screenshots for each device size.',
    'Great Pet Care was an Oowlish client. I worked on the project as part of the Oowlish team. The account and the app have evolved since.',
  ],
  icon: {
    id: 'GA-21',
    title: 'App icon',
    type: 'image',
    src: `${dir}/app-icon.webp`,
    alt: 'The Great Pet Care app icon: a white serif G with an orange dot on dark green.',
    aspectRatio: '1 / 1',
  } satisfies CaseMedia,
  next: { label: 'Back to all work', href: '/work' },
};
