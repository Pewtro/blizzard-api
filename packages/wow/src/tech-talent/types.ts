import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

export interface TechTalentIndexResponse extends ResponseBase {
  talents: Array<NameIdKey>;
}

export interface TechTalentResponse extends ResponseBase, NameId {
  talent_tree: Media;
  tier: number;
  display_order: number;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

export interface TechTalentMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
}

export interface TechTalentTreeIndexResponse extends ResponseBase {
  talent_trees: Array<TalentTree>;
}

interface TalentTree extends KeyBase {
  id: number;
  name?: string;
}

export interface TechTalentTreeResponse extends ResponseBase {
  id: number;
  playable_class: NameIdKey;
  max_tiers: number;
  talents: Array<NameIdKey>;
}
