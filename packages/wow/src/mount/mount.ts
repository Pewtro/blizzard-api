import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { MountIndexResponse, MountResponse } from './types';

export const mountApi = {
  mount: (mountId: number): Resource<MountResponse> => {
    return {
      path: `${base}/mount/${mountId}`,
      namespace: 'static',
    };
  },
  mountIndex: (): Resource<MountIndexResponse> => {
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
