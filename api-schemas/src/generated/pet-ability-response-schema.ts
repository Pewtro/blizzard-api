import { z } from 'zod';
import { BattlePetTypeSchema } from './battle-pet-type-schema';
import { MediaSchema } from './media-schema';
import { HrefSchema } from './href-schema';

export const PetAbilityResponseSchema = z.object({
  battle_pet_type: BattlePetTypeSchema,
  media: MediaSchema,
  rounds: z.number(),
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
