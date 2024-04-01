import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const titleApi = {
  title: (titleId: number): Resource<void> => {
    return {
      path: `${base}/title/${titleId}`,
      namespace: 'static',
    };
  },
  titleIndex: (): Resource<void> => {
    return {
      path: `${base}/title/index`,
      namespace: 'static',
    };
  },
};
