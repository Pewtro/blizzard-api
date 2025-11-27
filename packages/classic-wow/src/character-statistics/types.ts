import type { Character, ResponseBase } from '@blizzard-api/core';

export interface CharacterStatisticsSummaryResponse extends ResponseBase {
  agility: BaseEffectiveStat;
  arcane_resistance: BaseEffectiveStat;
  armor: BaseEffectiveStat;
  attack_power: number;
  block: RatingWithValue;
  bonus_armor?: number;
  character: Character;
  defense?: BaseEffectiveStat;
  dodge: RatingWithValue;
  fire_resistance: BaseEffectiveStat;
  health: number;
  holy_resistance: BaseEffectiveStat;
  intellect: BaseEffectiveStat;
  main_hand_damage_max: number;
  main_hand_damage_min: number;
  main_hand_dps: number;
  main_hand_speed: number;
  mana_regen: number;
  mana_regen_combat: number;
  mastery?: RatingWithValue;
  melee_crit: RatingWithValue;
  melee_haste?: RatingWithValue;
  nature_resistance: BaseEffectiveStat;
  off_hand_damage_max: number;
  off_hand_damage_min: number;
  off_hand_dps: number;
  off_hand_speed: number;
  parry: RatingWithValue;
  power: number;
  power_type: Character;
  ranged_crit: RatingWithValue;
  ranged_haste?: RatingWithValue;
  shadow_resistance: BaseEffectiveStat;
  spell_crit: RatingWithValue;
  spell_haste?: RatingWithValue;
  spell_penetration: number;
  spell_power: number;
  spirit: BaseEffectiveStat;
  stamina: BaseEffectiveStat;
  strength: BaseEffectiveStat;
}

interface BaseEffectiveStat {
  base: number;
  effective: number;
}

interface RatingWithValue {
  rating: number;
  rating_bonus: number;
  value: number;
}
