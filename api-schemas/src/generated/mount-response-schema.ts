import { z } from 'zod';
import { CreatureDisplaySchema } from './creature-display-schema';
import { SourceSchema } from './source-schema';
import { HrefSchema } from './href-schema';

export const MountResponseSchema = z.object({
  creature_displays: z.array(CreatureDisplaySchema),
  description: z.string(),
  id: z.number(),
  name: z.string(),
  should_exclude_if_uncollected: z.boolean(),
  source: SourceSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
