import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { SkillSchema } from './skill-schema';
import { StatsSchema } from './stats-schema';

export const ScoundrelSchema = z.object({
  items: __typeSchema,
  level: z.number(),
  skills: z.array(SkillSchema),
  slug: z.string(),
  stats: StatsSchema,
});
