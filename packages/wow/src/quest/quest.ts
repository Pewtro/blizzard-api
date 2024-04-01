import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const questApi = {
  quest: (questId: number): Resource<void> => {
    return {
      path: `${base}/quest/${questId}`,
      namespace: 'static',
    };
  },
  questIndex: (): Resource<void> => {
    return {
      path: `${base}/quest/index`,
      namespace: 'static',
    };
  },
  questArea: (questAreaId: number): Resource<void> => {
    return {
      path: `${base}/quest/area/${questAreaId}`,
      namespace: 'static',
    };
  },
  questAreaIndex: (): Resource<void> => {
    return {
      path: `${base}/quest/area/index`,
      namespace: 'static',
    };
  },
  questCategory: (questCategoryId: number): Resource<void> => {
    return {
      path: `${base}/quest/category/${questCategoryId}`,
      namespace: 'static',
    };
  },
  questCategoryIndex: (): Resource<void> => {
    return {
      path: `${base}/quest/category/index`,
      namespace: 'static',
    };
  },
  questType: (questTypeId: number): Resource<void> => {
    return {
      path: `${base}/quest/type/${questTypeId}`,
      namespace: 'static',
    };
  },
  questTypeIndex: (): Resource<void> => {
    return {
      path: `${base}/quest/type/index`,
      namespace: 'static',
    };
  },
};
