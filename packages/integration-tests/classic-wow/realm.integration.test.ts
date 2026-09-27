import { realm, realmIndex, realmSearch } from '@blizzard-api/classic-wow/realm';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import {
  realmIndexResponseSchema,
  realmResponseSchema,
  realmSearchResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe('progressive classic-wow realm integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    locale: 'de_DE',
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates realm index', async ({ expect }) => {
    const resp = await client.sendRequest(realmIndex('dynamic-classic'));
    const parsed = realmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Realm index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomRealm = resp!.realms[Math.floor(Math.random() * resp!.realms.length)];
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
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates realm index', async ({ expect }) => {
    const resp = await client.sendRequest(realmIndex('dynamic-classic1x'));
    const parsed = realmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Realm index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const randomRealm = resp!.realms[Math.floor(Math.random() * resp!.realms.length)];
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
