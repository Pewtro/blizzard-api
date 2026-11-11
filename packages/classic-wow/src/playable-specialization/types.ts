import type {
  GenderName,
  IdKey,
  KeyBase,
  MediaAsset,
  NameId,
  NameIdKey,
  NameType,
  NullishNameIdKey,
  ResponseBase,
} from '@blizzard-api/core';

/**
 * The response for a playable specialization index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PlayableSpecializationIndexResponse extends ResponseBase {
  character_specializations: Array<NameIdKey>;
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
export interface PlayableSpecializationResponse extends NameId, ResponseBase {
  gender_description: GenderName;
  hero_talent_trees?: Array<NullishNameIdKey>;
  media: IdKey;
  playable_class: NameIdKey;
  power_type: NameIdKey;
  primary_stat_type: NameType;
  pvp_talents?: Array<PvpTalent>;
  role: NameType;
  spec_talent_tree?: SpecTalentTree;
  talent_tiers?: Array<TalentTier>;
}

interface PvpTalent {
  spell_tooltip: SpellTooltip;
  talent: NameIdKey;
}

interface SpecTalentTree extends KeyBase {
  name: string;
}

interface SpellTooltip {
  cast_time: string;
  cooldown?: string;
  description: string;
  power_cost?: null | string;
  range?: string;
}

interface TalentTier {
  level: number;
  talents?: Array<{ talent: NameIdKey }>;
}
