import type { Resource, SearchResponse } from '@blizzard-api/core';
import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type {
  ItemClassIndexResponse,
  ItemClassResponse,
  ItemMediaResponse,
  ItemResponse,
  ItemSearchParameters,
  ItemSearchResponseItem,
  ItemSetIndexResponse,
  ItemSetResponse,
  ItemSubClassResponse,
} from './types';

/**
 * Get an item by ID.
 * @param itemId The item ID.
 * @returns The item. See {@link ItemResponse}.
 */
export function item(itemId: number): Resource<ItemResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item/${itemId}`,
  };
}
/**
 * Get an item class by ID.
 * @param itemClassId The item class ID.
 * @returns The item class. See {@link ItemClassResponse}.
 */
export function itemClass(itemClassId: number): Resource<ItemClassResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-class/${itemClassId}`,
  };
}
/**
 * Get an item class index.
 * @returns The item class index. See {@link ItemClassIndexResponse}.
 */
export function itemClassIndex(): Resource<ItemClassIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-class/index`,
  };
}
/**
 * Get item media by ID.
 * @param itemId The item ID.
 * @returns The item media. See {@link ItemMediaResponse}.
 */
export function itemMedia(itemId: number): Resource<ItemMediaResponse> {
  return {
    namespace: 'static',
    path: `${wowMediaBasePath}/item/${itemId}`,
  };
}
/**
 * Search for items.
 * @param options The search parameters. See {@link ItemSearchParameters}.
 * @returns The search results. See {@link SearchResponse}.
 */
export function itemSearch(
  options: ItemSearchParameters,
): Resource<SearchResponse<ItemSearchResponseItem>, Omit<ItemSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/item`,
  };
}
/**
 * Get an item set by ID.
 * @param itemSetId The item set ID.
 * @returns The item set. See {@link ItemSetResponse}.
 */
export function itemSet(itemSetId: number): Resource<ItemSetResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-set/${itemSetId}`,
  };
}
/**
 * Get an item set index.
 * @returns The item set index. See {@link ItemSetIndexResponse}.
 */
export function itemSetIndex(): Resource<ItemSetIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-set/index`,
  };
}
/**
 * Get an item subclass by ID.
 * @param itemClassId The item class ID.
 * @param itemSubclassId The item subclass ID.
 * @returns The item subclass. See {@link ItemSubClassResponse}.
 */
export function itemSubClass(itemClassId: number, itemSubclassId: number): Resource<ItemSubClassResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
  };
}
