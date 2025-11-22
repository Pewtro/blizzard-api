import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const SpecTalentTreeSchema = z.object({
  name: z.string(),
  key: HrefSchema,
});
