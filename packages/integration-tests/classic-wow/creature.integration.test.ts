import {
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
} from '@blizzard-api/classic-wow/creature';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
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

describe.concurrent(
  'classic-wow creature integration for classic era',
  async () => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    test('validates creature', async ({ expect }) => {
      const resp = await client.sendRequest(creature('static-classic1x', 30));
      const parsed = creatureResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Creature validation failed', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const respMedia = await client.sendRequest(creatureDisplayMedia('static-classic1x', 30));
      const parsedMedia = creatureDisplayMediaResponseSchema.safeParse(respMedia);
      if (!parsedMedia.success) {
        console.error('Creature validation failed', treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    });
    test('validates creature family index', async ({ expect }) => {
      const resp = await client.sendRequest(creatureFamilyIndex('static-classic1x'));
      const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Creature family index validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const family = await client.sendRequest(creatureFamily('static-classic1x', 1));
      const parsedFamily = creatureFamilyResponseSchema.safeParse(family);
      if (!parsedFamily.success) {
        console.error('Creature family detail validation failed for id', treeifyError(parsedFamily.error));
      }
      expect(parsedFamily.success).toBe(true);

      const media = await client.sendRequest(creatureFamilyMedia('static-classic1x', 1));
      const parsedMedia = creatureFamilyMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Creature family media validation failed:', treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    });

    test('validates creature type index and details', async ({ expect }) => {
      const resp = await client.sendRequest(creatureTypeIndex('static-classic1x'));
      const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Creature type index validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      // eslint-disable-next-line sonarjs/pseudo-random
      const creatureTypeIndexResp = Math.floor(Math.random() * resp.creature_types.length);
      const creatureTypeFromIndex = resp.creature_types[creatureTypeIndexResp];
      expect(creatureTypeFromIndex).toBeDefined();

      const type = await client.sendRequest(creatureType('static-classic1x', creatureTypeFromIndex!.id));
      const parsedType = creatureTypeResponseSchema.safeParse(type);
      if (!parsedType.success) {
        console.error(
          'Creature type detail validation failed:',
          creatureTypeFromIndex!.id,
          treeifyError(parsedType.error),
        );
      }
      expect(parsedType.success).toBe(true);
    });

    test('validates creature search', async ({ expect }) => {
      const search = await client.sendRequest(
        creatureSearch('static-classic1x', { _page: 1, locale: 'en_GB', name: 'wolf' }),
      );
      const parsed = creatureSearchResponseSchema.safeParse(search);
      if (!parsed.success) {
        console.error('Creature search validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    });
  },
  15_000,
);

describe.concurrent(
  'classic-wow creature integration for classic progression',
  async () => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    test('validates creature', async ({ expect }) => {
      const resp = await client.sendRequest(creature('static-classic', 30));
      const parsed = creatureResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Creature validation failed', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    });
    test('validates creature family index', async ({ expect }) => {
      const resp = await client.sendRequest(creatureFamilyIndex('static-classic'));
      const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Creature family index validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      // eslint-disable-next-line sonarjs/pseudo-random
      const creatureFamilyIndexResp = Math.floor(Math.random() * resp.creature_families.length);
      const creatureFamilyFromIndex = resp.creature_families[creatureFamilyIndexResp];
      expect(creatureFamilyFromIndex).toBeDefined();

      const family = await client.sendRequest(creatureFamily('static-classic', creatureFamilyFromIndex!.id));
      const parsedFamily = creatureFamilyResponseSchema.safeParse(family);
      if (!parsedFamily.success) {
        console.error(
          'Creature family detail validation failed for id',
          creatureFamilyFromIndex!.id,
          treeifyError(parsedFamily.error),
        );
      }
      expect(parsedFamily.success).toBe(true);

      const media = await client.sendRequest(creatureFamilyMedia('static-classic', 1));
      const parsedMedia = creatureFamilyMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Creature family media validation failed:', treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    });

    test('validates creature type index and details', async ({ expect }) => {
      const resp = await client.sendRequest(creatureTypeIndex('static-classic'));
      const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Creature type index validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      // eslint-disable-next-line sonarjs/pseudo-random
      const creatureTypeIndexResp = Math.floor(Math.random() * resp.creature_types.length);
      const creatureTypeFromIndex = resp.creature_types[creatureTypeIndexResp];
      expect(creatureTypeFromIndex).toBeDefined();

      const type = await client.sendRequest(creatureType('static-classic', creatureTypeFromIndex!.id));
      const parsedType = creatureTypeResponseSchema.safeParse(type);
      if (!parsedType.success) {
        console.error(
          'Creature type detail validation failed:',
          creatureTypeFromIndex!.id,
          treeifyError(parsedType.error),
        );
      }
      expect(parsedType.success).toBe(true);
    });

    test('validates creature search', async ({ expect }) => {
      const search = await client.sendRequest(
        creatureSearch('static-classic', { _page: 1, locale: 'en_GB', name: 'wolf' }),
      );
      const parsed = creatureSearchResponseSchema.safeParse(search);
      if (!parsed.success) {
        console.error('Creature search validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    });
  },
  15_000,
);
