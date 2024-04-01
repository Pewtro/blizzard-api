import type { Resource } from '@blizzard-api/core';
import { base } from '../base';

export const reputationApi = {
  reputationFaction: (reputationFactionId: number): Resource<void> => {
    return {
      path: `${base}/reputation-faction/${reputationFactionId}`,
      namespace: 'static',
    };
  },
  reputationFactionIndex: (): Resource<void> => {
    return {
      path: `${base}/reputation-faction/index`,
      namespace: 'static',
    };
  },
  reputationTiers: (reputationTiersId: number): Resource<void> => {
    return {
      path: `${base}/reputation-tiers/${reputationTiersId}`,
      namespace: 'static',
    };
  },
  reputationTiersIndex: (): Resource<void> => {
    return {
      path: `${base}/reputation-tiers/index`,
      namespace: 'static',
    };
  },
};
