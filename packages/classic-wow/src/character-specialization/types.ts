import type { Character, NameId, ResponseBase } from '@blizzard-api/core';

export interface CharacterSpecializationsSummaryResponse extends ResponseBase {
  character: Character;
  specialization_groups: Array<SpecializationGroup>;
}

interface Specialization {
  specialization_name: string;
  spent_points: number;
  talents: Array<TalentElement>;
}

interface SpecializationGroup {
  glyphs?: Array<NameId>;
  is_active: boolean;
  specializations?: Array<Specialization>;
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
  talent: { id: number };
  talent_rank: number;
}
