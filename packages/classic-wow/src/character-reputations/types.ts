import type { Character, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character's reputations summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/profile-apis}
 */
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
  faction: NullishNameIdKey;
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
