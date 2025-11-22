import { z } from 'zod';
import { RuneSchema } from './rune-schema';
import { SkillSchema } from './skill-schema';

export const ActiveSchema = z.object({
  rune: RuneSchema,
  skill: SkillSchema,
});
