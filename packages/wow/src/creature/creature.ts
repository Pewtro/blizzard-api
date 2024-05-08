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
  /**
   * Get a creature by ID.
   * @param creatureId The creature ID.
   * @returns The creature. See {@link CreatureResponse}.
   */
  creature: (creatureId: number): Resource<CreatureResponse> => {
    return {
      path: `${base}/creature/${creatureId}`,
      namespace: 'static',
    };
  },
  /**
   * Get creature display media by ID.
   * @param creatureDisplayId The creature display ID.
   * @returns The creature display media. See {@link CreatureDisplayMediaResponse}.
   */
  creatureDisplayMedia: (creatureDisplayId: number): Resource<CreatureDisplayMediaResponse> => {
    return {
      path: `${mediaBase}/creature-display/${creatureDisplayId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a creature family by ID.
   * @param creatureFamilyId The creature family ID.
   * @returns The creature family. See {@link CreatureFamilyResponse}.
   */
  creatureFamily: (creatureFamilyId: number): Resource<CreatureFamilyResponse> => {
    return {
      path: `${base}/creature-family/${creatureFamilyId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a creature family index.
   * @returns The creature family index. See {@link CreatureFamilyIndexResponse}.
   */
  creatureFamilyIndex: (): Resource<CreatureFamilyIndexResponse> => {
    return {
      path: `${base}/creature-family/index`,
      namespace: 'static',
    };
  },
  /**
   * Get creature family media by ID.
   * @param creatureFamilyId The creature family ID.
   * @returns The creature family media. See {@link CreatureFamilyMediaResponse}.
   */
  creatureFamilyMedia: (creatureFamilyId: number): Resource<CreatureFamilyMediaResponse> => {
    return {
      path: `${mediaBase}/creature-family/${creatureFamilyId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a creature type by ID.
   * @param creatureTypeId The creature type ID.
   * @returns The creature type. See {@link CreatureTypeResponse}.
   */
  creatureType: (creatureTypeId: number): Resource<CreatureTypeResponse> => {
    return {
      path: `${base}/creature-type/${creatureTypeId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a creature type index.
   * @returns The creature type index. See {@link CreatureTypeIndexResponse}.
   */
  creatureTypeIndex: (): Resource<CreatureTypeIndexResponse> => {
    return {
      path: `${base}/creature-type/index`,
      namespace: 'static',
    };
  },
  /**
   * Search for creatures.
   * @param options The creature search parameters. See {@link CreatureSearchParameters}.
   * @returns The creature search results. See {@link SearchResponse} & {@link CreatureSearchResponseItem}.
   */
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
