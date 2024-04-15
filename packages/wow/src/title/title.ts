import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { TitleIndexResponse, TitleResponse } from './types';

export const titleApi = {
  title: (titleId: number): Resource<TitleResponse> => {
    return {
      path: `${base}/title/${titleId}`,
      namespace: 'static',
    };
  },
  titleIndex: (): Resource<TitleIndexResponse> => {
    return {
      path: `${base}/title/index`,
      namespace: 'static',
    };
  },
};
