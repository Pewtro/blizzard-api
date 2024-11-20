import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base } from '../base';
import type {
  ConnectedRealmIndexResponse,
  ConnectedRealmResponse,
  ConnectedRealmSearchParameters,
  ConnectedRealmSearchResponseItem,
} from './types';

/**
 * Get a connected realm by ID.
 * @param connectedRealmId The connected realm ID.
 * @returns The connected realm. See {@link ConnectedRealmResponse}.
 */
export function connectedRealm(connectedRealmId: number): Resource<ConnectedRealmResponse> {
  return {
    namespace: 'dynamic',
    path: `${base}/connected-realm/${connectedRealmId}`,
  };
}
/**
 * Get a connected realm index.
 * @returns The connected realm index. See {@link ConnectedRealmIndexResponse}.
 */
export function connectedRealmIndex(): Resource<ConnectedRealmIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${base}/connected-realm/index`,
  };
}
/**
 * Search for connected realms.
 * @param options The search parameters. See {@link ConnectedRealmSearchParameters}.
 * @returns The search results. See {@link SearchResponse} & {@link ConnectedRealmSearchResponseItem}.
 */
export function connectedRealmSearch(
  options: ConnectedRealmSearchParameters,
): Resource<SearchResponse<ConnectedRealmSearchResponseItem>, ConnectedRealmSearchParameters> {
  return {
    namespace: 'dynamic',
    parameters: {
      _page: options._page,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      'realms.timezone': options['realms.timezone'],
      'status.type': options['status.type'],
    },
    path: `${base}/search/connected-realm`,
  };
}
