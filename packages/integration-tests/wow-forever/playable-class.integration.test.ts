import { playableClass, playableClassIndex, playableClassMedia, pvpTalentSlots } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  playableClassIndexResponseSchema,
  playableClassMediaResponseSchema,
  playableClassResponseSchema,
  pvpTalentSlotsResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem, getRandomSample } from '../utils/random';

describe('wow-forever playable class integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the playable class index and sampled classes', async ({ expect }) => {
    const index = await client.sendRequest(playableClassIndex());
    const parsedIndex = playableClassIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Playable class index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampledClasses = getRandomSample(parsedIndex.data?.classes, 5);
    for (const classEntry of sampledClasses) {
      const classResponse = await client.sendRequest(playableClass(classEntry.id));
      const parsedClass = playableClassResponseSchema.safeParse(classResponse);
      if (!parsedClass.success) {
        console.error('Playable class validation failed for id', classEntry.id, prettifyError(parsedClass.error));
      }
      expect(parsedClass.success).toBe(true);
    }
  });

  test('validates playable class media and pvp talent slots for a sampled class', async ({ expect }) => {
    const index = await client.sendRequest(playableClassIndex());
    const parsedIndex = playableClassIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Playable class index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const classEntry = getRandomItem(parsedIndex.data?.classes);
    if (!classEntry) return;

    const media = await client.sendRequest(playableClassMedia(classEntry.id));
    const parsedMedia = playableClassMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Playable class media validation failed for id', classEntry.id, prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);

    const response = await client.sendRequest(pvpTalentSlots(classEntry.id));
    const parsed = pvpTalentSlotsResponseSchema.safeParse(response);
    if (!parsed.success) {
      console.error('Pvp talent slots validation failed for id', classEntry.id, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
