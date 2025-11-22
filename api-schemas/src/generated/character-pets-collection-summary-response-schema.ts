import { z } from 'zod';
import { PetSchema } from './pet-schema';
import { HrefSchema } from './href-schema';

export const CharacterPetsCollectionSummaryResponseSchema = z.object({
  pets: z.array(PetSchema),
  unlocked_battle_pet_slots: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
