import { z } from 'zod';
import { ClassAbilitySchema } from './class-ability-schema';
import { MediaSchema } from './media-schema';
import { RenownRewardSchema } from './renown-reward-schema';
import { SignatureAbilitySchema } from './signature-ability-schema';
import { NameIdKeySchema } from './name-id-key-schema';
import { HrefSchema } from './href-schema';

export const CovenantMediaResponseSchema = z.object({
  class_abilities: z.array(ClassAbilitySchema),
  description: z.string(),
  id: z.number(),
  media: MediaSchema,
  name: z.string(),
  renown_rewards: z.array(RenownRewardSchema),
  signature_ability: SignatureAbilitySchema,
  soulbinds: z.array(NameIdKeySchema),
  _links: z.object({
    self: HrefSchema,
  }),
});
