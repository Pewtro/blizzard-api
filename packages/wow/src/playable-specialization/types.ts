import type { Gender, KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a playable specialization index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableSpecializationIndexResponse extends ResponseBase {
  character_specializations: Array<NameIdKey>;
  pet_specializations: Array<NameIdKey>;
}

/**
 * The response for a playable specialization.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableSpecializationResponse extends ResponseBase, NameId {
  gender_description: Gender;
  media: Media;
  playable_class: NameIdKey;
  power_type: NameIdKey;
  primary_stat_type: PrimaryStatType;
  pvp_talents: Array<PvpTalent>;
  role: PrimaryStatType;
  spec_talent_tree: SpecTalentTree;
}

interface Media extends KeyBase {
  id: number;
}

interface PrimaryStatType {
  name: string;
  type: string;
}

interface PvpTalent {
  spell_tooltip: SpellTooltip;
  talent: NameIdKey;
}

interface SpellTooltip {
  cast_time: string;
  cooldown?: string;
  description: string;
  power_cost?: string;
  range?: string;
}

interface SpecTalentTree extends KeyBase {
  name: string;
}

/**
 * The response for a playable specialization media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableSpecializationMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
