import type { Character, NameIdKey, ResponseBase } from '../base';

export interface CharacterSpecializationsSummaryResponse extends ResponseBase {
  active_hero_talent: NameIdKey;
  active_specialization: NameIdKey;
  character: Character;
  specializations: Array<Specialization>;
}

interface Loadout {
  is_active: boolean;
  selected_class_talent_tree: NameIdKey;
  selected_class_talents: Array<SelectedTalent>;
  selected_spec_talent_tree: NameIdKey;
  selected_spec_talents?: Array<SelectedTalent>;
  talent_loadout_code: string;
}

interface PvpTalentSlot {
  selected: Selected;
  slot_number: number;
}

interface Selected {
  spell_tooltip: SpellTooltip;
  talent: NameIdKey;
}

interface SelectedTalent {
  default_points?: number;
  id: number;
  rank: number;
  tooltip: Selected;
}

interface Specialization {
  glyphs?: Array<NameIdKey>;
  loadouts: Array<Loadout>;
  pvp_talent_slots?: Array<PvpTalentSlot>;
  specialization: NameIdKey;
}

interface SpellTooltip {
  cast_time: '1.5 sec cast' | '2.5 sec cast' | '3 sec cast' | 'Channeled' | 'Instant' | 'Passive';
  cooldown?: string;
  description: string;
  power_cost?: string;
  range?:
    | '8-30 yd range'
    | '15 yd range'
    | '30 yd range'
    | '40 yd range'
    | '50 yd range'
    | '55 yd range'
    | '100 yd range'
    | 'Melee Range';
  spell: NameIdKey;
}
