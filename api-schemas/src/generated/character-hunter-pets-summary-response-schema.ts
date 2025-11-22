import { z } from 'zod';
import { CharacterSchema } from './character-schema';
import { HunterPetSchema } from './hunter-pet-schema';
import { HrefSchema } from './href-schema';

export const CharacterHunterPetsSummaryResponseSchema = z.object({
  character: CharacterSchema,
  hunter_pets: z.array(HunterPetSchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
