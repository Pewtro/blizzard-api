import { createBlizzardApiClient } from '@blizzard-api/client';
import { connectedRealm, connectedRealmIndex, connectedRealmSearch } from '@blizzard-api/wow/connected-realm';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  connectedRealmIndexResponseSchema,
  connectedRealmResponseSchema,
  connectedRealmSearchResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow connected realm integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates connected realm index and by id', async ({ expect }) => {
    const resp = await client.sendRequest(connectedRealmIndex());
    const parsed = connectedRealmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Connected realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
    const id = resp.connected_realms
      .find((realm) => realm.href)
      ?.href.split('/')
      .pop()
      ?.split('?', 1)[0];
    if (!id) {
      throw new Error('No connected realms found in index response');
    }
    const realmResp = await client.sendRequest(connectedRealm(Number.parseInt(id)));
    const realmParsed = connectedRealmResponseSchema.safeParse(realmResp);
    if (!realmParsed.success) {
      console.error('Connected realm by ID validation failed:', treeifyError(realmParsed.error));
    }
    expect(realmParsed.success).toBe(true);
  });

  test('validates connected realm search', async ({ expect }) => {
    const search = await client.sendRequest(connectedRealmSearch({ _page: 1 }));
    const parsed = connectedRealmSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Connected realm search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
