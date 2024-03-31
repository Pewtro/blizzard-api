import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const covenantApi = {
  conduit: (conduitId: number): Resource<void> => {
    return {
      path: `${base}/covenant/conduit/${conduitId}`,
      namespace: 'static',
    };
  },
  conduitIndex: (): Resource<void> => {
    return {
      path: `${base}/covenant/conduit/index`,
      namespace: 'static',
    };
  },
  covenant: (covenantId: number): Resource<void> => {
    return {
      path: `${base}/covenant/${covenantId}`,
      namespace: 'static',
    };
  },
  covenantIndex: (): Resource<void> => {
    return {
      path: `${base}/covenant/index`,
      namespace: 'static',
    };
  },
  covenantMedia: (covenantId: number): Resource<void> => {
    return {
      path: `${mediaBase}/covenant/${covenantId}`,
      namespace: 'static',
    };
  },
  soulbind: (soulbindId: number): Resource<void> => {
    return {
      path: `${base}/covenant/soulbind/${soulbindId}`,
      namespace: 'static',
    };
  },
  soulbindIndex: (): Resource<void> => {
    return {
      path: `${base}/covenant/soulbind/index`,
      namespace: 'static',
    };
  },
};
