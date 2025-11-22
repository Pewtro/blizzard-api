import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const RealmSearchResponseItemSchema = z.object({
  data: __typeSchema,
  key: HrefSchema,
});
