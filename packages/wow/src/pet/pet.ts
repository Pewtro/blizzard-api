import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  PetAbilityIndexResponse,
  PetAbilityMediaResponse,
  PetAbilityResponse,
  PetIndexResponse,
  PetMediaResponse,
  PetResponse,
} from './types';

export const petApi = {
  pet: (petId: number): Resource<PetResponse> => {
    return {
      path: `${base}/pet/${petId}`,
      namespace: 'static',
    };
  },
  petIndex: (): Resource<PetIndexResponse> => {
    return {
      path: `${base}/pet/index`,
      namespace: 'static',
    };
  },
  petMedia: (petId: number): Resource<PetMediaResponse> => {
    return {
      path: `${mediaBase}/pet/${petId}`,
      namespace: 'static',
    };
  },
  petAbility: (petAbilityId: number): Resource<PetAbilityResponse> => {
    return {
      path: `${base}/pet-ability/${petAbilityId}`,
      namespace: 'static',
    };
  },
  petAbilityIndex: (): Resource<PetAbilityIndexResponse> => {
    return {
      path: `${base}/pet-ability/index`,
      namespace: 'static',
    };
  },
  petAbilityMedia: (petAbilityId: number): Resource<PetAbilityMediaResponse> => {
    return {
      path: `${mediaBase}/pet-ability/${petAbilityId}`,
      namespace: 'static',
    };
  },
};
