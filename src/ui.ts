const ui = {
  backLink: '← All Posts',
  readingTime: (n: number) => `${n} min read`,
  updated: 'Updated',
  relatedPosts: 'Related',
  allPosts: 'All Posts →',
  // Each label is written in the language it links to.
  translation: { pt: 'Ler em português', en: 'Read in English' },
  postsEyebrow: 'Archive',
  postsTitle: 'All Posts',
  heroTitle: 'Keep notes.',
  heroTitleLine2: '',
  viewAll: 'All Posts →',
  readLink: 'Read →',
  postFeed: {
    all: 'All',
    filterLabel: 'Filter posts by category',
    previousCategories: 'Scroll categories left',
    nextCategories: 'Scroll categories right',
    searchLabel: 'Search posts',
    empty: 'No posts match this filter.',
    more: 'Load more',
    read: 'Read',
  },
};

export function getUiText() {
  return ui;
}
