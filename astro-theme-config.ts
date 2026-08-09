type NavItem = {
  label: string;
  href: string;
};

/**
 * astro-theme-config.ts
 *
 * Central configuration for the Tone theme.
 * Most site-level customization should happen in this file.
 */

const config = {
  site: {
    /** Production origin, used for canonical links, sitemap, and Open Graph metadata. */
    url: 'https://blogod.vercel.app',
    /** Subpath such as '/repo-name'. Keep empty when deploying at a domain root. */
    base: '',
    lang: 'en',
    locale: 'en_US',
    dateLocale: 'en-US',
    title: "Otavio's Blog",
    logoLabel: 'Otavio Dantas',
    description: 'Notes and ideas by Otavio Dantas',
    author: 'Otavio Dantas',
    /** Optional absolute or root-relative image URL for homepage/search/about social previews. */
    defaultOgImage: '',
  },

  // The logo already links to `/`. Add items here if you want visible header links.
  // Example: [{ label: 'Posts', href: '/posts' }, { label: 'About', href: '/about' }]
  nav: [
    { label: 'Posts', href: '/posts' },
    { label: 'About', href: '/about' },
    { label: 'Search', href: '/search' },
  ] as NavItem[],

  // Navigation lives in the header now; the footer keeps just the copyright line.
  footerNav: [] as NavItem[],

  content: {
    // Optional: pin the order of category filters. Unlisted categories follow alphabetically.
    categoryOrder: [] as string[],
  },

  behavior: {
    smoothScroll: true,
  },

  social: {
    website: 'https://blogod.vercel.app', // e.g. 'https://your-site.com'
    email: '', // e.g. 'hello@your-site.com'
    linkedin: '', // e.g. 'https://www.linkedin.com/in/yourhandle'
    github: 'https://github.com/otaviodantas', // e.g. 'https://github.com/yourhandle'
  },

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '',
    name: 'Otavio Dantas',
    role: 'Writes about technology, software, and whatever else sparks curiosity.',
    location: 'Brazil',
    focus: 'Notes, ideas, and experiments.',
    lead: 'This is my space for notes and ideas. I write about technology, software development, and whatever else sparks my curiosity — no rush, no noise.',
    headline: ['No rush,', 'no noise.'],
    statementLabel: 'About',
    statementTitle: 'Notes and ideas.',
    statement:
      'A deliberately short page: a brief bio, a few links, and enough context for readers who want to know who is writing.',
    careerLabel: 'Career',
    career: [
      {
        period: 'Current',
        title: 'Software development',
        description: 'Working on product and technology day to day.',
      },
    ],
    interests: [
      'Technology and software development',
      'Writing as a way to organize thinking',
      'Experiments and small discoveries',
    ],
    interestsLabel: 'Interests',
    interestsHeading: 'What the curiosity keeps returning to',
  },
};

export default config;
