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
  /**
   * Get a PvP talent by ID.
   * @param pvpTalentId The PvP talent ID.
   * @returns The PvP talent. See {@link PvpTalentResponse}.
   */
  pvpTalent: (pvpTalentId: number): Resource<PvpTalentResponse> => {
    return {
      path: `${base}/pvp-talent/${pvpTalentId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a PvP talent index.
   * @returns The PvP talent index. See {@link PvpTalentIndexResponse}.
   */
  pvpTalentIndex: (): Resource<PvpTalentIndexResponse> => {
    return {
      path: `${base}/pvp-talent/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a talent by ID.
   * @param talentId The talent ID.
   * @returns The talent. See {@link TalentResponse}.
   */
  talent: (talentId: number): Resource<TalentResponse> => {
    return {
      path: `${base}/talent/${talentId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a talent index.
   * @returns The talent index. See {@link TalentIndexResponse}.
   */
  talentIndex: (): Resource<TalentIndexResponse> => {
    return {
      path: `${base}/talent/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a talent tree by ID.
   * @param talentTreeId The talent tree ID.
   * @param specId The playable specialization ID.
   * @returns The talent tree. See {@link TalentTreeResponse}.
   */
  talentTree: (talentTreeId: number, specId: number): Resource<TalentTreeResponse> => {
    return {
      path: `${base}/talent-tree/${talentTreeId}/playable-specialization/${specId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a talent tree index.
   * @returns The talent tree index. See {@link TalentTreeIndexResponse}.
   */
  talentTreeIndex: (): Resource<TalentTreeIndexResponse> => {
    return {
      path: `${base}/talent-tree/index`,
      namespace: 'static',
    };
  },
  /**
   * Get talent tree nodes by talent tree ID.
   * @param talentTreeId The talent tree ID.
   * @returns The talent tree nodes. See {@link TalentTreeNodesResponse}.
   */
  talentTreeNodes: (talentTreeId: number): Resource<TalentTreeNodesResponse> => {
    return {
      path: `${base}/talent-tree/${talentTreeId}`,
      namespace: 'static',
    };
  },
};
