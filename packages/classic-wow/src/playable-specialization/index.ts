import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import type { Resource, StaticClassicNamespaces } from '@blizzard-api/core';
import type {
  PlayableSpecializationIndexResponse,
  PlayableSpecializationMediaResponse,
  PlayableSpecializationResponse,
} from './types';

/**
 * Get a playable specialization by ID.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param specializationId The playable specialization ID.
 * @returns The playable specialization. See {@link PlayableSpecializationResponse}.
 */
export function playableSpecialization(
  namespace: Extract<StaticClassicNamespaces, 'static-classic'>,
  specializationId: number,
): Resource<PlayableSpecializationResponse> {
  return {
    namespace,
    path: `${wowBasePath}/playable-specialization/${encodeURIComponent(specializationId)}`,
  };
}
/**
 * Get the playable specialization index.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The playable specialization index. See {@link PlayableSpecializationIndexResponse}.
 */
export function playableSpecializationIndex(
  namespace: Extract<StaticClassicNamespaces, 'static-classic'>,
): Resource<PlayableSpecializationIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/playable-specialization/index`,
  };
}
/**
 * Get playable specialization media by ID.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param specializationId The playable specialization ID.
 * @returns The playable specialization media. See {@link PlayableSpecializationMediaResponse}.
 */
export function playableSpecializationMedia(
  namespace: Extract<StaticClassicNamespaces, 'static-classic'>,
  specializationId: number,
): Resource<PlayableSpecializationMediaResponse> {
  return {
    namespace,
    path: `${wowMediaBasePath}/playable-specialization/${encodeURIComponent(specializationId)}`,
  };
}
