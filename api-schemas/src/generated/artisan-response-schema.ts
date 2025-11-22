import { z } from 'zod';
import { TrainingSchema } from './training-schema';

export const ArtisanResponseSchema = z.object({
  name: z.string(),
  portrait: z.string(),
  slug: z.string(),
  training: TrainingSchema,
});
