import { z } from 'zod';
import { BackgroundSchema } from './background-schema';

export const ColorsSchema = z.object({
  backgrounds: z.array(BackgroundSchema),
  borders: z.array(BackgroundSchema),
  emblems: z.array(BackgroundSchema),
});
