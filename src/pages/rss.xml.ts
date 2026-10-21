import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { getPosts } from '../data/posts';

export async function GET(context: APIContext) {
  const posts = await getPosts();

  return rss({
    title: 'Bradley Taylor',
    description: 'Writing by Bradley Taylor, software engineer.',
    site: context.site!,
    items: posts.map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.date,
      link: `/writing/${id}/`,
    })),
  });
}
