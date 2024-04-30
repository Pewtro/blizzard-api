import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../base';
import type { SpellMediaResponse, SpellResponse, SpellSearchParameters, SpellSearchResponseItem } from './types';

export const spellApi = {
  spell: (spellId: number): Resource<SpellResponse> => {
    return {
      path: `${base}/spell/${spellId}`,
      namespace: 'static',
    };
  },
  spellMedia: (spellId: number): Resource<SpellMediaResponse> => {
    return {
      path: `${mediaBase}/spell/${spellId}`,
      namespace: 'static',
    };
  },
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
