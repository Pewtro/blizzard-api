import { wowSearchBasePath } from '@blizzard-api/core';
import type { BlizzardNamespaces, Resource, SearchResponse } from '@blizzard-api/core';
import type { MediaSearchParameters, MediaSearchResponseItem } from './types';

/**
 * Search for media.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The search parameters. See {@link MediaSearchParameters}.
 * @returns The search results. See {@link SearchResponse}.
 */
export function mediaSearch(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  options: MediaSearchParameters,
): Resource<SearchResponse<MediaSearchResponseItem>, MediaSearchParameters> {
  return {
    namespace,
    parameters: {
      _page: options._page,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      tags: options.tags,
    },
    path: `${wowSearchBasePath}/media`,
  };
}
