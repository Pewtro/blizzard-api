import type { Resource } from '@blizzard-api/core';
import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import type {
  PlayableSpecializationIndexResponse,
  PlayableSpecializationMediaResponse,
  PlayableSpecializationResponse,
} from './types';

/**
 * Get a playable specialization by ID.
 * @param specializationId The playable specialization ID.
 * @returns The playable specialization. See {@link PlayableSpecializationResponse}.
 */
export function playableSpecialization(specializationId: number): Resource<PlayableSpecializationResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/playable-specialization/${encodeURIComponent(specializationId)}`,
  };
}
/**
 * Get a playable specialization index.
 * @returns The playable specialization index. See {@link PlayableSpecializationIndexResponse}.
 */
export function playableSpecializationIndex(): Resource<PlayableSpecializationIndexResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/playable-specialization/index`,
  };
}
/**
 * Get playable specialization media by ID.
 * @param specializationId The playable specialization ID.
 * @returns The playable specialization media. See {@link PlayableSpecializationMediaResponse}.
 */
export function playableSpecializationMedia(specializationId: number): Resource<PlayableSpecializationMediaResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowMediaBasePath}/playable-specialization/${encodeURIComponent(specializationId)}`,
  };
}
