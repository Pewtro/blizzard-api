import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../base';
import type { SpellMediaResponse, SpellResponse, SpellSearchParameters, SpellSearchResponseItem } from './types';

export const spellApi = {
  /**
   * Get a spell by ID.
   * @param spellId The spell ID.
   * @returns The spell. See {@link SpellResponse}.
   */
  spell: (spellId: number): Resource<SpellResponse> => {
    return {
      path: `${base}/spell/${spellId}`,
      namespace: 'static',
    };
  },
  /**
   * Get spell media by ID.
   * @param spellId The spell ID.
   * @returns The spell media. See {@link SpellMediaResponse}.
   */
  spellMedia: (spellId: number): Resource<SpellMediaResponse> => {
    return {
      path: `${mediaBase}/spell/${spellId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a spell search.
   * @param options The spell search options. See {@link SpellSearchParameters}.
   * @returns The spell search. See {@link SearchResponse}.
   */
  spellSearch: (
    options: SpellSearchParameters,
  ): Resource<SearchResponse<SpellSearchResponseItem>, Omit<SpellSearchParameters, 'name' | 'locale'>> => {
    return {
      namespace: 'static',
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        [`name.${options.locale}`]: options.name,
      },
      path: `${searchBase}/spell`,
    };
  },
};
