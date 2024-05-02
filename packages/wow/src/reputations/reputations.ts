import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  ReputationFactionIndexResponse,
  ReputationFactionResponse,
  ReputationTiersIndexResponse,
  ReputationTiersResponse,
} from './types';

export const reputationApi = {
  /**
   * Get a reputation faction by ID.
   * @param reputationFactionId The reputation faction ID.
   * @returns The reputation faction. See {@link ReputationFactionResponse}.
   */
  reputationFaction: (reputationFactionId: number): Resource<ReputationFactionResponse> => {
    return {
      path: `${base}/reputation-faction/${reputationFactionId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a reputation faction index.
   * @returns The reputation faction index. See {@link ReputationFactionIndexResponse}.
   */
  reputationFactionIndex: (): Resource<ReputationFactionIndexResponse> => {
    return {
      path: `${base}/reputation-faction/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a reputation tier by ID.
   * @param reputationTiersId The reputation tier ID.
   * @returns The reputation tier. See {@link ReputationTiersResponse}.
   */
  reputationTiers: (reputationTiersId: number): Resource<ReputationTiersResponse> => {
    return {
      path: `${base}/reputation-tiers/${reputationTiersId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a reputation tier index.
   * @returns The reputation tier index. See {@link ReputationTiersIndexResponse}.
   */
  reputationTiersIndex: (): Resource<ReputationTiersIndexResponse> => {
    return {
      path: `${base}/reputation-tiers/index`,
      namespace: 'static',
    };
  },
};
