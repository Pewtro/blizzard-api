import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const talentApi = {
  pvpTalent: (pvpTalentId: number): Resource<void> => {
    return {
      path: `${base}/pvp-talent/${pvpTalentId}`,
      namespace: 'static',
    };
  },
  pvpTalentIndex: (): Resource<void> => {
    return {
      path: `${base}/pvp-talent/index`,
      namespace: 'static',
    };
  },
  talent: (talentId: number): Resource<void> => {
    return {
      path: `${base}/talent/${talentId}`,
      namespace: 'static',
    };
  },
  talentIndex: (): Resource<void> => {
    return {
      path: `${base}/talent/index`,
      namespace: 'static',
    };
  },
  talentTree: (talentTreeId: number, specId: number): Resource<void> => {
    return {
      path: `${base}/talent-tree/${talentTreeId}/playable-specialization/${specId}`,
      namespace: 'static',
    };
  },
  talentTreeIndex: (): Resource<void> => {
    return {
      path: `${base}/talent-tree/index`,
      namespace: 'static',
    };
  },
  talentTreeNodes: (talentTreeId: number): Resource<void> => {
    return {
      path: `${base}/talent-tree/${talentTreeId}`,
      namespace: 'static',
    };
  },
};
