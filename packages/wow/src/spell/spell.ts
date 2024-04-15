import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type { SpellMediaResponse, SpellResponse } from './types';

export const spellApi = {
  spell: (spellId: number): Resource<SpellResponse> => {
    return {
      path: `${base}/spell/${spellId}`,
      namespace: 'static',
    };
  },
  spellMedia: (spellId: number): Resource<SpellMediaResponse> => {
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
