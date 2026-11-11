import type { NullishNameIdKey, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character reputations summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterReputationsSummaryResponse extends ResponseBase {
  character: CharacterReference;
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
