import { z } from 'zod';
import { thenSchema } from './then-schema';
import { catchSchema } from './catch-schema';
import { finallySchema } from './finally-schema';

export const ResourceResponseSchema = z.object({
  then: thenSchema,
  catch: catchSchema,
  finally: finallySchema,
  '__@toStringTag@3073': z.string(),
});
