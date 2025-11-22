import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { CurrentPeriodSchema } from './current-period-schema';
import { HrefSchema } from './href-schema';

export const CharacterMythicKeystoneProfileIndexResponseSchema = z.object({
  character: CharacterSchema,
  current_period: CurrentPeriodSchema,
  seasons: z.array(z.any()),
  _links: z.object({
    self: HrefSchema,
  }),
});
