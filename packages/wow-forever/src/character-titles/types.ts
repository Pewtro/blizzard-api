import type { Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character titles summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterTitlesSummaryResponse extends ResponseBase {
  character: CharacterReference;
  titles?: Array<NameIdKey>;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}
