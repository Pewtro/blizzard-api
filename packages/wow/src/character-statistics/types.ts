import type { Character, ResponseBase } from '@blizzard-api/core';

export interface CharacterStatisticsSummaryResponse extends ResponseBase {
  agility: BaseEffectiveStat;
  armor: BaseEffectiveStat;
  attack_power: number;
  avoidance: Rating;
  block: RatingWithValue;
  bonus_armor: number;
  character: Character;
  dodge: RatingWithValue;
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
  off_hand_damage_max: number;
  off_hand_damage_min: number;
  off_hand_dps: number;
  off_hand_speed: number;
  parry: RatingWithValue;
  power: number;
  power_type: Character;
  ranged_crit: RatingWithValue;
  ranged_haste: RatingWithValue;
  speed: Rating;
  spell_crit: RatingWithValue;
  spell_haste: RatingWithValue;
  spell_penetration: number;
  spell_power: number;
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

interface Rating {
  rating: number;
  rating_bonus: number;
}

interface RatingWithValue {
  rating: number;
  rating_bonus: number;
  value: number;
}
