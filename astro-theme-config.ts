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
    url: 'https://otaviodantas.com',
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
    email: '', // e.g. 'hello@your-site.com'
    linkedin: 'https://www.linkedin.com/in/ot%C3%A1viodantas',
    medium: 'https://medium.com/@otavio-dantas',
    github: 'https://github.com/otaviodantas', // e.g. 'https://github.com/yourhandle'
  },

  about: {
    /** Profile image URL. Leave empty to use the text-only About layout. */
    profileImage: '',
    name: 'Otavio Dantas',
    role: 'Software engineer working on geospatial platforms for agriculture, the infrastructure under them, and the decisions that keep both legible.',
    location: 'Aracaju, Brazil',
    focus: 'Backend systems, cloud infrastructure, CI/CD, and architecture decisions written down.',
    lead: 'I build satellite systems for agriculture at Syngenta Digital — APIs, AWS infrastructure, delivery pipelines, and the written decisions that keep them maintainable. This is where I keep the notes behind that work.',
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
          'Joined a satellite platform that detects nematode crop damage in its first weeks and grew into its technical reference, the person engineering and product both bring decisions to. Own its AWS infrastructure as code, delivery pipelines, and observability; write the RFCs and architecture records behind the bigger changes; and support less experienced developers on the team. Currently leading its redesign into a Rails monolith with PostGIS.',
        stack:
          'Python · Ruby on Rails · AWS (ECS, Lambda, Fargate) · Terraform · CircleCI · PostGIS · Datadog',
      },
      {
        period: '2021 — 2022',
        title: 'Software Engineer · CATSKILLET',
        description:
          'Real-time fraud prevention for credit acquisition at Luizalabs, the tech arm of one of Brazil’s largest retailers, and an architecture redesign of a client prospecting platform at Banco BTG, a Latin American investment bank.',
        stack: 'Python · FastAPI · RabbitMQ · PostgreSQL · Redis · GCP · ArgoCD',
      },
      {
        period: '2021',
        title: 'Junior Software Engineer · Connect Group',
        description:
          'E-commerce and facility-reservation platform for SESI/SEBRAE, Brazilian institutions that provide training and support to small businesses. Delivered end to end in five months.',
        stack: 'Python · SQLAlchemy · PostgreSQL',
      },
      {
        period: '2020 — 2021',
        title: 'Intern Developer · Fundação Uniselva',
        description:
          'Community-facing web applications for public-sector digitization projects in Mato Grosso, a state in central-west Brazil.',
        stack: 'Python · Flask · PostgreSQL · MySQL',
      },
    ],
    educationLabel: 'Education',
    education: {
      period: '2017 — 2023',
      title:
        'B.Eng. Computer Engineering · UFMT — Federal University of Mato Grosso, Brazil',
      highlights: [
        'Focus on systems, artificial intelligence, and information security',
        'Member of the CAP research group (Precision Computing and Agronomy) since 2017, applying computing to agronomy problems',
        'Speaker at ERI-MT, the regional computer science event of Mato Grosso',
      ],
    },
  },
};

export default config;
