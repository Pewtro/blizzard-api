import { z } from 'zod';
import { HrefSchema } from './href-schema';

export const KeyBaseSchema = z.object({
  key: HrefSchema,
});
