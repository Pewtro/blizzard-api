import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const SoulbindResponseSchema = z.object({
  covenant: NameIdKeySchema,
  creature: NameIdKeySchema,
  follower: NameIdKeySchema,
  id: z.number(),
  name: z.string(),
  talent_tree: NameIdKeySchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
