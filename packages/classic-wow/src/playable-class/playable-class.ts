import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../../../wow/src/base';
import type { PlayableClassIndexResponse, PlayableClassMediaResponse, PlayableClassResponse } from './types';

export const classicPlayableClassApi = {
  /**
   * Get a playable class by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param playableClassId The playable class ID.
   * @returns The playable class. See {@link PlayableClassResponse}.
   */
  playableClass: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    playableClassId: number,
  ): Resource<PlayableClassResponse> => {
    return {
      namespace,
      path: `${base}/playable-class/${playableClassId}`,
    };
  },
  /**
   * Get a playable class index.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @returns The playable class index. See {@link PlayableClassIndexResponse}.
   */
  playableClassIndex: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  ): Resource<PlayableClassIndexResponse> => {
    return {
      namespace,
      path: `${base}/playable-class/index`,
    };
  },
  /**
   * Get playable class media by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param playableClassId The playable class ID.
   * @returns The playable class media. See {@link PlayableClassMediaResponse}.
   */
  playableClassMedia: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    playableClassId: number,
  ): Resource<PlayableClassMediaResponse> => {
    return {
      namespace,
      path: `${mediaBase}/playable-class/${playableClassId}`,
    };
  },
};
