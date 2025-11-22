import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const PlayableRaceIndexResponseSchema = z.object({
  races: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
