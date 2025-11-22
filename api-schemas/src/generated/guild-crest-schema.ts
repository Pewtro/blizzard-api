import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { BorderEmblemSchema } from './border-emblem-schema';

export const GuildCrestSchema = z.object({
  background: __typeSchema,
  border: BorderEmblemSchema,
  emblem: BorderEmblemSchema,
});
