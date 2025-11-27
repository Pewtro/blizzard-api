import type { Resource, SearchResponse } from '@blizzard-api/core';
import { wowBasePath, wowMediaBasePath, wowSearchBasePath } from '@blizzard-api/core';
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

/**
 * Get a journal encounter by ID.
 * @param journalEncounterId The journal encounter ID.
 * @returns The journal encounter. See {@link JournalEncounterResponse}.
 */
export function journalEncounter(journalEncounterId: number): Resource<JournalEncounterResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/journal-encounter/${journalEncounterId}`,
  };
}
/**
 * Get the journal encounter index.
 * @returns The journal encounter index. See {@link JournalEncounterIndexResponse}.
 */
export function journalEncounterIndex(): Resource<JournalEncounterIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/journal-encounter/index`,
  };
}
/**
 * Search for journal encounters.
 * @param options The search parameters. See {@link JournalEncounterSearchParameters}.
 * @returns The search results. See {@link SearchResponse}.
 */
export function journalEncounterSearch(
  options: JournalEncounterSearchParameters,
): Resource<
  SearchResponse<JournalEncounterSearchResponseItem>,
  Omit<JournalEncounterSearchParameters, 'instanceName' | 'locale'>
> {
  return {
    namespace: 'static',
    parameters: {
      _page: options._page,
      [`instance.name.${options.locale}`]: options.instanceName,
      orderby: Array.isArray(options.orderby) ? options.orderby.join(',') : options.orderby,
    },
    path: `${wowSearchBasePath}/journal-encounter`,
  };
}
/**
 * Get a journal expansion by ID.
 * @param journalExpansionId The journal expansion ID.
 * @returns The journal expansion. See {@link JournalExpansionResponse}.
 */
export function journalExpansion(journalExpansionId: number): Resource<JournalExpansionResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/journal-expansion/${journalExpansionId}`,
  };
}
/**
 * Get the journal expansion index.
 * @returns The journal expansion index. See {@link JournalExpansionIndexResponse}.
 */
export function journalExpansionIndex(): Resource<JournalExpansionIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/journal-expansion/index`,
  };
}
/**
 * Get a journal instance by ID.
 * @param journalInstanceId The journal instance ID.
 * @returns The journal instance. See {@link JournalInstanceResponse}.
 */
export function journalInstance(journalInstanceId: number): Resource<JournalInstanceResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/journal-instance/${journalInstanceId}`,
  };
}
/**
 * Get the journal instance index.
 * @returns The journal instance index. See {@link JournalInstanceIndexResponse}.
 */
export function journalInstanceIndex(): Resource<JournalInstanceIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/journal-instance/index`,
  };
}
/**
 * Get journal instance media by ID.
 * @param journalInstanceId The journal instance ID.
 * @returns The journal instance media. See {@link JournalInstanceMediaResponse}.
 */
export function journalInstanceMedia(journalInstanceId: number): Resource<JournalInstanceMediaResponse> {
  return {
    namespace: 'static',
    path: `${wowMediaBasePath}/journal-instance/${journalInstanceId}`,
  };
}
