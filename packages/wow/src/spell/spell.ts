import type { Resource, SearchResponse } from '@blizzard-api/core';
import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type { SpellMediaResponse, SpellResponse, SpellSearchParameters, SpellSearchResponseItem } from './types';

/**
 * Get a spell by ID.
 * @param spellId The spell ID.
 * @returns The spell. See {@link SpellResponse}.
 */
export function spell(spellId: number): Resource<SpellResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/spell/${spellId}`,
  };
}
/**
 * Get spell media by ID.
 * @param spellId The spell ID.
 * @returns The spell media. See {@link SpellMediaResponse}.
 */
export function spellMedia(spellId: number): Resource<SpellMediaResponse> {
  return {
    namespace: 'static',
    path: `${wowMediaBasePath}/spell/${spellId}`,
  };
}
/**
 * Get a spell search.
 * @param options The spell search options. See {@link SpellSearchParameters}.
 * @returns The spell search. See {@link SearchResponse}.
 */
export function spellSearch(
  options: SpellSearchParameters,
): Resource<SearchResponse<SpellSearchResponseItem>, Omit<SpellSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/spell`,
  };
}
