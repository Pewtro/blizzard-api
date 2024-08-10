import type { Href, NameId, NameIdKey } from '../base';

export interface CharacterProfessionsSummaryResponse {
  _links: { self: Href };
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
