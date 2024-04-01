import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const powerTypeApi = {
  powerType: (powerTypeId: number): Resource<void> => {
    return {
      path: `${base}/power-type/${powerTypeId}`,
      namespace: 'static',
    };
  },
  powerTypeIndex: (): Resource<void> => {
    return {
      path: `${base}/power-type/index`,
      namespace: 'static',
    };
  },
};
