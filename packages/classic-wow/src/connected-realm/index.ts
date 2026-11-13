import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type { DynamicClassicNamespaces, Resource } from '@blizzard-api/core';
import type {
  ConnectedRealmAuctionsResponse,
  ConnectedRealmIndexResponse,
  ConnectedRealmResponse,
  ConnectedRealmSearchParameters,
  ConnectedRealmSearchResponse,
} from './types';

/**
 * Returns a connected realm by ID.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param connectedRealmId The connected realm ID.
 * @returns The connected realm. See {@link ConnectedRealmResponse}.
 */
export function connectedRealm(
  namespace: DynamicClassicNamespaces,
  connectedRealmId: number,
): Resource<ConnectedRealmResponse> {
  return {
    namespace,
    path: `${wowBasePath}/connected-realm/${encodeURIComponent(connectedRealmId)}`,
  };
}
/**
 * Returns all active auctions for a connected realm.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param connectedRealmId The connected realm ID.
 * @returns The connected realm auctions. See {@link ConnectedRealmAuctionsResponse}.
 */
export function connectedRealmAuctions(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
  connectedRealmId: number,
): Resource<ConnectedRealmAuctionsResponse> {
  return {
    namespace,
    path: `${wowBasePath}/connected-realm/${encodeURIComponent(connectedRealmId)}/auctions`,
  };
}
/**
 * Returns an index of connected realms.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @returns The connected realm index. See {@link ConnectedRealmIndexResponse}.
 */
export function connectedRealmIndex(namespace: DynamicClassicNamespaces): Resource<ConnectedRealmIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/connected-realm/index`,
  };
}
/**
 * Performs a search of connected realms.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @param options The search parameters. See {@link ConnectedRealmSearchParameters}.
 * @returns The search results. See {@link ConnectedRealmSearchResponse}.
 */
export function connectedRealmSearch(
  namespace: DynamicClassicNamespaces,
  options: ConnectedRealmSearchParameters,
): Resource<ConnectedRealmSearchResponse, ConnectedRealmSearchParameters> {
  return {
    namespace,
    parameters: {
      _page: options._page,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      'realms.timezone': options['realms.timezone'],
      'status.type': options['status.type'],
    },
    path: `${wowSearchBasePath}/connected-realm`,
  };
}
