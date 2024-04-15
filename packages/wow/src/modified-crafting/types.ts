import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

export interface ModifiedCraftingCategoryResponse extends ResponseBase, NameId {}

export interface ModifiedCraftingCategoryIndexResponse extends ResponseBase {
  categories: Array<NameIdKey>;
}

export interface ModifiedCraftingIndexResponse extends ResponseBase {
  categories: { href: string };
  slot_types: { href: string };
}

export interface ModifiedCraftingReagentSlotTypeIndexResponse extends ResponseBase {
  slot_types: Array<SlotType>;
}

interface SlotType extends KeyBase {
  name?: string;
  id: number;
}

export interface ModifiedCraftingReagentSlotTypeResponse extends ResponseBase {
  id: number;
  description: string;
  compatible_categories: Array<NameIdKey>;
}
