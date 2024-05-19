import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { WowTokenResponse } from './types';

/**
 * Get the current WoW token price.
 * @returns The WoW token price. See {@link WowTokenResponse}.
 */
export function wowToken(): Resource<WowTokenResponse> {
  return {
    path: `${base}/token/index`,
    namespace: 'dynamic',
  };
}
