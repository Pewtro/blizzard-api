import { wowBasePath } from '@blizzard-api/core';
import type { DynamicClassicNamespaces, Resource } from '@blizzard-api/core';
import type {
  MythicKeystonePeriodIndexResponse,
  MythicKeystonePeriodResponse,
  MythicKeystoneSeasonIndexResponse,
  MythicKeystoneSeasonResponse,
} from './types';

/**
 * Get a Mythic Keystone period by ID.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param mythicKeystonePeriodId The Mythic Keystone period ID.
 * @returns The Mythic Keystone period. See {@link MythicKeystonePeriodResponse}.
 */
export function mythicKeystonePeriod(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
  mythicKeystonePeriodId: number,
): Resource<MythicKeystonePeriodResponse> {
  return {
    namespace,
    path: `${wowBasePath}/mythic-keystone/period/${mythicKeystonePeriodId}`,
  };
}
/**
 * Get the Mythic Keystone period index.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The Mythic Keystone period index. See {@link MythicKeystonePeriodIndexResponse}.
 */
export function mythicKeystonePeriodIndex(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
): Resource<MythicKeystonePeriodIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/mythic-keystone/period/index`,
  };
}
/**
 * Get a Mythic Keystone season by ID.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @param mythicKeystoneSeasonId The Mythic Keystone season ID.
 * @returns The Mythic Keystone season. See {@link MythicKeystoneSeasonResponse}.
 */
export function mythicKeystoneSeason(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
  mythicKeystoneSeasonId: number,
): Resource<MythicKeystoneSeasonResponse> {
  return {
    namespace,
    path: `${wowBasePath}/mythic-keystone/season/${mythicKeystoneSeasonId}`,
  };
}
/**
 * Get the Mythic Keystone season index.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
 * @returns The Mythic Keystone season index. See {@link MythicKeystoneSeasonIndexResponse}.
 */
export function mythicKeystoneSeasonIndex(
  namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>,
): Resource<MythicKeystoneSeasonIndexResponse> {
  return {
    namespace,
    path: `${wowBasePath}/mythic-keystone/season/index`,
  };
}
