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
  media: Media;
  skill_tiers: Array<NameIdKey>;
  type: Type;
}

interface Media extends KeyBase {
  id: number;
}

interface Type {
  name: string;
  type: string;
}

/**
 * The response for a profession skill tier.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ProfessionSkillTierResponse extends ResponseBase, NameId {
  categories: Array<Category>;
  maximum_skill_level: number;
  minimum_skill_level: number;
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
  crafted_item: NameIdKey;
  crafted_quantity: CraftedQuantity;
  media: Media;
  reagents: Array<Reagent>;
}

interface CraftedQuantity {
  value: number;
}

interface Reagent {
  quantity: number;
  reagent: NameIdKey;
}

/**
 * The response for a recipe media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RecipeMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
