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

export const questApi = {
  /**
   * Get a quest by ID.
   * @param questId The quest ID.
   * @returns The quest. See {@link QuestResponse}.
   */
  quest: (questId: number): Resource<QuestResponse> => {
    return {
      path: `${base}/quest/${questId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a quest index.
   * @returns The quest index. See {@link QuestIndexResponse}.
   */
  questIndex: (): Resource<QuestIndexResponse> => {
    return {
      path: `${base}/quest/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a quest area by ID.
   * @param questAreaId The quest area ID.
   * @returns The quest area. See {@link QuestAreaResponse}.
   */
  questArea: (questAreaId: number): Resource<QuestAreaResponse> => {
    return {
      path: `${base}/quest/area/${questAreaId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a quest area index.
   * @returns The quest area index. See {@link QuestAreaIndexResponse}.
   */
  questAreaIndex: (): Resource<QuestAreaIndexResponse> => {
    return {
      path: `${base}/quest/area/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a quest category by ID.
   * @param questCategoryId The quest category ID.
   * @returns The quest category. See {@link QuestCategoryResponse}.
   */
  questCategory: (questCategoryId: number): Resource<QuestCategoryResponse> => {
    return {
      path: `${base}/quest/category/${questCategoryId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a quest category index.
   * @returns The quest category index. See {@link QuestCategoryIndexResponse}.
   */
  questCategoryIndex: (): Resource<QuestCategoryIndexResponse> => {
    return {
      path: `${base}/quest/category/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a quest type by ID.
   * @param questTypeId The quest type ID.
   * @returns The quest type. See {@link QuestTypeResponse}.
   */
  questType: (questTypeId: number): Resource<QuestTypeResponse> => {
    return {
      path: `${base}/quest/type/${questTypeId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a quest type index.
   * @returns The quest type index. See {@link QuestTypeIndexResponse}.
   */
  questTypeIndex: (): Resource<QuestTypeIndexResponse> => {
    return {
      path: `${base}/quest/type/index`,
      namespace: 'static',
    };
  },
};
