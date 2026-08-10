/**
 * Bilingual posts, by location only: `my-post.md` is the English version and
 * `pt/my-post.md` its Portuguese counterpart, served at `/posts/pt/my-post/`.
 * Nothing in the frontmatter to keep in sync, and a post without a `pt/` sibling
 * stays monolingual. A filename suffix would not work — the glob loader strips the
 * dot out of the entry id (`my-post.pt` becomes `my-postpt`).
 */
const PT_PREFIX = 'pt/';

export type PostLang = 'en' | 'pt';

export const postLang = (id: string): PostLang => (id.startsWith(PT_PREFIX) ? 'pt' : 'en');

/** The id of the counterpart, whether or not a file for it exists. */
export const translationId = (id: string) =>
  id.startsWith(PT_PREFIX) ? id.slice(PT_PREFIX.length) : `${PT_PREFIX}${id}`;

/**
 * Listings, RSS and search show one entry per post: the English version when a
 * pair exists, and the translation is reachable from the post page.
 */
export const primaryPosts = <T extends { id: string }>(posts: T[]) => {
  const ids = new Set(posts.map((post) => post.id));
  return posts.filter((post) => postLang(post.id) === 'en' || !ids.has(translationId(post.id)));
};
