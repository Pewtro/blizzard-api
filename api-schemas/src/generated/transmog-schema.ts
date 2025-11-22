import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';

export const TransmogSchema = z.object({
  display_string: z.string(),
  item: NameIdKeySchema,
  item_modified_appearance_id: z.number(),
});
