import type { Resource, SearchResponse } from '@blizzard-api/core';
import { searchBase } from '../base';
import type { MediaSearchParameters, MediaSearchResponseItem } from './types';

export const mediaSearchApi = {
  /**
   * Search for media.
   * @param options The search parameters. See {@link MediaSearchParameters}.
   * @returns The search results. See {@link SearchResponse}.
   */
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
