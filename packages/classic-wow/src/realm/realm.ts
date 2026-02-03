import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import type { RealmIndexResponse, RealmResponse, RealmSearchParameters, RealmSearchResponse } from './types';

/**
 * Get a realm by slug.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param realmSlug The realm slug.
 * @returns The realm. See {@link RealmResponse}.
 */
export function realm(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  realmSlug: string,
): Resource<RealmResponse> {
  return {
    namespace,
    path: `${wowBasePath}/realm/${realmSlug}`,
  };
}
/**
 * Get a realm index.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The realm index. See {@link RealmIndexResponse}.
 */
export function realmIndex(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
): Resource<RealmIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/realm/index`,
  };
}
/**
 * Search for realms.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The search parameters. See {@link RealmSearchParameters}.
 * @returns The search results. See {@link RealmSearchResponse}.
 */
export function realmSearch(
  namespace: Extract<BlizzardNamespaces, 'dynamic-classic1x' | 'dynamic-classic'>,
  options: RealmSearchParameters,
): Resource<RealmSearchResponse, RealmSearchParameters> {
  return {
    namespace,
    parameters: {
      _page: options._page,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      timezone: options.timezone,
    },
    path: `${wowSearchBasePath}/realm`,
  };
}
