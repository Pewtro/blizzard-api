import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
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
    path: `${base}/playable-specialization/${specializationId}`,
    namespace: 'static',
  };
}
/**
 * Get a playable specialization index.
 * @returns The playable specialization index. See {@link PlayableSpecializationIndexResponse}.
 */
export function playableSpecializationIndex(): Resource<PlayableSpecializationIndexResponse> {
  return {
    path: `${base}/playable-specialization/index`,
    namespace: 'static',
  };
}
/**
 * Get a playable specialization media by ID.
 * @param specializationId The playable specialization ID.
 * @returns The playable specialization media. See {@link PlayableSpecializationMediaResponse}.
 */
export function playableSpecializationMedia(specializationId: number): Resource<PlayableSpecializationMediaResponse> {
  return {
    path: `${mediaBase}/playable-specialization/${specializationId}`,
    namespace: 'static',
  };
}
