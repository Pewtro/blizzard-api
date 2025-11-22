import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { NameTypeSchema } from './name-type-schema';

export const SocketSchema = z.object({
  display_string: z.string(),
  item: NameIdKeySchema,
  media: z.any(),
  socket_type: NameTypeSchema,
});
