import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ItemTypeIndexResponse, ItemTypeResponse } from './types';

export function itemTypeIndex(): Resource<Array<ItemTypeIndexResponse>> {
  return {
    path: `${base}/item-type`,
  };
}

export function itemType(itemTypeSlug: string): Resource<Array<ItemTypeResponse>> {
  return {
    path: `${base}/item-type/${itemTypeSlug}`,
  };
}
