import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ToyIndexResponse, ToyResponse } from './types';

export const toyApi = {
  toy: (toyId: number): Resource<ToyResponse> => {
    return {
      path: `${base}/toy/${toyId}`,
      namespace: 'static',
    };
  },
  toyIndex: (): Resource<ToyIndexResponse> => {
    return {
      path: `${base}/toy/index`,
      namespace: 'static',
    };
  },
};
