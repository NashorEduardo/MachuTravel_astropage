import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const tours = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tours' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    tag: z.string(),
    kind: z.enum(['ceremonia', 'peregrinacion', 'iniciacion']),
    place: z.string(),
    days: z.string(),
    price: z.string().default('Consultar'),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    imageCredit: z.string().optional(),
    imageSource: z.string().optional(),
    referentialImage: z.boolean().default(false),
    gallery: z.array(z.string()).default([]),
    featured: z.boolean().default(false),
    order: z.number(),
    summary: z.string(),
    group: z.string(),
    level: z.string(),
    includes: z.array(z.string()).default([]),
    excludes: z.array(z.string()).default([]),
    itinerary: z.array(z.object({ day: z.string(), title: z.string(), text: z.string() })),
    faq: z.array(z.object({ q: z.string(), a: z.string() })).default([]),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: ['**/*.md', '!preparar-un-viaje-sagrado.md'], base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    excerpt: z.string(),
    date: z.string(),
    image: z.string().optional(),
    place: z.string(),
  }),
});

export const collections = { tours, blog };
