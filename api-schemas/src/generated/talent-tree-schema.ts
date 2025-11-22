import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const TalentTreeSchema = z.object({
  name: z.string(),
  key: HrefSchema,
});
