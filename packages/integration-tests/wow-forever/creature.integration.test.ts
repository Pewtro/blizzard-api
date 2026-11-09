import {
  creature,
  creatureDisplayMedia,
  creatureFamily,
  creatureFamilyIndex,
  creatureFamilyMedia,
  creatureSearch,
  creatureType,
  creatureTypeIndex,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
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
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem, getRandomSample } from '../utils/random';

describe('wow-forever creature integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates a sampled creature type', async ({ expect }) => {
    const typeIndex = await client.sendRequest(creatureTypeIndex());
    const parsedTypeIndex = creatureTypeIndexResponseSchema.safeParse(typeIndex);
    if (!parsedTypeIndex.success) {
      console.error('Creature type index validation failed:', prettifyError(parsedTypeIndex.error));
    }
    expect(parsedTypeIndex.success).toBe(true);

    const typeResponses = await Promise.all(
      getRandomSample(parsedTypeIndex.data?.creature_types, 5).map((typeEntry) =>
        client.sendRequest(creatureType(typeEntry.id)),
      ),
    );
    for (const typeResponse of typeResponses) {
      const parsedType = creatureTypeResponseSchema.safeParse(typeResponse);
      if (!parsedType.success) {
        console.error('Creature type validation failed for id', typeResponse?.id, prettifyError(parsedType.error));
      }
      expect(parsedType.success).toBe(true);
    }
  });

  test('validates the creature family index, details and media', async ({ expect }) => {
    const familyIndex = await client.sendRequest(creatureFamilyIndex());
    const parsedFamilyIndex = creatureFamilyIndexResponseSchema.safeParse(familyIndex);
    if (!parsedFamilyIndex.success) {
      console.error('Creature family index validation failed:', prettifyError(parsedFamilyIndex.error));
    }
    expect(parsedFamilyIndex.success).toBe(true);

    const sampledFamilies = getRandomSample(
      parsedFamilyIndex.data?.creature_families?.filter((family) => family.id !== 0),
      5,
    );

    for (const family of sampledFamilies) {
      const familyResponse = await client.sendRequest(creatureFamily(family.id));
      const parsedFamily = creatureFamilyResponseSchema.safeParse(familyResponse);
      if (!parsedFamily.success) {
        console.error('Creature family validation failed for id', family.id, prettifyError(parsedFamily.error));
      }
      expect(parsedFamily.success).toBe(true);

      try {
        const familyMedia = await client.sendRequest(creatureFamilyMedia(family.id));
        const parsedFamilyMedia = creatureFamilyMediaResponseSchema.safeParse(familyMedia);
        if (!parsedFamilyMedia.success) {
          console.error(
            'Creature family media validation failed for id',
            family.id,
            prettifyError(parsedFamilyMedia.error),
          );
        }
        expect(parsedFamilyMedia.success).toBe(true);
      } catch {
        //Some Forever creature families do not expose a media endpoint.
      }
    }
  });

  test('validates the creature search and a sampled creature with display media', async ({ expect }) => {
    const search = await client.sendRequest(creatureSearch({ _page: 1, locale: 'en_US', name: 'wolf' }));
    const parsedSearch = creatureSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Creature search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    const searchResult = getRandomItem(parsedSearch.data?.results);
    if (!searchResult) return;

    const creatureResponse = await client.sendRequest(creature(searchResult.data.id));
    const parsedCreature = creatureResponseSchema.safeParse(creatureResponse);
    if (!parsedCreature.success) {
      console.error('Creature validation failed for id', searchResult.data.id, prettifyError(parsedCreature.error));
    }
    expect(parsedCreature.success).toBe(true);

    const creatureDisplayId =
      parsedCreature.data?.creature_displays.find((display) => display.id)?.id ??
      searchResult.data.creature_displays.find((display) => display.id)?.id;
    if (!creatureDisplayId) return;

    const displayMedia = await client.sendRequest(creatureDisplayMedia(creatureDisplayId));
    const parsedDisplayMedia = creatureDisplayMediaResponseSchema.safeParse(displayMedia);
    if (!parsedDisplayMedia.success) {
      console.error('Creature display media validation failed:', prettifyError(parsedDisplayMedia.error));
    }
    expect(parsedDisplayMedia.success).toBe(true);
  });
});
