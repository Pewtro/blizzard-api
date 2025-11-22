import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const MediaSearchResponseItemSchema = z.object({
  data: __typeSchema,
  key: HrefSchema,
});
