import type { BlizzardNamespaces, Resource, SearchResponse } from '@blizzard-api/core';
import { searchBase } from '../../../wow/src/base';
import type { MediaSearchParameters, MediaSearchResponseItem } from './types';

/**
 * Search for media.
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
    path: `${searchBase}/media`,
  };
}
