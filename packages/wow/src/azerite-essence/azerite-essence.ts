import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const azeriteEssenceApi = {
  azeriteEssence: (azeriteEssenceId: number): Resource<void> => {
    return {
      path: `${base}/azerite-essence/${azeriteEssenceId}`,
      namespace: 'static',
    };
  },
  azeriteEssenceIndex: (): Resource<void> => {
    return {
      path: `${base}/azerite-essence/index`,
      namespace: 'static',
    };
  },
  azeriteEssenceMedia: (azeriteEssenceId: number): Resource<void> => {
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
