import type { Resource } from '@blizzard-api/core';
import { wowBasePath } from '@blizzard-api/core';
import type {
  PvpTalentIndexResponse,
  PvpTalentResponse,
  TalentIndexResponse,
  TalentResponse,
  TalentTreeIndexResponse,
  TalentTreeNodesResponse,
  TalentTreeResponse,
} from './types';

/**
 * Get a PvP talent by ID.
 * @param pvpTalentId The PvP talent ID.
 * @returns The PvP talent. See {@link PvpTalentResponse}.
 */
export function pvpTalent(pvpTalentId: number): Resource<PvpTalentResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/pvp-talent/${pvpTalentId}`,
  };
}
/**
 * Get a PvP talent index.
 * @returns The PvP talent index. See {@link PvpTalentIndexResponse}.
 */
export function pvpTalentIndex(): Resource<PvpTalentIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/pvp-talent/index`,
  };
}
/**
 * Get a talent by ID.
 * @param talentId The talent ID.
 * @returns The talent. See {@link TalentResponse}.
 */
export function talent(talentId: number): Resource<TalentResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/talent/${talentId}`,
  };
}
/**
 * Get a talent index.
 * @returns The talent index. See {@link TalentIndexResponse}.
 */
export function talentIndex(): Resource<TalentIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/talent/index`,
  };
}
/**
 * Get a talent tree by ID.
 * @param talentTreeId The talent tree ID.
 * @param specId The playable specialization ID.
 * @returns The talent tree. See {@link TalentTreeResponse}.
 */
export function talentTree(talentTreeId: number, specId: number): Resource<TalentTreeResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/talent-tree/${talentTreeId}/playable-specialization/${specId}`,
  };
}
/**
 * Get a talent tree index.
 * @returns The talent tree index. See {@link TalentTreeIndexResponse}.
 */
export function talentTreeIndex(): Resource<TalentTreeIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/talent-tree/index`,
  };
}
/**
 * Get talent tree nodes by talent tree ID.
 * @param talentTreeId The talent tree ID.
 * @returns The talent tree nodes. See {@link TalentTreeNodesResponse}.
 */
export function talentTreeNodes(talentTreeId: number): Resource<TalentTreeNodesResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/talent-tree/${talentTreeId}`,
  };
}
