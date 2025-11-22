import { z } from 'zod';

export const SpecificMetadataResponseSchema = z.object({
  aliasSetIds: z.union([z.any(), z.array(z.number())]).optional(),
  collectibleCount: z.number(),
  collectibleRevealedCount: z.number(),
  hyped: z.boolean(),
  nonCollectibleCount: z.number(),
  nonCollectibleRevealedCount: z.number(),
  slug: z.string(),
  type: z.union([z.literal(''), z.literal('base'), z.literal('adventure'), z.literal('expansion')]),
  id: z.number(),
  name: z.string(),
});
