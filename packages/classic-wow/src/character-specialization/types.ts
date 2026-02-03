import type { Character, NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterSpecializationsSummaryResponse extends ResponseBase {
  active_specialization?: NameIdKey;
  character: Character;
  specialization_groups: Array<SpecializationGroup>;
  specializations?: Array<ClassicProgressionSpecialization>;
}

interface ClassicProgressionSpecialization {
  specialization: NameIdKey;
  specialization_name: string;
  talents?: Array<TalentElement>;
}

interface SpecializationGroup {
  glyphs?: Array<NameId>;
  is_active: boolean;
  specializations?: Array<SpecializationGroupItem>;
}

interface SpecializationGroupItem {
  specialization_name: string;
  spent_points: number;
  talents: Array<TalentElement>;
}

interface SpellTooltip {
  cast_time: 'Channeled' | 'Instant' | 'Instant cast' | 'Passive';
  cooldown?: string;
  description: string;
  power_cost?: null | string;
  range?: string;
  spell: NameId;
}

interface TalentElement {
  spell_tooltip: SpellTooltip;
  talent: NameId | { id: number };
  talent_rank?: number;
}
