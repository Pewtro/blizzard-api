import type { Resource, SearchResponse } from '@blizzard-api/core';
import { searchBase } from '../base';
import type { MediaSearchParameters, MediaSearchResponseItem } from './types';

export const mediaSearchApi = {
  mediaSearch: (
    options: MediaSearchParameters,
  ): Resource<SearchResponse<MediaSearchResponseItem>, MediaSearchParameters> => {
    return {
      namespace: 'static',
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        tags: options.tags,
      },
      path: `${searchBase}/media`,
    };
  },
};
