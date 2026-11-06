import { pet, petAbilityIndex, petIndex, petMedia } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  petAbilityIndexResponseSchema,
  petIndexResponseSchema,
  petMediaResponseSchema,
  petResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever pet integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the pet index and sampled pets with media', async ({ expect }) => {
    const index = await client.sendRequest(petIndex());
    const parsedIndex = petIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Pet index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const pets = parsedIndex.success ? parsedIndex.data.pets : [];
    const sampled = getRandomSample(pets, 5);

    for (const petEntry of sampled) {
      const petResponse = await client.sendRequest(pet(petEntry.id));
      const parsedPet = petResponseSchema.safeParse(petResponse);
      if (!parsedPet.success) {
        console.error('Pet validation failed for id', petEntry.id, prettifyError(parsedPet.error));
      }
      expect(parsedPet.success).toBe(true);

      const media = await client.sendRequest(petMedia(petEntry.id));
      const parsedMedia = petMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Pet media validation failed for id', petEntry.id, prettifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }
  });

  test('validates the pet ability index', async ({ expect }) => {
    //Forever currently returns an empty ability index, so this only validates the envelope.
    const index = await client.sendRequest(petAbilityIndex());
    const parsedIndex = petAbilityIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Pet ability index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);
  });
});
