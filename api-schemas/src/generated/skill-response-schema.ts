import { z } from 'zod';
import { RuneSchema } from './rune-schema';
import { SkillSchema } from './skill-schema';

export const SkillResponseSchema = z.object({
  runes: z.array(RuneSchema),
  skill: SkillSchema,
});
