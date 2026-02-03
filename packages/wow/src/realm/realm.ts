import type { Resource } from '@blizzard-api/core';
import { wowBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type { RealmIndexResponse, RealmResponse, RealmSearchParameters, RealmSearchResponse } from './types';

/**
 * Get a realm by slug.
 * @param realmSlug The realm slug.
 * @returns The realm. See {@link RealmResponse}.
 */
export function realm(realmSlug: string): Resource<RealmResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/realm/${realmSlug}`,
  };
}
/**
 * Get a realm index.
 * @returns The realm index. See {@link RealmIndexResponse}.
 */
export function realmIndex(): Resource<RealmIndexResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/realm/index`,
  };
}
/**
 * Search for realms.
 * @param options The search parameters. See {@link RealmSearchParameters}.
 * @returns The search results. See {@link RealmSearchResponse}.
 */
export function realmSearch(options: RealmSearchParameters): Resource<RealmSearchResponse, RealmSearchParameters> {
  return {
    namespace: 'dynamic',
    parameters: {
      _page: options._page,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      timezone: options.timezone,
    },
    path: `${wowSearchBasePath}/realm`,
  };
}
