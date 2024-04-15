import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type { AzeriteEssenceIndexResponse, AzeriteEssenceMediaResponse, AzeriteEssenceResponse } from './types';

export const azeriteEssenceApi = {
  azeriteEssence: (azeriteEssenceId: number): Resource<AzeriteEssenceResponse> => {
    return {
      path: `${base}/azerite-essence/${azeriteEssenceId}`,
      namespace: 'static',
    };
  },
  azeriteEssenceIndex: (): Resource<AzeriteEssenceIndexResponse> => {
    return {
      path: `${base}/azerite-essence/index`,
      namespace: 'static',
    };
  },
  azeriteEssenceMedia: (azeriteEssenceId: number): Resource<AzeriteEssenceMediaResponse> => {
    return { path: `${mediaBase}/azerite-essence/${azeriteEssenceId}`, namespace: 'static' };
  },
  // TODO Improve search endpoints
  /**
   * azeriteEssenceSearch: (): Resource<void> => {
   *  return {
   *    path: `${base}/search/connected-realm`,
   *    namespace: 'dynamic',
   *  };
   * },
   */
};
