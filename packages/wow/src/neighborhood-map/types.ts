import type { NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for an index of neighborhood maps.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface NeighborhoodMapIndexResponse extends ResponseBase {
  maps: Array<NameIdKey>;
}

/**
 * The response for a neighborhood map.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface NeighborhoodMapResponse extends NameId, ResponseBase {}

/**
 * The response for a neighborhood within a neighborhood map.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface NeighborhoodResponse extends ResponseBase {
  id: number;
  neighborhood_map: NameIdKey;
  neighborhood_name: string;
}
