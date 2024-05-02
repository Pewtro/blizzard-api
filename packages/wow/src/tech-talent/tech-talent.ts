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
  /**
   * Get a tech talent by ID.
   * @param techTalentId The tech talent ID.
   * @returns The tech talent. See {@link TechTalentResponse}.
   */
  techTalent: (techTalentId: number): Resource<TechTalentResponse> => {
    return {
      path: `${base}/tech-talent/${techTalentId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a tech talent index.
   * @returns The tech talent index. See {@link TechTalentIndexResponse}.
   */
  techTalentIndex: (): Resource<TechTalentIndexResponse> => {
    return {
      path: `${base}/tech-talent/index`,
      namespace: 'static',
    };
  },
  /**
   * Get tech talent media by ID.
   * @param techTalentId The tech talent ID.
   * @returns The tech talent media. See {@link TechTalentMediaResponse}.
   */
  techTalentMedia: (techTalentId: number): Resource<TechTalentMediaResponse> => {
    return {
      path: `${mediaBase}/tech-talent/${techTalentId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a tech talent tree by ID.
   * @param techTalentTreeId The tech talent tree ID.
   * @returns The tech talent tree. See {@link TechTalentTreeResponse}.
   */
  techTalentTree: (techTalentTreeId: number): Resource<TechTalentTreeResponse> => {
    return {
      path: `${base}/tech-talent-tree/${techTalentTreeId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a tech talent tree index.
   * @returns The tech talent tree index. See {@link TechTalentTreeIndexResponse}.
   */
  techTalentTreeIndex: (): Resource<TechTalentTreeIndexResponse> => {
    return {
      path: `${base}/tech-talent-tree/index`,
      namespace: 'static',
    };
  },
};
