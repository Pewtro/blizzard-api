import { z } from 'zod';

export const ArtisanSchema = z.object({
  level: z.number(),
  slug: z.union([z.literal('blacksmith'), z.literal('jeweler'), z.literal('mystic')]),
});
