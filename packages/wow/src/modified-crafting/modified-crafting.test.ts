import { describe, it } from 'vitest';
import { base } from '../base';
import { modifiedCraftingApi } from './modified-crafting';

describe.concurrent('modifiedCraftingApi', () => {
  it('should return the correct path for modifiedCraftingCategory', ({ expect }) => {
    const modifiedCraftingCategoryId = 123;
    const resource = modifiedCraftingApi.modifiedCraftingCategory(modifiedCraftingCategoryId);
    expect(resource.path).toBe(`${base}/modified-crafting/category/123`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingCategoryIndex', ({ expect }) => {
    const resource = modifiedCraftingApi.modifiedCraftingCategoryIndex();
    expect(resource.path).toBe(`${base}/modified-crafting/category/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingIndex', ({ expect }) => {
    const resource = modifiedCraftingApi.modifiedCraftingIndex();
    expect(resource.path).toBe(`${base}/modified-crafting/index`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingReagentSlotType', ({ expect }) => {
    const modifiedCraftingReagentSlotTypeId = 456;
    const resource = modifiedCraftingApi.modifiedCraftingReagentSlotType(modifiedCraftingReagentSlotTypeId);
    expect(resource.path).toBe(`${base}/modified-crafting/reagent-slot-type/456`);
    expect(resource.namespace).toBe('static');
  });

  it('should return the correct path for modifiedCraftingReagentSlotTypeIndex', ({ expect }) => {
    const resource = modifiedCraftingApi.modifiedCraftingReagentSlotTypeIndex();
    expect(resource.path).toBe(`${base}/modified-crafting/reagent-slot-type/index`);
    expect(resource.namespace).toBe('static');
  });
});
