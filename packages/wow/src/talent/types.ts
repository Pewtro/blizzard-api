import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

export interface PvpTalentIndexResponse extends ResponseBase {
  pvp_talents: Array<NameIdKey>;
}

export interface PvpTalentResponse extends ResponseBase {
  id: number;
  spell: NameIdKey;
  playable_specialization: NameIdKey;
  description: string;
  unlock_player_level: number;
  compatible_slots: Array<number>;
}

export interface TalentIndexResponse extends ResponseBase {
  talents: Array<NameIdKey>;
}

export interface TalentResponse extends ResponseBase {
  id: number;
  rank_descriptions: Array<RankDescription>;
  spell: NameIdKey;
  playable_class: PlayableClass;
}

interface PlayableClass extends KeyBase {
  id: number;
}

interface RankDescription {
  rank: number;
  description: null;
}

export interface TalentTreeIndexResponse extends ResponseBase {
  spec_talent_trees: Array<TalentTree>;
  class_talent_trees: Array<TalentTree>;
}

interface TalentTree extends KeyBase {
  name: string;
}

export interface TalentTreeResponse extends ResponseBase, NameId {
  playable_class: NameIdKey;
  playable_specialization: NameIdKey;
  media: { href: string };
  restriction_lines: Array<RestrictionLine>;
  class_talent_nodes: Array<ClassTalentNode>;
  spec_talent_nodes: Array<SpecTalentNode>;
}

interface ClassTalentNode {
  id: number;
  unlocks?: Array<number>;
  node_type: NodeType;
  ranks: Array<ClassTalentNodeRank>;
  display_row: number;
  display_col: number;
  raw_position_x: number;
  raw_position_y: number;
  locked_by?: Array<number>;
}

interface NodeType {
  id: number;
  type: 'ACTIVE' | 'CHOICE' | 'PASSIVE';
}

interface ClassTalentNodeRank {
  rank: number;
  tooltip?: Tooltip;
  default_points?: number;
  choice_of_tooltips?: Array<Tooltip>;
}

interface Tooltip {
  talent: NameIdKey;
  spell_tooltip: TooltipSpellTooltip;
}

interface TooltipSpellTooltip {
  spell: NameIdKey;
  description: string;
  cast_time: string;
  cooldown?: string;
  range?: string;
  power_cost?: string;
}

interface RestrictionLine {
  required_points: number;
  restricted_row: number;
  is_for_class: boolean;
}

interface SpecTalentNode {
  id: number;
  unlocks?: Array<number>;
  node_type: NodeType;
  ranks: Array<SpecTalentNodeRank>;
  display_row: number;
  display_col: number;
  raw_position_x: number;
  raw_position_y: number;
  locked_by?: Array<number>;
}

interface SpecTalentNodeRank {
  rank: number;
  tooltip?: Tooltip;
  choice_of_tooltips?: Array<ChoiceOfTooltip>;
}

interface ChoiceOfTooltip {
  talent: NameIdKey;
  spell_tooltip: PurpleSpellTooltip;
}

interface PurpleSpellTooltip {
  spell: NameIdKey;
  description: string;
  cast_time: string;
}

export interface TalentTreeNodesResponse extends ResponseBase {
  id: number;
  spec_talent_trees: Array<SpecTalentTree>;
  talent_nodes: Array<TalentNode>;
}

interface SpecTalentTree extends KeyBase {
  name: string;
}

interface TalentNode {
  id: number;
  node_type: NodeType;
  ranks: Array<Rank>;
  display_row: number;
  display_col: number;
  raw_position_x: number;
  raw_position_y: number;
}

interface Rank {
  rank: number;
  choice_of_tooltips?: Array<Tooltip>;
  tooltip?: Tooltip;
}
