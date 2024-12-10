import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const game = defineCollection({
  loader: glob({ base: 'src/content/game', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    game: z.object({
      title: z.string(),
      tagline: z.string(),
      image: z.string(),
      url: z.string(),
    }),
  }),
});

export const collections = {
  game,
};