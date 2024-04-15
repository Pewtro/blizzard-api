import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  ModifiedCraftingCategoryIndexResponse,
  ModifiedCraftingCategoryResponse,
  ModifiedCraftingIndexResponse,
  ModifiedCraftingReagentSlotTypeIndexResponse,
  ModifiedCraftingReagentSlotTypeResponse,
} from './types';

export const modifiedCraftingApi = {
  modifiedCraftingCategory: (modifiedCraftingCategoryId: number): Resource<ModifiedCraftingCategoryResponse> => {
    return {
      path: `${base}/modified-crafting/category/${modifiedCraftingCategoryId}`,
      namespace: 'static',
    };
  },
  modifiedCraftingCategoryIndex: (): Resource<ModifiedCraftingCategoryIndexResponse> => {
    return {
      path: `${base}/modified-crafting/category/index`,
      namespace: 'static',
    };
  },
  modifiedCraftingIndex: (): Resource<ModifiedCraftingIndexResponse> => {
    return {
      path: `${base}/modified-crafting/index`,
      namespace: 'static',
    };
  },
  modifiedCraftingReagentSlotType: (
    modifiedCraftingReagentSlotTypeId: number,
  ): Resource<ModifiedCraftingReagentSlotTypeResponse> => {
    return {
      path: `${base}/modified-crafting/reagent-slot-type/${modifiedCraftingReagentSlotTypeId}`,
      namespace: 'static',
    };
  },
  modifiedCraftingReagentSlotTypeIndex: (): Resource<ModifiedCraftingReagentSlotTypeIndexResponse> => {
    return {
      path: `${base}/modified-crafting/reagent-slot-type/index`,
      namespace: 'static',
    };
  },
};
