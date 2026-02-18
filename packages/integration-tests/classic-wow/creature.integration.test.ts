import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  creatureDisplayMediaResponseSchema,
  creatureFamilyIndexResponseSchema,
  creatureFamilyMediaResponseSchema,
  creatureFamilyResponseSchema,
  creatureResponseSchema,
  creatureSearchResponseSchema,
  creatureTypeIndexResponseSchema,
  creatureTypeResponseSchema,
} from '../../../generated/schemas/classic-wow';

describe.concurrent('classic-wow creature integration for classic era', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'us',
    secret: environment.blizzardClientSecret,
  });
  it('validates creature', async ({ expect }) => {
    const resp = await client.sendRequest(classicWow.creature('static-classic1x', 30));
    const parsed = creatureResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature validation failed', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const respMedia = await client.sendRequest(classicWow.creatureDisplayMedia('static-classic1x', 30));
    const parsedMedia = creatureDisplayMediaResponseSchema.safeParse(respMedia);
    if (!parsedMedia.success) {
      console.error('Creature validation failed', treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });
  it('validates creature family index', async ({ expect }) => {
    const resp = await client.sendRequest(classicWow.creatureFamilyIndex('static-classic1x'));
    const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature family index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const family = await client.sendRequest(classicWow.creatureFamily('static-classic1x', 1));
    const parsedFamily = creatureFamilyResponseSchema.safeParse(family);
    if (!parsedFamily.success) {
      console.error('Creature family detail validation failed for id', treeifyError(parsedFamily.error));
    }
    expect(parsedFamily.success).toBe(true);

    const media = await client.sendRequest(classicWow.creatureFamilyMedia('static-classic1x', 1));
    const parsedMedia = creatureFamilyMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Creature family media validation failed:', treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  it('validates creature type index and details', async ({ expect }) => {
    const resp = await client.sendRequest(classicWow.creatureTypeIndex('static-classic1x'));
    const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const creatureTypeIndex = Math.floor(Math.random() * resp.creature_types.length);
    const creatureType = resp.creature_types[creatureTypeIndex];
    expect(creatureType).toBeDefined();

    const type = await client.sendRequest(classicWow.creatureType('static-classic1x', creatureType!.id));
    const parsedType = creatureTypeResponseSchema.safeParse(type);
    if (!parsedType.success) {
      console.error('Creature type detail validation failed:', creatureType!.id, treeifyError(parsedType.error));
    }
    expect(parsedType.success).toBe(true);
  });

  it('validates creature search', async ({ expect }) => {
    const search = await client.sendRequest(
      classicWow.creatureSearch('static-classic1x', { _page: 1, locale: 'en_GB', name: 'wolf' }),
    );
    const parsed = creatureSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Creature search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});

describe.concurrent('classic-wow creature integration for classic progression', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'us',
    secret: environment.blizzardClientSecret,
  });
  it('validates creature', async ({ expect }) => {
    const resp = await client.sendRequest(classicWow.creature('static-classic', 30));
    const parsed = creatureResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature validation failed', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
  it('validates creature family index', async ({ expect }) => {
    const resp = await client.sendRequest(classicWow.creatureFamilyIndex('static-classic'));
    const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature family index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const creatureFamilyIndex = Math.floor(Math.random() * resp.creature_families.length);
    const creatureFamily = resp.creature_families[creatureFamilyIndex];
    expect(creatureFamily).toBeDefined();

    const family = await client.sendRequest(classicWow.creatureFamily('static-classic', creatureFamily!.id));
    const parsedFamily = creatureFamilyResponseSchema.safeParse(family);
    if (!parsedFamily.success) {
      console.error(
        'Creature family detail validation failed for id',
        creatureFamily!.id,
        treeifyError(parsedFamily.error),
      );
    }
    expect(parsedFamily.success).toBe(true);

    const media = await client.sendRequest(classicWow.creatureFamilyMedia('static-classic', 1));
    const parsedMedia = creatureFamilyMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Creature family media validation failed:', treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  it('validates creature type index and details', async ({ expect }) => {
    const resp = await client.sendRequest(classicWow.creatureTypeIndex('static-classic'));
    const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // eslint-disable-next-line sonarjs/pseudo-random
    const creatureTypeIndex = Math.floor(Math.random() * resp.creature_types.length);
    const creatureType = resp.creature_types[creatureTypeIndex];
    expect(creatureType).toBeDefined();

    const type = await client.sendRequest(classicWow.creatureType('static-classic', creatureType!.id));
    const parsedType = creatureTypeResponseSchema.safeParse(type);
    if (!parsedType.success) {
      console.error('Creature type detail validation failed:', creatureType!.id, treeifyError(parsedType.error));
    }
    expect(parsedType.success).toBe(true);
  });

  it('validates creature search', async ({ expect }) => {
    const search = await client.sendRequest(
      classicWow.creatureSearch('static-classic', { _page: 1, locale: 'en_GB', name: 'wolf' }),
    );
    const parsed = creatureSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Creature search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
