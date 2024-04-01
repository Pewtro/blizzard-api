import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const itemApi = {
  item: (itemId: number): Resource<void> => {
    return {
      path: `${base}/item/${itemId}`,
      namespace: 'static',
    };
  },
  itemIndex: (): Resource<void> => {
    return {
      path: `${base}/item/index`,
      namespace: 'static',
    };
  },
  itemClass: (itemClassId: number): Resource<void> => {
    return {
      path: `${base}/item-class/${itemClassId}`,
      namespace: 'static',
    };
  },
  itemClassIndex: (): Resource<void> => {
    return {
      path: `${base}/item-class/index`,
      namespace: 'static',
    };
  },
  itemMedia: (itemId: number): Resource<void> => {
    return {
      path: `${mediaBase}/item/${itemId}`,
      namespace: 'static',
    };
  },
  itemSet: (itemSetId: number): Resource<void> => {
    return {
      path: `${base}/item-set/${itemSetId}`,
      namespace: 'static',
    };
  },
  itemSetIndex: (): Resource<void> => {
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
