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
    linkedin: 'https://www.linkedin.com/in/ot%C3%A1viodantas',
    github: 'https://github.com/otaviodantas', // e.g. 'https://github.com/yourhandle'
  },

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '',
    name: 'Otavio Dantas',
    role: 'Software engineer working on satellite imagery, ML pipelines, and the cloud infrastructure under them.',
    location: 'Belo Horizonte, Brazil',
    focus: 'Geospatial data platforms, AWS infrastructure, and production observability.',
    lead: 'I build satellite and ML systems for agriculture at Syngenta Digital — APIs, data pipelines, and the AWS infrastructure that keeps them running. This is where I keep the notes behind that work.',
    headline: ['No rush,', 'no noise.'],
    statementLabel: 'About',
    statementTitle: 'Notes and ideas.',
    statement:
      'A deliberately short page: a brief bio, a few links, and enough context for readers who want to know who is writing.',
    careerLabel: 'Career',
    career: [
      {
        period: '2022 — Present',
        title: 'Software Engineer · Syngenta Digital Brasil',
        description:
          'Founding engineer on a satellite + ML platform that detects nematode crop damage, serving 200K+ requests/day across 7 AWS services. Built the cloud-aware imagery pipeline, scaled the ML workload from EC2 to auto-scaling ECS, and now lead its redesign into a Rails monolith with PostGIS.',
      },
      {
        period: '2021 — 2022',
        title: 'Software Engineer · CATSKILLET',
        description:
          'Real-time fraud prevention for credit acquisition at Luizalabs (Python, FastAPI, RabbitMQ), and an architecture redesign of a client prospecting platform at Banco BTG (FastAPI, GCP, ArgoCD).',
      },
      {
        period: '2021',
        title: 'Junior Software Engineer · Connect Group',
        description:
          'E-commerce and reservation platform for SESI/SEBRAE, delivered end to end in five months (Python, SQLAlchemy, PostgreSQL).',
      },
      {
        period: '2020 — 2021',
        title: 'Intern Developer · Fundação Uniselva',
        description:
          'Community-facing web applications for public-sector digitization projects in Mato Grosso (Python, Flask, PostgreSQL).',
      },
    ],
    interests: [
      'Geospatial data and satellite imagery at scale',
      'Infrastructure as code and observability that earns its keep',
      'Writing as a way to organize thinking',
    ],
    interestsLabel: 'Interests',
    interestsHeading: 'What the curiosity keeps returning to',
  },
};

export default config;
