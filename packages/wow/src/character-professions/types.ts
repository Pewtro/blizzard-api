import type { NameId, NameIdKey, ResponseBase } from '../base';

export interface CharacterProfessionsSummaryResponse extends ResponseBase {
  character: Character;
  primaries: Array<Primary>;
  secondaries: Array<Secondary>;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
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
