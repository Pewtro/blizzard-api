import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  playableClass,
  playableClassIndex,
  playableClassMedia,
  pvpTalentSlots,
} from '@blizzard-api/wow/playable-class';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  playableClassIndexResponseSchema,
  playableClassMediaResponseSchema,
  playableClassResponseSchema,
  pvpTalentSlotsResponseSchema,
} from '../../../generated/schemas/wow/playable-class';

describe.concurrent('wow playable class integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('fetches playable class and media by id', async ({ expect }) => {
    const index = await client.sendRequest(playableClassIndex());
    const parsedIndex = playableClassIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Playable class index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const first = parsedIndex.success ? parsedIndex.data.classes[0] : undefined;
    if (first) {
      const resp = await client.sendRequest(playableClass(first.id));
      const parsed = playableClassResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Playable class validation failed:', first.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);

      const media = await client.sendRequest(playableClassMedia(first.id));
      const parsedMedia = playableClassMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Playable class media validation failed:', first.id, treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);

      const pvpSlots = await client.sendRequest(pvpTalentSlots(first.id));
      const parsedPvpSlots = pvpTalentSlotsResponseSchema.safeParse(pvpSlots);
      if (!parsedPvpSlots.success) {
        console.error(
          'Playable class PvP talent slots validation failed:',
          first.id,
          treeifyError(parsedPvpSlots.error),
        );
      }
      expect(parsedPvpSlots.success).toBe(true);
    }
  });
});
