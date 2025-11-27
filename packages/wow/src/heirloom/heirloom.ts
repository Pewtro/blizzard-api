import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type { HeirloomIndexResponse, HeirloomResponse } from './types';

/**
 * Get a heirloom by ID.
 * @param heirloomId The heirloom ID.
 * @returns The heirloom. See {@link HeirloomResponse}.
 */
export function heirloom(heirloomId: number): Resource<HeirloomResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/heirloom/${heirloomId}`,
  };
}
/**
 * Get the heirloom index.
 * @returns The heirloom index. See {@link HeirloomIndexResponse}.
 */
export function heirloomIndex(): Resource<HeirloomIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/heirloom/index`,
  };
}
