import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a modified crafting category.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingCategoryResponse extends ResponseBase, NameId {}

/**
 * The response for a modified crafting category index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingCategoryIndexResponse extends ResponseBase {
  categories: Array<NameIdKey>;
}

/**
 * The response for a modified crafting index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingIndexResponse extends ResponseBase {
  categories: { href: string };
  slot_types: { href: string };
}

/**
 * The response for a modified crafting reagent slot type index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingReagentSlotTypeIndexResponse extends ResponseBase {
  slot_types: Array<SlotType>;
}

interface SlotType extends KeyBase {
  name?: string;
  id: number;
}

/**
 * The response for a modified crafting reagent slot type.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ModifiedCraftingReagentSlotTypeResponse extends ResponseBase {
  id: number;
  description: string;
  compatible_categories: Array<NameIdKey>;
}
