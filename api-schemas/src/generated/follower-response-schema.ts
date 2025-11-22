import { z } from 'zod';
import { SkillSchema } from './skill-schema';

export const FollowerResponseSchema = z.object({
  name: z.string(),
  portrait: z.string(),
  realName: z.string(),
  skills: z.array(SkillSchema),
  slug: z.string(),
});
