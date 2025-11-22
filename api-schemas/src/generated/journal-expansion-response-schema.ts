import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const JournalExpansionResponseSchema = z.object({
  dungeons: z.array(NameIdKeySchema),
  raids: z.array(NameIdKeySchema),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
