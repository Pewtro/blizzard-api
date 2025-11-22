import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const PlayableClassesSchema = z.object({
  display_string: z.string(),
  links: z.array(NameIdKeySchema),
});
