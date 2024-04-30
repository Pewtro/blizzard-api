import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base } from '../base';
import type {
  ConnectedRealmIndexResponse,
  ConnectedRealmResponse,
  ConnectedRealmSearchParameters,
  ConnectedRealmSearchResponseItem,
} from './types';

export const connectedRealmApi = {
  connectedRealmIndex: (): Resource<ConnectedRealmIndexResponse> => {
    return {
      path: `${base}/connected-realm/index`,
      namespace: 'dynamic',
    };
  },
  connectedRealm: (connectedRealmId: number): Resource<ConnectedRealmResponse> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}`,
      namespace: 'dynamic',
    };
  },
  connectedRealmSearch: (
    options: ConnectedRealmSearchParameters,
  ): Resource<SearchResponse<ConnectedRealmSearchResponseItem>, ConnectedRealmSearchParameters> => {
    return {
      namespace: 'dynamic',
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        'status.type': options['status.type'],
        'realms.timezone': options['realms.timezone'],
      },
      path: `${base}/search/connected-realm`,
    };
  },
};
