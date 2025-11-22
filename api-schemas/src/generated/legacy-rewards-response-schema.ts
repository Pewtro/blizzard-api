import { z } from 'zod';
import { AnimationSchema } from './animation-schema';

export const LegacyRewardsResponseSchema = z.object({
  animations: z.array(AnimationSchema),
  portraits: z.array(AnimationSchema),
  protossDecals: z.array(AnimationSchema),
  skins: z.array(AnimationSchema),
  terranDecals: z.array(AnimationSchema),
  zergDecals: z.array(AnimationSchema),
});
