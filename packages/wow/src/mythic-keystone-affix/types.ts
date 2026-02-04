import type { KeyBase, MediaAsset, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a Mythic Keystone affix index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneAffixIndexResponse extends ResponseBase {
  affixes: Array<KeyBase & { id: number; name: null | string }>;
}

/**
 * The response for a Mythic Keystone affix media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneAffixMediaResponse extends ResponseBase {
  assets?: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a Mythic Keystone affix.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneAffixResponse extends ResponseBase {
  description: null | string;
  id: number;
  media: Media;
  name: null | string;
}

interface Media extends KeyBase {
  id: number;
}
