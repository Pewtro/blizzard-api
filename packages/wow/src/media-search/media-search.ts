import type { Resource } from '@blizzard-api/core';
import { wowSearchBasePath } from '@blizzard-api/core';
import type { MediaSearchParameters, MediaSearchResponse } from './types';

/**
 * Search for media.
 * @param options The search parameters. See {@link MediaSearchParameters}.
 * @returns The search results. See {@link MediaSearchResponse}.
 */
export function mediaSearch(options: MediaSearchParameters): Resource<MediaSearchResponse, MediaSearchParameters> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      tags: options.tags,
    },
    path: `${wowSearchBasePath}/media`,
  };
}
