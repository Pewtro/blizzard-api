import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../base';
import type {
  AzeriteEssenceIndexResponse,
  AzeriteEssenceMediaResponse,
  AzeriteEssenceResponse,
  AzeriteEssenceSearchParameters,
  AzeriteEssenceSearchResponseItem,
} from './types';

export const azeriteEssenceApi = {
  /**
   * Get an azerite essence by ID.
   * @param azeriteEssenceId The azerite essence ID.
   * @returns The azerite essence. See {@link AzeriteEssenceResponse}.
   */
  azeriteEssence: (azeriteEssenceId: number): Resource<AzeriteEssenceResponse> => {
    return {
      path: `${base}/azerite-essence/${azeriteEssenceId}`,
      namespace: 'static',
    };
  },
  /**
   * Get an azerite essence index.
   * @returns The azerite essence index. See {@link AzeriteEssenceIndexResponse}.
   */
  azeriteEssenceIndex: (): Resource<AzeriteEssenceIndexResponse> => {
    return {
      path: `${base}/azerite-essence/index`,
      namespace: 'static',
    };
  },
  /**
   * Get azerite essence media by ID.
   * @param azeriteEssenceId The azerite essence ID.
   * @returns The azerite essence media. See {@link AzeriteEssenceMediaResponse}.
   */
  azeriteEssenceMedia: (azeriteEssenceId: number): Resource<AzeriteEssenceMediaResponse> => {
    return { path: `${mediaBase}/azerite-essence/${azeriteEssenceId}`, namespace: 'static' };
  },
  /**
   * Search for azerite essences.
   * @param options The search parameters. See {@link AzeriteEssenceSearchParameters}.
   * @returns The search results. See {@link SearchResponse}.
   */
  azeriteEssenceSearch: (
    options: AzeriteEssenceSearchParameters,
  ): Resource<SearchResponse<AzeriteEssenceSearchResponseItem>, AzeriteEssenceSearchParameters> => {
    return {
      path: `${searchBase}/azerite-essence`,
      namespace: 'static',
      parameters: {
        _page: options._page,
        'allowed_specializations.id': options['allowed_specializations.id'],
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
      },
    };
  },
};
