import { glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const game = defineCollection({
  loader: glob({ base: 'src/content/game', pattern: '**/[^_]*.md' }),
  schema: ({ image }) =>z.object({
    title: z.string(),
    description: z.string(),
    game: z.object({
      title: z.string(),
      tagline: z.string().optional(),
      image: z.string().optional(),
      featuredImage: z.string().optional(),
      url: z.string(),
      showMods: z.boolean().optional(),
      relatedGames: z.array(reference('game')).optional(),
      youtubes: z.array(z.object({
        id: z.string(),
        title: z.string(),
        date: z.string(),
      })).optional(),
    }),
  }),
});

export const collections = {
  game,
};
