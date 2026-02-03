import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
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
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureId The creature ID.
 * @returns The creature. See {@link CreatureResponse}.
 */
export function creature(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  creatureId: number,
): Resource<CreatureResponse> {
  return {
    namespace,
    path: `${wowBasePath}/creature/${creatureId}`,
  };
}
/**
 * Returns media for a creature display by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureDisplayId The creature display ID.
 * @returns The creature display media. See {@link CreatureDisplayMediaResponse}.
 */
export function creatureDisplayMedia(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  creatureDisplayId: number,
): Resource<CreatureDisplayMediaResponse> {
  return {
    namespace,
    path: `${wowMediaBasePath}/creature-display/${creatureDisplayId}`,
  };
}
/**
 * Returns a creature family by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureFamilyId The creature family ID.
 * @returns The creature family. See {@link CreatureFamilyResponse}.
 */
export function creatureFamily(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  creatureFamilyId: number,
): Resource<CreatureFamilyResponse> {
  return {
    namespace,
    path: `${wowBasePath}/creature-family/${creatureFamilyId}`,
  };
}
/**
 * Returns an index of creature families.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The creature family index. See {@link CreatureFamilyIndexResponse}.
 */
export function creatureFamilyIndex(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
): Resource<CreatureFamilyIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/creature-family/index`,
  };
}
/**
 * Returns media for a creature family by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureFamilyId The creature family ID.
 * @returns The creature family media. See {@link CreatureFamilyMediaResponse}.
 */
export function creatureFamilyMedia(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  creatureFamilyId: number,
): Resource<CreatureFamilyMediaResponse> {
  return {
    namespace,
    path: `${wowMediaBasePath}/creature-family/${creatureFamilyId}`,
  };
}
/**
 * Performs a search of creatures.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param options The creature search parameters. See {@link CreatureSearchParameters}.
 * @returns The creature search results. See {@link CreatureSearchResponse}.
 */
export function creatureSearch(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  options: CreatureSearchParameters,
): Resource<CreatureSearchResponse, Omit<CreatureSearchParameters, 'locale' | 'name'>> {
  return {
    namespace,
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
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param creatureTypeId The creature type ID.
 * @returns The creature type. See {@link CreatureTypeResponse}.
 */
export function creatureType(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
  creatureTypeId: number,
): Resource<CreatureTypeResponse> {
  return {
    namespace,
    path: `${wowBasePath}/creature-type/${creatureTypeId}`,
  };
}
/**
 * Returns an index of creature types.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The creature type index. See {@link CreatureTypeIndexResponse}.
 */
export function creatureTypeIndex(
  namespace: Extract<BlizzardNamespaces, 'static-classic1x' | 'static-classic'>,
): Resource<CreatureTypeIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/creature-type/index`,
  };
}
