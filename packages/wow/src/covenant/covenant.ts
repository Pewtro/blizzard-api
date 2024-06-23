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

/**
 * Get a conduit by ID.
 * @param conduitId The conduit ID.
 * @returns The conduit. See {@link ConduitResponse}.
 */
export function conduit(conduitId: number): Resource<ConduitResponse> {
  return {
    namespace: 'static',
    path: `${base}/covenant/conduit/${conduitId}`,
  };
}
/**
 * Get a conduit index.
 * @returns The conduit index. See {@link ConduitIndexResponse}.
 */
export function conduitIndex(): Resource<ConduitIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/covenant/conduit/index`,
  };
}
/**
 * Get a covenant by ID.
 * @param covenantId The covenant ID.
 * @returns The covenant. See {@link CovenantResponse}.
 */
export function covenant(covenantId: number): Resource<CovenantResponse> {
  return {
    namespace: 'static',
    path: `${base}/covenant/${covenantId}`,
  };
}
/**
 * Get a covenant index.
 * @returns The covenant index. See {@link CovenantIndexResponse}.
 */
export function covenantIndex(): Resource<CovenantIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/covenant/index`,
  };
}
/**
 * Get covenant media by ID.
 * @param covenantId The covenant ID.
 * @returns The covenant media. See {@link CovenantMediaResponse}.
 */
export function covenantMedia(covenantId: number): Resource<CovenantMediaResponse> {
  return {
    namespace: 'static',
    path: `${mediaBase}/covenant/${covenantId}`,
  };
}
/**
 * Get a soulbind by ID.
 * @param soulbindId The soulbind ID.
 * @returns The soulbind. See {@link SoulbindResponse}.
 */
export function soulbind(soulbindId: number): Resource<SoulbindResponse> {
  return {
    namespace: 'static',
    path: `${base}/covenant/soulbind/${soulbindId}`,
  };
}
/**
 * Get a soulbind index.
 * @returns The soulbind index. See {@link SoulbindIndexResponse}.
 */
export function soulbindIndex(): Resource<SoulbindIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/covenant/soulbind/index`,
  };
}
