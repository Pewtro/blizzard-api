import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { modifiedCraftingApi } from './modified-crafting';

describe('modifiedCraftingApi', () => {
  it('should return the correct path for modifiedCraftingCategory', () => {
    const modifiedCraftingCategoryId = 123;
    const resource = modifiedCraftingApi.modifiedCraftingCategory(modifiedCraftingCategoryId);
    expect(resource.path).toBe(`${base}/modified-crafting/category/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingCategoryIndex', () => {
    const resource = modifiedCraftingApi.modifiedCraftingCategoryIndex();
    expect(resource.path).toBe(`${base}/modified-crafting/category/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingIndex', () => {
    const resource = modifiedCraftingApi.modifiedCraftingIndex();
    expect(resource.path).toBe(`${base}/modified-crafting/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingReagentSlotType', () => {
    const modifiedCraftingReagentSlotTypeId = 456;
    const resource = modifiedCraftingApi.modifiedCraftingReagentSlotType(modifiedCraftingReagentSlotTypeId);
    expect(resource.path).toBe(`${base}/modified-crafting/reagent-slot-type/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingReagentSlotTypeIndex', () => {
    const resource = modifiedCraftingApi.modifiedCraftingReagentSlotTypeIndex();
    expect(resource.path).toBe(`${base}/modified-crafting/reagent-slot-type/index`);
    expect(resource.namespace).toBe('static');
  });
});
