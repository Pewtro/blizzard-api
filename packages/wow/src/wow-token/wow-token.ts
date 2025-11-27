import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { WowTokenResponse } from './types';

/**
 * Get the current WoW token price.
 * @returns The WoW token price. See {@link WowTokenResponse}.
 */
export function wowToken(): Resource<WowTokenResponse> {
  return {
    namespace: 'dynamic',
    path: `${wowBasePath}/token/index`,
  };
}
