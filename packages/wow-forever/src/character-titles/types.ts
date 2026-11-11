import type { NameIdKey, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character titles summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterTitlesSummaryResponse extends ResponseBase {
  character: CharacterReference;
  titles?: Array<NameIdKey>;
}
