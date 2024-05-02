import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a profession index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ProfessionIndexResponse extends ResponseBase {
  professions: Array<NameIdKey>;
}

/**
 * The response for a profession.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
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

/**
 * The response for a profession skill tier.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ProfessionSkillTierResponse extends ResponseBase, NameId {
  minimum_skill_level: number;
  maximum_skill_level: number;
  categories: Array<Category>;
}

interface Category {
  name: string;
  recipes: Array<NameIdKey>;
}

/**
 * The response for a profession media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ProfessionMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a recipe.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
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

/**
 * The response for a recipe media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RecipeMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
