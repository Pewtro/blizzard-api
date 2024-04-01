import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

//TODO Improve search endpoints
export const mediaSearchApi = {
  mediaSearch: (): Resource<void> => {
    return {
      path: `${base}/search/media`,
      namespace: 'static',
    };
  },
};
