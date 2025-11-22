import { z } from 'zod';
import { CharacterSchema } from './character-schema';

export const WowAccountSchema = z.object({
  characters: z.array(CharacterSchema),
  id: z.number(),
});
