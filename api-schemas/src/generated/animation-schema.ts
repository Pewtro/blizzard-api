import { z } from 'zod';
import { IconSchema } from './icon-schema';

export const AnimationSchema = z.object({
  achievementId: z.string(),
  command: z.union([z.any(), z.literal('/dance')]).optional(),
  icon: IconSchema,
  id: z.string(),
  name: z.union([z.any(), z.string()]).optional(),
  title: z.string(),
});
