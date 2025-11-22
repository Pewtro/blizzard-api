import { z } from 'zod';
import { HrefSchema } from './href-schema';
import { PetSchema } from './pet-schema';

export const AccountPetsCollectionSummaryResponseSchema = z.object({
  _links: z.object({
    self: HrefSchema,
  }),
  pets: z.array(PetSchema),
  unlocked_battle_pet_slots: z.number(),
});
