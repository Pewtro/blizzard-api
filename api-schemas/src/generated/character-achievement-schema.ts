import { z } from 'zod';
import { NameIdKeySchema } from './name-id-key-schema';
import { CharacterSchema } from './character-schema';

export const CharacterAchievementSchema = z.object({
  achievement: NameIdKeySchema,
  character: CharacterSchema,
});
