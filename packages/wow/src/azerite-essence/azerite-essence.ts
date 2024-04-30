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
  azeriteEssence: (azeriteEssenceId: number): Resource<AzeriteEssenceResponse> => {
    return {
      path: `${base}/azerite-essence/${azeriteEssenceId}`,
      namespace: 'static',
    };
  },
  azeriteEssenceIndex: (): Resource<AzeriteEssenceIndexResponse> => {
    return {
      path: `${base}/azerite-essence/index`,
      namespace: 'static',
    };
  },
  azeriteEssenceMedia: (azeriteEssenceId: number): Resource<AzeriteEssenceMediaResponse> => {
    return { path: `${mediaBase}/azerite-essence/${azeriteEssenceId}`, namespace: 'static' };
  },
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
