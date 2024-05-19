import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { TitleIndexResponse, TitleResponse } from './types';

/**
 * Get a title by ID.
 * @param titleId The title ID.
 * @returns The title. See {@link TitleResponse}.
 */
export function title(titleId: number): Resource<TitleResponse> {
  return {
    path: `${base}/title/${titleId}`,
    namespace: 'static',
  };
}
/**
 * Get a title index.
 * @returns The title index. See {@link TitleIndexResponse}.
 */
export function titleIndex(): Resource<TitleIndexResponse> {
  return {
    path: `${base}/title/index`,
    namespace: 'static',
  };
}
