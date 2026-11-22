import type { IdKey, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character hunter pets summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterHunterPetsSummaryResponse extends ResponseBase {
  character: CharacterReference;
  hunter_pets: Array<HunterPet>;
}

interface HunterPet {
  creature: NullishNameIdKey;
  creature_display: IdKey;
  is_active?: boolean;
  is_summoned?: boolean;
  level: number;
  name: string;
  slot: number;
}
