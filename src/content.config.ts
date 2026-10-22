import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const prep = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/prep' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    category: z.enum(['coding', 'system-design', 'behavioral']),
    difficulty: z.enum(['easy', 'medium', 'hard']).optional(),
    tags: z.array(z.string()).default([]),
    date: z.coerce.date(),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    repo: z.string().url().optional(),
    url: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { prep, projects };
