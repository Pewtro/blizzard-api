import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  ItemClassIndexResponse,
  ItemClassResponse,
  ItemMediaResponse,
  ItemResponse,
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
  // TODO Improve search endpoints
  //itemSearch: (): Resource<void> => {
  //  return {
  //    path: `${base}/search/item`,
  //    namespace: 'static',
  //  };
  //},
};
