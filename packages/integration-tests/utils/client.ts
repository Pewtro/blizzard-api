import type { BlizzardApiClient } from '@blizzard-api/client';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { environment } from '../../../environment';

const clientKey = Symbol.for('@blizzard-api/integration-tests/client');

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
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  return globalWithIntegrationTestClient[clientKey];
};
