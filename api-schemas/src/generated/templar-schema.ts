import { z } from 'zod';
import { TemplarItemsSchema } from './templar-items-schema';
import { SkillSchema } from './skill-schema';
import { StatsSchema } from './stats-schema';

export const TemplarSchema = z.object({
  items: TemplarItemsSchema,
  level: z.number(),
  skills: z.array(SkillSchema),
  slug: z.string(),
  stats: StatsSchema,
});
