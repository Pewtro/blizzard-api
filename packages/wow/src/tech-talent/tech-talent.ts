import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  TechTalentIndexResponse,
  TechTalentMediaResponse,
  TechTalentResponse,
  TechTalentTreeIndexResponse,
  TechTalentTreeResponse,
} from './types';

/**
 * Get a tech talent by ID.
 * @param techTalentId The tech talent ID.
 * @returns The tech talent. See {@link TechTalentResponse}.
 */
export function techTalent(techTalentId: number): Resource<TechTalentResponse> {
  return {
    namespace: 'static',
    path: `${base}/tech-talent/${techTalentId}`,
  };
}
/**
 * Get a tech talent index.
 * @returns The tech talent index. See {@link TechTalentIndexResponse}.
 */
export function techTalentIndex(): Resource<TechTalentIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/tech-talent/index`,
  };
}
/**
 * Get tech talent media by ID.
 * @param techTalentId The tech talent ID.
 * @returns The tech talent media. See {@link TechTalentMediaResponse}.
 */
export function techTalentMedia(techTalentId: number): Resource<TechTalentMediaResponse> {
  return {
    namespace: 'static',
    path: `${mediaBase}/tech-talent/${techTalentId}`,
  };
}
/**
 * Get a tech talent tree by ID.
 * @param techTalentTreeId The tech talent tree ID.
 * @returns The tech talent tree. See {@link TechTalentTreeResponse}.
 */
export function techTalentTree(techTalentTreeId: number): Resource<TechTalentTreeResponse> {
  return {
    namespace: 'static',
    path: `${base}/tech-talent-tree/${techTalentTreeId}`,
  };
}
/**
 * Get a tech talent tree index.
 * @returns The tech talent tree index. See {@link TechTalentTreeIndexResponse}.
 */
export function techTalentTreeIndex(): Resource<TechTalentTreeIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/tech-talent-tree/index`,
  };
}
