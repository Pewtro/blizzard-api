import type { NameIdKey, NullishNameId, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character specializations summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterSpecializationsSummaryResponse extends ResponseBase {
  character: CharacterReference;
  specialization_groups: Array<SpecializationGroup>;
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
