import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { RequirementsSchema } from './requirements-schema';
import { RewardsSchema } from './rewards-schema';
import { HrefSchema } from './href-schema';

export const QuestResponseSchema = z.object({
  area: NameIdKeySchema,
  description: z.string(),
  id: z.number(),
  requirements: RequirementsSchema,
  rewards: RewardsSchema,
  title: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
