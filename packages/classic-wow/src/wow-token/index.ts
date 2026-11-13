import { wowBasePath } from '@blizzard-api/core';
import type { DynamicClassicNamespaces, Resource } from '@blizzard-api/core';
import type { WowTokenResponse } from './types';

/**
 * Get the current WoW token price.
 *
 * Only available for the `classic` (progression) namespace.
 * @param namespace The namespace to use. See {@link DynamicClassicNamespaces}.
 * @returns The WoW token price. See {@link WowTokenResponse}.
 */
export function wowToken(namespace: Extract<DynamicClassicNamespaces, 'dynamic-classic'>): Resource<WowTokenResponse> {
  return {
    namespace,
    path: `${wowBasePath}/token/index`,
  };
}
