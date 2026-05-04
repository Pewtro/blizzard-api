import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
} from '@blizzard-api/wow/creature';
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
} from '../../../generated/schemas/wow/creature';

describe('wow creature integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('validates creature details', async ({ expect }) => {
    const resp = await client.sendRequest(creature(42_722));
    const parsed = creatureResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature detail validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const media = await client.sendRequest(creatureDisplayMedia(30_221));
    const parsedMedia = creatureDisplayMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Creature media validation failed:', treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  test('validates creature family index', async ({ expect }) => {
    const resp = await client.sendRequest(creatureFamilyIndex());
    const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature family index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const detail = await client.sendRequest(creatureFamily(1));
    const parsedDetail = creatureFamilyResponseSchema.safeParse(detail);
    if (!parsedDetail.success) {
      console.error('Creature family detail validation failed:', treeifyError(parsedDetail.error));
    }
    expect(parsedDetail.success).toBe(true);

    const media = await client.sendRequest(creatureFamilyMedia(1));
    const parsedMedia = creatureFamilyMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Creature family media validation failed:', treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  test('validates creature search', async ({ expect }) => {
    const search = await client.sendRequest(creatureSearch({ _page: 1, locale: 'en_GB', name: 'dragon' }));
    const parsed = creatureSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Creature search validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates creature type index', async ({ expect }) => {
    const resp = await client.sendRequest(creatureTypeIndex());
    const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const first = parsed.success ? parsed.data.creature_types[0] : undefined;
    if (first) {
      const detail = await client.sendRequest(creatureType(first.id));
      const parsedDetail = creatureTypeResponseSchema.safeParse(detail);
      if (!parsedDetail.success) {
        console.error('Creature type detail validation failed:', first.id, treeifyError(parsedDetail.error));
      }
      expect(parsedDetail.success).toBe(true);
    }
  });
});
