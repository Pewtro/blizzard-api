import type {
  IdKey,
  KeyBase,
  MediaAsset,
  NameId,
  NameIdKey,
  NameType,
  NullishNameId,
  NullishNameIdKey,
  ResponseBase,
} from '@blizzard-api/core';

/**
 * The response for a profession index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ProfessionIndexResponse extends ResponseBase {
  professions: Array<NullishNameIdKey>;
}

/**
 * The response for profession media.
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
export interface ProfessionResponse extends NullishNameId, ResponseBase {
  description: null | string;
  media: IdKey;
  skill_tiers: Array<NameIdKey>;
  type: NameType;
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
 * The response for recipe media.
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
export interface RecipeResponse extends NullishNameId, ResponseBase {
  alliance_crafted_item?: NameIdKey;
  crafted_item?: NullishNameIdKey;
  crafted_quantity?: CraftedQuantity;
  description?: null | string;
  horde_crafted_item?: NameIdKey;
  media: IdKey;
  modified_crafting_slots?: Array<ModifiedCraftSlot>;
  rank?: number;
  reagents?: Array<Reagent>;
}

interface Category {
  name: null | string;
  recipes: Array<NullishNameIdKey>;
}

interface CraftedQuantity {
  maximum?: number;
  minimum?: number;
  value?: number;
}

interface ModifiedCraftSlot {
  display_order: number;
  slot_type: KeyBase & { id: number; name?: null | string };
}

interface Reagent {
  quantity: number;
  reagent: NullishNameIdKey;
}
