import {
  connectedRealm,
  connectedRealmAuctions,
  connectedRealmIndex,
  connectedRealmSearch,
} from '@blizzard-api/classic-wow/connected-realm';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  connectedRealmAuctionsResponseSchema,
  connectedRealmIndexResponseSchema,
  connectedRealmResponseSchema,
  connectedRealmSearchResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow connected realm integration', async () => {
  const client = await getIntegrationTestClient();
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

  test('validates connected realm auctions for progression Classic', async () => {
    const index = await client.sendRequest(connectedRealmIndex('dynamic-classic'));
    const parsedIndex = connectedRealmIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Connected realm index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const connectedRealmId = Number(/connected-realm\/(\d+)/.exec(parsedIndex.data!.connected_realms[0]!.href)?.[1]);
    expect(connectedRealmId).toBeTypeOf('number');

    const auctions = await client.sendRequest(connectedRealmAuctions('dynamic-classic', connectedRealmId));
    const parsedAuctions = connectedRealmAuctionsResponseSchema.safeParse(auctions);
    if (!parsedAuctions.success) {
      console.error(
        'Connected realm auctions validation failed:',
        connectedRealmId,
        prettifyError(parsedAuctions.error),
      );
    }
    expect(parsedAuctions.success).toBe(true);
  });
});
