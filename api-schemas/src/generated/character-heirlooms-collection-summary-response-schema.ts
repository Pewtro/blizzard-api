import { z } from 'zod';
import { HeirloomSchema } from './heirloom-schema';
import { HrefSchema } from './href-schema';

export const CharacterHeirloomsCollectionSummaryResponseSchema = z.object({
  heirlooms: z.array(HeirloomSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
