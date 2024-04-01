import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const playableSpecializationApi = {
  playableSpecialization: (specializationId: number): Resource<void> => {
    return {
      path: `${base}/playable-specialization/${specializationId}`,
      namespace: 'static',
    };
  },
  playableSpecializationIndex: (): Resource<void> => {
    return {
      path: `${base}/playable-specialization/index`,
      namespace: 'static',
    };
  },
  playableSpecializationMedia: (specializationId: number): Resource<void> => {
    return {
      path: `${mediaBase}/playable-specialization/${specializationId}`,
      namespace: 'static',
    };
  },
};
