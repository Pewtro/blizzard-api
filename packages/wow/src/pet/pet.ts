import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const petApi = {
  pet: (petId: number): Resource<void> => {
    return {
      path: `${base}/pet/${petId}`,
      namespace: 'static',
    };
  },
  petIndex: (): Resource<void> => {
    return {
      path: `${base}/pet/index`,
      namespace: 'static',
    };
  },
  petMedia: (petId: number): Resource<void> => {
    return {
      path: `${mediaBase}/pet/${petId}`,
      namespace: 'static',
    };
  },
  petAbility: (petAbilityId: number): Resource<void> => {
    return {
      path: `${base}/pet-ability/${petAbilityId}`,
      namespace: 'static',
    };
  },
  petAbilityIndex: (): Resource<void> => {
    return {
      path: `${base}/pet-ability/index`,
      namespace: 'static',
    };
  },
  petAbilityMedia: (petAbilityId: number): Resource<void> => {
    return {
      path: `${mediaBase}/pet-ability/${petAbilityId}`,
      namespace: 'static',
    };
  },
};
