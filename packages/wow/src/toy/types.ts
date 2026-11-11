import type { IdKey, NameIdKey, NameType, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a toy index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ToyIndexResponse extends ResponseBase {
  toys: Array<NameIdKey>;
}

/**
 * The response for a toy.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ToyResponse extends ResponseBase {
  id: number;
  item: NameIdKey;
  media: IdKey;
  should_exclude_if_uncollected?: boolean;
  source: NameType;
  source_description?: string;
}
