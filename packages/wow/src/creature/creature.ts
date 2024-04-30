import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../base';
import type {
  CreatureDisplayMediaResponse,
  CreatureFamilyIndexResponse,
  CreatureFamilyMediaResponse,
  CreatureFamilyResponse,
  CreatureResponse,
  CreatureSearchParameters,
  CreatureSearchResponseItem,
  CreatureTypeIndexResponse,
  CreatureTypeResponse,
} from './types';

export const creatureApi = {
  creature: (creatureId: number): Resource<CreatureResponse> => {
    return {
      path: `${base}/creature/${creatureId}`,
      namespace: 'static',
    };
  },
  creatureDisplayMedia: (creatureDisplayId: number): Resource<CreatureDisplayMediaResponse> => {
    return {
      path: `${mediaBase}/creature-display/${creatureDisplayId}`,
      namespace: 'static',
    };
  },
  creatureFamily: (creatureFamilyId: number): Resource<CreatureFamilyResponse> => {
    return {
      path: `${base}/creature-family/${creatureFamilyId}`,
      namespace: 'static',
    };
  },
  creatureFamilyIndex: (): Resource<CreatureFamilyIndexResponse> => {
    return {
      path: `${base}/creature-family/index`,
      namespace: 'static',
    };
  },
  creatureFamilyMedia: (creatureFamilyId: number): Resource<CreatureFamilyMediaResponse> => {
    return {
      path: `${mediaBase}/creature-family/${creatureFamilyId}`,
      namespace: 'static',
    };
  },
  creatureType: (creatureTypeId: number): Resource<CreatureTypeResponse> => {
    return {
      path: `${base}/creature-type/${creatureTypeId}`,
      namespace: 'static',
    };
  },
  creatureTypeIndex: (): Resource<CreatureTypeIndexResponse> => {
    return {
      path: `${base}/creature-type/index`,
      namespace: 'static',
    };
  },
  creatureSearch: (
    options: CreatureSearchParameters,
  ): Resource<SearchResponse<CreatureSearchResponseItem>, Omit<CreatureSearchParameters, 'name' | 'locale'>> => {
    return {
      namespace: 'static',
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        [`name.${options.locale}`]: options.name,
      },
      path: `${searchBase}/creature`,
    };
  },
};
