import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type {
  ModifiedCraftingCategoryIndexResponse,
  ModifiedCraftingCategoryResponse,
  ModifiedCraftingIndexResponse,
  ModifiedCraftingReagentSlotTypeIndexResponse,
  ModifiedCraftingReagentSlotTypeResponse,
} from './types';

/**
 * Get a modified crafting category by ID.
 * @param modifiedCraftingCategoryId The modified crafting category ID.
 * @returns The modified crafting category. See {@link ModifiedCraftingCategoryResponse}.
 */
export function modifiedCraftingCategory(
  modifiedCraftingCategoryId: number,
): Resource<ModifiedCraftingCategoryResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/modified-crafting/category/${modifiedCraftingCategoryId}`,
  };
}
/**
 * Get a modified crafting category index.
 * @returns The modified crafting category index. See {@link ModifiedCraftingCategoryIndexResponse}.
 */
export function modifiedCraftingCategoryIndex(): Resource<ModifiedCraftingCategoryIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/modified-crafting/category/index`,
  };
}
/**
 * Get a modified crafting index.
 * @returns The modified crafting index. See {@link ModifiedCraftingIndexResponse}.
 */
export function modifiedCraftingIndex(): Resource<ModifiedCraftingIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/modified-crafting/index`,
  };
}
/**
 * Get a modified crafting reagent slot type by ID.
 * @param modifiedCraftingReagentSlotTypeId The modified crafting reagent slot type ID.
 * @returns The modified crafting reagent slot type. See {@link ModifiedCraftingReagentSlotTypeResponse}.
 */
export function modifiedCraftingReagentSlotType(
  modifiedCraftingReagentSlotTypeId: number,
): Resource<ModifiedCraftingReagentSlotTypeResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/modified-crafting/reagent-slot-type/${modifiedCraftingReagentSlotTypeId}`,
  };
}
/**
 * Get a modified crafting reagent slot type index.
 * @returns The modified crafting reagent slot type index. See {@link ModifiedCraftingReagentSlotTypeIndexResponse}.
 */
export function modifiedCraftingReagentSlotTypeIndex(): Resource<ModifiedCraftingReagentSlotTypeIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/modified-crafting/reagent-slot-type/index`,
  };
}
