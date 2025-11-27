import { wowBasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import {
  modifiedCraftingCategory,
  modifiedCraftingCategoryIndex,
  modifiedCraftingIndex,
  modifiedCraftingReagentSlotType,
  modifiedCraftingReagentSlotTypeIndex,
} from './modified-crafting';

describe.concurrent('modifiedCraftingApi', () => {
  it('should return the correct path for modifiedCraftingCategory', ({ expect }) => {
    const modifiedCraftingCategoryId = 123;
    const resource = modifiedCraftingCategory(modifiedCraftingCategoryId);
    expect(resource.path).toBe(`${wowBasePath}/modified-crafting/category/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingCategoryIndex', ({ expect }) => {
    const resource = modifiedCraftingCategoryIndex();
    expect(resource.path).toBe(`${wowBasePath}/modified-crafting/category/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingIndex', ({ expect }) => {
    const resource = modifiedCraftingIndex();
    expect(resource.path).toBe(`${wowBasePath}/modified-crafting/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingReagentSlotType', ({ expect }) => {
    const modifiedCraftingReagentSlotTypeId = 456;
    const resource = modifiedCraftingReagentSlotType(modifiedCraftingReagentSlotTypeId);
    expect(resource.path).toBe(`${wowBasePath}/modified-crafting/reagent-slot-type/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingReagentSlotTypeIndex', ({ expect }) => {
    const resource = modifiedCraftingReagentSlotTypeIndex();
    expect(resource.path).toBe(`${wowBasePath}/modified-crafting/reagent-slot-type/index`);
    expect(resource.namespace).toBe('static');
  });
});
