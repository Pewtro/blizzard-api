import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a profession index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ProfessionIndexResponse extends ResponseBase {
  professions: Array<NameIdKey>;
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
 * The response for a profession.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ProfessionResponse extends NameId, ResponseBase {
  description: string;
  media: Media;
  skill_tiers: Array<NameIdKey>;
  type: Type;
}

/**
 * The response for a profession skill tier.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ProfessionSkillTierResponse extends NameId, ResponseBase {
  categories: Array<Category>;
  maximum_skill_level: number;
  minimum_skill_level: number;
}

/**
 * The response for a recipe media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RecipeMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a recipe.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RecipeResponse extends NameId, ResponseBase {
  crafted_item: NameIdKey;
  crafted_quantity: CraftedQuantity;
  media: Media;
  reagents: Array<Reagent>;
}

interface Category {
  name: string;
  recipes: Array<NameIdKey>;
}

interface CraftedQuantity {
  value: number;
}

interface Media extends KeyBase {
  id: number;
}

interface Reagent {
  quantity: number;
  reagent: NameIdKey;
}

interface Type {
  name: string;
  type: string;
}
