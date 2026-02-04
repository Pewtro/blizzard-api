import type { Character, NameIdKey, ResponseBase } from '@blizzard-api/core';

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
  renown_level?: number;
  tier?: number;
  value: number;
}
