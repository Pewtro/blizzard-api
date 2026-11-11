import type { IdKey, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character Mythic Keystone profile index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterMythicKeystoneProfileIndexResponse extends ResponseBase {
  character: CharacterReference;
  current_period: CurrentPeriod;
  seasons?: Array<IdKey>;
}

interface CurrentPeriod {
  period: IdKey;
}
