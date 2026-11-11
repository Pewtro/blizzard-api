import type { Href, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character PvP summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterPvpSummaryResponse extends ResponseBase {
  character: CharacterReference;
  honorable_kills: number;
  pvp_rank: number;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}
