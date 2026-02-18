import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  realmIndexResponseSchema,
  realmResponseSchema,
  realmSearchResponseSchema,
} from '../../../generated/schemas/wow/realm';

describe('wow realm integration', () => {
  it('validates realm index and fetches realm detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.realmIndex());
    const parsed = realmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomRealm = resp.realms[Math.random() * resp.realms.length];
    if (randomRealm) {
      const realm = await client.sendRequest(wow.realm(randomRealm.slug));
      const parsedRealm = realmResponseSchema.safeParse(realm);
      if (!parsedRealm.success) {
        console.error('Realm detail validation failed:', randomRealm.slug, treeifyError(parsedRealm.error));
      }
      expect(parsedRealm.success).toBe(true);
    }
  });

  it('validates realm search', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const search = await client.sendRequest(wow.realmSearch({ _page: 1 }));
    const parsed = realmSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Realm search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
