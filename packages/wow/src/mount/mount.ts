import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const mountApi = {
  mount: (mountId: number): Resource<void> => {
    return {
      path: `${base}/mount/${mountId}`,
      namespace: 'static',
    };
  },
  mountIndex: (): Resource<void> => {
    return {
      path: `${base}/mount/index`,
      namespace: 'static',
    };
  },
  //TODO Improve search endpoints
  //mountSearch: (): Resource<void> => {
  //  return {
  //    path: `${base}/mount/search`,
  //    namespace: 'static',
  //  };
  //},
};
