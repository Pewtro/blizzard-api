import type { BlizzardApiClient } from '@blizzard-api/client';
import { createBlizzardApiClient } from '@blizzard-api/client';
import type { Locales } from '@blizzard-api/core';
import { environment } from '../../../environment';
import { getRandomItem } from './random';

const clientKey = Symbol.for('@blizzard-api/integration-tests/client');
const euLocales = ['de_DE', 'en_GB', 'es_ES', 'fr_FR', 'it_IT', 'ru_RU'] as const satisfies Array<Locales>;

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
    locale: getRandomItem(euLocales),
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  return globalWithIntegrationTestClient[clientKey];
};
