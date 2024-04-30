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
  ItemSubclassResponse,
} from './types';

export const itemApi = {
  item: (itemId: number): Resource<ItemResponse> => {
    return {
      path: `${base}/item/${itemId}`,
      namespace: 'static',
    };
  },
  itemClass: (itemClassId: number): Resource<ItemClassResponse> => {
    return {
      path: `${base}/item-class/${itemClassId}`,
      namespace: 'static',
    };
  },
  itemSubclass: (itemClassId: number, itemSubclassId: number): Resource<ItemSubclassResponse> => {
    return {
      path: `${base}/item-class/${itemClassId}/item-subclass/${itemSubclassId}`,
      namespace: 'static',
    };
  },
  itemClassIndex: (): Resource<ItemClassIndexResponse> => {
    return {
      path: `${base}/item-class/index`,
      namespace: 'static',
    };
  },
  itemMedia: (itemId: number): Resource<ItemMediaResponse> => {
    return {
      path: `${mediaBase}/item/${itemId}`,
      namespace: 'static',
    };
  },
  itemSet: (itemSetId: number): Resource<ItemSetResponse> => {
    return {
      path: `${base}/item-set/${itemSetId}`,
      namespace: 'static',
    };
  },
  itemSetIndex: (): Resource<ItemSetIndexResponse> => {
    return {
      path: `${base}/item-set/index`,
      namespace: 'static',
    };
  },
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
