import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const toyApi = {
  toy: (toyId: number): Resource<void> => {
    return {
      path: `${base}/toy/${toyId}`,
      namespace: 'static',
    };
  },
  toyIndex: (): Resource<void> => {
    return {
      path: `${base}/toy/index`,
      namespace: 'static',
    };
  },
};
