import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a Mythic Keystone affix index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneAffixIndexResponse extends ResponseBase {
  affixes: Array<NameIdKey>;
}

/**
 * The response for a Mythic Keystone affix.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneAffixResponse extends ResponseBase, NameId {
  description: string;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

/**
 * The response for a Mythic Keystone affix media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneAffixMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
