import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a tech talent index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentIndexResponse extends ResponseBase {
  talents: Array<NameIdKey>;
}

/**
 * The response for a tech talent media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
}

/**
 * The response for a tech talent.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentResponse extends NameId, ResponseBase {
  description?: string;
  display_order: number;
  media: Media;
  prerequisite_talent?: NameIdKey;
  socket_type?: { name: string; type: 'ENDURANCE' | 'FINESSE' | 'POTENCY' };
  spell_tooltip?: SpellTooltip;
  talent_tree: KeyBase & { id: number; name?: string };
  tier: number;
}

/**
 * The response for a tech talent tree index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentTreeIndexResponse extends ResponseBase {
  talent_trees: Array<TalentTree>;
}

/**
 * The response for a tech talent tree.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TechTalentTreeResponse extends ResponseBase {
  id: number;
  max_tiers: number;
  playable_class?: NameIdKey;
  talents: Array<NameIdKey>;
}

interface Media extends KeyBase {
  id: number;
}

interface SpellTooltip {
  cast_time: string;
  cooldown?: string;
  description: null | string;
  power_cost?: null | string;
  range?: string;
  spell: NameIdKey;
}

interface TalentTree extends KeyBase {
  id: number;
  name?: string;
}
