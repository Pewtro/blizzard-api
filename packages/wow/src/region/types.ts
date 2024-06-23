import type { NameId, ResponseBase } from '../base';

/**
 * The response for a region index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RegionIndexResponse extends ResponseBase {
  regions: Array<{ href: string }>;
}

/**
 * The response for a region.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RegionResponse extends ResponseBase, NameId {
  patch_string: string;
  tag: string;
}
