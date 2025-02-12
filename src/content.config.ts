import { glob } from "astro/loaders";
import { z, defineCollection } from "astro:content";

export const collections = {
  blog: defineCollection({
    loader: glob({ pattern: "**/[^_]*.md", base: "./src/blog" }),
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      tags: z.array(z.string()),
    }),
  }),
};
