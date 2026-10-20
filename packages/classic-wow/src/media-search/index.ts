import { wowSearchBasePath } from '@blizzard-api/core';
import type { Resource, StaticClassicNamespaces } from '@blizzard-api/core';
import type { MediaSearchParameters, MediaSearchResponse } from './types';

/**
 * Search for media.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The search parameters. See {@link MediaSearchParameters}.
 * @returns The search results. See {@link MediaSearchResponse}.
 */
export function mediaSearch(
  namespace: StaticClassicNamespaces,
  options: MediaSearchParameters,
): Resource<MediaSearchResponse, MediaSearchParameters> {
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
