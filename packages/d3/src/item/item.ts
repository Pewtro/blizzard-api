import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ItemResponse } from './types';

/**
 * Returns the item information for the specified item slug and ID.
 * @param itemSlugAndId The slug and ID of the item, example: "corrupted-ashbringer-Unique_Sword_2H_104_x1".
 * @returns The item resource. See {@link ItemResponse}.
 */
export function item(itemSlugAndId: string): Resource<ItemResponse> {
  return {
    path: `${base}/item/${itemSlugAndId}`,
  };
}
