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
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
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

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('classic-wow creature integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test.each(namespaces)('validates the creature and its display media for %s', async (namespace) => {
    const resp = await client.sendRequest(creature(namespace, 30));
    const parsed = creatureResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature validation failed', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // The display media uses its own id space, which the creature itself points to.
    const creatureDisplayId = parsed.data!.creature_displays[0]!.id;
    const respMedia = await client.sendRequest(creatureDisplayMedia(namespace, creatureDisplayId));
    const parsedMedia = creatureDisplayMediaResponseSchema.safeParse(respMedia);
    if (!parsedMedia.success) {
      console.error('Creature display media validation failed', prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  test.each(namespaces)('validates the creature family index and details for %s', async (namespace) => {
    const resp = await client.sendRequest(creatureFamilyIndex(namespace));
    const parsed = creatureFamilyIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature family index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const creatureFamilyId = parsed.data!.creature_families[0]!.id;
    const family = await client.sendRequest(creatureFamily(namespace, creatureFamilyId));
    const parsedFamily = creatureFamilyResponseSchema.safeParse(family);
    if (!parsedFamily.success) {
      console.error(
        'Creature family detail validation failed for id',
        creatureFamilyId,
        prettifyError(parsedFamily.error),
      );
    }
    expect(parsedFamily.success).toBe(true);

    const media = await client.sendRequest(creatureFamilyMedia(namespace, creatureFamilyId));
    const parsedMedia = creatureFamilyMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Creature family media validation failed:', creatureFamilyId, prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  });

  test.each(namespaces)('validates the creature type index and details for %s', async (namespace) => {
    const resp = await client.sendRequest(creatureTypeIndex(namespace));
    const parsed = creatureTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Creature type index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const creatureTypeId = parsed.data!.creature_types[0]!.id;
    const type = await client.sendRequest(creatureType(namespace, creatureTypeId));
    const parsedType = creatureTypeResponseSchema.safeParse(type);
    if (!parsedType.success) {
      console.error('Creature type detail validation failed:', creatureTypeId, prettifyError(parsedType.error));
    }
    expect(parsedType.success).toBe(true);
  });

  test.each(namespaces)('validates the creature search for %s', async (namespace) => {
    const search = await client.sendRequest(creatureSearch(namespace, { _page: 1, locale: 'en_GB', name: 'wolf' }));
    const parsed = creatureSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Creature search validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
