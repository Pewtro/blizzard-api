import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../base';
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

export const itemApi = {
  /**
   * Get an item by ID.
   * @param itemId The item ID.
   * @returns The item. See {@link ItemResponse}.
   */
  item: (itemId: number): Resource<ItemResponse> => {
    return {
      path: `${base}/item/${itemId}`,
      namespace: 'static',
    };
  },
  /**
   * Get an item class by ID.
   * @param itemClassId The item class ID.
   * @returns The item class. See {@link ItemClassResponse}.
   */
  itemClass: (itemClassId: number): Resource<ItemClassResponse> => {
    return {
      path: `${base}/item-class/${itemClassId}`,
      namespace: 'static',
    };
  },
  /**
   * Get an item subclass by ID.
   * @param itemClassId The item class ID.
   * @param itemSubclassId The item subclass ID.
   * @returns The item subclass. See {@link ItemSubClassResponse}.
   */
  itemSubClass: (itemClassId: number, itemSubclassId: number): Resource<ItemSubClassResponse> => {
    return {
      path: `${base}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
      namespace: 'static',
    };
  },
  /**
   * Get an item class index.
   * @returns The item class index. See {@link ItemClassIndexResponse}.
   */
  itemClassIndex: (): Resource<ItemClassIndexResponse> => {
    return {
      path: `${base}/item-class/index`,
      namespace: 'static',
    };
  },
  /**
   * Get item media by ID.
   * @param itemId The item ID.
   * @returns The item media. See {@link ItemMediaResponse}.
   */
  itemMedia: (itemId: number): Resource<ItemMediaResponse> => {
    return {
      path: `${mediaBase}/item/${itemId}`,
      namespace: 'static',
    };
  },
  /**
   * Get an item set by ID.
   * @param itemSetId The item set ID.
   * @returns The item set. See {@link ItemSetResponse}.
   */
  itemSet: (itemSetId: number): Resource<ItemSetResponse> => {
    return {
      path: `${base}/item-set/${itemSetId}`,
      namespace: 'static',
    };
  },
  /**
   * Get an item set index.
   * @returns The item set index. See {@link ItemSetIndexResponse}.
   */
  itemSetIndex: (): Resource<ItemSetIndexResponse> => {
    return {
      path: `${base}/item-set/index`,
      namespace: 'static',
    };
  },
  /**
   * Search for items.
   * @param options The search parameters. See {@link ItemSearchParameters}.
   * @returns The search results. See {@link SearchResponse}.
   */
  itemSearch: (
    options: ItemSearchParameters,
  ): Resource<SearchResponse<ItemSearchResponseItem>, Omit<ItemSearchParameters, 'name' | 'locale'>> => {
    return {
      namespace: 'static',
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        [`name.${options.locale}`]: options.name,
      },
      path: `${searchBase}/item`,
    };
  },
};
