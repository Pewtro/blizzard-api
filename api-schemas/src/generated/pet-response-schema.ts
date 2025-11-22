import { z } from 'zod';
import { AbilitySchema } from './ability-schema';
import { BattlePetTypeSchema } from './battle-pet-type-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { MediaSchema } from './media-schema';
import { SourceSchema } from './source-schema';
import { HrefSchema } from './href-schema';

export const PetResponseSchema = z.object({
  abilities: z.array(AbilitySchema),
  battle_pet_type: BattlePetTypeSchema,
  creature: NameIdKeySchema,
  description: z.string(),
  icon: z.string(),
  is_alliance_only: z.boolean(),
  is_battlepet: z.boolean(),
  is_capturable: z.boolean(),
  is_horde_only: z.boolean(),
  is_random_creature_display: z.boolean(),
  is_tradable: z.boolean(),
  media: MediaSchema,
  should_exclude_if_uncollected: z.boolean(),
  source: SourceSchema,
  id: z.number(),
  name: z.string(),
  _links: z.object({
    self: HrefSchema,
  }),
});
