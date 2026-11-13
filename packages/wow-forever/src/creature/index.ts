import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type {
  CreatureDisplayMediaResponse,
  CreatureFamilyIndexResponse,
  CreatureFamilyMediaResponse,
  CreatureFamilyResponse,
  CreatureResponse,
  CreatureSearchParameters,
  CreatureSearchResponse,
  CreatureTypeIndexResponse,
  CreatureTypeResponse,
} from './types';

/**
 * Returns a creature by ID.
 * @param creatureId The creature ID.
 * @returns The creature. See {@link CreatureResponse}.
 */
export function creature(creatureId: number): Resource<CreatureResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/creature/${encodeURIComponent(creatureId)}`,
  };
}
/**
 * Returns media for a creature display by ID.
 * @param creatureDisplayId The creature display ID.
 * @returns The creature display media. See {@link CreatureDisplayMediaResponse}.
 */
export function creatureDisplayMedia(creatureDisplayId: number): Resource<CreatureDisplayMediaResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowMediaBasePath}/creature-display/${encodeURIComponent(creatureDisplayId)}`,
  };
}
/**
 * Returns a creature family by ID.
 * @param creatureFamilyId The creature family ID.
 * @returns The creature family. See {@link CreatureFamilyResponse}.
 */
export function creatureFamily(creatureFamilyId: number): Resource<CreatureFamilyResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/creature-family/${encodeURIComponent(creatureFamilyId)}`,
  };
}
/**
 * Returns an index of creature families.
 * @returns The creature family index. See {@link CreatureFamilyIndexResponse}.
 */
export function creatureFamilyIndex(): Resource<CreatureFamilyIndexResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/creature-family/index`,
  };
}
/**
 * Returns media for a creature family by ID.
 * @param creatureFamilyId The creature family ID.
 * @returns The creature family media. See {@link CreatureFamilyMediaResponse}.
 */
export function creatureFamilyMedia(creatureFamilyId: number): Resource<CreatureFamilyMediaResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowMediaBasePath}/creature-family/${encodeURIComponent(creatureFamilyId)}`,
  };
}
/**
 * Performs a search of creatures.
 * @param options The creature search parameters. See {@link CreatureSearchParameters}.
 * @returns The creature search results. See {@link CreatureSearchResponse}.
 */
export function creatureSearch(
  options: CreatureSearchParameters,
): Resource<CreatureSearchResponse, Omit<CreatureSearchParameters, 'locale' | 'name'>> {
  return {
    namespace: 'static-forever',
    parameters: {
      _page: options._page,
      [`name.${options.locale}`]: options.name,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/creature`,
  };
}
/**
 * Returns a creature type by ID.
 * @param creatureTypeId The creature type ID.
 * @returns The creature type. See {@link CreatureTypeResponse}.
 */
export function creatureType(creatureTypeId: number): Resource<CreatureTypeResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/creature-type/${encodeURIComponent(creatureTypeId)}`,
  };
}
/**
 * Returns an index of creature types.
 * @returns The creature type index. See {@link CreatureTypeIndexResponse}.
 */
export function creatureTypeIndex(): Resource<CreatureTypeIndexResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/creature-type/index`,
  };
}
