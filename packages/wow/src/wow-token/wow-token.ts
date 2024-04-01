import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const wowTokenApi = {
  wowToken: (): Resource<void> => {
    return {
      path: `${base}/token/index`,
      namespace: 'dynamic',
    };
  },
};
