import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ItemResponse } from './types';

export function item(itemSlugAndId: string): Resource<ItemResponse> {
  return {
    path: `${base}/item/${itemSlugAndId}`,
  };
}
