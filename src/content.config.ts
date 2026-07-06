import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string(),
    company: z.string(),
    year: z.string(),
    order: z.number(),
    tags: z.array(z.string()),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    year: z.string().optional(),
    order: z.number(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    link: z.string(),
    linkText: z.string(),
  }),
});

export const collections = { work, projects };
