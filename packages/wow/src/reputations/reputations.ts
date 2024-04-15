import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type {
  ReputationFactionIndexResponse,
  ReputationFactionResponse,
  ReputationTiersIndexResponse,
  ReputationTiersResponse,
} from './types';

export const reputationApi = {
  reputationFaction: (reputationFactionId: number): Resource<ReputationFactionResponse> => {
    return {
      path: `${base}/reputation-faction/${reputationFactionId}`,
      namespace: 'static',
    };
  },
  reputationFactionIndex: (): Resource<ReputationFactionIndexResponse> => {
    return {
      path: `${base}/reputation-faction/index`,
      namespace: 'static',
    };
  },
  reputationTiers: (reputationTiersId: number): Resource<ReputationTiersResponse> => {
    return {
      path: `${base}/reputation-tiers/${reputationTiersId}`,
      namespace: 'static',
    };
  },
  reputationTiersIndex: (): Resource<ReputationTiersIndexResponse> => {
    return {
      path: `${base}/reputation-tiers/index`,
      namespace: 'static',
    };
  },
};
