import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  PlayableSpecializationIndexResponse,
  PlayableSpecializationMediaResponse,
  PlayableSpecializationResponse,
} from './types';

export const playableSpecializationApi = {
  playableSpecialization: (specializationId: number): Resource<PlayableSpecializationResponse> => {
    return {
      path: `${base}/playable-specialization/${specializationId}`,
      namespace: 'static',
    };
  },
  playableSpecializationIndex: (): Resource<PlayableSpecializationIndexResponse> => {
    return {
      path: `${base}/playable-specialization/index`,
      namespace: 'static',
    };
  },
  playableSpecializationMedia: (specializationId: number): Resource<PlayableSpecializationMediaResponse> => {
    return {
      path: `${mediaBase}/playable-specialization/${specializationId}`,
      namespace: 'static',
    };
  },
};
