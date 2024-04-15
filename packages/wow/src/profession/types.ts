import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

export interface ProfessionIndexResponse extends ResponseBase {
  professions: Array<NameIdKey>;
}

export interface ProfessionResponse extends ResponseBase, NameId {
  description: string;
  type: Type;
  media: Media;
  skill_tiers: Array<NameIdKey>;
}

interface Media extends KeyBase {
  id: number;
}

interface Type {
  type: string;
  name: string;
}

export interface ProfessionSkillTierResponse extends ResponseBase, NameId {
  minimum_skill_level: number;
  maximum_skill_level: number;
  categories: Array<Category>;
}

interface Category {
  name: string;
  recipes: Array<NameIdKey>;
}

export interface ProfessionMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

export interface RecipeResponse extends ResponseBase, NameId {
  media: Media;
  crafted_item: NameIdKey;
  reagents: Array<Reagent>;
  crafted_quantity: CraftedQuantity;
}

interface CraftedQuantity {
  value: number;
}

interface Reagent {
  reagent: NameIdKey;
  quantity: number;
}

export interface RecipeMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
