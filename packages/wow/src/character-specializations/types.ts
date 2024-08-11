import type { Character, NameIdKey, ResponseBase } from '../base';

export interface CharacterSpecializationsSummaryResponse extends ResponseBase {
  //TODO Awaiting The War Within launch to see how to type this
  active_hero_talent: unknown;
  active_specialization: NameIdKey;
  character: Character;
  specializations: Array<Specialization>;
}

interface Specialization {
  glyphs?: Array<NameIdKey>;
  loadouts: Array<Loadout>;
  pvp_talent_slots?: Array<PvpTalentSlot>;
  specialization: NameIdKey;
}

interface Loadout {
  is_active: boolean;
  selected_class_talent_tree: NameIdKey;
  selected_class_talents: Array<SelectedTalent>;
  selected_spec_talent_tree: NameIdKey;
  selected_spec_talents?: Array<SelectedTalent>;
  talent_loadout_code: string;
}

interface SelectedTalent {
  default_points?: number;
  id: number;
  rank: number;
  tooltip: Selected;
}

interface Selected {
  spell_tooltip: SpellTooltip;
  talent: NameIdKey;
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

interface PvpTalentSlot {
  selected: Selected;
  slot_number: number;
}
