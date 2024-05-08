import type { BlizzardNamespaces, Resource, SearchResponse } from '@blizzard-api/core';
import { base } from '../../../wow/src/base';
import type {
  ConnectedRealmIndexResponse,
  ConnectedRealmResponse,
  ConnectedRealmSearchParameters,
  ConnectedRealmSearchResponseItem,
} from './types';

export const classicConnectedRealmApi = {
  /**
   * Returns an index of connected realms.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @returns The connected realm index. See {@link ConnectedRealmIndexResponse}.
   */
  connectedRealmIndex: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
  ): Resource<ConnectedRealmIndexResponse> => {
    return {
      path: `${base}/connected-realm/index`,
      namespace,
    };
  },
  /**
   * Returns a connected realm by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param connectedRealmId The connected realm ID.
   * @returns The connected realm. See {@link ConnectedRealmResponse}.
   */
  connectedRealm: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    connectedRealmId: number,
  ): Resource<ConnectedRealmResponse> => {
    return {
      path: `${base}/connected-realm/${connectedRealmId}`,
      namespace,
    };
  },
  /**
   * Performs a search of connected realms.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param options The search parameters. See {@link ConnectedRealmSearchParameters}.
   * @returns The search results. See {@link SearchResponse} & {@link ConnectedRealmSearchResponseItem}.
   */
  connectedRealmSearch: (
    namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
    options: ConnectedRealmSearchParameters,
  ): Resource<SearchResponse<ConnectedRealmSearchResponseItem>, ConnectedRealmSearchParameters> => {
    return {
      namespace,
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
