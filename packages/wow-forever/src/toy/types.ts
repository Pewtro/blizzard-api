import type { IdKey, NameType, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a toy index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ToyIndexResponse extends ResponseBase {
  toys: Array<NullishNameIdKey>;
}

/**
 * The response for a toy.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ToyResponse extends ResponseBase {
  id: number;
  item: NullishNameIdKey;
  media: IdKey;
  should_exclude_if_uncollected?: boolean;
  source: NameType;
  source_description?: string;
}
