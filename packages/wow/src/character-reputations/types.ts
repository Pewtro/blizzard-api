import type { NameIdKey, ResponseBase } from '../base';

export interface CharacterReputationsSummaryResponse extends ResponseBase {
  character: Character;
  reputations: Array<Reputation>;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
}

interface Reputation {
  faction: NameIdKey;
  paragon?: Paragon;
  standing: Standing;
}

interface Paragon {
  max: number;
  raw: number;
  value: number;
}

interface Standing {
  max: number;
  name: string;
  raw: number;
  tier: number;
  value: number;
}
