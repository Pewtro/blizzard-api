import type { Character, KeyBase, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterSpecializationsSummaryResponse extends ResponseBase {
  active_hero_talent_tree: NameIdKey;
  active_specialization: NameIdKey;
  character: Character;
  specializations: Array<Specialization>;
}

interface Loadout {
  is_active: boolean;
  selected_class_talent_tree: KeyBase & { name: string };
  selected_class_talents: Array<SelectedTalent>;
  selected_hero_talent_tree: NameIdKey;
  selected_hero_talents: Array<SelectedTalent>;
  selected_spec_talent_tree: KeyBase & { name: string };
  selected_spec_talents?: Array<SelectedTalent>;
  talent_loadout_code: string;
}

interface PvpTalentSlot {
  selected: Selected;
  slot_number: number;
}

interface Selected {
  spell_tooltip: SpellTooltip;
  talent: KeyBase & { id: number; name?: string };
}

interface SelectedTalent {
  default_points?: number;
  id: number;
  rank: number;
  tooltip?: Selected;
}

interface Specialization {
  glyphs?: Array<NameIdKey>;
  loadouts: Array<Loadout>;
  pvp_talent_slots?: Array<PvpTalentSlot>;
  specialization: NameIdKey;
}

interface SpellTooltip {
  cast_time?: string;
  cooldown?: string;
  description?: string;
  power_cost?: string;
  range?: string;
  spell: KeyBase & { id: number; name?: string };
}
