import type {
  GenderName,
  Href,
  KeyBase,
  MediaAsset,
  NameIdKey,
  NullishNameId,
  NullishNameIdKey,
  ResponseBase,
} from '@blizzard-api/core';

/**
 * The response for a playable class index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableClassIndexResponse extends ResponseBase {
  classes: Array<NullishNameIdKey>;
}

/**
 * The response for playable class media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableClassMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a playable class.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft-classic/game-data-apis}
 */
export interface PlayableClassResponse extends NullishNameId, ResponseBase {
  additional_power_types?: Array<NullishNameIdKey>;
  gender_name: GenderName;
  media: Media;
  playable_races: Array<NullishNameIdKey>;
  power_type: NameIdKey;
  pvp_talent_slots: Href;
  specializations?: Array<NameIdKey>;
}

interface Media extends KeyBase {
  id: number;
}
