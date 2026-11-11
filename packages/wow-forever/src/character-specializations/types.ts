import type { Href, NameIdKey, NullishNameId, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character specializations summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterSpecializationsSummaryResponse extends ResponseBase {
  character: CharacterReference;
  specialization_groups: Array<SpecializationGroup>;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}

interface Specialization {
  specialization: NameIdKey;
  specialization_name: string;
  spent_points: number;
  talents: Array<Talent>;
}

interface SpecializationGroup {
  is_active: boolean;
  specializations?: Array<Specialization>;
}

interface SpellTooltip {
  cast_time: string;
  cooldown?: string;
  description: null | string;
  power_cost?: null | string;
  range?: string;
  spell: NullishNameId;
}

interface Talent {
  spell_tooltip: SpellTooltip;
  talent: NullishNameId;
  talent_rank: number;
}
