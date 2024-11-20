import type { Character, NameIdKey, ResponseBase } from '../base';

export interface CharacterReputationsSummaryResponse extends ResponseBase {
  character: Character;
  reputations: Array<Reputation>;
}

interface Paragon {
  max: number;
  raw: number;
  value: number;
}

interface Reputation {
  faction: NameIdKey;
  paragon?: Paragon;
  standing: Standing;
}

interface Standing {
  max: number;
  name: string;
  raw: number;
  tier: number;
  value: number;
}
