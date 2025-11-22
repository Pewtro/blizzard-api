import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const MythicKeystoneIndexResponseSchema = z.object({
  dungeons: __typeSchema,
  seasons: __typeSchema,
  _links: z.object({
    self: HrefSchema,
  }),
});
