import type { ResponseBase } from '@blizzard-api/core';
import type { CharacterReference } from '../shared/types';

/**
 * The response for a character PvP summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterPvpSummaryResponse extends ResponseBase {
  character: CharacterReference;
  honorable_kills: number;
  pvp_rank: number;
}
