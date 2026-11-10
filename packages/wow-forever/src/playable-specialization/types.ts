import type {
  GenderName,
  KeyBase,
  MediaAsset,
  NameIdKey,
  NullishNameId,
  NullishNameIdKey,
  ResponseBase,
} from '@blizzard-api/core';

/**
 * The response for a playable specialization index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableSpecializationIndexResponse extends ResponseBase {
  character_specializations: Array<NullishNameIdKey>;
  pet_specializations?: Array<NameIdKey>;
}

/**
 * The response for playable specialization media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableSpecializationMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a playable specialization.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableSpecializationResponse extends NullishNameId, ResponseBase {
  gender_description?: GenderName;
  hero_talent_trees?: Array<NullishNameIdKey>;
  media: Media;
  playable_class: NullishNameIdKey;
  power_type: NameIdKey;
  primary_stat_type?: PrimaryStatType;
  pvp_talents?: Array<PvpTalent>;
  role?: PrimaryStatType;
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

interface SpecTalentTree extends KeyBase {
  name: null | string;
}

interface SpellTooltip {
  cast_time: string;
  cooldown?: string;
  description: string;
  power_cost?: null | string;
  range?: string;
}
