import type { BaseSearchParameters, KeyBase, MediaAsset } from '@blizzard-api/core';

/**
 * The search parameters for media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface MediaSearchParameters extends BaseSearchParameters {
  tags?: string;
}

/**
 * The response for a media search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface MediaSearchResponseItem extends KeyBase {
  data: {
    assets: Array<MediaAsset>;
    id: number;
  };
}
