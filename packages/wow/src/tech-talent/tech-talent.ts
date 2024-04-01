import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const techTalentApi = {
  techTalent: (techTalentId: number): Resource<void> => {
    return {
      path: `${base}/tech-talent/${techTalentId}`,
      namespace: 'static',
    };
  },
  techTalentIndex: (): Resource<void> => {
    return {
      path: `${base}/tech-talent/index`,
      namespace: 'static',
    };
  },
  techTalentMedia: (techTalentId: number): Resource<void> => {
    return {
      path: `${mediaBase}/tech-talent/${techTalentId}`,
      namespace: 'static',
    };
  },
  techTalentTree: (techTalentTreeId: number): Resource<void> => {
    return {
      path: `${base}/tech-talent-tree/${techTalentTreeId}`,
      namespace: 'static',
    };
  },
  techTalentTreeIndex: (): Resource<void> => {
    return {
      path: `${base}/tech-talent-tree/index`,
      namespace: 'static',
    };
  },
};
