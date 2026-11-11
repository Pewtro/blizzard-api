import type { MediaAsset, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character media summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterMediaSummaryResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  character: CharacterReference;
}
