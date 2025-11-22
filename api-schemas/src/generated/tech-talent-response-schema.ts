import { z } from 'zod';
import { MediaSchema } from './media-schema';
import { HrefSchema } from './href-schema';

export const TechTalentResponseSchema = z.object({
  display_order: z.number(),
  media: MediaSchema,
  talent_tree: MediaSchema,
  tier: z.number(),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
