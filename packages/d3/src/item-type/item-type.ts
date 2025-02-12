import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ItemTypeIndexResponse, ItemTypeResponse } from './types';

/**
 * Returns the item type information for the specified item type slug.
 * @param itemTypeSlug The slug of the item type, example: "sword2h"
 * @returns The item type resource. See {@link ItemTypeResponse}.
 */
export function itemType(itemTypeSlug: string): Resource<Array<ItemTypeResponse>> {
  return {
    path: `${base}/item-type/${itemTypeSlug}`,
  };
}

/**
 * Returns the item type index.
 * @returns The item type index resource. See {@link ItemTypeIndexResponse}.
 */
export function itemTypeIndex(): Resource<Array<ItemTypeIndexResponse>> {
  return {
    path: `${base}/item-type`,
  };
}
