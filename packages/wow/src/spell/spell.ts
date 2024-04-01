import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const spellApi = {
  spell: (spellId: number): Resource<void> => {
    return {
      path: `${base}/spell/${spellId}`,
      namespace: 'static',
    };
  },
  spellMedia: (spellId: number): Resource<void> => {
    return {
      path: `${mediaBase}/spell/${spellId}`,
      namespace: 'static',
    };
  },
  //TODO Improve search endpoints
  //spellSearch: (): Resource<void> => {
  //  return {
  //    path: `${base}/spell/search`,
  //    namespace: 'static',
  //  };
  //},
};
