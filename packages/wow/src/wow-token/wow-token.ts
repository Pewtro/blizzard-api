import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { WowTokenResponse } from './types';

export const wowTokenApi = {
  wowToken: (): Resource<WowTokenResponse> => {
    return {
      path: `${base}/token/index`,
      namespace: 'dynamic',
    };
  },
};
