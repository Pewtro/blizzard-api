import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  JournalEncounterIndexResponse,
  JournalEncounterResponse,
  JournalExpansionIndexResponse,
  JournalExpansionResponse,
  JournalInstanceIndexResponse,
  JournalInstanceMediaResponse,
  JournalInstanceResponse,
} from './types';

export const journalApi = {
  journalEncounter: (journalEncounterId: number): Resource<JournalEncounterResponse> => {
    return {
      path: `${base}/journal-encounter/${journalEncounterId}`,
      namespace: 'static',
    };
  },
  journalEncounterIndex: (): Resource<JournalEncounterIndexResponse> => {
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
  journalExpansion: (journalExpansionId: number): Resource<JournalExpansionResponse> => {
    return {
      path: `${base}/journal-expansion/${journalExpansionId}`,
      namespace: 'static',
    };
  },
  journalExpansionIndex: (): Resource<JournalExpansionIndexResponse> => {
    return {
      path: `${base}/journal-expansion/index`,
      namespace: 'static',
    };
  },
  journalInstance: (journalInstanceId: number): Resource<JournalInstanceResponse> => {
    return {
      path: `${base}/journal-instance/${journalInstanceId}`,
      namespace: 'static',
    };
  },
  journalInstanceIndex: (): Resource<JournalInstanceIndexResponse> => {
    return {
      path: `${base}/journal-instance/index`,
      namespace: 'static',
    };
  },
  journalInstanceMedia: (journalInstanceId: number): Resource<JournalInstanceMediaResponse> => {
    return {
      path: `${mediaBase}/journal-instance/${journalInstanceId}`,
      namespace: 'static',
    };
  },
};
