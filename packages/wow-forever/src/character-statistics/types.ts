import type { Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character statistics summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterStatisticsSummaryResponse extends ResponseBase {
  agility: BaseEffectiveStat;
  arcane_resistance: BaseEffectiveStat;
  armor: BaseEffectiveStat;
  armor_penetration: number;
  attack_power: number;
  avoidance: RatingWithValue;
  block: RatingWithValue;
  bonus_armor: number;
  character: CharacterReference;
  defense: BaseEffectiveStat;
  dodge: RatingWithValue;
  expertise: number;
  fire_resistance: BaseEffectiveStat;
  frost_resistance: BaseEffectiveStat;
  health: number;
  intellect: BaseEffectiveStat;
  lifesteal: RatingWithValue;
  main_hand_damage_max: number;
  main_hand_damage_min: number;
  main_hand_dps: number;
  main_hand_speed: number;
  mana_regen: number;
  mana_regen_combat: number;
  mastery: RatingWithValue;
  melee_crit: RatingWithValue;
  melee_haste: RatingWithValue;
  melee_hit: RatingWithValue;
  movement_speed: number;
  nature_resistance: BaseEffectiveStat;
  off_hand_damage_max: number;
  off_hand_damage_min: number;
  off_hand_dps: number;
  off_hand_expertise: number;
  off_hand_hit: RatingWithValue;
  off_hand_speed: number;
  parry: RatingWithValue;
  power: number;
  power_type: NameIdKey;
  ranged_attack_power: number;
  ranged_crit: RatingWithValue;
  ranged_damage_max: number;
  ranged_damage_min: number;
  ranged_haste: RatingWithValue;
  ranged_hit: RatingWithValue;
  shadow_resistance: BaseEffectiveStat;
  speed: RatingWithValue;
  spell_crit: RatingWithValue;
  spell_haste: RatingWithValue;
  spell_healing: number;
  spell_hit: RatingWithValue;
  spell_penetration: number;
  spell_power: number;
  spirit: BaseEffectiveStat;
  stamina: BaseEffectiveStat;
  strength: BaseEffectiveStat;
  versatility: number;
  versatility_damage_done_bonus: number;
  versatility_damage_taken_bonus: number;
  versatility_healing_done_bonus: number;
}

interface BaseEffectiveStat {
  base: number;
  effective: number;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}

interface RatingWithValue {
  rating_bonus: number;
  rating_normalized: number;
  value: number;
}
