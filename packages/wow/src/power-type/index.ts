import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { PowerTypeIndexResponse, PowerTypeResponse } from './types';

/**
 * Get a power type by ID.
 * @param powerTypeId The power type ID.
 * @returns The power type. See {@link PowerTypeResponse}.
 */
export function powerType(powerTypeId: number): Resource<PowerTypeResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/power-type/${powerTypeId}`,
  };
}
/**
 * Get a power type index.
 * @returns The power type index. See {@link PowerTypeIndexResponse}.
 */
export function powerTypeIndex(): Resource<PowerTypeIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/power-type/index`,
  };
}
