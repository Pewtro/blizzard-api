import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { WowTokenResponse } from './types';

export const wowTokenApi = {
  /**
   * Get the current WoW token price.
   * @returns The WoW token price. See {@link WowTokenResponse}.
   */
  wowToken: (): Resource<WowTokenResponse> => {
    return {
      path: `${base}/token/index`,
      namespace: 'dynamic',
    };
  },
};
