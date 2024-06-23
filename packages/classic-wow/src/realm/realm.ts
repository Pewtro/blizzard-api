import type { BlizzardNamespaces, Resource, SearchResponse } from '@blizzard-api/core';
import { base, searchBase } from '../../../wow/src/base';
import type { RealmIndexResponse, RealmResponse, RealmSearchParameters, RealmSearchResponseItem } from './types';

/**
 * Get a realm by slug.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The realm slug.
 * @returns The realm. See {@link RealmResponse}.
 */
export function realm(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
  realmSlug: string,
): Resource<RealmResponse> {
  return {
    namespace,
    path: `${base}/realm/${realmSlug}`,
  };
}
/**
 * Get a realm index.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The realm index. See {@link RealmIndexResponse}.
 */
export function realmIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
): Resource<RealmIndexResponse> {
  return {
    namespace,
    path: `${base}/realm/index`,
  };
}
/**
 * Search for realms.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The search parameters. See {@link RealmSearchParameters}.
 * @returns The search results. See {@link SearchResponse}.
 */
export function realmSearch(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic' | 'dynamic-classic1x'>,
  options: RealmSearchParameters,
): Resource<SearchResponse<RealmSearchResponseItem>, RealmSearchParameters> {
  return {
    namespace,
    parameters: {
      _page: options._page,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      timezone: options.timezone,
    },
    path: `${searchBase}/realm`,
  };
}
