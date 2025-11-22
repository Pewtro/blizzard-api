import { z } from 'zod';
import { ColorSchema } from './color-schema';

export const MythicRatingSchema = z.object({
  color: ColorSchema,
  rating: z.number(),
});
