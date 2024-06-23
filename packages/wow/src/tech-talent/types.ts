import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a tech talent index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentIndexResponse extends ResponseBase {
  talents: Array<NameIdKey>;
}

/**
 * The response for a tech talent.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentResponse extends ResponseBase, NameId {
  display_order: number;
  media: Media;
  talent_tree: Media;
  tier: number;
}

interface Media extends KeyBase {
  id: number;
}

/**
 * The response for a tech talent media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
}

/**
 * The response for a tech talent tree index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentTreeIndexResponse extends ResponseBase {
  talent_trees: Array<TalentTree>;
}

interface TalentTree extends KeyBase {
  id: number;
  name?: string;
}

/**
 * The response for a tech talent tree.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentTreeResponse extends ResponseBase {
  id: number;
  max_tiers: number;
  playable_class: NameIdKey;
  talents: Array<NameIdKey>;
}
