import { z } from 'zod';
import { BaseEffectiveStatSchema } from './base-effective-stat-schema';
import { RatingSchema } from './rating-schema';
import { RatingWithValueSchema } from './rating-with-value-schema';
import { CharacterSchema } from './character-schema';
import { HrefSchema } from './href-schema';

export const CharacterStatisticsSummaryResponseSchema = z.object({
  agility: BaseEffectiveStatSchema,
  armor: BaseEffectiveStatSchema,
  attack_power: z.number(),
  avoidance: RatingSchema,
  block: RatingWithValueSchema,
  bonus_armor: z.number(),
  character: CharacterSchema,
  dodge: RatingWithValueSchema,
  health: z.number(),
  intellect: BaseEffectiveStatSchema,
  lifesteal: RatingWithValueSchema,
  main_hand_damage_max: z.number(),
  main_hand_damage_min: z.number(),
  main_hand_dps: z.number(),
  main_hand_speed: z.number(),
  mana_regen: z.number(),
  mana_regen_combat: z.number(),
  mastery: RatingWithValueSchema,
  melee_crit: RatingWithValueSchema,
  melee_haste: RatingWithValueSchema,
  off_hand_damage_max: z.number(),
  off_hand_damage_min: z.number(),
  off_hand_dps: z.number(),
  off_hand_speed: z.number(),
  parry: RatingWithValueSchema,
  power: z.number(),
  power_type: CharacterSchema,
  ranged_crit: RatingWithValueSchema,
  ranged_haste: RatingWithValueSchema,
  speed: RatingSchema,
  spell_crit: RatingWithValueSchema,
  spell_haste: RatingWithValueSchema,
  spell_penetration: z.number(),
  spell_power: z.number(),
  stamina: BaseEffectiveStatSchema,
  strength: BaseEffectiveStatSchema,
  versatility: z.number(),
  versatility_damage_done_bonus: z.number(),
  versatility_damage_taken_bonus: z.number(),
  versatility_healing_done_bonus: z.number(),
  _links: z.object({
    self: HrefSchema,
  }),
});
