import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const playableClassApi = {
  playableClass: (playableClassId: number): Resource<void> => {
    return {
      path: `${base}/playable-class/${playableClassId}`,
      namespace: 'static',
    };
  },
  playableClassIndex: (): Resource<void> => {
    return {
      path: `${base}/playable-class/index`,
      namespace: 'static',
    };
  },
  playableClassMedia: (playableClassId: number): Resource<void> => {
    return {
      path: `${mediaBase}/playable-class/${playableClassId}`,
      namespace: 'static',
    };
  },
  pvpTalentSlots: (playableClassId: number): Resource<void> => {
    return {
      path: `${base}/playable-class/${playableClassId}/pvp-talent-slots`,
      namespace: 'static',
    };
  },
};
