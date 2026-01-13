import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',  // Type: content indicates Markdown/MDX files
  schema: z.object({
    title: z.string(),                   
    description: z.string(),              
    pubDate: z.coerce.date(),             // Publish date (auto-convert to Date object) - will ich das?
    author: z.string().optional(),

    image: z
  .object({
    url: z.string(),
    alt: z.string().optional(),
  })
  .optional(),

    tags: z.array(z.string()).optional(), 
    mood: z.string().optional(),
    draft: z.boolean().default(false),   
  }),
});

export const collections = {
  'blog': blogCollection,  // Key name matches directory name - tut er das??
};