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
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
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
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('wow creature integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates creature details', async () => {
    const resp = await client.sendRequest(creature(42_722));
    const parsed = creatureResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature detail validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // The display media uses its own id space, which the creature itself points to.
    const creatureDisplayId = getRandomItem(parsed.data!.creature_displays)!.id;
    const media = await client.sendRequest(creatureDisplayMedia(creatureDisplayId));
    const parsedMedia = creatureDisplayMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Creature media validation failed:', creatureDisplayId, prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  test('validates creature family index', async () => {
    const resp = await client.sendRequest(creatureFamilyIndex());
    const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature family index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const creatureFamilyId = getRandomItem(parsed.data!.creature_families)!.id;
    const detail = await client.sendRequest(creatureFamily(creatureFamilyId));
    const parsedDetail = creatureFamilyResponseSchema.safeParse(detail);
    if (!parsedDetail.success) {
      console.error('Creature family detail validation failed:', creatureFamilyId, prettifyError(parsedDetail.error));
    }
    expect(parsedDetail.success).toBe(true);

    if (!detail?.media) {
      return;
    }
    const media = await client.sendRequest(creatureFamilyMedia(creatureFamilyId));
    const parsedMedia = creatureFamilyMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Creature family media validation failed:', creatureFamilyId, prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  test('validates creature search', async () => {
    const search = await client.sendRequest(creatureSearch({ _page: 1, locale: 'en_GB', name: 'dragon' }));
    const parsed = creatureSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Creature search validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates creature type index', async () => {
    const resp = await client.sendRequest(creatureTypeIndex());
    const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature type index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const type = getRandomItem(parsed.data!.creature_types)!;
    expect(type).toBeDefined();
    const detail = await client.sendRequest(creatureType(type.id));
    const parsedDetail = creatureTypeResponseSchema.safeParse(detail);
    if (!parsedDetail.success) {
      console.error('Creature type detail validation failed:', type.id, prettifyError(parsedDetail.error));
    }
    expect(parsedDetail.success).toBe(true);
  });
});
