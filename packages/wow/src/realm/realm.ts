import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, searchBase } from '../base';
import type { RealmIndexResponse, RealmResponse, RealmSearchParameters, RealmSearchResponseItem } from './types';

export const realmApi = {
  /**
   * Get a realm by slug.
   * @param realmSlug The realm slug.
   * @returns The realm. See {@link RealmResponse}.
   */
  realm: (realmSlug: string): Resource<RealmResponse> => {
    return {
      path: `${base}/realm/${realmSlug}`,
      namespace: 'dynamic',
    };
  },
  /**
   * Get a realm index.
   * @returns The realm index. See {@link RealmIndexResponse}.
   */
  realmIndex: (): Resource<RealmIndexResponse> => {
    return {
      path: `${base}/realm/index`,
      namespace: 'dynamic',
    };
  },
  /**
   * Search for realms.
   * @param options The search parameters. See {@link RealmSearchParameters}.
   * @returns The search results. See {@link SearchResponse}.
   */
  realmSearch: (
    options: RealmSearchParameters,
  ): Resource<SearchResponse<RealmSearchResponseItem>, RealmSearchParameters> => {
    return {
      namespace: 'dynamic',
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        timezone: options.timezone,
      },
      path: `${searchBase}/realm`,
    };
  },
};
