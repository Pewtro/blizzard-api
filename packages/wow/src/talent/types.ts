import type { KeyBase, NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a pvp talent index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpTalentIndexResponse extends ResponseBase {
  pvp_talents: Array<NameIdKey>;
}

/**
 * The response for a pvp talent.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpTalentResponse extends ResponseBase {
  compatible_slots: Array<number>;
  description: string;
  id: number;
  playable_specialization: NameIdKey;
  spell: NameIdKey;
  unlock_player_level: number;
}

/**
 * The response for a talent index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentIndexResponse extends ResponseBase {
  talents: Array<NameIdKey>;
}

/**
 * The response for a talent.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentResponse extends ResponseBase {
  id: number;
  playable_class: PlayableClass;
  rank_descriptions: Array<RankDescription>;
  spell: NameIdKey;
}

/**
 * The response for a talent tree index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentTreeIndexResponse extends ResponseBase {
  class_talent_trees: Array<TalentTree>;
  spec_talent_trees: Array<TalentTree>;
}

/**
 * The response for a talent tree nodes.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentTreeNodesResponse extends ResponseBase {
  id: number;
  spec_talent_trees: Array<SpecTalentTree>;
  talent_nodes: Array<TalentNode>;
}

/**
 * The response for a talent tree.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface TalentTreeResponse extends NameId, ResponseBase {
  class_talent_nodes: Array<ClassTalentNode>;
  media: { href: string };
  playable_class: NameIdKey;
  playable_specialization: NameIdKey;
  restriction_lines: Array<RestrictionLine>;
  spec_talent_nodes: Array<SpecTalentNode>;
}

interface ChoiceOfTooltip {
  spell_tooltip: PurpleSpellTooltip;
  talent: NameIdKey;
}

interface ClassTalentNode {
  display_col: number;
  display_row: number;
  id: number;
  locked_by?: Array<number>;
  node_type: NodeType;
  ranks: Array<ClassTalentNodeRank>;
  raw_position_x: number;
  raw_position_y: number;
  unlocks?: Array<number>;
}

interface ClassTalentNodeRank {
  choice_of_tooltips?: Array<Tooltip>;
  default_points?: number;
  rank: number;
  tooltip?: Tooltip;
}

interface NodeType {
  id: number;
  type: 'ACTIVE' | 'CHOICE' | 'PASSIVE';
}

interface PlayableClass extends KeyBase {
  id: number;
}

interface PurpleSpellTooltip {
  cast_time: string;
  description: string;
  spell: NameIdKey;
}

interface Rank {
  choice_of_tooltips?: Array<Tooltip>;
  rank: number;
  tooltip?: Tooltip;
}

interface RankDescription {
  description: null;
  rank: number;
}

interface RestrictionLine {
  is_for_class: boolean;
  required_points: number;
  restricted_row: number;
}

interface SpecTalentNode {
  display_col: number;
  display_row: number;
  id: number;
  locked_by?: Array<number>;
  node_type: NodeType;
  ranks: Array<SpecTalentNodeRank>;
  raw_position_x: number;
  raw_position_y: number;
  unlocks?: Array<number>;
}

interface SpecTalentNodeRank {
  choice_of_tooltips?: Array<ChoiceOfTooltip>;
  rank: number;
  tooltip?: Tooltip;
}

interface SpecTalentTree extends KeyBase {
  name: string;
}

interface TalentNode {
  display_col: number;
  display_row: number;
  id: number;
  node_type: NodeType;
  ranks: Array<Rank>;
  raw_position_x: number;
  raw_position_y: number;
}

interface TalentTree extends KeyBase {
  name: string;
}

interface Tooltip {
  spell_tooltip: TooltipSpellTooltip;
  talent: NameIdKey;
}

interface TooltipSpellTooltip {
  cast_time: string;
  cooldown?: string;
  description: string;
  power_cost?: string;
  range?: string;
  spell: NameIdKey;
}
