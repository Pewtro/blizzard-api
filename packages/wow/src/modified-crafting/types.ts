import type { Href, KeyBase, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a modified crafting category index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingCategoryIndexResponse extends ResponseBase {
  categories: Array<KeyBase & { id: number; name?: string }>;
}

/**
 * The response for a modified crafting category.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingCategoryResponse extends ResponseBase {
  id: number;
  name?: string;
}

/**
 * The response for a modified crafting index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingIndexResponse extends ResponseBase {
  categories: Href;
  slot_types: Href;
}

/**
 * The response for a modified crafting reagent slot type index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingReagentSlotTypeIndexResponse extends ResponseBase {
  slot_types: Array<SlotType>;
}

/**
 * The response for a modified crafting reagent slot type.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingReagentSlotTypeResponse extends ResponseBase {
  compatible_categories: Array<NameIdKey>;
  description: string;
  id: number;
}

interface SlotType extends KeyBase {
  id: number;
  name?: string;
}
