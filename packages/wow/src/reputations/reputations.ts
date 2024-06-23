import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  ReputationFactionIndexResponse,
  ReputationFactionResponse,
  ReputationTiersIndexResponse,
  ReputationTiersResponse,
} from './types';

/**
 * Get a reputation faction by ID.
 * @param reputationFactionId The reputation faction ID.
 * @returns The reputation faction. See {@link ReputationFactionResponse}.
 */
export function reputationFaction(reputationFactionId: number): Resource<ReputationFactionResponse> {
  return {
    namespace: 'static',
    path: `${base}/reputation-faction/${reputationFactionId}`,
  };
}
/**
 * Get a reputation faction index.
 * @returns The reputation faction index. See {@link ReputationFactionIndexResponse}.
 */
export function reputationFactionIndex(): Resource<ReputationFactionIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/reputation-faction/index`,
  };
}
/**
 * Get a reputation tier by ID.
 * @param reputationTiersId The reputation tier ID.
 * @returns The reputation tier. See {@link ReputationTiersResponse}.
 */
export function reputationTiers(reputationTiersId: number): Resource<ReputationTiersResponse> {
  return {
    namespace: 'static',
    path: `${base}/reputation-tiers/${reputationTiersId}`,
  };
}
/**
 * Get a reputation tier index.
 * @returns The reputation tier index. See {@link ReputationTiersIndexResponse}.
 */
export function reputationTiersIndex(): Resource<ReputationTiersIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/reputation-tiers/index`,
  };
}
