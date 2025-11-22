import { z } from 'zod';
import { SkillSchema } from './skill-schema';

export const PassiveSchema = z.object({
  skill: SkillSchema,
});
