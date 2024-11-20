import type { BlizzardNamespaces, Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../../../wow/src/base';
import type {
  ItemClassIndexResponse,
  ItemClassResponse,
  ItemMediaResponse,
  ItemResponse,
  ItemSearchParameters,
  ItemSearchResponseItem,
  ItemSubClassResponse,
} from './types';

/**
 * Get an item by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param itemId The item ID.
 * @returns The item. See {@link ItemResponse}.
 */
export function item(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  itemId: number,
): Resource<ItemResponse> {
  return {
    namespace,
    path: `${base}/item/${itemId}`,
  };
}
/**
 * Get an item class by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param itemClassId The item class ID.
 * @returns The item class. See {@link ItemClassResponse}.
 */
export function itemClass(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  itemClassId: number,
): Resource<ItemClassResponse> {
  return {
    namespace,
    path: `${base}/item-class/${itemClassId}`,
  };
}
/**
 * Get an item class index.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The item class index. See {@link ItemClassIndexResponse}.
 */
export function itemClassIndex(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
): Resource<ItemClassIndexResponse> {
  return {
    namespace,
    path: `${base}/item-class/index`,
  };
}
/**
 * Get item media by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param itemId The item ID.
 * @returns The item media. See {@link ItemMediaResponse}.
 */
export function itemMedia(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  itemId: number,
): Resource<ItemMediaResponse> {
  return {
    namespace,
    path: `${mediaBase}/item/${itemId}`,
  };
}
/**
 * Search for items.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The search parameters. See {@link ItemSearchParameters}.
 * @returns The search results. See {@link SearchResponse}.
 */
export function itemSearch(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  options: ItemSearchParameters,
): Resource<SearchResponse<ItemSearchResponseItem>, Omit<ItemSearchParameters, 'locale' | 'name'>> {
  return {
    namespace,
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${searchBase}/item`,
  };
}
/**
 * Get an item subclass by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param itemClassId The item class ID.
 * @param itemSubclassId The item subclass ID.
 * @returns The item subclass. See {@link ItemSubClassResponse}.
 */
export function itemSubClass(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  itemClassId: number,
  itemSubclassId: number,
): Resource<ItemSubClassResponse> {
  return {
    namespace,
    path: `${base}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
  };
}
