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

/**
 * Get a creature by ID.
 * @param creatureId The creature ID.
 * @returns The creature. See {@link CreatureResponse}.
 */
export function creature(creatureId: number): Resource<CreatureResponse> {
  return {
    namespace: 'static',
    path: `${base}/creature/${creatureId}`,
  };
}
/**
 * Get creature display media by ID.
 * @param creatureDisplayId The creature display ID.
 * @returns The creature display media. See {@link CreatureDisplayMediaResponse}.
 */
export function creatureDisplayMedia(creatureDisplayId: number): Resource<CreatureDisplayMediaResponse> {
  return {
    namespace: 'static',
    path: `${mediaBase}/creature-display/${creatureDisplayId}`,
  };
}
/**
 * Get a creature family by ID.
 * @param creatureFamilyId The creature family ID.
 * @returns The creature family. See {@link CreatureFamilyResponse}.
 */
export function creatureFamily(creatureFamilyId: number): Resource<CreatureFamilyResponse> {
  return {
    namespace: 'static',
    path: `${base}/creature-family/${creatureFamilyId}`,
  };
}
/**
 * Get a creature family index.
 * @returns The creature family index. See {@link CreatureFamilyIndexResponse}.
 */
export function creatureFamilyIndex(): Resource<CreatureFamilyIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/creature-family/index`,
  };
}
/**
 * Get creature family media by ID.
 * @param creatureFamilyId The creature family ID.
 * @returns The creature family media. See {@link CreatureFamilyMediaResponse}.
 */
export function creatureFamilyMedia(creatureFamilyId: number): Resource<CreatureFamilyMediaResponse> {
  return {
    namespace: 'static',
    path: `${mediaBase}/creature-family/${creatureFamilyId}`,
  };
}
/**
 * Search for creatures.
 * @param options The creature search parameters. See {@link CreatureSearchParameters}.
 * @returns The creature search results. See {@link SearchResponse} & {@link CreatureSearchResponseItem}.
 */
export function creatureSearch(
  options: CreatureSearchParameters,
): Resource<SearchResponse<CreatureSearchResponseItem>, Omit<CreatureSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${searchBase}/creature`,
  };
}
/**
 * Get a creature type by ID.
 * @param creatureTypeId The creature type ID.
 * @returns The creature type. See {@link CreatureTypeResponse}.
 */
export function creatureType(creatureTypeId: number): Resource<CreatureTypeResponse> {
  return {
    namespace: 'static',
    path: `${base}/creature-type/${creatureTypeId}`,
  };
}
/**
 * Get a creature type index.
 * @returns The creature type index. See {@link CreatureTypeIndexResponse}.
 */
export function creatureTypeIndex(): Resource<CreatureTypeIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/creature-type/index`,
  };
}
