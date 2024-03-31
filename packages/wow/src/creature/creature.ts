import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const creatureApi = {
  creature: (creatureId: number): Resource<void> => {
    return {
      path: `${base}/creature/${creatureId}`,
      namespace: 'static',
    };
  },
  creatureDisplayMedia: (creatureDisplayId: number): Resource<void> => {
    return {
      path: `${mediaBase}/creature-display/${creatureDisplayId}`,
      namespace: 'static',
    };
  },
  creatureFamily: (creatureFamilyId: number): Resource<void> => {
    return {
      path: `${base}/creature-family/${creatureFamilyId}`,
      namespace: 'static',
    };
  },
  creatureFamilyIndex: (): Resource<void> => {
    return {
      path: `${base}/creature-family/index`,
      namespace: 'static',
    };
  },
  creatureFamilyMedia: (creatureFamilyId: number): Resource<void> => {
    return {
      path: `${mediaBase}/creature-family/${creatureFamilyId}`,
      namespace: 'static',
    };
  },
  creatureType: (creatureTypeId: number): Resource<void> => {
    return {
      path: `${base}/creature-type/${creatureTypeId}`,
      namespace: 'static',
    };
  },
  creatureTypeIndex: (): Resource<void> => {
    return {
      path: `${base}/creature-type/index`,
      namespace: 'static',
    };
  },
  //TODO Improve search
  /*
  creatureSearch: () => {
    return {
      path: `${base}/creature/search`,
      namespace: 'static',
    };
  },*/
};
