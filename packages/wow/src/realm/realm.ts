import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, searchBase } from '../base';
import type { RealmIndexResponse, RealmResponse, RealmSearchParameters, RealmSearchResponseItem } from './types';

export const realmApi = {
  realm: (realmSlug: string): Resource<RealmResponse> => {
    return {
      path: `${base}/realm/${realmSlug}`,
      namespace: 'dynamic',
    };
  },
  realmIndex: (): Resource<RealmIndexResponse> => {
    return {
      path: `${base}/realm/index`,
      namespace: 'dynamic',
    };
  },
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
