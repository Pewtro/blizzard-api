import { wowBasePath } from '@blizzard-api/core';
import type { BlizzardNamespaces, Resource, SearchResponse } from '@blizzard-api/core';
import type {
  ConnectedRealmIndexResponse,
  ConnectedRealmResponse,
  ConnectedRealmSearchParameters,
  ConnectedRealmSearchResponseItem,
} from './types';

/**
 * Returns a connected realm by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param connectedRealmId The connected realm ID.
 * @returns The connected realm. See {@link ConnectedRealmResponse}.
 */
export function connectedRealm(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  connectedRealmId: number,
): Resource<ConnectedRealmResponse> {
  return {
    namespace,
    path: `${wowBasePath}/connected-realm/${connectedRealmId}`,
  };
}
/**
 * Returns an index of connected realms.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The connected realm index. See {@link ConnectedRealmIndexResponse}.
 */
export function connectedRealmIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
): Resource<ConnectedRealmIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/connected-realm/index`,
  };
}
/**
 * Performs a search of connected realms.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The search parameters. See {@link ConnectedRealmSearchParameters}.
 * @returns The search results. See {@link SearchResponse} & {@link ConnectedRealmSearchResponseItem}.
 */
export function connectedRealmSearch(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  options: ConnectedRealmSearchParameters,
): Resource<SearchResponse<ConnectedRealmSearchResponseItem>, ConnectedRealmSearchParameters> {
  return {
    namespace,
    parameters: {
      _page: options._page,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      'realms.timezone': options['realms.timezone'],
      'status.type': options['status.type'],
    },
    path: `${wowBasePath}/search/connected-realm`,
  };
}
