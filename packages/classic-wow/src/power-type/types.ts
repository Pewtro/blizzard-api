import type { NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a power type index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PowerTypeIndexResponse extends ResponseBase {
  power_types: Array<NameIdKey>;
}

/**
 * The response for a power type.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PowerTypeResponse extends NameId, ResponseBase {}
