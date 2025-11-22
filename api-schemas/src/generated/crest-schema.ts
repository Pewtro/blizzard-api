import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { BorderSchema } from './border-schema';

export const CrestSchema = z.object({
  background: __typeSchema,
  border: BorderSchema,
  emblem: BorderSchema,
});
