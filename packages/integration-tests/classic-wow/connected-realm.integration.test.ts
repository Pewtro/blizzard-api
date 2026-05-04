import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from '@blizzard-api/classic-wow/connected-realm';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
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
  test('validates connected realm', async ({ expect }) => {
    const resp = await client.sendRequest(connectedRealmIndex('dynamic-classic1x'));
    const parsed = connectedRealmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Connected realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const realm = await client.sendRequest(connectedRealm('dynamic-classic1x', 5220));
    const parsedRealm = connectedRealmResponseSchema.safeParse(realm);
    if (!parsedRealm.success) {
      console.error('Connected realm detail validation failed:', treeifyError(parsedRealm.error));
    }
    expect(parsedRealm.success).toBe(true);

    const search = await client.sendRequest(connectedRealmSearch('dynamic-classic1x', { _page: 1 }));
    const parsedSearch = connectedRealmSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Connected realm search validation failed:', treeifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);
  });
});
