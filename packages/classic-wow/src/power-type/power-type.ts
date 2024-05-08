import type { BlizzardNamespaces, Resource } from '@blizzard-api/core';
import { base } from '../../../wow/src/base';
import type { PowerTypeIndexResponse, PowerTypeResponse } from './types';

export const classicPowerTypeApi = {
  /**
   * Get a power type by ID.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @param powerTypeId The power type ID.
   * @returns The power type. See {@link PowerTypeResponse}.
   */
  powerType: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
    powerTypeId: number,
  ): Resource<PowerTypeResponse> => {
    return {
      namespace,
      path: `${base}/power-type/${powerTypeId}`,
    };
  },
  /**
   * Get a power type index.
   * @param namespace The namespace to use. See {@link BlizzardNamespaces}.
   * @returns The power type index. See {@link PowerTypeIndexResponse}.
   */
  powerTypeIndex: (
    namespace: Extract<BlizzardNamespaces, 'static-classic' | 'static-classic1x'>,
  ): Resource<PowerTypeIndexResponse> => {
    return {
      namespace,
      path: `${base}/power-type/index`,
    };
  },
};
