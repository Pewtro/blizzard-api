import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  QuestAreaIndexResponse,
  QuestAreaResponse,
  QuestCategoryIndexResponse,
  QuestCategoryResponse,
  QuestIndexResponse,
  QuestResponse,
  QuestTypeIndexResponse,
  QuestTypeResponse,
} from './types';

/**
 * Get a quest by ID.
 * @param questId The quest ID.
 * @returns The quest. See {@link QuestResponse}.
 */
export function quest(questId: number): Resource<QuestResponse> {
  return {
    namespace: 'static',
    path: `${base}/quest/${questId}`,
  };
}
/**
 * Get a quest index.
 * @returns The quest index. See {@link QuestIndexResponse}.
 */
export function questIndex(): Resource<QuestIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/quest/index`,
  };
}
/**
 * Get a quest area by ID.
 * @param questAreaId The quest area ID.
 * @returns The quest area. See {@link QuestAreaResponse}.
 */
export function questArea(questAreaId: number): Resource<QuestAreaResponse> {
  return {
    namespace: 'static',
    path: `${base}/quest/area/${questAreaId}`,
  };
}
/**
 * Get a quest area index.
 * @returns The quest area index. See {@link QuestAreaIndexResponse}.
 */
export function questAreaIndex(): Resource<QuestAreaIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/quest/area/index`,
  };
}
/**
 * Get a quest category by ID.
 * @param questCategoryId The quest category ID.
 * @returns The quest category. See {@link QuestCategoryResponse}.
 */
export function questCategory(questCategoryId: number): Resource<QuestCategoryResponse> {
  return {
    namespace: 'static',
    path: `${base}/quest/category/${questCategoryId}`,
  };
}
/**
 * Get a quest category index.
 * @returns The quest category index. See {@link QuestCategoryIndexResponse}.
 */
export function questCategoryIndex(): Resource<QuestCategoryIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/quest/category/index`,
  };
}
/**
 * Get a quest type by ID.
 * @param questTypeId The quest type ID.
 * @returns The quest type. See {@link QuestTypeResponse}.
 */
export function questType(questTypeId: number): Resource<QuestTypeResponse> {
  return {
    namespace: 'static',
    path: `${base}/quest/type/${questTypeId}`,
  };
}
/**
 * Get a quest type index.
 * @returns The quest type index. See {@link QuestTypeIndexResponse}.
 */
export function questTypeIndex(): Resource<QuestTypeIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/quest/type/index`,
  };
}
