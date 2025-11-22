import { z } from 'zod';
import { ActiveSchema } from './active-schema';
import { PassiveSchema } from './passive-schema';

export const SkillsSchema = z.object({
  active: z.array(ActiveSchema),
  passive: z.array(PassiveSchema),
});
