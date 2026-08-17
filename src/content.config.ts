import { defineCollection } from 'astro:content';
import { file, glob } from 'astro/loaders';
import { z } from 'astro/zod';

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: '**/[^_]*.md', base: './src/data/posts' }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()),
      author: z.string(),
    }),
  }),
  projects: defineCollection({
    loader: file('src/data/projects.json'),
    schema: z.object({
      title: z.string(),
      description: z.string(),
      link: z.string(),
    }),
  }),
};
