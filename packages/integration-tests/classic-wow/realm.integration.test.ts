import { realm, realmIndex, realmSearch } from '@blizzard-api/classic-wow/realm';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  realmIndexResponseSchema,
  realmResponseSchema,
  realmSearchResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('progressive classic-wow realm integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates realm index', async ({ expect }) => {
    const resp = await client.sendRequest(realmIndex('dynamic-classic'));
    const parsed = realmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Realm index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const randomRealm = getRandomItem(resp!.realms);
    expect(randomRealm).toBeDefined();
    const realmResp = await client.sendRequest(realm('dynamic-classic', randomRealm!.slug));
    const parsedRealm = realmResponseSchema.safeParse(realmResp);
    if (!parsedRealm.success) {
      console.error('Realm detail validation failed:', randomRealm!.slug, prettifyError(parsedRealm.error));
    }
    expect(parsedRealm.success).toBe(true);
  });
  test('validates realm search', async ({ expect }) => {
    const search = await client.sendRequest(realmSearch('dynamic-classic', { _page: 1 }));
    const parsed = realmSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Realm search validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});

describe('era classic-wow realm integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates realm index', async ({ expect }) => {
    const resp = await client.sendRequest(realmIndex('dynamic-classic1x'));
    const parsed = realmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Realm index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const randomRealm = getRandomItem(resp!.realms);
    expect(randomRealm).toBeDefined();
    const realmResp = await client.sendRequest(realm('dynamic-classic1x', randomRealm!.slug));
    const parsedRealm = realmResponseSchema.safeParse(realmResp);
    if (!parsedRealm.success) {
      console.error('Realm detail validation failed:', randomRealm!.slug, prettifyError(parsedRealm.error));
    }
    expect(parsedRealm.success).toBe(true);
  });
  test('validates realm search', async ({ expect }) => {
    const search = await client.sendRequest(realmSearch('dynamic-classic1x', { _page: 1 }));
    const parsed = realmSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Realm search validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});

describe('anniversary classic-wow realm integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates realm index', async ({ expect }) => {
    const resp = await client.sendRequest(realmIndex('dynamic-classicann'));
    const parsed = realmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Realm index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const randomRealm = getRandomItem(resp!.realms);
    expect(randomRealm).toBeDefined();
    const realmResp = await client.sendRequest(realm('dynamic-classicann', randomRealm!.slug));
    const parsedRealm = realmResponseSchema.safeParse(realmResp);
    if (!parsedRealm.success) {
      console.error('Realm detail validation failed:', randomRealm!.slug, prettifyError(parsedRealm.error));
    }
    expect(parsedRealm.success).toBe(true);
  });
  test('validates realm search', async ({ expect }) => {
    const search = await client.sendRequest(realmSearch('dynamic-classicann', { _page: 1 }));
    const parsed = realmSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Realm search validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
