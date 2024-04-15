import type { Gender, KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

export interface PlayableSpecializationIndexResponse extends ResponseBase {
  character_specializations: Array<NameIdKey>;
  pet_specializations: Array<NameIdKey>;
}

export interface PlayableSpecializationResponse extends ResponseBase, NameId {
  playable_class: NameIdKey;
  gender_description: Gender;
  media: Media;
  role: PrimaryStatType;
  pvp_talents: Array<PvpTalent>;
  spec_talent_tree: SpecTalentTree;
  power_type: NameIdKey;
  primary_stat_type: PrimaryStatType;
}

interface Media extends KeyBase {
  id: number;
}

interface PrimaryStatType {
  type: string;
  name: string;
}

interface PvpTalent {
  talent: NameIdKey;
  spell_tooltip: SpellTooltip;
}

interface SpellTooltip {
  description: string;
  cast_time: string;
  power_cost?: string;
  cooldown?: string;
  range?: string;
}

interface SpecTalentTree extends KeyBase {
  name: string;
}

export interface PlayableSpecializationMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
