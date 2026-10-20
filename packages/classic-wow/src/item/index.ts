import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type { Resource, StaticClassicNamespaces } from '@blizzard-api/core';
import type {
  ItemClassIndexResponse,
  ItemClassResponse,
  ItemMediaResponse,
  ItemResponse,
  ItemSearchParameters,
  ItemSearchResponse,
  ItemSubclassResponse,
} from './types';

/**
 * Get an item by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param itemId The item ID.
 * @returns The item. See {@link ItemResponse}.
 */
export function item(namespace: StaticClassicNamespaces, itemId: number): Resource<ItemResponse> {
  return {
    namespace,
    path: `${wowBasePath}/item/${itemId}`,
  };
}
/**
 * Get an item class by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param itemClassId The item class ID.
 * @returns The item class. See {@link ItemClassResponse}.
 */
export function itemClass(namespace: StaticClassicNamespaces, itemClassId: number): Resource<ItemClassResponse> {
  return {
    namespace,
    path: `${wowBasePath}/item-class/${itemClassId}`,
  };
}
/**
 * Get an item class index.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The item class index. See {@link ItemClassIndexResponse}.
 */
export function itemClassIndex(namespace: StaticClassicNamespaces): Resource<ItemClassIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/item-class/index`,
  };
}
/**
 * Get item media by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param itemId The item ID.
 * @returns The item media. See {@link ItemMediaResponse}.
 */
export function itemMedia(namespace: StaticClassicNamespaces, itemId: number): Resource<ItemMediaResponse> {
  return {
    namespace,
    path: `${wowMediaBasePath}/item/${itemId}`,
  };
}
/**
 * Search for items.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The search parameters. See {@link ItemSearchParameters}.
 * @returns The search results. See {@link ItemSearchResponse}.
 */
export function itemSearch(
  namespace: StaticClassicNamespaces,
  options: ItemSearchParameters,
): Resource<ItemSearchResponse, Omit<ItemSearchParameters, 'locale' | 'name'>> {
  return {
    namespace,
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/item`,
  };
}
/**
 * Get an item subclass by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param itemClassId The item class ID.
 * @param itemSubclassId The item subclass ID.
 * @returns The item subclass. See {@link ItemSubclassResponse}.
 */
export function itemSubclass(
  namespace: StaticClassicNamespaces,
  itemClassId: number,
  itemSubclassId: number,
): Resource<ItemSubclassResponse> {
  return {
    namespace,
    path: `${wowBasePath}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
  };
}
