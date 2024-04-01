import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const journalApi = {
  journalEncounter: (journalEncounterId: number): Resource<void> => {
    return {
      path: `${base}/journal-encounter/${journalEncounterId}`,
      namespace: 'static',
    };
  },
  journalEncounterIndex: (): Resource<void> => {
    return {
      path: `${base}/journal-encounter/index`,
      namespace: 'static',
    };
  },
  //TODO Improve search endpoints
  //journalEncounterSearch: (): Resource<void> => {
  //  return {
  //    path: `${base}/journal-encounter/search`,
  //    namespace: 'static',
  //  };
  //},
  journalExpansion: (journalExpansionId: number): Resource<void> => {
    return {
      path: `${base}/journal-expansion/${journalExpansionId}`,
      namespace: 'static',
    };
  },
  journalExpansionIndex: (): Resource<void> => {
    return {
      path: `${base}/journal-expansion/index`,
      namespace: 'static',
    };
  },
  journalInstance: (journalInstanceId: number): Resource<void> => {
    return {
      path: `${base}/journal-instance/${journalInstanceId}`,
      namespace: 'static',
    };
  },
  journalInstanceIndex: (): Resource<void> => {
    return {
      path: `${base}/journal-instance/index`,
      namespace: 'static',
    };
  },
  journalInstanceMedia: (journalInstanceId: number): Resource<void> => {
    return {
      path: `${mediaBase}/journal-instance/${journalInstanceId}`,
      namespace: 'static',
    };
  },
};
