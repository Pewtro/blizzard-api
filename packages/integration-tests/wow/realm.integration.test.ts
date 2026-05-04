import { createBlizzardApiClient } from '@blizzard-api/client';
import { realm, realmIndex, realmSearch } from '@blizzard-api/wow/realm';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  realmIndexResponseSchema,
  realmResponseSchema,
  realmSearchResponseSchema,
} from '../../../generated/schemas/wow/realm';

describe('wow realm integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates realm index and fetches realm detail', async ({ expect }) => {
    const resp = await client.sendRequest(realmIndex());
    const parsed = realmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomRealm = resp.realms[Math.random() * resp.realms.length];
    if (randomRealm) {
      const realmResp = await client.sendRequest(realm(randomRealm.slug));
      const parsedRealm = realmResponseSchema.safeParse(realmResp);
      if (!parsedRealm.success) {
        console.error('Realm detail validation failed:', randomRealm.slug, treeifyError(parsedRealm.error));
      }
      expect(parsedRealm.success).toBe(true);
    }
  });

  test('validates realm search', async ({ expect }) => {
    const search = await client.sendRequest(realmSearch({ _page: 1 }));
    const parsed = realmSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Realm search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
