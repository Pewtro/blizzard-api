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
  /**
   * Get a conduit by ID.
   * @param conduitId The conduit ID.
   * @returns The conduit. See {@link ConduitResponse}.
   */
  conduit: (conduitId: number): Resource<ConduitResponse> => {
    return {
      path: `${base}/covenant/conduit/${conduitId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a conduit index.
   * @returns The conduit index. See {@link ConduitIndexResponse}.
   */
  conduitIndex: (): Resource<ConduitIndexResponse> => {
    return {
      path: `${base}/covenant/conduit/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a covenant by ID.
   * @param covenantId The covenant ID.
   * @returns The covenant. See {@link CovenantResponse}.
   */
  covenant: (covenantId: number): Resource<CovenantResponse> => {
    return {
      path: `${base}/covenant/${covenantId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a covenant index.
   * @returns The covenant index. See {@link CovenantIndexResponse}.
   */
  covenantIndex: (): Resource<CovenantIndexResponse> => {
    return {
      path: `${base}/covenant/index`,
      namespace: 'static',
    };
  },
  /**
   * Get covenant media by ID.
   * @param covenantId The covenant ID.
   * @returns The covenant media. See {@link CovenantMediaResponse}.
   */
  covenantMedia: (covenantId: number): Resource<CovenantMediaResponse> => {
    return {
      path: `${mediaBase}/covenant/${covenantId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a soulbind by ID.
   * @param soulbindId The soulbind ID.
   * @returns The soulbind. See {@link SoulbindResponse}.
   */
  soulbind: (soulbindId: number): Resource<SoulbindResponse> => {
    return {
      path: `${base}/covenant/soulbind/${soulbindId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a soulbind index.
   * @returns The soulbind index. See {@link SoulbindIndexResponse}.
   */
  soulbindIndex: (): Resource<SoulbindIndexResponse> => {
    return {
      path: `${base}/covenant/soulbind/index`,
      namespace: 'static',
    };
  },
};
