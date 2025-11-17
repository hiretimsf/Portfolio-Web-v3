import {
  defineCollections,
  defineDocs,
  frontmatterSchema,
} from "fumadocs-mdx/config";
import { z } from "zod";

export const pages = defineDocs({
  dir: "content/pages",
});

export const projects = defineDocs({
  dir: "content/projects",
  docs: defineCollections({
    type: "doc",
    dir: "content/projects",
    schema: frontmatterSchema.extend({
      title: z.string(),
      description: z.string(),
      date: z.string(),
      category: z.string(),
      skills: z.array(z.string()),
      liveDemo: z.string().optional(),
      imageUrl: z.string().optional(),
      imageAlt: z.string().optional(),
      embedUrl: z.string().optional(),
      embedAlt: z.string().optional(),
      github: z.string().optional(),
    }),
  }),
});
