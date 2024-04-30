import type { Resource, SearchResponse } from '@blizzard-api/core';
import { base, mediaBase, searchBase } from '../base';
import type {
  JournalEncounterIndexResponse,
  JournalEncounterResponse,
  JournalEncounterSearchParameters,
  JournalEncounterSearchResponseItem,
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
  journalEncounterSearch: (
    options: JournalEncounterSearchParameters,
  ): Resource<
    SearchResponse<JournalEncounterSearchResponseItem>,
    Omit<JournalEncounterSearchParameters, 'instanceName' | 'locale'>
  > => {
    return {
      namespace: 'static',
      parameters: {
        _page: options._page,
        orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
        [`instance.name.${options.locale}`]: options.instanceName,
      },
      path: `${searchBase}/journal-encounter`,
    };
  },
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
