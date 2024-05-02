import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { PowerTypeIndexResponse, PowerTypeResponse } from './types';

export const powerTypeApi = {
  /**
   * Get a power type by ID.
   * @param powerTypeId The power type ID.
   * @returns The power type. See {@link PowerTypeResponse}.
   */
  powerType: (powerTypeId: number): Resource<PowerTypeResponse> => {
    return {
      path: `${base}/power-type/${powerTypeId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a power type index.
   * @returns The power type index. See {@link PowerTypeIndexResponse}.
   */
  powerTypeIndex: (): Resource<PowerTypeIndexResponse> => {
    return {
      path: `${base}/power-type/index`,
      namespace: 'static',
    };
  },
};
