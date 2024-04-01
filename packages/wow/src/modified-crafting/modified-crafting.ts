import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const modifiedCraftingApi = {
  modifiedCraftingCategory: (modifiedCraftingCategoryId: number): Resource<void> => {
    return {
      path: `${base}/modified-crafting/category/${modifiedCraftingCategoryId}`,
      namespace: 'static',
    };
  },
  modifiedCraftingCategoryIndex: (): Resource<void> => {
    return {
      path: `${base}/modified-crafting/category/index`,
      namespace: 'static',
    };
  },
  modifiedCraftingIndex: (): Resource<void> => {
    return {
      path: `${base}/modified-crafting/index`,
      namespace: 'static',
    };
  },
  modifiedCraftingReagentSlotType: (modifiedCraftingReagentSlotTypeId: number): Resource<void> => {
    return {
      path: `${base}/modified-crafting/reagent-slot-type/${modifiedCraftingReagentSlotTypeId}`,
      namespace: 'static',
    };
  },
  modifiedCraftingReagentSlotTypeIndex: (): Resource<void> => {
    return {
      path: `${base}/modified-crafting/reagent-slot-type/index`,
      namespace: 'static',
    };
  },
};
