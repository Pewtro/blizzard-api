import type { NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character professions summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterProfessionsSummaryResponse extends ResponseBase {
  character: CharacterReference;
  primaries: Array<Primary>;
  secondaries: Array<Secondary>;
}

interface Primary {
  profession: NameIdKey;
  tiers: Array<Tier>;
}

interface Secondary {
  max_skill_points?: number;
  profession: NameIdKey;
  skill_points?: number;
  tiers?: Array<Tier>;
}

interface Tier {
  known_recipes?: Array<NameIdKey>;
  max_skill_points: number;
  skill_points: number;
  tier: NameId;
}
