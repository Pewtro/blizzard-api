import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  PlayableClassIndexResponse,
  PlayableClassMediaResponse,
  PlayableClassResponse,
  PvpTalentSlotsResponse,
} from './types';

export const playableClassApi = {
  playableClass: (playableClassId: number): Resource<PlayableClassResponse> => {
    return {
      path: `${base}/playable-class/${playableClassId}`,
      namespace: 'static',
    };
  },
  playableClassIndex: (): Resource<PlayableClassIndexResponse> => {
    return {
      path: `${base}/playable-class/index`,
      namespace: 'static',
    };
  },
  playableClassMedia: (playableClassId: number): Resource<PlayableClassMediaResponse> => {
    return {
      path: `${mediaBase}/playable-class/${playableClassId}`,
      namespace: 'static',
    };
  },
  pvpTalentSlots: (playableClassId: number): Resource<PvpTalentSlotsResponse> => {
    return {
      path: `${base}/playable-class/${playableClassId}/pvp-talent-slots`,
      namespace: 'static',
    };
  },
};
