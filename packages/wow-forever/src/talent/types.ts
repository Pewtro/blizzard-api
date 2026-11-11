import type { IdKey, KeyBase, NameId, NameIdKey, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a pvp talent index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpTalentIndexResponse extends ResponseBase {
  pvp_talents?: Array<NameIdKey>;
}

/**
 * The response for a pvp talent.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpTalentResponse extends ResponseBase {
  compatible_slots: Array<number>;
  description: string;
  id: number;
  overrides_spell?: NameIdKey;
  playable_specialization: NameIdKey;
  spell: NameIdKey;
  unlock_player_level: number;
}

/**
 * The response for a talent index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentIndexResponse extends ResponseBase {
  talents: Array<NullishNameIdKey>;
}

/**
 * The response for a talent.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentResponse extends ResponseBase {
  id: number;
  overrides_spell?: NameIdKey;
  playable_class?: KeyBase & { id: number; name?: null | string };
  playable_specialization?: NullishNameIdKey;
  rank_descriptions?: Array<RankDescription>;
  spell?: NameIdKey;
}

/**
 * The response for a talent tree index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentTreeIndexResponse extends ResponseBase {
  class_talent_trees: Array<TalentTree>;
  hero_talent_trees?: Array<NameIdKey>;
  spec_talent_trees: Array<TalentTree>;
}

/**
 * The response for a class talent tree.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentTreeNodesResponse extends ResponseBase {
  id: number;
  spec_talent_trees: Array<TalentTree>;
  talent_nodes: Array<TalentNode>;
}

/**
 * The response for a specialization talent tree.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentTreeResponse extends NameId, ResponseBase {
  class_talent_nodes?: Array<TalentNode>;
  hero_talent_trees?: Array<HeroTalentTree>;
  media?: KeyBase & { id?: number };
  playable_class: NullishNameIdKey;
  playable_specialization?: NameIdKey;
  restriction_lines?: Array<RestrictionLine>;
  spec_talent_nodes?: Array<TalentNode>;
}

interface ChoiceOfTooltip {
  spell_tooltip: PurpleSpellTooltip;
  talent: NameIdKey;
}

interface HeroTalentTree extends NameId {
  hero_talent_nodes: Array<TalentNode>;
  media: IdKey;
  playable_class: NameIdKey;
  playable_specializations: Array<NameIdKey>;
}

interface NodeType {
  id: number;
  type: 'ACTIVE' | 'CHOICE' | 'PASSIVE' | (string & {});
}

interface PurpleSpellTooltip {
  cast_time: string;
  description: string;
  spell: NameIdKey;
}

interface Rank {
  choice_of_tooltips?: Array<ChoiceOfTooltip>;
  default_points?: number;
  rank: number;
  tooltip?: Tooltip;
}

interface RankDescription {
  description: null | string;
  rank: number;
}

interface RestrictionLine {
  is_for_class: boolean;
  required_points: number;
  restricted_row: number;
}

interface TalentNode {
  display_col: number;
  display_row: number;
  id: number;
  locked_by?: Array<number>;
  node_type: NodeType;
  ranks: Array<Rank>;
  raw_position_x: number;
  raw_position_y: number;
  unlocks?: Array<number>;
}

interface TalentTree extends KeyBase {
  name: null | string;
}

interface Tooltip {
  spell_tooltip: TooltipSpellTooltip;
  talent: NullishNameIdKey;
}

interface TooltipSpellTooltip {
  cast_time: string;
  cooldown?: null | string;
  description: null | string;
  power_cost?: null | string;
  range?: null | string;
  spell: NullishNameIdKey;
}
