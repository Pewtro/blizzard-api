import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, searchBase } from '../base';
import type { MountIndexResponse, MountResponse, MountSearchParameters, MountSearchResponseItem } from './types';

export const mountApi = {
  mount: (mountId: number): Resource<MountResponse> => {
    return {
      path: `${base}/mount/${mountId}`,
      namespace: 'static',
    };
  },
  mountIndex: (): Resource<MountIndexResponse> => {
    return {
      path: `${base}/mount/index`,
      namespace: 'static',
    };
  },
  mountSearch: (
    options: MountSearchParameters,
  ): Resource<SearchResponse<MountSearchResponseItem>, Omit<MountSearchParameters, 'name' | 'locale'>> => {
    return {
      namespace: 'static',
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        [`name.${options.locale}`]: options.name,
      },
      path: `${searchBase}/mount`,
    };
  },
};
