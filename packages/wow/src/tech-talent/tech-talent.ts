import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  TechTalentIndexResponse,
  TechTalentMediaResponse,
  TechTalentResponse,
  TechTalentTreeIndexResponse,
  TechTalentTreeResponse,
} from './types';

export const techTalentApi = {
  techTalent: (techTalentId: number): Resource<TechTalentResponse> => {
    return {
      path: `${base}/tech-talent/${techTalentId}`,
      namespace: 'static',
    };
  },
  techTalentIndex: (): Resource<TechTalentIndexResponse> => {
    return {
      path: `${base}/tech-talent/index`,
      namespace: 'static',
    };
  },
  techTalentMedia: (techTalentId: number): Resource<TechTalentMediaResponse> => {
    return {
      path: `${mediaBase}/tech-talent/${techTalentId}`,
      namespace: 'static',
    };
  },
  techTalentTree: (techTalentTreeId: number): Resource<TechTalentTreeResponse> => {
    return {
      path: `${base}/tech-talent-tree/${techTalentTreeId}`,
      namespace: 'static',
    };
  },
  techTalentTreeIndex: (): Resource<TechTalentTreeIndexResponse> => {
    return {
      path: `${base}/tech-talent-tree/index`,
      namespace: 'static',
    };
  },
};
