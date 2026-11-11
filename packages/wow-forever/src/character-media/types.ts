import type { Href, MediaAsset, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character media summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterMediaSummaryResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  character: CharacterReference;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}
