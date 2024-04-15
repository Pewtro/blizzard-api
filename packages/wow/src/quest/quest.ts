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
  quest: (questId: number): Resource<QuestResponse> => {
    return {
      path: `${base}/quest/${questId}`,
      namespace: 'static',
    };
  },
  questIndex: (): Resource<QuestIndexResponse> => {
    return {
      path: `${base}/quest/index`,
      namespace: 'static',
    };
  },
  questArea: (questAreaId: number): Resource<QuestAreaResponse> => {
    return {
      path: `${base}/quest/area/${questAreaId}`,
      namespace: 'static',
    };
  },
  questAreaIndex: (): Resource<QuestAreaIndexResponse> => {
    return {
      path: `${base}/quest/area/index`,
      namespace: 'static',
    };
  },
  questCategory: (questCategoryId: number): Resource<QuestCategoryResponse> => {
    return {
      path: `${base}/quest/category/${questCategoryId}`,
      namespace: 'static',
    };
  },
  questCategoryIndex: (): Resource<QuestCategoryIndexResponse> => {
    return {
      path: `${base}/quest/category/index`,
      namespace: 'static',
    };
  },
  questType: (questTypeId: number): Resource<QuestTypeResponse> => {
    return {
      path: `${base}/quest/type/${questTypeId}`,
      namespace: 'static',
    };
  },
  questTypeIndex: (): Resource<QuestTypeIndexResponse> => {
    return {
      path: `${base}/quest/type/index`,
      namespace: 'static',
    };
  },
};
