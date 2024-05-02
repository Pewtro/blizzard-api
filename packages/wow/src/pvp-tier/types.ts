import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a PvP tier index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpTierIndexResponse extends ResponseBase {
  tiers: Array<NameIdKey>;
}

/**
 * The response for a PvP tier.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpTierResponse extends ResponseBase, NameId {
  min_rating: number;
  max_rating: number;
  media: Media;
  bracket: Bracket;
  rating_type: number;
}

interface Bracket {
  id: number;
  type: string;
}

interface Media extends KeyBase {
  id: number;
}

/**
 * The response for a PvP tier media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpTierMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
