import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const ReputationFactionIndexResponseSchema = z.object({
  factions: z.array(NameIdKeySchema),
  root_factions: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
