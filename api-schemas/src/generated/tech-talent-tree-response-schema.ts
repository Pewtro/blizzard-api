import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const TechTalentTreeResponseSchema = z.object({
  id: z.number(),
  max_tiers: z.number(),
  playable_class: NameIdKeySchema,
  talents: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
