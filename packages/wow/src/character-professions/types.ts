import type { Character, NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterProfessionsSummaryResponse extends ResponseBase {
  character: Character;
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
