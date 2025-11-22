import { z } from 'zod';
import { __typeSchema } from './type-schema';
import { HrefSchema } from './href-schema';

export const JournalEncounterSearchResponseItemSchema = z.object({
  data: __typeSchema,
  key: HrefSchema,
});
