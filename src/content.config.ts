import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const sitePages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/site' }),
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    lang: z.string().optional(),
    permalink: z.string().optional(),
    layout: z.string().optional(),
  }),
});

export const collections = {
  sitePages,
};
