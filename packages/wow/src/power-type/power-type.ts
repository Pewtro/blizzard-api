import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { PowerTypeIndexResponse, PowerTypeResponse } from './types';

export const powerTypeApi = {
  powerType: (powerTypeId: number): Resource<PowerTypeResponse> => {
    return {
      path: `${base}/power-type/${powerTypeId}`,
      namespace: 'static',
    };
  },
  powerTypeIndex: (): Resource<PowerTypeIndexResponse> => {
    return {
      path: `${base}/power-type/index`,
      namespace: 'static',
    };
  },
};
