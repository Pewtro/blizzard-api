import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import type { Resource, StaticClassicNamespaces } from '@blizzard-api/core';
import type { PlayableClassIndexResponse, PlayableClassMediaResponse, PlayableClassResponse } from './types';

/**
 * Get a playable class by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param playableClassId The playable class ID.
 * @returns The playable class. See {@link PlayableClassResponse}.
 */
export function playableClass(
  namespace: StaticClassicNamespaces,
  playableClassId: number,
): Resource<PlayableClassResponse> {
  return {
    namespace,
    path: `${wowBasePath}/playable-class/${playableClassId}`,
  };
}
/**
 * Get a playable class index.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The playable class index. See {@link PlayableClassIndexResponse}.
 */
export function playableClassIndex(namespace: StaticClassicNamespaces): Resource<PlayableClassIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/playable-class/index`,
  };
}
/**
 * Get playable class media by ID.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param playableClassId The playable class ID.
 * @returns The playable class media. See {@link PlayableClassMediaResponse}.
 */
export function playableClassMedia(
  namespace: StaticClassicNamespaces,
  playableClassId: number,
): Resource<PlayableClassMediaResponse> {
  return {
    namespace,
    path: `${wowMediaBasePath}/playable-class/${playableClassId}`,
  };
}
