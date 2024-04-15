import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  ConduitIndexResponse,
  ConduitResponse,
  CovenantIndexResponse,
  CovenantMediaResponse,
  CovenantResponse,
  SoulbindIndexResponse,
  SoulbindResponse,
} from './types';

export const covenantApi = {
  conduit: (conduitId: number): Resource<ConduitResponse> => {
    return {
      path: `${base}/covenant/conduit/${conduitId}`,
      namespace: 'static',
    };
  },
  conduitIndex: (): Resource<ConduitIndexResponse> => {
    return {
      path: `${base}/covenant/conduit/index`,
      namespace: 'static',
    };
  },
  covenant: (covenantId: number): Resource<CovenantResponse> => {
    return {
      path: `${base}/covenant/${covenantId}`,
      namespace: 'static',
    };
  },
  covenantIndex: (): Resource<CovenantIndexResponse> => {
    return {
      path: `${base}/covenant/index`,
      namespace: 'static',
    };
  },
  covenantMedia: (covenantId: number): Resource<CovenantMediaResponse> => {
    return {
      path: `${mediaBase}/covenant/${covenantId}`,
      namespace: 'static',
    };
  },
  soulbind: (soulbindId: number): Resource<SoulbindResponse> => {
    return {
      path: `${base}/covenant/soulbind/${soulbindId}`,
      namespace: 'static',
    };
  },
  soulbindIndex: (): Resource<SoulbindIndexResponse> => {
    return {
      path: `${base}/covenant/soulbind/index`,
      namespace: 'static',
    };
  },
};
