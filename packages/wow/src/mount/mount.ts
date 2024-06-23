import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, searchBase } from '../base';
import type { MountIndexResponse, MountResponse, MountSearchParameters, MountSearchResponseItem } from './types';

/**
 * Get a mount by ID.
 * @param mountId The mount ID.
 * @returns The mount. See {@link MountResponse}.
 */
export function mount(mountId: number): Resource<MountResponse> {
  return {
    namespace: 'static',
    path: `${base}/mount/${mountId}`,
  };
}
/**
 * Get a mount index.
 * @returns The mount index. See {@link MountIndexResponse}.
 */
export function mountIndex(): Resource<MountIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/mount/index`,
  };
}
/**
 * Get a mount search.
 * @param options The search parameters. See {@link MountSearchParameters}.
 * @returns The search results. See {@link SearchResponse}.
 */
export function mountSearch(
  options: MountSearchParameters,
): Resource<SearchResponse<MountSearchResponseItem>, Omit<MountSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${searchBase}/mount`,
  };
}
