import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ToyIndexResponse, ToyResponse } from './types';

export const toyApi = {
  /**
   * Get a toy by ID.
   * @param toyId The toy ID.
   * @returns The toy. See {@link ToyResponse}.
   */
  toy: (toyId: number): Resource<ToyResponse> => {
    return {
      path: `${base}/toy/${toyId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a toy index.
   * @returns The toy index. See {@link ToyIndexResponse}.
   */
  toyIndex: (): Resource<ToyIndexResponse> => {
    return {
      path: `${base}/toy/index`,
      namespace: 'static',
    };
  },
};
