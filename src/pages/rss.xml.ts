import rss from '@astrojs/rss';
import type { APIContext } from 'astro';
import { SITE_NAME } from '../data/constants';
import { getPosts, postUrl } from '../data/posts';

export async function GET(context: APIContext) {
  if (!context.site) {
    throw new Error('Set `site` in astro.config.mjs to build the RSS feed.');
  }

  const posts = await getPosts();

  return rss({
    title: SITE_NAME,
    description: `Writing by ${SITE_NAME}, software engineer.`,
    site: context.site,
    items: posts.map(({ id, data }) => ({
      title: data.title,
      description: data.description,
      pubDate: data.date,
      link: postUrl(id),
    })),
  });
}
