import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  PvpTalentIndexResponse,
  PvpTalentResponse,
  TalentIndexResponse,
  TalentResponse,
  TalentTreeIndexResponse,
  TalentTreeNodesResponse,
  TalentTreeResponse,
} from './types';

export const talentApi = {
  pvpTalent: (pvpTalentId: number): Resource<PvpTalentResponse> => {
    return {
      path: `${base}/pvp-talent/${pvpTalentId}`,
      namespace: 'static',
    };
  },
  pvpTalentIndex: (): Resource<PvpTalentIndexResponse> => {
    return {
      path: `${base}/pvp-talent/index`,
      namespace: 'static',
    };
  },
  talent: (talentId: number): Resource<TalentResponse> => {
    return {
      path: `${base}/talent/${talentId}`,
      namespace: 'static',
    };
  },
  talentIndex: (): Resource<TalentIndexResponse> => {
    return {
      path: `${base}/talent/index`,
      namespace: 'static',
    };
  },
  talentTree: (talentTreeId: number, specId: number): Resource<TalentTreeResponse> => {
    return {
      path: `${base}/talent-tree/${talentTreeId}/playable-specialization/${specId}`,
      namespace: 'static',
    };
  },
  talentTreeIndex: (): Resource<TalentTreeIndexResponse> => {
    return {
      path: `${base}/talent-tree/index`,
      namespace: 'static',
    };
  },
  talentTreeNodes: (talentTreeId: number): Resource<TalentTreeNodesResponse> => {
    return {
      path: `${base}/talent-tree/${talentTreeId}`,
      namespace: 'static',
    };
  },
};
