import type { BlizzardApiClient } from '@blizzard-api/client';
import { createBlizzardApiClient } from '@blizzard-api/client';
import type { Locales } from '@blizzard-api/core';
import { environment } from '../../../environment';
import { getRandomItem } from './random';

const clientKey = Symbol.for('@blizzard-api/integration-tests/client');
const localesMap: Record<Locales, boolean> = {
  de_DE: true,
  en_GB: true,
  en_US: true,
  es_ES: true,
  es_MX: true,
  fr_FR: true,
  it_IT: true,
  ko_KR: true,
  pt_BR: true,
  ru_RU: true,
  zh_CN: true,
  zh_TW: true,
};
const locales = Object.keys(localesMap) as Array<Locales>;

/**
 * Get the Blizzard API client shared by every integration test.
 *
 * Creating a client also requests an access token, so creating one per test file would request
 * roughly a hundred tokens for a single integration run. Sharing a single client reduces that to
 * one token request and one token refresh schedule for the whole run.
 * @returns A promise that resolves to the shared Blizzard API client.
 */
export const getIntegrationTestClient = async (): Promise<BlizzardApiClient> => {
  type GlobalWithIntegrationTestClient = typeof globalThis & {
    [clientKey]?: Promise<BlizzardApiClient>;
  };

  const globalWithIntegrationTestClient = globalThis as GlobalWithIntegrationTestClient;

  globalWithIntegrationTestClient[clientKey] ??= createBlizzardApiClient({
    key: environment.blizzardClientId,
    locale: getRandomItem(locales),
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  return globalWithIntegrationTestClient[clientKey];
};
