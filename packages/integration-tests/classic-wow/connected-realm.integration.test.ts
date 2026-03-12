import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  connectedRealmIndexResponseSchema,
  connectedRealmResponseSchema,
  connectedRealmSearchResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('classic-wow connected realm integration', () => {
  it('validates connected realm index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.connectedRealmIndex('dynamic-classic1x'));
    const parsed = connectedRealmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Connected realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const realm = await client.sendRequest(classicWow.connectedRealm('dynamic-classic1x', 5085));
    const parsedRealm = connectedRealmResponseSchema.safeParse(realm);
    if (!parsedRealm.success) {
      console.error('Connected realm detail validation failed:', treeifyError(parsedRealm.error));
    }
    expect(parsedRealm.success).toBe(true);

    const search = await client.sendRequest(classicWow.connectedRealmSearch('dynamic-classic1x', { _page: 1 }));
    const parsedSearch = connectedRealmSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Connected realm search validation failed:', treeifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);
  });
});
