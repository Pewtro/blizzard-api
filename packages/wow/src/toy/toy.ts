import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ToyIndexResponse, ToyResponse } from './types';

/**
 * Get a toy by ID.
 * @param toyId The toy ID.
 * @returns The toy. See {@link ToyResponse}.
 */
export function toy(toyId: number): Resource<ToyResponse> {
  return {
    namespace: 'static',
    path: `${base}/toy/${toyId}`,
  };
}
/**
 * Get a toy index.
 * @returns The toy index. See {@link ToyIndexResponse}.
 */
export function toyIndex(): Resource<ToyIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/toy/index`,
  };
}
