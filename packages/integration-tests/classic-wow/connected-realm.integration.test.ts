import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from '@blizzard-api/classic-wow/connected-realm';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import {
  connectedRealmIndexResponseSchema,
  connectedRealmResponseSchema,
  connectedRealmSearchResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow connected realm integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test.each(['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'] as const)(
    'validates the connected realm index and details for %s',
    async (namespace) => {
      const index = await client.sendRequest(connectedRealmIndex(namespace));
      const parsedIndex = connectedRealmIndexResponseSchema.safeParse(index);
      if (!parsedIndex.success) {
        console.error('Connected realm index validation failed:', prettifyError(parsedIndex.error));
      }
      expect(parsedIndex.success).toBe(true);

      const connectedRealmId = Number(/connected-realm\/(\d+)/.exec(parsedIndex.data!.connected_realms[0]!.href)?.[1]);
      expect(connectedRealmId).toBeTypeOf('number');

      const realm = await client.sendRequest(connectedRealm(namespace, connectedRealmId));
      const parsedRealm = connectedRealmResponseSchema.safeParse(realm);
      if (!parsedRealm.success) {
        console.error('Connected realm detail validation failed:', connectedRealmId, prettifyError(parsedRealm.error));
      }
      expect(parsedRealm.success).toBe(true);
    },
  );
  test.each(['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'] as const)(
    'validates the connected realm search for %s',
    async (namespace) => {
      const search = await client.sendRequest(connectedRealmSearch(namespace, { _page: 1 }));
      const parsedSearch = connectedRealmSearchResponseSchema.safeParse(search);
      if (!parsedSearch.success) {
        console.error('Connected realm search validation failed:', prettifyError(parsedSearch.error));
      }
      expect(parsedSearch.success).toBe(true);
    },
  );
});
