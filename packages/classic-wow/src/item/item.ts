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

export const classicItemApi = {
  /**
   * Get an item class index.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @returns The item class index. See {@link ItemClassIndexResponse}.
   */
  itemClassIndex: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  ): Resource<ItemClassIndexResponse> => {
    return {
      path: `${base}/item-class/index`,
      namespace,
    };
  },
  /**
   * Get an item class by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param itemClassId The item class ID.
   * @returns The item class. See {@link ItemClassResponse}.
   */
  itemClass: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    itemClassId: number,
  ): Resource<ItemClassResponse> => {
    return {
      namespace,
      path: `${base}/item-class/${itemClassId}`,
    };
  },
  /**
   * Get an item subclass by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param itemClassId The item class ID.
   * @param itemSubclassId The item subclass ID.
   * @returns The item subclass. See {@link ItemSubClassResponse}.
   */
  itemSubClass: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    itemClassId: number,
    itemSubclassId: number,
  ): Resource<ItemSubClassResponse> => {
    return {
      namespace,
      path: `${base}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
    };
  },
  /**
   * Get an item by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param itemId The item ID.
   * @returns The item. See {@link ItemResponse}.
   */
  item: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    itemId: number,
  ): Resource<ItemResponse> => {
    return {
      namespace,
      path: `${base}/item/${itemId}`,
    };
  },
  /**
   * Get item media by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param itemId The item ID.
   * @returns The item media. See {@link ItemMediaResponse}.
   */
  itemMedia: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    itemId: number,
  ): Resource<ItemMediaResponse> => {
    return {
      namespace,
      path: `${mediaBase}/item/${itemId}`,
    };
  },
  /**
   * Search for items.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param options The search parameters. See {@link ItemSearchParameters}.
   * @returns The search results. See {@link SearchResponse}.
   */
  itemSearch: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    options: ItemSearchParameters,
  ): Resource<SearchResponse<ItemSearchResponseItem>, Omit<ItemSearchParameters, 'name' | 'locale'>> => {
    return {
      namespace,
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        [`name.${options.locale}`]: options.name,
      },
      path: `${searchBase}/item`,
    };
  },
};
